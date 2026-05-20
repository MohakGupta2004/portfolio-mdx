import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']]
  }
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['api.dicebear.com', 'avatars.githubusercontent.com', 'img.clerk.com', 'lh3.googleusercontent.com'],
  }
}


export default withMDX(nextConfig)