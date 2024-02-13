import Layout from "../../components/layout";

export default function Ballard() {
  return (
    <Layout pageName="Ballard Bookings" Description="Ballard Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest"> Ballard Bookings</h1>

          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/LZ5QN88Z09J85/start"
            title="Square bridge for Setting Appointments"
            height="1700px"
            className="w-full mt-5"
          ></iframe>
          {/*
          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/LZ5QN88Z09J85/start"
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
