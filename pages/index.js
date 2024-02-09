import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";

// here is the new carousel
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Home() {
  const images1 = [
    {
      original: "/images/mainpics/1.png",
      thumbnail: "/images/mainpics/1.png",
    },
    {
      original: "/images/mainpics/2.png",
      thumbnail: "/images/mainpics/2.png",
    },
    {
      original: "/images/mainpics/3.png",
      thumbnail: "/images/mainpics/3.png",
    },
    {
      original: "/images/mainpics/4.png",
      thumbnail: "/images/mainpics/4.png",
    },
    {
      original: "/images/mainpics/5.png",
      thumbnail: "/images/mainpics/5.png",
    },
    {
      original: "/images/mainpics/6.png",
      thumbnail: "/images/mainpics/6.png",
    },
    {
      original: "/images/mainpics/7.png",
      thumbnail: "/images/mainpics/7.png",
    },
    {
      original: "/images/mainpics/8.png",
      thumbnail: "/images/mainpics/8.png",
    },
    {
      original: "/images/mainpics/9.png",
      thumbnail: "/images/mainpics/9.png",
    },
  ];

  return (
    <Layout pageName="Home" pageDescription="Home">
      <div className="p-10">
        <ImageGallery items={images1} autoPlay="true" />
      </div>

      <div>
        <div className="bg-yellow-300 flex justify-center items-center p-10">
          <div className="text-center">
            <h1 className="text-6xl tracking-widest">LML Repair</h1>
            <p className="text-3xl my-10">Choose convenience – choose us!</p>

            <Link
              href="/bookings"
              className="text-3xl bg-black p-4 text-white hover:bg-white hover:text-black cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="text-center p-10 bg-white">
          <h1 className="text-2xl font-bold my-5">
            Experience An LML Repair Today
          </h1>
          <p className="text-lg">
            Enter our office today, and you can expect premier customer service,
            starting with a low cost diagnostic test and a free quote for
            repairs with no obligation to purchase. With waiting times as short
            as 30 minutes and a large stock of high quality parts, and
            reasonable prices we are ready to help you should you decide to go
            ahead with the fix. Combine this 5-star service with afforable
            warranty plans on all repairs, and it’s no wonder that LML Repair is
            Seattle’s first choice for electronic repairs.
          </p>

          <h1 className="text-2xl font-bold my-5">
            Schedule your repair online!
          </h1>
          <p className="text-lg">
            At LML Repair, all repairs come with low cost diagnostics and
            afforable warranty plans – use our fast device repair services with
            confidence and leave with peace of mind that we’ve got your back, no
            matter what happens.
          </p>
        </div>
        <div className="bg-yellow-300 text-center p-10 bg-white">
          <h1 className="text-2xl font-bold">HIGH-QUALITY PARTS</h1>
          <p className="text-lg my-5">
            LML Repair only uses high-quality OEM and aftermarket parts for
            repairs
          </p>

          <h1 className="text-2xl font-bold">LOST COST DIAGNOSIS</h1>
          <p className="text-lg my-5">
            Not sure what’s wrong? We’ll diagnose your issue at a low cost. With
            fix, no fee.
          </p>
          <h1 className="text-2xl font-bold">
            CERTIFIED TECHNICIAN SAME-DAY REPAIR
          </h1>
          <p className="text-lg my-5">
            Knowledgeable, passionate service from qualified and trained
            experts. Most LML repairs are completed within 30 minutes.
          </p>
          <h1 className="text-2xl font-bold">AFFORDABLE WARRANTY PLANS</h1>
          <p className="text-lg my-5">
            All repairs come with a multitude of afforable warranty plans for
            your peace of mind.
          </p>
          {/* <small className="text-sm my-5">No Refunds</small>*/}
          <h1 className="text-2xl font-bold">BEST REPAIR SERVICE IN SEATTLE</h1>
          <p className="text-lg my-5">
            LML Repair offers Seattle’s friendliest, fastest repair service with
            expert repairs for a variety of iPhone, iPad, Apple Watch, MacBook,
            Samsung, Pixel, Surface Pro, Nintendo Switch, Playstation, Xbox, LG,
            Oneplus, Motorola, PC devices. <br />
            And, with an affordable warranty plans on all repairs, we’ve got
            your back when things go wrong in future
          </p>
        </div>

        <div className="elfsight-app-46eba886-4955-417d-9e36-b02ca1a0e69b p-20"></div>

        <div className="elfsight-app-21af9976-08a4-410b-ab8c-1a076f700795 p-20"></div>
      </div>
    </Layout>
  );
}
