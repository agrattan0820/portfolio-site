import { useEffect } from "react";
import "../styles/App.scss";
import { AnimatePresence } from "framer-motion";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Analytics
    ReactGA.initialize("UA-183066430-1");
    ReactGA.pageview("/");

    // Hotjar
    hotjar.initialize(2276411, 6);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
