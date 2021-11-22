import '../styles/globals.scss'
import "prismjs/themes/prism-tomorrow.css";
import 'reflect-metadata';
import { AppProps } from 'next/app'
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";

export default function App({ Component, pageProps } : AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}
