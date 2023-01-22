import "../styles/App.scss";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics
    ReactGA.initialize("UA-183066430-1");
    // Hotjar
    hotjar.initialize(2276411, 6);
  }, []);

  useEffect(() => {
    ReactGA.pageview(router.asPath);
  }, [router.asPath]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
