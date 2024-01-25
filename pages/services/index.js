import Image from 'next/image';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Services</h1>
        </section>
        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4 border-black p-5">
            <Link href="/services/apple" >
            
                <Image
                  src="/images/brands/apple.png"
                  alt="Apple"
                  width={200}
                  height={200}
                />
         
            </Link>
            <figcaption>Apple</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/samsung">
          
                <Image
                  src="/images/brands/samsung.png"
                  alt="Samsung"
                  width={200}
                  height={200}
                />
       
            </Link>
            <figcaption>Samsung</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/google">
          
                <Image
                  src="/images/brands/google.png"
                  alt="Google"
                  width={200}
                  height={200}
                />
             
            </Link>
            <figcaption>Google</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/microsoft">
                              <Image
                  src="/images/brands/microsoft.png"
                  alt="microsoft"
                  width={200}
                  height={200}
                />
       
            </Link>
            <figcaption>Microsoft</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/oneplus">
          
                <Image
                  src="/images/brands/oneplus.png"
                  alt="Oneplus"
                  width={200}
                  height={200}
                />
         
            </Link>
            <figcaption>OnePlus</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/lg">
           
                <Image
                  src="/images/brands/lg.png"
                  alt="LG"
                  width={200}
                  height={200}
                />
              
            </Link>
            <figcaption>LG</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/sony">
            
                <Image
                  src="/images/brands/sony.png"
                  alt="sony"
                  width={200}
                  height={200}
                />
             
            </Link>
            <figcaption>Sony</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/nintendo">
            
                <Image
                  src="/images/brands/nintendo.png"
                  alt="nintendo"
                  width={200}
                  height={200}
                />
             
            </Link>
            <figcaption>Nintendo</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/motorola">
            
                <Image
                  src="/images/brands/motorola.png"
                  alt="motorola"
                  width={200}
                  height={200}
                />
           
            </Link>
            <figcaption>Motorola</figcaption>
          </figure>
        </article>
      </main>
    </Layout>
  );
}
