import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Bookings() {
  return (
    <Layout pageName="Bookings" Description="Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest">Bookings</h1>

          <p className="text-md ">Click to select your ideal location:</p>

          <article className="grid gap-5 justify-center text-center p-10">
            <figure className="border-4 border-black p-5">
              <Link href="/bookings/westseattle">
                <Image
                  src="/images/westseattle/pic1.png"
                  alt="West Seattle Booking"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption className="text-3xl">West Seattle</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/bookings/ballard">
                <Image
                  src="/images/ballard/1.png"
                  alt="Ballard Booking"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption className="text-3xl">Ballard</figcaption>
            </figure>
          </article>

          {/*
            <figure className="border-4 border-black p-5">
              <Link href="/bookings/northseattle">
                <Image
                  src="/images/northseattle/1.png"
                  alt="North Seattle Booking"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>North Seattle</figcaption>
            </figure>

        
          <p className="text-md mb-5">
            <b> Mail in? use the form & ship your device to: </b>
          </p>
          <p className="text-md "> LML Repair </p>
          <p className="text-md text-center">
            3400 Harbor Ave SW STE #332 Seattle, WA 98126{' '}
          </p>

          <p className="text-md text-center">
            Once completed, you will recieve an invoice and the package will be
            sent back!
          </p>

          */}
        </div>
      </div>
    </Layout>
  );
}
