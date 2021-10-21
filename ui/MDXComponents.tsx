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
      <code className="px-2 py-1 bg-gray-200 dark:bg-gray-600 dark:text-gray-100 rounded-md">
        {children}
      </code>
    );
  },
};

export default MDXComponents;
