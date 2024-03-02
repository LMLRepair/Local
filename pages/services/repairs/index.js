import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";
import clientPromise from "../../../lib/mongodb";

export default function Repairs({data}) {
  return (
    <Layout pageName="Repairs" Description="Repairs">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Repairs</h1>
          <p className="text-md ">Select the device brand you like to fix</p>
        </section>
  
        <article className="grid gap-5 justify-center text-center p-10">
          
        {data.map((repair) => (
            <figure key={repair.index} className="border-4 border-black p-5">
              <Link href={"/services/repairs/" + repair.url}>
                <Image
                  src={"/images/services/repairs/" + repair.image + ".png"}
                  alt={repair.brand}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{repair.brand}</figcaption>
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
