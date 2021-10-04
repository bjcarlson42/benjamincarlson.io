import fs from 'fs'
import path from 'path'

export const BLOG_POSTS_PATH = path.join(process.cwd(), 'posts')

export const blogPostsFilePaths = fs
    .readdirSync(BLOG_POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
