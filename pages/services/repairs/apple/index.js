import Image from "next/image";
import Layout from "../../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../../lib/mongodb";

export default function Apple({ data }) {
  return (
    <Layout pageName="Apple" Description="Apple Repairs Page">
      <main className="p-5 bg-white mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest text-yellow-300">
            Apple Repairs
          </h1>
        </section>
        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((apple) => (
            <figure
              key={apple.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5"
            >
              <Link href={"/services/repairs/apple/" + apple.url}>
                <Image
                  src={"/images/services/repairs/apple/" + apple.image}
                  alt={apple.brand}
                  width={200}
                  height={200}
                  className="w-48 h-52"
                />
              </Link>
              <figcaption>{apple.category}</figcaption>
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
    const db = client.db("apple");

    const data = await db
      .collection("listapple")
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
