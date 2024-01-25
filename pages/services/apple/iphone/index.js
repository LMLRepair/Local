import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';
import clientPromise from '../../../../lib/mongodb';

export default function Iphones({data}) {
  console.log("Here is the Data" + data);
  return (
    <Layout pageName="IPhone Series" Description="IPhone Series Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Iphone Series</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((iphone) => (
            <figure key={iphone.index} className="border-4 border-black p-5">
              <Link href={'/services/apple/iphone/' + iphone.href}>
           
                  <Image
                    src={'/images/apple/iphone/' + iphone.src}
                    alt={iphone.series}
                    width={200}
                    height={200}
                  />
           
              </Link>
              <figcaption>{iphone.series}</figcaption>
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
    console.log("Inside GetStaticProps" + db);

    const data = await db
      .collection('listiphone')
      .find({})
      .sort({rank: -1})
      .toArray();
      console.log("InsideGetStaticProps" + data);

    return {
      props: {data: JSON.parse(JSON.stringify(data))},
    };
  } catch (e) {
    console.error(e);
  }
}
