import { getAllPosts } from "lib/mdx";
import React from "react";
import Image from "next/image";
import type { PostMeta } from "types/post";
import Link from "next/link";
import userConfig from "user-config";
import Layout from "ui/Layout";
import Card from "ui/PostCard";
export function getStaticProps() {
  const posts = getAllPosts("featured");
  return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="container mt-12">
      <div className="py-8 space-y-2">
        {/* <img src="/pp.jpg" width="200px" height="auto" className="mx-auto rounded-full" /> */}
        <h1>{userConfig.name}</h1>
        <p className="text-gray-900 text-2xl font-light">
          {userConfig.description}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="font-extrabold text-gray-800 text-3xl">
          <Link href="/blog">
            <a>Feature Posts</a>
          </Link>
        </h3>
        <h4 className="mt-2 text-gray-900 font-light text-base">
          Thoughts on what I'm building and learning.
        </h4>
        <div className="mt-4 w-full mx-auto">
          {posts.map((post) => (
            <Card {...post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}

BlogPage.Layout = Layout;
