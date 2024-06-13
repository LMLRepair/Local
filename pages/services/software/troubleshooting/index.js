import Layout from "../../../../components/layout";
import Image from "next/image";
import clientPromise from "../../../../lib/mongodb";

export default function Troubleshooting({ troubleshooting }) {
  const Info = [];
  let person = troubleshooting[0].types;

  for (let x in person) {
    Info.push(person[x]);
  }

  return (
    <Layout
      pageName={troubleshooting[0].name}
      Description={troubleshooting[0].description}
    >
      <main className="flex flex-col md:flex-row  my-10 md:my-24 mt-10 justify-center items-center mx-5 md:mx-16">
        <div className="flex flex-col md:flex-row ">
          {" "}
          <section className="flex gap-10 flex-col justify-center items-center p-5">
            <h1 className="text-2xl">{troubleshooting[0].name}</h1>
            <Image
              src={"/images/services/software/" + troubleshooting[0].image}
              alt={troubleshooting[0].name}
              width={200}
              height={200}
            />
          </section>
        </div>
        <div>
          {" "}
          <article className="flex gap-2 md:gap-10 justify-center p-2 md:p-10">
            <table className="w-full table-auto">
              <caption className="bg-yellow-300 font-bold p-5">
                {troubleshooting[0].name}
              </caption>
              <thead>
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
              </thead>

              <tbody>
                {Info.map((p) => {
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
              </tbody>
            </table>
          </article>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("software");

  let data = await db.collection("troubleshooting").find().toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      troubleshooting: data,
    },
  };
}
