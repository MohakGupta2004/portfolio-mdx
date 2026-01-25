import type { NextConfig } from "next";
import createMDX from '@next/mdx'
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental:{
    mdxRs: true
  }
};

const withMdx = createMDX({})

export default withMdx(nextConfig);
