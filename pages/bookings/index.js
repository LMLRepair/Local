import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Bookings() {
  return (
    <Layout pageName="Bookings" Description="Bookings">
      <div className="flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-4xl  tracking-widest">Bookings</h1>
        <p className="text-md ">Select your preferred appointment location</p>

        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4 border-black p-5">
            <Link href="/bookings/westseattle">
              <Image
                src="/images/westseattle/1.png"
                alt="West Seattle Booking"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">West Seattle</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/bookings/ballard">
              <Image
                src="/images/ballard/1.png"
                alt="Ballard Booking"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">Ballard</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/bookings/northseattle">
              <Image
                src="/images/northseattle/1.png"
                alt="North Seattle Booking"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">North Seattle</figcaption>
          </figure>
        </article>
      </div>
    </Layout>
  );
}
