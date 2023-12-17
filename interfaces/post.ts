import type Author from './author'
import type Examples from './examples'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  examples: Examples
  content: string
}

export default PostType
