import Layout from "../../../../components/layout";
import Image from "next/image";
import clientPromise from '../../../../lib/mongodb';

export default function Troubleshooting({troubleshooting}) {
  const Info = [];
  let person = troubleshooting[0].types;

  for (let x in person) {
    Info.push(person[x]);
  }

  return (
    <Layout pageName={troubleshooting[0].name} Description={troubleshooting[0].description}>
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{troubleshooting[0].name}</h1>
          <Image
            src={'/images/services/software/' + troubleshooting[0].image}
            alt={troubleshooting[0].name}
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              {troubleshooting[0].name}
            </caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {Info.map((p) => {
                return (
                  <tr key={p.name}>
                    <td>{p.name}</td>
                    <td>{'$' + p.price}</td>
                    <td>{p.time + ' Mins'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      
      </main>
    </Layout>
  );
}



export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db('software');

  let data = await db.collection('troubleshooting').find().toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      troubleshooting: data,
    },
  };
}