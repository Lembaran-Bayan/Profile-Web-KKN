import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const AOS = require("aos") as any;
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return <Component {...pageProps} />;
}

