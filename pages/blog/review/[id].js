import Layout from '../../../components/layout';
import clientPromise from '../../../lib/mongodb';
import Image from 'next/image';

export default function Id({post}) {
  return (
    <Layout pageName={post[0].title} Description={post[0].description}>
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{post[0].title}</h1>
          <Image
            src={'/images/blog/' + post[0].src}
            alt={post[0].title}
            width={100}
            height={100}
          />
          <p className="border-black border-8 p-20">{post[0].text}</p>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db('blog');

  let data = await db.collection('listreview').find({}).toArray();
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
  const client = await clientPromise;
  const db = client.db('blog');

  let data = await db
    .collection('reviewpost')
    .find({href: params.id})
    .toArray();
  data = JSON.parse(JSON.stringify(data));
  console.log(data);

  return {
    props: {
      post: data,
    },
  };
}
