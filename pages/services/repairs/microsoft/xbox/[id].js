import Layout from "../../../../../components/layout";
import clientPromise from "../../../../../lib/mongodb";
import Image from "next/image";

export default function Id({ xbox }) {
  const xboxInfo = [];
  let person = xbox[0].repairs;

  for (let x in person) {
    xboxInfo.push(person[x]);
  }

  return (
    <Layout pageName={xbox[0].model} Description={xbox[0].description}>
      <main className="flex flex-col my-10 md:my-24 justify-center items-center mx-5 md:mx-16">
        <div className="flex flex-col md:flex-row ">
          {" "}
          <section className="flex gap-10 flex-col justify-center items-center p-5">
            <h1 className="text-3xl">{xbox[0].model}</h1>
            <Image
              src={"/images/services/repairs/microsoft/xbox/" + xbox[0].image}
              alt={xbox[0].model}
              width={200}
              height={200}
            />
          </section>
          <article className="flex gap-2 md:gap-10 justify-center p-2 md:p-10">
            <table className="table table-auto ">
              <caption className="bg-yellow-300 font-bold p-5">
                {xbox[0].model}
              </caption>
              <tr className="text-center bg-gray-100 font-bold">
                <th className="w-1/2 md:w-1/6 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Type of Repair
                </th>
                <th className="w-1/4 md:w-1/4 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Price
                </th>
                <th className="w-1/3 md:w-1/4 md:min-w-[160px] border-l  py-4 md:px-3 text-lg font-medium  lg:py-7 lg:px-4">
                  Time Frame
                </th>
              </tr>
              {xboxInfo.map((p) => {
                return (
                  <tr key={p.name}>
                    <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                      {p.name}
                    </td>
                    <td className="text-dark border-b border-l   dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                        {"Call"}
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
  const db = client.db("microsoft");

  let data = await db.collection("xbox").find({ url: params.id }).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      xbox: data,
    },
  };
}
