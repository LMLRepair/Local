import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';
import clientPromise from '../../../../lib/mongodb';

export default function note({data}) {
  return (
    <Layout pageName="Galaxy Note Series" Description="Galaxy Note Series Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Note Series</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {data.map((note) => (
            <figure key={note.index} className="border-4 border-black p-5">
              <Link href={'/services/samsung/galaxynote/' + note.href}>
             
                  <Image
                    src={'/images/samsung/galaxynote/' + note.src}
                    alt={note.series}
                    width={100}
                    height={120}
                  />
         
              </Link>
              <figcaption>{note.series}</figcaption>
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
    const db = client.db('samsung');

    const data = await db
      .collection('listgalaxynote')
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
