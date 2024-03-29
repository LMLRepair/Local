import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function NorthSeattle() {
  const images1 = [
    {
      original: "/images/northseattle/1.png",
      thumbnail: "/images/northseattle/1.png",
    },
    {
      original: "/images/northseattle/2.png",
      thumbnail: "/images/northseattle/2.png",
    },
    {
      original: "/images/northseattle/3.png",
      thumbnail: "/images/northseattle/3.png",
    },
    {
      original: "/images/northseattle/4.png",
      thumbnail: "/images/northseattle/4.png",
    },
    {
      original: "/images/northseattle/5.png",
      thumbnail: "/images/northseattle/5.png",
    },
    {
      original: "/images/northseattle/6.png",
      thumbnail: "/images/northseattle/6.png",
    },
  ];
  return (
    <Layout
      pageName="North Seattle Contact"
      pageDescription="North Seattle Contact"
    >
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          North Seattle Contact
        </h1>
        <div className="p-10">
          <ImageGallery items={images1} autoPlay="true" />
        </div>

        <main>
          <section className=" p-14 flex flex-row flex-wrap  justify-between items-center">
            <div>
              <p className="text-lg my-5">
                <b>Tel:</b> (206) 745-2977
                <br />
                <b>Hours:</b> Mon-Sun 8AM to 8PM <br />
                <b>Email:</b> northseattle@lmlrepair.com
              </p>
              <p className="text-lg my-5">
                <b>Address: </b>
                10015 Lake City Way NE STE #231, Seattle, WA 98125 <br />
                <b>
                  <small>Use callbox at the elevator or dial 00231 </small>
                </b>
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-5f780629-a146-4756-8761-d6f427d9ec90"></div>
          </section>
          <section className="p-10 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso"
              height="450 "
              style={{ border: "0px" }}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>
          </section>{" "}
          <section className="flex gap-5 justify-center items-center border-t-8 border-black p-5 ">
            <Link
              href="https://maps.app.goo.gl/1rcWCz2NDDPye4s59"
              className="w-30 "
            >
              <Image
                src="/images/listings/google.png"
                height={144}
                width={144}
                alt="Google"
                s
              />
            </Link>
            <Link
              href="https://www.yelp.com/biz/lml-repair-north-seattle-seattle"
              className="w-30 "
            >
              <Image
                src="/images/listings/yelp.png"
                height={144}
                width={144}
                alt="Yelp"
              />
            </Link>
            <Link
              href="https://www.facebook.com/lmlrepairnorthseattle/"
              className="w-30"
            >
              <Image
                src="/images/listings/facebook.png"
                alt="FaceBook"
                height={144}
                width={144}
              />
            </Link>

            <Link
              href="https://www.bing.com/maps?osid=71598303-2ca9-4b13-a465-8b668f1cdf11&cp=47.701734~-122.415178&lvl=11.58&pi=0&v=2&sV=2&form=S00027"
              className="w-30"
            >
              <Image
                src="/images/listings/bing.png"
                alt="Bing"
                height={144}
                width={144}
              />
            </Link>

            <Link
              href="https://maps.apple.com/?address=10015%20Lake%20City%20Way%20NE,%20Unit%20231,%20Seattle,%20WA%20%2098125,%20United%20States&auid=993656464279273777&ll=47.701755,-122.302655&lsp=9902&q=LML%20Repair"
              className="w-30"
            >
              <Image
                src="/images/listings/apple.png"
                alt="Apple"
                height={144}
                width={144}
              />
            </Link>
          </section>
          <span>
            <div className="elfsight-app-69f51bd3-b95a-4000-a8fb-60479fcccbb8"></div>
          </span>
        </main>
      </div>
    </Layout>
  );
}
