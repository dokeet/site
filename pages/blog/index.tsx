import { getAllPosts } from "lib/mdx";
import React from "react";
import type { PostMeta } from "types/post";
import Link from "next/link";
import { generateRSSFeed } from "lib/rss";
import Layout from "ui/Layout";
import Image from "next/image";
import PostCard from "ui/PostCard";

export default function Blog({
  posts,
  drafts,
}: {
  posts: PostMeta[];
  drafts: PostMeta[];
}) {
  return (
    <div className="mt-12">
      <h1 className="dark:text-gray-100">Blog</h1>
      <div className="mt-8 w-full mx-auto">
        {posts.map((post) => (
          <PostCard {...post} />
        ))}
      </div>
      {/* doesn't render if there's no drafts */}
      {drafts.length > 0 && (
        <div className="mt-12 cursor-not-allowed">
          <h4 className="dark:text-gray-100">WIP</h4>
          <div className="mt-8 w-full mx-auto">
            {drafts.map((post) => (
              <div
                key={post.title}
                className="w-full space-y-2 mb-8 rounded-xl pt-2"
              >
                <h5 className="dark:text-gray-100">{post.title}</h5>
                <p className="text-gray-900 dark:text-gray-100 font-light">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
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
