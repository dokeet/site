import { getAllPosts } from "lib/mdx";
import React from "react";
import type { PostMeta } from "types/post";
import Link from "next/link";
import { generateRSSFeed } from "lib/rss";
import Layout from "ui/layout";
import Image from "next/image";

export default function Blog({
  posts,
  drafts,
}: {
  posts: PostMeta[];
  drafts: PostMeta[];
}) {
  return (
    <div className="mt-12">
      <h1>Blog</h1>
      <div className="mt-8 w-full mx-auto">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="w-full space-y-6 mb-8 rounded-xl pt-2 bg-gray-50"
          >
            <Link href={`/blog/${post.slug}`}>
              <a>
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    height="180px"
                    width="736px"
                    className="w-full max-h-[180px] object-cover rounded-lg mx-auto shadow-lg hover:shadow-2xll duration-300 transition filter saturate-50 hover:saturate-100"
                    objectFit="cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-2xl">{post.title}</h2>
                  <p className="text-gray-900 font-light">{post.description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* doesn't render if there's no drafts */}
      {drafts.length > 0 && (
        <div className="mt-12 cursor-not-allowed">
          <h4 className="opacity-75">WIP</h4>
          <div className="mt-8 w-full mx-auto">
            {drafts.map((post) => (
              <div
                key={post.title}
                className="w-full space-y-2 mb-8 rounded-xl pt-2 bg-gray-50 opacity-75"
              >
                <h5>{post.title}</h5>
                <p className="text-gray-900 font-light">{post.description}</p>
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
