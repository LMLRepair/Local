import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Ballard() {
  const images1 = [
    {
      original: "/images/ballard/1.png",
      thumbnail: "/images/ballard/1.png",
    },
    {
      original: "/images/ballard/2.png",
      thumbnail: "/images/ballard/2.png",
    },
    {
      original: "/images/ballard/3.png",
      thumbnail: "/images/ballard/3.png",
    },
    {
      original: "/images/ballard/4.png",
      thumbnail: "/images/ballard/4.png",
    },
    {
      original: "/images/ballard/5.png",
      thumbnail: "/images/ballard/5.png",
    },
    {
      original: "/images/ballard/6.png",
      thumbnail: "/images/ballard/6.png",
    },
    {
      original: "/images/ballard/7.png",
      thumbnail: "/images/ballard/7.png",
    },
    {
      original: "/images/ballard/8.png",
      thumbnail: "/images/ballard/8.png",
    },
    {
      original: "/images/ballard/9.png",
      thumbnail: "/images/ballard/9.png",
    },
    ,
    {
      original: "/images/ballard/10.png",
      thumbnail: "/images/ballard/10.png",
    },
    {
      original: "/images/ballard/11.png",
      thumbnail: "/images/ballard/11.png",
    },
    ,
    {
      original: "/images/ballard/12.png",
      thumbnail: "/images/ballard/12.png",
    },
    {
      original: "/images/ballard/13.png",
      thumbnail: "/images/ballard/13.png",
    },
  ];
  return (
    <Layout pageName="Ballard Contact" pageDescription="Ballard Contact">
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          Ballard Contact
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
                <b>Email:</b> ballard@lmlrepair.com
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

          <section className="flex gap-10 justify-center items-center border-t-4 border-black p-5 ">
            <Link href="https://g.page/r/CQNIox3az0mJEBA" className="w-30 ">
              <Image
                src="/images/socials/google.png"
                height={144}
                width={144}
                alt="Google"
                s
              />
            </Link>
            <Link
              href="https://www.yelp.com/biz/lml-repair-seattle"
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
            <Link href="" className="w-30">
              <Image
                src="/images/listings/bing.png"
                alt="Bing"
                height={144}
                width={144}
              />
            </Link>

            <Link href="" className="w-30">
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
