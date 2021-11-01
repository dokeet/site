import Image from "next/image";
import { getPost, getAllPosts } from "lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import type { Post } from "types/post";
import userConfig from "user-config";
import Layout from "ui/Layout";
import MDXComponents from "ui/MDXComponents";
import { format, parseISO } from "date-fns";

export default function PostPage({ meta, code }: Post) {
  // This is a bit weird, but this is how mdx-bundler recommends it.
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <NextSeo
        title={`${meta.title} | ${userConfig.name}`}
        description={meta.description}
        canonical={`${userConfig.siteUrl}/blog/${meta.slug}`}
        openGraph={{
          type: "website",
          url: `${userConfig.siteUrl}/blog/${meta.slug}`,
          title: `${meta.title} | ${userConfig.name}`,
          description: meta.description,
          images: [
            {
              url: `${userConfig.siteUrl}/${meta.image}`,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ],
          site_name: `${userConfig.name}`,
        }}
        twitter={{
          handle: "@dokstep",
          cardType: "summary_large_image",
        }}
      />

      <div className="container max-w-3xl mx-auto mt-12">
        <div className="relative">
          <h1 className="text-gray-900 dark:text-gray-100">{meta.title}</h1>
          <p className="text-gray-900 dark:text-gray-100 text-right mb-2">
            {format(parseISO(meta.publishedAt), "MMMM dd, yyyy")}
          </p>

          {meta.image && (
            <div className="w-full max-h-[360px]">
              <Image
                src={meta.image}
                alt={meta.title}
                width="760px"
                height="360px"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="mt-4 prose xl:prose-lg dark:prose-dark prose-gray">
          <Component components={MDXComponents} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: paths,
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);

  return { props: post };
};

PostPage.Layout = Layout;
