import Layout from '../../components/layout';
import Script from 'next/script';
export default function Contact() {
  return (
    <Layout pageName="Contact" pageDescription="Contact">
      <main className="">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10 p-10">
          Contact
        </h1>

        <section>
          <section className=" p-14 flex flex-row flex-wrap justify-around items-center bg-white text-center">
            <div>
              <p className="text-2xl ">
                <b> West Seattle </b>
              </p>
              <p className="text-lg my-5">
                3400 Harbor Ave SW STE #332 Seattle, WA 98126 <br />
                <b>
                  {' '}
                  <small>Use callbox at the elevator or dial 00332 </small>
                </b>
              </p>
              <p className="text-lg my-5">
                <b>Tel:</b> (206) 745-2064
                <br />
                <b>Hours:</b> Mon-Sun 8:00am to 8:00pm <br />
                <b>Email:</b> westseattle@lmlrepair.com
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-f52470e7-b405-4034-bae9-508e7e2452a9"></div>

            {/*
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

  */}
          </section>
          <div className="p-10 bg-white">
            <iframe
              src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43125.25857266455!2d-122.19073828661517!3d47.50299028009258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sEasy%20Mobile%20Iphone%20Repair!5e0!3m2!1sen!2sus!4v1613693916444!5m2!1sen!2sus "
              height="450 "
              style={{border: '0px'}}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>
          </div>
        </section>

        <section>
          <section className=" p-14 flex flex-row flex-wrap justify-around items-center bg-white text-center">
            <div>
              <p className="text-2xl ">
                <b> Ballard </b>
              </p>
              <p className="text-lg my-5">
                700 NW 42nd St STE #333, Seattle, WA 98107 <br />
                <b>
                  {' '}
                  <small>Use callbox at the elevator or dial 00333 </small>
                </b>
              </p>
              <p className="text-lg my-5">
                <b>Tel:</b> (206) 745-2002
                <br />
                <b>Hours:</b> Mon-Sun 8:00am to 8:00pm <br />
                <b>Email:</b> ballard@lmlrepair.com
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-96c643f1-690c-45eb-bf57-e6ac2108c054"></div>
          </section>
          <div className="p-10 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus"
              height="450 "
              style={{border: '0px'}}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}
