import Layout from "../../components/layout";

export default function NorthSeattle() {
  return (
    <Layout pageName="North Seattle Bookings" Description="North Seattle Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest"> North Seattle Bookings</h1>

          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1S1uVlHII_xeABjSWqz6uHXpPx-mwyvFLYpQRf-AbJieH8RO1JOv0zc5TwVqw804_HO0IR-dI-?gv=true"
            height="1500"
            frameborder="0"
            title="Google Appointments"
            className="w-full m-5"
          ></iframe>

        </div>
      </div>
    </Layout>
  );
}
