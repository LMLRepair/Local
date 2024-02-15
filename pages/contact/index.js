import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout pageName="Contact" pageDescription="Contact">
      <main className="flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center">
          Contact
        </h1>
        <p className="text-md ">
          Select the location you would like to contact
        </p>

        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4	 border-black p-5">
            <Link href="/contact/westseattle">
              <Image
                src="/images/westseattle/pic1.png"
                alt="West Seattle Contact"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">West Seattle</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/contact/ballard">
              <Image
                src="/images/ballard/1.png"
                alt="Ballard Contact"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">Ballard</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/contact/northseattle">
              <Image
                src="/images/northseattle/1.jpeg"
                alt="North Seattle Contact"
                width={200}
                height={200}
                className="border-black border-4"
              />
            </Link>
            <figcaption className="text-2xl">North Seattle</figcaption>
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
