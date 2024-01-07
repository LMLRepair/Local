import Image from 'next/image';
import Layout from '../../../components/layout';
import Link from 'next/link';

export default function Apple() {
  const micros = [
    {
      category: 'Surface Pro',
      href: 'surfacepro',
      src: 'surfacepro.png',
    },

    {
      category: 'Surface Book',
      href: 'surfacebook',
      src: 'surfacebook.png',
    },
    {
      category: 'Xbox',
      href: 'xbox',
      src: 'xbox.png',
    },
  ];
  return (
    <Layout pageName="Microsoft" Description="Microsoft Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Microsoft Repairs</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {micros.map((micro) => (
            <figure key={micro.index} className="border-4 border-black p-5">
              <Link href={'/services/microsoft/' + micro.href}>
                <a>
                  <Image
                    src={'/images/microsoft/' + micro.src}
                    alt={micro.series}
                    width={200}
                    height={200}
                  />
                </a>
              </Link>

              <figcaption>{micro.category}</figcaption>
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
