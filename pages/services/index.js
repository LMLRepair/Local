import Image from "next/image";
import Layout from "../../components/layout";
import Link from "next/link";
import clientPromise from "../../lib/mongodb";

export default function Services({ data }) {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 mt-10 md:mt-20  md:mx-4">
        <section className="flex flex-col justify-center items-center p-5">
          <h1 className="text-4xl tracking-widest text-yellow-300">Services</h1>
          <p className="text-md ">
            Select the service category you are interested in
          </p>
        </section>

        <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
          {data.map((service) => (
            <figure
              key={service.index}
              className="bg-gray-100 rounded-lg  flex flex-col justify-center items-center gap-10 py-14 md:py-6 p-5"
            >
              <div>
                <figcaption>{service.name}</figcaption>
              </div>
              <div>
                <Link href={"/services/" + service.url}>
                  <Image
                    className="rounded-lg "
                    src={"/images/services/" + service.image + ".png"}
                    alt={service.name}
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
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
