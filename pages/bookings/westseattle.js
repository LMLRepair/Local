import Layout from "../../components/layout";

export default function WestSeattle() {
  return (
    <Layout
      pageName="West Seattle Bookings"
      Description="West Seattle Bookings"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest">
            {" "}
            West Seattle Bookings
          </h1>
         
          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/LWQRVGS73Q18V/start"
            title="Square bridge for Setting Appointments"
            height="1700px"
            className="w-full mt-5"
          />
         {/*

          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/LWQRVGS73Q18V/start"
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
