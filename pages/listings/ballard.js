import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Ballard() {
  return (
    <Layout pageName="Ballard Listings" pageDescription="Ballard Listings">
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          Ballard Listings
        </h1>

        <section className="flex flex-col gap-10 justify-center items-center mb-10">
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
      </div>
    </Layout>
  );
}
