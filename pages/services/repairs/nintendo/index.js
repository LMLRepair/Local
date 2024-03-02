import Image from "next/image";
import Layout from "../../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../../lib/mongodb";

export default function nintendo({ data }) {
  return (
    <Layout pageName="nintendo Series" Description="nintendo Series Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Nintendo Repairs</h1>
        </section>

        <article className="grid  gap-5 content-center items-center text-center justify-items-center p-10">
          {data.map((nintendo) => (
            <figure key={nintendo.index} className="border-4 border-black p-5">
              <Link href={"/services/repairs/nintendo/" + nintendo.url}>
                <Image
                  src={"/images/services/repairs/nintendo/" + nintendo.image}
                  alt={nintendo.category}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{nintendo.category}</figcaption>
            </figure>
          ))}
        </article>

        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair? Give us a call or text.
        </b>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("nintendo");

    const data = await db
      .collection("listnintendo")
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
