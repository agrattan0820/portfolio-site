import "../styles/app.scss";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <div className={raleway.variable}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </AnimatePresence>
  );
}

export default MyApp;
