import { getAllPosts } from "lib/mdx";
import React from "react";
import type { PostMeta } from "types/post";
import Link from "next/link";
import { generateRSSFeed } from "lib/rss";
import Layout from "ui/Layout";
import Image from "next/image";
import Post from "ui/Post";

export default function Blog({
  posts,
  drafts,
}: {
  posts: PostMeta[];
  drafts: PostMeta[];
}) {
  return (
    <div className="mt-12">
      <h1 className="dark:text-gray-100 font-bold text-gray-900">Blog</h1>
      <div className="mt-8 w-full mx-auto">
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  const drafts = getAllPosts("draft");
  generateRSSFeed(posts);
  return { props: { posts, drafts } };
}

Blog.Layout = Layout;
