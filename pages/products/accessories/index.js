import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";
import clientPromise from "../../../lib/mongodb";

export default function Accessories({ data }) {
  return (
    <Layout pageName="Accessories Page" Description="Accessories Page">
      <main className="p-5 bg-white mt-10 md:mt-20 mx-2 md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl  mb-10">Accessories </h1>

          <article className="flex flex-col md:flex-row flex-wrap  gap-5 justify-center text-center p-10">
            <figure className="bg-gray-100 rounded-lg flex flex-col justify-between gap-10 p-5">
              <div>
                <Link href={"/products/accessories/chargers"}>
                  <Image
                    src={"/images/products/iphone.png"}
                    priority="high"
                    alt="accessoriename"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div>
                <figcaption>iphone</figcaption>
              </div>
            </figure>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("product");

    const data = await db
      .collection("listaccessorie")
      .find({})
      .sort({ rank: -1 })
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
    console.error(e);
  }
}
