import { FC } from "react";
import { Counter } from "./Counter";

type ComponentsType = {
  Counter: FC;
  code: FC;
};
const MDXComponents: ComponentsType = {
  Counter,
  code: ({ children }) => {
    return (
      <code className="px-2 py-1 bg-gray-300 dark:bg-gray-900 rounded-md text-gray-100 dark:text-gray-900">
        {children}
      </code>
    );
  },
};

export default MDXComponents;
