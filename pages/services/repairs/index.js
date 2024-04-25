import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../lib/mongodb";

export default function Repairs({ data }) {
  return (
    <Layout pageName="Repairs" Description="Repairs">
      <main className="p-5 bg-white mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest text-yellow-300">Repairs</h1>
          <p className="text-md ">Select the device brand you like to fix</p>
        </section>

        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((repair) => (
            <figure
              key={repair.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5"
            >
              <Link href={"/services/repairs/" + repair.url}>
                <Image
                  src={"/images/services/repairs/" + repair.image + ".png"}
                  alt={repair.brand}
                  width={200}
                  height={200}
                  className="w-60 h-52"
                />
              </Link>
              <figcaption>{repair.brand}</figcaption>
            </figure>
          ))}

          <div
            className="elfsight-app-025770ea-bfe5-4b6f-9358-44951339cbda"
            data-elfsight-app-lazy
          ></div>
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("service");

    const data = await db
      .collection("listrepair")
      .find({})
      .sort({ rank: 1 })
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
    console.error(e);
  }
}
