import Layout from "../../components/layout";

export default function Ballard() {
  return (
    <Layout pageName="Ballard Bookings" Description="Ballard Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest"> Ballard Bookings</h1>

          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3kTo7HK_Lp_pEZzjAZ1RnGi1cjLDoxVADBEEYlgUntR3fSos0INxENe31UnnZ2D072RsQSklp1?gv=true"
            height="1500"
            title="Google Appointments"
            className="w-full m-5"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
