import '../styles/globals.scss'
import "prismjs/themes/prism-tomorrow.css";
import { AppProps } from 'next/app'

export default function App({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}
