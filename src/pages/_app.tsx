import Fonts from "fonts/fonts";
import Layout from "layouts/main";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Fonts /> */}
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    // add router={router} later (check homepage github page)
  )
}