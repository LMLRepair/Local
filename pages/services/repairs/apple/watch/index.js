import Image from "next/image";
import Layout from "../../../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../../../lib/mongodb";

export default function watch({ data }) {
  return (
    <Layout pageName="Watch Series" Description="Watch Series Page">
      <main className="p-5 bg-white mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest text-yellow-300">
            Watch Series
          </h1>
        </section>
        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((watch) => (
            <figure
              key={watch.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5  "
            >
              <Link href={"/services/repairs/apple/watch/" + watch.url}>
                <Image
                  src={"/images/services/repairs/apple/watch/" + watch.image}
                  alt={watch.series}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{watch.series}</figcaption>
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
    const db = client.db("apple");

    const data = await db
      .collection("listwatch")
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
