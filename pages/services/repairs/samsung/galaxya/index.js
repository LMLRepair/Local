import Image from "next/image";
import Layout from "../../../../../components/layout";

export default function galaxya() {
  return (
    <Layout pageName="galaxya" Description="galaxya Home Page">
      <main className="p-5 mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl tracking-widest text-yellow-300">
            Galaxy A Series
          </h1>
        </section>
        <section className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          <div>
            <Image
              src={"/images/services/repairs/samsung/galaxya.png"}
              alt="Galaxy A pic"
              width={200}
              height={200}
            />
          </div>

          <article className="text-center p-10">
            We fix all galaxy a models from all years. Because of the huge
            variety of Models, we do not stock all parts but can fix most
            anything. Cracked screens to batteries and most stuff in between.
            Contact us for specific details.
          </article>
        </section>
      </main>
    </Layout>
  );
}
