import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { PostMeta } from "../types/post";
const PostCard = (post: PostMeta) => {
  return (
    <div
      key={post.slug}
      className="w-full mb-2 rounded-xl pt-2 bg-gray-50 group"
    >
      <Link href={`/blog/${post.slug}`}>
        <a className="block">
          <div className="block relative min-h-[180px]">
            <div className="transition duration-300 drop-shadow group-hover:drop-shadow-xl absolute">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width="736px"
                  height="180px"
                  className="w-full max-h-[180px] object-cover rounded-lg mx-auto transition duration-500 filter saturate-50 group-hover:saturate-100"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="p-4 absolute z-10 bottom-0 bg-gradient-to-b from-transparent to-black w-full">
              <h1 className="text-xl font-bold text-gray-100 transition-colors duration-300 drop-shadow-sm">
                {post.title}
              </h1>
              <p className="text-gray-100 font-light drop-shadow-sm">
                {post.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default PostCard;
