import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Seattle() {
  const images1 = [
    {
      original: "/images/seattle/1.png",
      thumbnail: "/images/seattle/1.png",
    },
    {
      original: "/images/seattle/2.png",
      thumbnail: "/images/seattle/2.png",
    },
    {
      original: "/images/seattle/3.png",
      thumbnail: "/images/seattle/3.png",
    },
    {
      original: "/images/seattle/4.png",
      thumbnail: "/images/seattle/4.png",
    },
    {
      original: "/images/seattle/5.png",
      thumbnail: "/images/seattle/5.png",
    },
    {
      original: "/images/seattle/6.png",
      thumbnail: "/images/seattle/6.png",
    },
    {
      original: "/images/seattle/7.png",
      thumbnail: "/images/seattle/7.png",
    },
    {
      original: "/images/seattle/8.png",
      thumbnail: "/images/seattle/8.png",
    },
    {
      original: "/images/seattle/9.png",
      thumbnail: "/images/seattle/9.png",
    },
    ,
    {
      original: "/images/seattle/10.png",
      thumbnail: "/images/seattle/10.png",
    },
    {
      original: "/images/seattle/11.png",
      thumbnail: "/images/seattle/11.png",
    },
    ,
    {
      original: "/images/seattle/12.png",
      thumbnail: "/images/seattle/12.png",
    },
    {
      original: "/images/seattle/13.png",
      thumbnail: "/images/seattle/13.png",
    },
  ];
  return (
    <Layout pageName="Seattle Contact" pageDescription="Seattle Contact">
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          Seattle Contact
        </h1>
        <div className="p-10">
          <ImageGallery items={images1} autoPlay="true" />
        </div>

        <main>
          <section className=" p-14 flex flex-row flex-wrap  justify-between items-center">
            <div>
              <p className="text-lg my-5">
                <b>Tel:</b> (206) 745-2002
                <br />
                <b>Hours:</b> Mon-Sun 8:00am to 8:00pm <br />
                <b>Email:</b> seattle@lmlrepair.com
              </p>{" "}
              <p className="text-lg my-5">
                700 NW 42nd St STE #333, Seattle, WA 98107 <br />
                <b>
                  <small>Use callbox at the elevator or dial 00333 </small>
                </b>
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-96c643f1-690c-45eb-bf57-e6ac2108c054"></div>
          </section>

          <section className="p-10 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus"
              height="450 "
              style={{ border: "0px" }}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>
          </section>

          <section className="flex gap-5 justify-center items-center border-t-8 border-black p-5 ">
            <Link href="https://maps.app.goo.gl/6bRygwNKJPJZWEA89" className="w-30 ">
              <Image
                src="/images/socials/google.png"
                height={144}
                width={144}
                alt="Google"
                s
              />
            </Link>
            <Link
              href="https://www.yelp.com/biz/lml-repair-ballard-seattle"
              className="w-30 "
            >
              <Image
                src="/images/socials/yelp.png"
                height={144}
                width={144}
                alt="Yelp"
              />
            </Link>
            <Link
              href="https://www.facebook.com/lmlrepairballard/"
              className="w-30"
            >
              <Image
                src="/images/socials/facebook.png"
                alt="FaceBook"
                height={144}
                width={144}
              />
            </Link>
            <Link href="https://www.bing.com/maps?osid=1defbcd7-7c40-4e95-8390-8cb28790a2b8&cp=47.658002~-122.370615&lvl=16&pi=0&imgid=19af23cf-69a8-4c00-afe1-0ac88f5943cf&v=2&sV=2&form=S00027" className="w-30">
              <Image
                src="/images/listings/bing.png"
                alt="Bing"
                height={144}
                width={144}
              />
            </Link>

            <Link href="https://maps.apple.com/?address=700%20NW%2042nd%20St,%20Unit%20333,%20Seattle,%20WA%20%2098107,%20United%20States&auid=10641286915098776632&ll=47.657930,-122.365284&lsp=9902&q=LML%20Repair" className="w-30">
              <Image
                src="/images/listings/apple.png"
                alt="Apple"
                height={144}
                width={144}
              />
            </Link>
          </section>

          <span>
            <div className="elfsight-app-f2133ae9-d9ce-43bd-9523-90644adb4c8c"></div>
          </span>
        </main>
      </div>
    </Layout>
  );
}
