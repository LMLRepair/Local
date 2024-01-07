import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';

export default function AppleGuides() {
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
          <h1 className="text-3xl">Apple Repair Guides</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {apples.map((apple) => (
            <figure key={apple.index} className="border-4 border-black p-5">
              <Link href={'/services/apple/' + apple.href}>
                <a>
                  <Image
                    src={'/images/apple/' + apple.src}
                    alt={apple.series}
                    width={200}
                    height={200}
                  />
                </a>
              </Link>

              <figcaption>{apple.category}</figcaption>
            </figure>
          ))}
        </article>
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair guide? Send us an email.
        </b>
      </main>
    </Layout>
  );
}
