import Image from 'next/image';
import Layout from '../../../../components/layout';
import Link from 'next/link';

export default function Google() {
  const googles = [
    {
      category: 'Pixel',
      href: 'pixel',
      src: 'pixel.png',
    },
  ];
  return (
    <Layout pageName="Google" Description="Google Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Google Repairs</h1>
        </section>
        <article className=" flex flex-col justify-center items-center text-center  p-10">
          {googles.map((google) => (
            <figure key={google.index} className="border-4 border-black p-5">
              <Link href={'/services/repairs/google/' + google.href}>
               
                  <Image
                    src={'/images/services/repairs/google/' + google.src}
                    alt={google.series}
                    width={200}
                    height={200}
                  />
           
              </Link>

              <figcaption>{google.category}</figcaption>
            </figure>
          ))}
        </article>
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair? Give us a call or text. 
        </b>
      </main>
    </Layout>
  );
}
