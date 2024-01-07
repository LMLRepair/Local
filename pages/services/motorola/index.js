import Image from 'next/image';
import Layout from '../../../components/layout';

export default function motorola() {
  return (
    <Layout pageName="Motorola" Description="Motorola Home Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Motorola</h1>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div>
            <Image
              src={'/images/brands/motorola.png'}
              alt="Macbook pic"
              width={300}
              height={300}
            />
          </div>

          <article className="text-center p-10">
            We fix all Motorola models from all years. Because of the huge
            variety of Models, we do not stock all parts but can fix most
            anything. Cracked screens to batteries and most stuff in between.
            Contact us for specific details.
          </article>
        </section>
      </main>
    </Layout>
  );
}
