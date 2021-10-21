import "../styles/base.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { FC } from "react";
import { ThemeProvider } from "next-themes";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <ThemeProvider attribute="class">
      <div className="font-my-font bg-gray-100 dark:bg-gray-900">
        <Layout pageProps={pageProps}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
