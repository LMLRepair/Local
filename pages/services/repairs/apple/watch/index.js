import Image from 'next/image';
import Layout from '../../../../../components/layout';
import Link from 'next/link';
import clientPromise from '../../../../../lib/mongodb';

export default function watch({data}) {
  return (
    <Layout pageName="Watch Series" Description="Watch Series Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Watch Series</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((watch) => (
            <figure key={watch.index} className="border-4 border-black p-5 w-48 flex flex-col justify-center items-center  ">
              <Link href={'/services/repairs/apple/watch/' + watch.url}>
               
                  <Image
                    src={'/images/services/repairs/apple/watch/' + watch.image}
                    alt={watch.series}
                    width={200}
                    height={200}
                  />
             
              </Link>
              <figcaption>{watch.series}</figcaption>
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
    const db = client.db('apple');

    const data = await db
      .collection('listwatch')
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
