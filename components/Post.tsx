import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "../types/post";

import { format, parseISO } from "date-fns";
const Post = (post: PostMeta) => {
  return (
    <div key={post.slug} className="w-full mb-4 rounded-xl group">
      <Link href={`/blog/${post.slug}`}>
        <a className="no-underline">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width="736px"
              height="200px"
              className="w-full max-h-[180px] object-cover rounded-lg mx-auto transition duration-500 filter saturate-50 group-hover:saturate-100"
              objectFit="cover"
            />
          )}
          <h2 className="text-lg md:text-xl dark:text-gray-100 text-gray-900 transition-colors duration-300 drop-shadow-sm">
            {post.title}
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-right font-light text-sm">
            {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        </a>
      </Link>
    </div>
  );
};
export default Post;
