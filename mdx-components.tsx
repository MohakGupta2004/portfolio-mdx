import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <div className="font-grotesk">{children}</div>
    ),
    ...components,
  };
}
