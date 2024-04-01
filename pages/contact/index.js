import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout pageName="Contact" pageDescription="Contact">
      <main className="flex flex-col  justify-center items-center p-5 md:p-10 py-16 md:py-32">
        <div className="mb-5">
          <h1 className="text-4xl text-yellow-300 tracking-widest mx-auto flex justify-center text-center">
            Contact
          </h1>
          <p className="text-md ">
            Select the location you would like to contact
          </p>
        </div>

        <article className="flex  bg-gray-100 flex-col md:flex-row gap-5 justify-center text-center p-5 md:p-14 rounded-lg ">
          <figure className="bg-white radius p-5">
            <figcaption className="text-2xl mb-4">West Seattle</figcaption>
            <Link href="/contact/westseattle">
              <Image
                src="/images/westseattle/1.png"
                alt="West Seattle Contact"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </Link>
          </figure>

          <figure className="bg-white radius p-5">
            <figcaption className="text-2xl mb-4">Seattle</figcaption>
            <Link href="/contact/seattle">
              <Image
                src="/images/seattle/1.png"
                alt="Seattle Contact"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </Link>
          </figure>

          <figure className="bg-white radius p-5 w1/2">
            {" "}
            <figcaption className="text-2xl mb-4">North Seattle</figcaption>
            <Link href="/contact/northseattle">
              <Image
                src="/images/northseattle/1.png"
                alt="North Seattle Contact"
                width={200}
                height={200}
                className="rounded-lg"
                priority="high"
              />
            </Link>
          </figure>
        </article>
      </main>
    </Layout>
  );
}
{
  /*
          <form
            action="/api/contact"
            method="post"
            autoComplete="on"
            className="bg-white flex flex-col gap-2"
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="border-2 border-black p-2"
            />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 border-black p-2"
            />
            <br />
            <textarea
              name="message"
              rows="5"
              cols="30"
              placeholder="Enter your message"
              required
              className="border-2 border-black p-2"
            />

            <input
              type="submit"
              value="Send Message"
              className="border-2 bg-black text-white p-2"
            />
          </form>

  */
}
