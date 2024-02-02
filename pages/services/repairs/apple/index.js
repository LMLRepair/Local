import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';

export default function Apple() {
  const apples = [
    {
      category: 'iPhone',
      href: 'iphone',
      src: 'iphone.png',
    },

    {
      category: 'iPad',
      href: 'ipad',
      src: 'ipad.png',
    },

    {
      category: 'Watch',
      href: 'watch',
      src: 'watch.png',
    },

    {
      category: 'MacBook',
      href: 'macbook',
      src: 'macbook.png',
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
              <Link href={'/services/repairs/apple/' + apple.href}>
              
                  <Image
                    src={'/images/services/repairs/apple/' + apple.src}
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
