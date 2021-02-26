import "../styles/App.scss";
import { useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
