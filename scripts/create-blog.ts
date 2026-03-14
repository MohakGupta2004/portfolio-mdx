import fs from "fs";
import path from "path";
import readline from "readline";
import { connectDB } from "../lib/mongodb";
import { Blog } from "../lib/models/Blog";
import dotenv from "dotenv";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

async function main() {
  try {
    const name = await question("Enter the name of the blog: ");
    const description = await question("Enter a short description: ");
    const category = await question("Enter the category: ");
    const tagsInput = await question("Enter tags (comma separated): ");
    const tags = tagsInput.split(",").map((tag) => tag.trim());

    const slug = slugify(name);
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    // 1. Create MDX file
    const mdxPath = path.join(process.cwd(), "blog", `${slug}.mdx`);
    const mdxContent = `---
title: "${name}"
description: "${description}"
date: "${date}"
category: "${category}"
tags: ${JSON.stringify(tags)}
---

# ${name}

Write your blog content here...
`;
    fs.writeFileSync(mdxPath, mdxContent);
    console.log(`✅ Created MDX file at ${mdxPath}`);

    // 2. Update app/blogs/page.tsx
    const blogsPagePath = path.join(process.cwd(), "app/blogs/page.tsx");
    let blogsPageContent = fs.readFileSync(blogsPagePath, "utf-8");

    // Find the blogs array
    const blogsArrayRegex = /const blogs = \[\s*([\s\S]*?)\s*\];/;
    const match = blogsPageContent.match(blogsArrayRegex);

    if (match) {
      const currentBlogsStr = match[1];
      // Get the highest ID
      const ids = [...currentBlogsStr.matchAll(/id:\s*(\d+)/g)].map((m) =>
        parseInt(m[1]),
      );
      const nextId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

      const newBlogEntry = `    {
      id: ${nextId},
      title: "${name}",
      description: "${description}",
      date: "${date}",
      category: "${category}",
      readTime: "5 min",
      slug: "${slug}",
      tags: ${JSON.stringify(tags)},
    },`;

      const updatedBlogsStr = currentBlogsStr + "\n" + newBlogEntry;
      blogsPageContent = blogsPageContent.replace(
        blogsArrayRegex,
        `const blogs = [\n${updatedBlogsStr}\n  ];`,
      );
      fs.writeFileSync(blogsPagePath, blogsPageContent);
      console.log(`✅ Updated app/blogs/page.tsx`);
    }

    // 3. Update app/blogs/[slug]/page.tsx generateStaticParams
    const slugPagePath = path.join(process.cwd(), "app/blogs/[slug]/page.tsx");
    let slugPageContent = fs.readFileSync(slugPagePath, "utf-8");

    const staticParamsRegex =
      /export function generateStaticParams\(\) \{\s*return \[\s*([\s\S]*?)\s*\];\s*\}/;
    const staticParamsMatch = slugPageContent.match(staticParamsRegex);

    if (staticParamsMatch) {
      const currentParamsStr = staticParamsMatch[1];
      const newParamEntry = `    { slug: "${slug}" },`;
      const updatedParamsStr = currentParamsStr + "\n" + newParamEntry;
      slugPageContent = slugPageContent.replace(
        staticParamsRegex,
        `export function generateStaticParams() {\n  return [\n${updatedParamsStr}\n  ];\n}`,
      );
      fs.writeFileSync(slugPagePath, slugPageContent);
      console.log(`✅ Updated app/blogs/[slug]/page.tsx`);
    }

    // 4. Create database entry
    console.log("⏳ Connecting to database...");
    await connectDB();
    const newBlog = new Blog({
      name: name,
      likeCount: 0,
    });
    await newBlog.save();
    console.log(`✅ Created database entry for blog: ${name}`);

    console.log("\n🚀 All done! You can now edit your blog in the blog/ folder.");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    rl.close();
    process.exit(0);
  }
}

main();
