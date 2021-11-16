import { getAllPosts } from "lib/mdx";
import React from "react";
import type { PostMeta } from "types/post";
import Layout from "components/Layout";
import Post from "components/Post";

export default function Blog({
  posts,
}: {
  posts: PostMeta[];
  drafts: PostMeta[];
}) {
  return (
    <div className="mt-12">
      <h1 className="dark:text-gray-100 font-bold text-gray-900">Blog</h1>
      <div className="mt-8 w-full mx-auto">
        {posts.map((post) => (
          <Post {...post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

Blog.Layout = Layout;
