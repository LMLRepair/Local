import Image from 'next/image';
import Layout from '../../../../../components/layout';
import Link from 'next/link';
import clientPromise from '../../../../../lib/mongodb';

export default function surfacebook({data}) {
  return (
    <Layout
      pageName="Surface Book Series"
      Description="Surface Book Series Page"
    >
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Surface Book Series</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((surfacebook) => (
            <figure
              key={surfacebook.index}
              className="border-4 border-black p-5 w-48 flex flex-col justify-center items-center "
            >
              <Link
                href={'/services/repairs/microsoft/surfacebook/' + surfacebook.url}
              >
                
                  <Image
                    src={'/images/services/repairs/microsoft/surfacebook/' + surfacebook.image}
                    alt={surfacebook.series}
                    width={400}
                    height={200}
                  />
                
              </Link>
              <figcaption>{surfacebook.series}</figcaption>
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
      .collection('listsurfacebook')
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
