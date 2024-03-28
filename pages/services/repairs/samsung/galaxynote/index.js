import Image from "next/image";
import Layout from "../../../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../../../lib/mongodb";

export default function note({ data }) {
  return (
    <Layout pageName="Galaxy Note Series" Description="Galaxy Note Series Page">
      <main className="p-5 mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl tracking-widest text-yellow-300">
            Note Series
          </h1>
        </section>
        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((note) => (
            <figure
              key={note.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5"
            >
              <Link href={"/services/repairs/samsung/galaxynote/" + note.url}>
                <Image
                  src={
                    "/images/services/repairs/samsung/galaxynote/" + note.image
                  }
                  alt={note.series}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{note.series}</figcaption>
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
    const db = client.db("samsung");

    const data = await db
      .collection("listgalaxynote")
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
