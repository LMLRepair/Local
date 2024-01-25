import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Review() {
  return (
    <Layout pageName="Review Us" Description="Review Us Page">
        <section className=" flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-5xl tracking-widest">Review Us</h1>
        </section>

        <div className="py-20">
          <section className="flex gap-5 justify-center items-center mb-5">
            <Image
              src="/images/ballard.png"
              alt="Fa"
              height={100}
              width={200}
            />{" "}
            <Link
              href="https://maps.app.goo.gl/8G6BbtAHvqDtpM6r9"
              className="w-14 "
              target="_blank"
            >
              <Image
                src="/images/socials/google.png"
                height={144}
                width={144}
                alt="Google"
              />
            </Link>
            <Link
              href="https://www.yelp.com/biz/lml-repair-ballard-seattle?osq=LML+Repair+-+Ballard&override_cta=Request+a+Quote"
              className="w-14"
              target="_blank"
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
              className="w-14"
              target="_blank"
            >
              <Image
                src="/images/socials/facebook.png"
                alt="FaceBook"
                height={144}
                width={144}
              />
            </Link>
          </section>
          <section className="flex gap-5 justify-center items-center">
            <Image
              src="/images/westseattle.png"
              alt="Facebook"
              height={100}
              width={200}
            />
            <Link
              href="https://g.page/r/CQNIox3az0mJEBA"
              className="w-14 "
              target="_blank"
            >
              <Image
                src="/images/socials/google.png"
                height={144}
                width={144}
                alt="Google"
                target="_blank"
              />
            </Link>
            <Link
              href="https://www.yelp.com/biz/lml-repair-west-seattle-seattle-2?osq=LML+Repair+-+west+seattle&override_cta=Request+a+Quote"
              className="w-14 "
              target="_blank"
            >
              <Image
                src="/images/socials/yelp.png"
                height={144}
                width={144}
                alt="Yelp"
              />
            </Link>
            <Link
              href="https://www.facebook.com/lmlrepairwestseattle/"
              className="w-14"
              target="_blank"
            >
              <Image
                src="/images/socials/facebook.png"
                alt="FaceBook"
                height={144}
                width={144}
              />
            </Link>
          </section>
        </div>
    </Layout>
  );
}
