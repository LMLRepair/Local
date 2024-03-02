import Image from "next/image";
import Layout from "../../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../../lib/mongodb";

export default function Apple({ data }) {
  return (
    <Layout pageName="Apple" Description="Apple Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Apple Repairs</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((apple) => (
            <figure key={apple.index} className="border-4 border-black p-5">
              <Link href={"/services/repairs/apple/" + apple.url}>
                <Image
                  src={"/images/services/repairs/apple/" + apple.image}
                  alt={apple.brand}
                  width={200}
                  height={200}
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
