import Image from 'next/image';
import Layout from '../../../components/layout';
import Link from 'next/link';

export default function Apple() {
  const apples = [
    {
      category: 'iPhone',
      href: 'iphone',
      src: 'iphone.jpeg',
    },

    {
      category: 'iPad',
      href: 'ipad',
      src: 'ipad.jpeg',
    },

    {
      category: 'Watch',
      href: 'watch',
      src: 'watch.jpg',
    },

    {
      category: 'MacBook',
      href: 'macbook',
      src: 'macbook.jpeg',
    },
  ];
  return (
    <Layout pageName="Apple" Description="Apple Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Apple Repairs</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {apples.map((apple) => (
            <figure key={apple.index} className="border-4 border-black p-5">
              <Link href={'/services/apple/' + apple.href}>
              
                  <Image
                    src={'/images/apple/' + apple.src}
                    alt={apple.series}
                    width={200}
                    height={200}
                  />
           
              </Link>

              <figcaption>{apple.category}</figcaption>
            </figure>
          ))}
        </article>
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair? Give us a call or text. We never charge
          for diagnostics.
        </b>
      </main>
    </Layout>
  );
}
