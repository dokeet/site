import { Feed } from "feed"
import { PostMeta } from "types/post";
import userConfig from "user-config"

import fs from "fs"
export const generateRSSFeed = (posts: PostMeta[]) => {
    const author = {
        name: `${userConfig.name}`,
        email: `${userConfig.email}`,
        link: `${userConfig.siteUrl}`,
    };
    const date = new Date();

    // Construct a new Feed object
    const feed = new Feed({
        title: `${userConfig.name} | RSS Feed"`,
        description: userConfig.description,
        id: `${userConfig.siteUrl}`,
        link: `${userConfig.siteUrl}`,
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        image: `${userConfig.siteUrl}/logo.svg`,
        favicon: `${userConfig.siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, ${userConfig.name}`,
        updated: new Date(), // optional, default = today
        author
    });
    // Add each article to the feed
    posts.forEach((post) => {
        const { slug, publishedAt, description, title } = post;
        const url = `${userConfig.siteUrl}/blog/${slug}`;

        feed.addItem({
            title,
            id: url,
            link: url,
            description,
            content: description,
            author: [author],
            date: new Date(publishedAt),
        });
    });

    // Write the RSS output to a public file, making it
    // accessible at ashleemboyer.com/rss.xml
    fs.writeFileSync('public/rss.xml', feed.rss2());

};