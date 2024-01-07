import Image from 'next/image';
import Layout from '../../../components/layout';
import Link from 'next/link';

export default function Guidess() {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Guides</h1>
        </section>
        <article className="grid gap-5 justify-center text-center p-10">
          <p>Select the brand device you are looking to repair. </p>

          <figure className="border-4 border-black p-5">
            <Link href="/blog/guide/apple">
              <a>
                <Image
                  src="/images/brands/apple.png"
                  alt="Apple"
                  width={200}
                  height={200}
                />
              </a>
            </Link>
            <figcaption>Apple</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/blog/guide/samsung">
              <a>
                <Image
                  src="/images/brands/samsung.png"
                  alt="Samsung"
                  width={200}
                  height={200}
                />
              </a>
            </Link>
            <figcaption>Samsung</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/blog/guide/google">
              <a>
                <Image
                  src="/images/brands/google.png"
                  alt="Google"
                  width={200}
                  height={200}
                />
              </a>
            </Link>
            <figcaption>Google</figcaption>
          </figure>
        </article>
      </main>
    </Layout>
  );
}
