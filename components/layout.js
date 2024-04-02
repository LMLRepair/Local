import Footer from "./footer";
import Header from "./header";
import Script from "next/script";
import Head from "next/head";

export default function Layout({ children, pageName, pageDescription }) {
  return (
    <div>
      <Head>
        <title>{`LML Repair | ${pageName}`}</title>

        <meta name="description" content={pageDescription + " Page"} />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JG8M72WG4H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JG8M72WG4H');
        `}
      </Script>
      <Header />
      {children}

      <noscript>Your browser does not have javascript enabled.</noscript>
      <Script
        strategy="afterInteractive"
        src="https://apps.elfsight.com/p/platform.js"
        defer
      ></Script>
      <div
        className="elfsight-app-9c951605-b822-4186-81dd-2bbbdb4ee14f"
        data-elfsight-app-lazy
      ></div>

      <Footer />
    </div>
  );
}
