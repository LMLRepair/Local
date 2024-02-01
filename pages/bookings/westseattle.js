import Layout from "../../components/layout";

export default function WestSeattle() {
  return (
    <Layout pageName="West Seattle Bookings" Description="West Seattle Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-4xl mb-10 tracking-widest"> West Seattle Bookings</h1>

          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Sylgpw0NvPjz4k7eG_cAlYcm7isMqxnFqRVglVotWHI5Ea-XR4iUPpfLY8UDKtPZQTnlUEiQN?gv=true"
            height="1500"
            title="Google Appointments"
            className="w-full m-5"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
