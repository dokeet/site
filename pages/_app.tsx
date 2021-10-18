import "../styles/base.css"
import type { AppProps } from "next/app"
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { FC } from "react";

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || Noop

  return (
    <div className="font-my-font">
      <Layout pageProps={pageProps}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
