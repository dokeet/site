import Link from "next/link";
import React, { FC } from "react";
import userConfig from "../user-config";
import { ThemeToggler } from "./ThemeToggler";
const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 font-my-font selection:bg-gray-600 selection:text-white dark:selection:text-gray-900 dark:selection:bg-gray-300">
      <nav>
        <ul className="flex space-x-2 justify-end">
          <li>
            <Link href="/">
              <a className="text-center font-light underline text-gray-900 dark:text-gray-100">
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="text-center font-light underline text-gray-900 dark:text-gray-100">
                blog
              </a>
            </Link>
          </li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
      <main className="p-4">{children}</main>
      <footer>
        <ul className="flex space-x-2 justify-end">
          <li>
            <a
              href={userConfig.social.github}
              target="_blank"
              className="text-center font-light underline text-gray-900 dark:text-gray-100"
            >
              github
            </a>
          </li>
          <li>
            <a
              href={userConfig.social.twitter}
              target="_blank"
              className="text-center font-light underline text-gray-900 dark:text-gray-100"
            >
              twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
