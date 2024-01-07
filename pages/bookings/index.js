import Layout from '../../components/layout';
import Script from 'next/script';
export default function Bookings() {
  return (
    <Layout pageName="Bookings" Description="Bookings">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-3xl mb-10">Bookings</h1>

          <p className="text-md ">
            Make sure to select your ideal location: West Seattle or Ballard
          </p>

          {/*
          <p className="text-md ">Office appointment? Use the form bellow.</p>
          <p className="text-md mb-5">
            <b> Mail in? use the form & ship your device to: </b>
          </p>
          <p className="text-md "> LML Repair </p>
          <p className="text-md text-center">
            3400 Harbor Ave SW STE #332 Seattle, WA 98126{' '}
          </p>

          <p className="text-md text-center">
            Once completed, you will recieve an invoice and the package will be
            sent back!
          </p>

          */}

          <iframe
            src="https://squareup.com/appointments/book/89pnd6xdrlisrg/LWQRVGS73Q18V/start"
            style={{border: 'none'}}
            aria-hidden="false"
            title="Square bridge for Setting Appointments"
            height="1300px"
            className="w-full mt-5"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
