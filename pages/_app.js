// This component wraps all of the pages in your application, the very tippy top level
// Useful for keeping state while navigating pages and for adding global styles
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
