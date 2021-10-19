import Link from "next/link";
import React, { FC } from "react";
import userConfig from "../user-config";
const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 font-my-font selection:bg-gray-600 selection:text-white">
      <nav>
        <ul className="flex space-x-2 justify-end">
          <Link href="/">
            <a className="text-center font-light underline text-gray-900">
              home
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-center font-light underline text-gray-900">
              blog
            </a>
          </Link>
        </ul>
      </nav>
      <main className="p-4">{children}</main>
      <footer>
        <ul className="flex space-x-2 justify-end">
          <a
            href={userConfig.social.github}
            target="_blank"
            className="text-center font-light underline text-gray-900"
          >
            github
          </a>
          <a
            href={userConfig.social.twitter}
            target="_blank"
            className="text-center font-light underline text-gray-900"
          >
            twitter
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
