import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../lib/mongodb";

export default function Software({ data }) {
  return (
    <Layout pageName="Software" Description="Software">
      <main className="p-5 mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl tracking-widest text-yellow-300">Software</h1>
          <p className="text-md ">Select the category you like to fix</p>
        </section>

        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((software) => (
            <figure
              key={software.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5"
            >
              <Link href={"/services/software/" + software.url}>
                <Image
                  src={"/images/services/software/" + software.image}
                  alt={software.category}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{software.category}</figcaption>
            </figure>
          ))}
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("software");

    const data = await db
      .collection("listsoftware")
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
