import Layout from '../../../../components/layout';
import clientPromise from '../../../../lib/mongodb';
import Image from 'next/image';

export default function Id({xbox}) {
  const xboxInfo = [];
  let person = xbox[0].repairs;

  for (let x in person) {
    xboxInfo.push(person[x]);
  }

  return (
    <Layout pageName={xbox[0].model} Description={xbox[0].description}>
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{xbox[0].model}</h1>
          <Image
            src={'/images/microsoft/xbox/' + xbox[0].src}
            alt={xbox[0].model}
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              {xbox[0].model}
            </caption>
            <tr>
              <th>Type of Repair</th>
              <th>Price</th>
              <th>Time Frame</th>
            </tr>
            {xboxInfo.map((p) => {
              return (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{'$' + p.price}</td>
                  <td>{p.time + ' Mins'}</td>
                </tr>
              );
            })}
          </table>
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db('microsoft');

  let data = await db.collection('listxbox').find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

  const paths = data.map((d) => {
    return {
      params: {
        id: d.href,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  // Fetch necessary data for the blog post using params.id
  const client = await clientPromise;
  const db = client.db('microsoft');

  let data = await db.collection('xbox').find({href: params.id}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      xbox: data,
    },
  };
}
