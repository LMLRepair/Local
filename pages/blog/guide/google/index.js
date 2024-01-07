import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';

export default function GoogleRepairGuides() {
  const googles = [
    {
      category: 'Pixel',
      href: 'pixel',
      src: 'pixel.jpg',
    },
  ];
  return (
    <Layout pageName="Google" Description="Google Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Google Repair Guides</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {googles.map((google) => (
            <figure key={google.index} className="border-4 border-black p-5">
              <Link href={'/services/google/' + google.href}>
                <a>
                  <Image
                    src={'/images/google/' + google.src}
                    alt={google.series}
                    width={200}
                    height={200}
                  />
                </a>
              </Link>

              <figcaption>{google.category}</figcaption>
            </figure>
          ))}
        </article>
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair? Send us an email.
        </b>
      </main>
    </Layout>
  );
}
