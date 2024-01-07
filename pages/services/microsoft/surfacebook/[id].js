import Layout from '../../../../components/layout';
import clientPromise from '../../../../lib/mongodb';
import Image from 'next/image';

export default function Id({surfacebook}) {
  const surfacebookInfo = [];
  let person = surfacebook[0].repairs;

  for (let x in person) {
    surfacebookInfo.push(person[x]);
  }

  return (
    <Layout
      pageName={surfacebook[0].model}
      Description={surfacebook[0].description}
    >
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{surfacebook[0].model}</h1>
          <Image
            src={'/images/microsoft/surfacebook/' + surfacebook[0].src}
            alt={surfacebook[0].model}
            width={100}
            height={120}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              {surfacebook[0].model}
            </caption>
            <tr>
              <th>Type of Repair</th>
              <th>Price</th>
              <th>Time Frame</th>
            </tr>
            {surfacebookInfo.map((p) => {
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

  let data = await db.collection('listsurfacebook').find({}).toArray();
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

  let data = await db
    .collection('surfacebook')
    .find({href: params.id})
    .toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      surfacebook: data,
    },
  };
}
