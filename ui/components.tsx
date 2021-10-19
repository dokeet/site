import { FC } from "react";
import { Counter } from "./counter";

type ComponentsType = {
  Counter: FC;
  code: FC;
};
export const components: ComponentsType = {
  Counter,
  code: ({ children }) => {
    console.log(children);
    return <code className="px-2 py-1 bg-gray-200 rounded-md">{children}</code>;
  },
};
