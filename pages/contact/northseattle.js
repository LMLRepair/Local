import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function NorthSeattle() {
  return (
    <Layout
      pageName="North Seattle Contact"
      pageDescription="North Seattle Contact"
    >
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          West Seattle Contact
        </h1>

        <main>
          <section className=" p-14 flex flex-row flex-wrap  justify-between items-center">
            <div>
              <p className="text-lg my-5">
                <b>Tel:</b> (206) 745-2977
                <br />
                <b>Hours:</b> Mon-Sun 8AM to 8PM <br />
                <b>Email:</b> northseattle@lmlrepair.com
              </p>
              <p className="text-lg my-5">
                <b>Address: </b>
                3400 Harbor Ave SW STE #332 Seattle, WA 98126 <br />
                <b>
                  <small>Use callbox at the elevator or dial 00332 </small>
                </b>
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-f52470e7-b405-4034-bae9-508e7e2452a9"></div>
          </section>

          <section className="p-10 bg-white">
            <iframe
              src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43125.25857266455!2d-122.19073828661517!3d47.50299028009258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sEasy%20Mobile%20Iphone%20Repair!5e0!3m2!1sen!2sus!4v1613693916444!5m2!1sen!2sus "
              height="450 "
              style={{ border: "0px" }}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>
          </section>
        </main>
      </div>
    </Layout>
  );
}
