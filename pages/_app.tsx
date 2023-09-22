import "../styles/app.scss";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
      <Analytics />
    </AnimatePresence>
  );
}

export default MyApp;
