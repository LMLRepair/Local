import Layout from "../../../components/layout";
import clientPromise from "../../../lib/mongodb";
import Image from "next/image";

export default function Id({ accessorie }) {
  console.log(accessorie);
  const accessorieInfo = [];
  let person = accessorie[0].types;

  for (let x in person) {
    accessorieInfo.push(person[x]);
  }

  return (
    <Layout
      pageName={accessorie[0].name}
      Description={accessorie[0].description}
    >
      <main className="flex flex-col md:flex-row  my-10 md:my-24 justify-center items-center mx-5 md:mx-16">
        <div className="flex flex-col md:flex-row ">
          {" "}
          <section className="flex gap-10 flex-col justify-center items-center p-5">
            <h1 className="text-3xl">{accessorie[0].name}</h1>
            <Image
              src={
                "/images/products/accessories/" + accessorie[0].image + ".png"
              }
              alt={accessorie[0].name}
              width={200}
              height={200}
            />
          </section>
        </div>

        <div>
          {" "}
          <article className="flex gap-2 md:gap-10 justify-center p-2 md:p-10">
            <table className="table-auto border-separate border-spacing-2 border border-black">
              <caption className="bg-yellow-300 font-bold p-5">
                {accessorie[0].name}
              </caption>
              <thead>
                <tr className="text-center bg-gray-100 font-bold">
                  <th className="w-1/2 md:w-1/6 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                    Type of Repair
                  </th>
                  <th className="w-1/4 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {accessorieInfo.map((p) => {
                  return (
                    <tr key={p.name}>
                      <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                        {p.name}
                      </td>
                      <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                        {"$" + p.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </article>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const client = await clientPromise;
  const db = client.db("product");

  let data = await db
    .collection("accessorie")
    .find({ url: params.id })
    .toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      accessorie: data,
    },
  };
}
