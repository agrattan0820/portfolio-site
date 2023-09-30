import "../styles/app.scss";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  );
}

export default MyApp;
