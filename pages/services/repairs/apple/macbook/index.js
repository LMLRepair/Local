import Image from "next/image";
import Layout from "../../../../../components/layout";
import Link from "next/link";

export default function macbook({ data }) {
  return (
    <Layout pageName="MacBook" Description="MacBook Page">
      <main className="p-5 bg-white mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest text-yellow-300">MacBook</h1>
        </section>
        <section className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          <div>
            <Image
              src={"/images/services/repairs/apple/macbook.png"}
              alt="Macbook pic"
              width={300}
              height={300}
            />
          </div>

          <article className="text-center p-10">
            We fix all MacBook models from all years. Because of the huge
            variety of MacBooks, we do not stock all parts but can fix most
            anything. Cracked screens to keyboards to batteries and most stuff
            in between. Contact us for specific details. Common repairs include:
            screen repairs, battery replacements, charging port repairs,
            headphone jack repair, camera repair and more.
          </article>
        </section>
      </main>
    </Layout>
  );
}
