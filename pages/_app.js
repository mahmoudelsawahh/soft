import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "components/Footer/Footer";
// import NavBar from "components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";

import store from "store/store";
const NavBar = dynamic(() => import("components/Layout/NavBar/NavBar"), {
  loading: () => <p>Loading ...</p>,
  // ssr: false,
});
const Footer = dynamic(() => import("components/Layout/Footer/Footer"), {
  loading: () => <p>Loading ...</p>,
  // ssr: false,
});
import "../styles/globals.css";
// import LoadingScreen from "components/Layout/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
// import SocialMedia from "components/Layout/SocialMedia/SocialMedia";
const LoadingScreen = dynamic(
  () => import("components/Layout/LoadingScreen/LoadingScreen"),
  {
    loading: () => <p>Loading ...</p>,
    // ssr: false,
  }
);
import { DeferredContent } from "primereact/deferredcontent";

const SocialMedia = dynamic(
  () => import("components/Layout/SocialMedia/SocialMedia"),
  {
    loading: () => <p>Loading ...</p>,
    // ssr: false,
  }
);
function MyApp({ Component, pageProps, canonical }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <htm lang="ar">
      <Head>
        {/* <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" /> */}
        <meta name="geo.placename" content="Egypt" />
        <meta name="geo.position" content="30.9685798;31.1664157" />
        <meta name="geo.region" content="egypt" />
        <meta name="ICBM" content="30.9685798, 31.1664157" />
        <meta name="author" content=" دلتاوي للبرمجيات وتصميم المواقع" />
        {/* <meta name="robots" content="index,follow" /> */}
        <meta
          name="keywords"
          content="شركة  دلتاوي للبرمجيات  و تصميم المواقع "
        />
        <meta
          name="description"
          content="شركة دلتاوي للبرمجيات و تصميم المواقع و تطبيقات الموبايل"
        />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="https://plus.google.com/107145100779631826770"
          rel="publisher"
        />
        <meta property="og:title" content="شركة برمجيات دلتاوي" />
        <meta
          property="og:image"
          content="https://delta.deltawy.com/imagess?id=23"
        />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="شركة دلتاوي للبرمجيات و تصميم المواقع و تطبيقات الموبايل"
        />
        <meta
          property="og:site_name"
          content="شركة دلتاوي للبرمجيات وتصميم المواقع و تطبيقات المحمول  "
        />
        <meta property="og:url" rel="canonical" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta property="fb:app_id" content="156283204469041" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@deltawynet" />
        <meta name="twitter:domain" content="deltawynet" />
        <meta name="twitter:creator" content="@deltawynet" />
        <meta name="twitter:image" content="/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="preload stylesheet"
          // as="font"
          crossOrigin="anonymous"
        />
        {/* <meta
          name="google-site-verification"
          content="58hkVcd4B84I1ZIT9F3p1DSHDrqB5qpMotBXJMkJ78c"
        /> */}
        {/* <meta
          name="google-site-verification"
          content="58hkVcd4B84I1ZIT9F3p1DSHDrqB5qpMotBXJMkJ78c"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        /> */}
        {/* <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        /> */}
        <script id="facebook-pixel-script">
          {
            `
            ! function(f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function() {
                  n.callMethod ?
                      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '856346219496162');
          fbq('track', 'PageView');
            `
          }
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6MC0Y3M7L"></script>
        <script>
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-L6MC0Y3M7L');
            `
          }
        </script>
      </Head>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Provider store={store}>

          <NavBar />

          <main className="cont">
            <Component {...pageProps} />
          </main>
          <Footer />
          <SocialMedia />
        </Provider>
      )}
    </htm>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  // const isProd = process.env.NODE_ENV === "production";
  const base = "https://deltawy.com";
  const { asPath } = ctx;
  const canonical = base + asPath;
  // console.log(canonical)
  return {
    canonical,
  };
};

export default MyApp;
