import Image from "next/image";
import Layout from "../../components/layout";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";

export default function Services({ data }) {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Services</h1>
          <p className="text-md ">
            Select the service category you are interested in
          </p>
        </section>

        <article className="grid gap-5 justify-center text-center p-10">
          {data.map((service) => (
            <figure key={service.index} className="border-4 border-black p-5">
              <Link href={"/services/" + service.href}>
                <Image
                  src={"/images/services/" + service.src + ".png"}
                  alt={service.name}
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>{service.name}</figcaption>
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
    console.log("Inside GetStaticProps" + db);

    const data = await db
      .collection("listservice")
      .find({})
      .sort({ rank: 1 })
      .toArray();
    console.log("InsideGetStaticProps" + data);

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
    console.error(e);
  }
}
