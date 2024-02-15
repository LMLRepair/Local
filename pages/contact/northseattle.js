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
          North Seattle Contact
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
                10015 Lake City Way NE STE #231, Seattle, WA 98125 <br />
                <b>
                  <small>Use callbox at the elevator or dial 00231 </small>
                </b>
              </p>
            </div>
            <Script
              strategy="afterInteractive"
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></Script>
            <div className="elfsight-app-5f780629-a146-4756-8761-d6f427d9ec90"></div>
          </section>

          <section className="p-10 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso"
              height="450 "
              style={{ border: "0px" }}
              aria-hidden="false"
              title="Shop Location"
              className=" w-full"
            ></iframe>

            <span>
              <div className="elfsight-app-69f51bd3-b95a-4000-a8fb-60479fcccbb8"></div>
            </span>
          </section>
        </main>
      </div>
    </Layout>
  );
}
