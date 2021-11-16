import { FC } from "react";

type ComponentsType = {
  code: FC;
};
const MDXComponents: ComponentsType = {
  code: ({ children }) => {
    return (
      <code className="px-2 py-1 bg-gray-300 dark:bg-gray-900 rounded-md text-gray-100 dark:text-gray-900">
        {children}
      </code>
    );
  },
};

export default MDXComponents;
