import "../styles/global.scss";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexander Grattan",
  description:
    "Alexander's blog and portfolio, following his journeys as a software developer in Pittsburgh, PA",
};

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>{children}</body>
      <Analytics />
    </html>
  );
}
