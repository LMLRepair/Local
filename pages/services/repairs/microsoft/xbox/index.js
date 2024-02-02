import Image from 'next/image';
import Layout from '../../../../../components/layout';
import Link from 'next/link';
import clientPromise from '../../../../../lib/mongodb';

export default function xbox({data}) {
  return (
    <Layout pageName="Xbox Series" Description="Xbox Series Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Xbox Series</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((xbox) => (
            <figure key={xbox.index} className="border-4 border-black p-5">
              <Link href={'/services/repairs/microsoft/xbox/' + xbox.href}>
              
                  <Image
                    src={'/images/services/repairs/microsoft/xbox/' + xbox.src}
                    alt={xbox.series}
                    width={200}
                    height={200}
                  />
              
              </Link>
              <figcaption>{xbox.series}</figcaption>
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
    const db = client.db('microsoft');

    const data = await db
      .collection('listxbox')
      .find({})
      .sort({rank: -1})
      .toArray();

    return {
      props: {data: JSON.parse(JSON.stringify(data))},
    };
  } catch (e) {
    console.error(e);
  }
}
