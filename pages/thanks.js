import Layout from '../components/layout';
import Image from 'next/image';

export default function Thanks() {
  return (
    <Layout pageName="Email Confirmation" Description="Email Confirmation">
      <section className=" p-14 flex flex-row flex-wrap h-screen justify-around items-center bg-white">
        <section>
          <h1>Message Sent! </h1>
          <p>Your email is important to us. You will receive response soon.</p>
        </section>
        <section>
          <Image src="/images/favicon.png" alt="X" height={100} width={100} />
        </section>
      </section>
    </Layout>
  );
}
