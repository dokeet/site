export type PostMeta = {
  title: string
  publishedAt: string
  description: string
  slug: string;
  category: "draft" | "project" | "post" | "featured"
  image?: string
  source?: string
}

export type Post = {
  meta: PostMeta
  code?: any;
}