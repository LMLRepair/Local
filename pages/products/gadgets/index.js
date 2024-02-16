import Image from 'next/image';
import Layout from '../../../components/layout';

export default function gadgets() {
  return (
    <Layout pageName="gadgets" Description="gadgets Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Gadgets</h1>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div>
            <Image
              src={'/images/products/gadgets.jpeg'}
              alt="Macbook pic"
              width={200}
              height={200}
            />
          </div>

          <article className="text-center p-10">
           Coming Soon!
          </article>
        </section>
      </main>
    </Layout>
  );
}