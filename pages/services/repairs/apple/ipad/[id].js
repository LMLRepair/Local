import Layout from '../../../../../components/layout';
import clientPromise from '../../../../../lib/mongodb';
import Image from 'next/image';

export default function Id({pad}) {
  const padInfo = [];
  let person = pad[0].repairs;

  for (let x in person) {
    padInfo.push(person[x]);
  }

  return (
    <Layout pageName={pad[0].model} Description={pad[0].description}>
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{pad[0].model}</h1>
          <Image
            src={'/images/services/repairs/apple/ipad/' + pad[0].image}
            alt={pad[0].model}
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              {pad[0].model}
            </caption>
            <thead>
              <tr>
                <th>Type of Repair</th>
                <th>Price</th>
                <th>Time Frame</th>
              </tr>
            </thead>

            <tbody>
              {padInfo.map((p) => {
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
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Want multiple repairs done? We offer discounts for that. Give us a
          call or text.
        </b>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({params}) {
  // Fetch necessary data for the blog post using params.id
  const client = await clientPromise;
  const db = client.db('apple');

  let data = await db.collection('ipad').find({url: params.id}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      pad: data,
    },
  };
}
