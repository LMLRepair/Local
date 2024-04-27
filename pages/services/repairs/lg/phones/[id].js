import Layout from "../../../../../components/layout";
import clientPromise from "../../../../../lib/mongodb";
import Image from "next/image";

export default function Id({ lg }) {
  const lgInfo = [];
  let person = lg[0].repairs;

  for (let x in person) {
    lgInfo.push(person[x]);
  }

  return (
    <Layout pageName={lg[0].model} Description={lg[0].description}>
      <main className="flex flex-col my-10 md:my-24 justify-center items-center mx-5 md:mx-16">
        <div className="flex flex-col md:flex-row">
          {" "}
          <section className="flex gap-10 flex-col justify-center items-center p-5">
            <h1 className="text-3xl">{lg[0].model}</h1>
            <Image
              src={"/images/services/repairs/lg/phones/" + lg[0].image}
              alt={lg[0].model}
              width={200}
              height={200}
            />
          </section>
          <article className="flex gap-2 md:gap-10 justify-center p-2 md:p-10">
            <table className="w-full table-auto">
              <caption className="bg-yellow-300 font-bold p-5">
                {lg[0].model}
              </caption>
              <tr className="text-center bg-gray-100 font-bold">
                <th className="w-1/2 md:w-1/6 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Type of Repair
                </th>
                <th className="w-1/4 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Price
                </th>
                <th className="w-1/3 md:w-1/4 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Time Frame
                </th>
              </tr>
              {lgInfo.map((p) => {
                return (
                  <tr key={p.name}>
                    <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {p.name}
                    </td>
                    <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {"$" + p.price}
                    </td>
                    <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {p.time + " Mins"}
                    </td>
                  </tr>
                );
              })}
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
  const db = client.db("lg");

  let data = await db.collection("phone").find({ url: params.id }).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      lg: data,
    },
  };
}
