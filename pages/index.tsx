import { getAllPosts } from "lib/mdx";
import React from "react";
import type { PostMeta } from "types/post";
import userConfig from "user-config";
import Layout from "components/Layout";
import Card from "components/Post";
export function getStaticProps() {
  const posts = getAllPosts("featured");
  return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="mt-12 mx-auto">
      <div className="py-8 space-y-2">
        {/* <img src="/pp.jpg" width="200px" height="auto" className="mx-auto rounded-full" /> */}
        <h1 className="dark:text-gray-100 text-gray-900 font-bold text- text-2xl">
          {userConfig.name}
        </h1>
        <p className="text-gray-900 text-base md:text-lg font-light dark:text-gray-100">
          I help build great products. This site will showcase my experiments,
          testing of new tech and random ideas. I am a Front-end dev / UI
          Engineer based in Buenos Aires, Argentina. I am passionate about
          building products that solve problems.
        </p>
      </div>
    </div>
  );
}

BlogPage.Layout = Layout;
