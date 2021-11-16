import "../styles/base.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { FC } from "react";
import { ThemeProvider } from "next-themes";
import { IdProvider } from "@radix-ui/react-id";
const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <IdProvider>
      <ThemeProvider attribute="class">
        <Layout pageProps={pageProps}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IdProvider>
  );
}

export default MyApp;
