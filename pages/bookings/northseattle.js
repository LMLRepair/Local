import Layout from "../../components/layout";
import Script from "next/script";

export default function NorthSeattle() {
  return (
    <Layout
      pageName="North Seattle Bookings"
      Description="North Seattle Bookings"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest">
            {" "}
            North Seattle Bookings
          </h1>
{/*

          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/L2KXFBJVXE6H3/start"
            style={{ border: "none" }}
            aria-hidden="false"
            frameborder="0"
            title="Square bridge for Setting Appointments"
            height="1700px"
            className="w-full mt-5"
          ></iframe>

  */}
        </div>
      </div>
    </Layout>
  );
}
