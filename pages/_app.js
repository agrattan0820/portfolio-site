import "../styles/App.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
