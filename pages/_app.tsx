import "../styles/globals.css";
import type { AppProps } from "next/app";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-multi-carousel/lib/styles.css";
// import "swiper/css";
// import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
