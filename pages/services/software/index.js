import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";
import clientPromise from '../../../lib/mongodb';


export default function Software({data}) {
  return (
    <Layout pageName="Software" Description="Software">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Software</h1>
          <p className="text-md ">Select the category you like to fix</p>
        </section>
  
        <article className="grid gap-5 justify-center text-center p-10">
          
        {data.map((software) => (
            <figure key={software.index} className="border-4 border-black p-5">
              <Link href={"/services/software/" + software.url}>
                <Image
                  src={"/images/services/software/" + software.image }
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
