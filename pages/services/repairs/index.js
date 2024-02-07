import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";

export default function Repairs() {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Repairs</h1>
          <p className="text-md ">Select the device brand you'd like to fix:</p>
        </section>
        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/apple">
              <Image
                src="/images/services/repairs/apple.png"
                alt="Apple"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Apple</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/samsung">
              <Image
                src="/images/services/repairs/samsung.png"
                alt="Samsung"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Samsung</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/google">
              <Image
                src="/images/services/repairs/google.png"
                alt="Google"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Google</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/microsoft">
              <Image
                src="/images/services/repairs/microsoft.png"
                alt="microsoft"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Microsoft</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/oneplus">
              <Image
                src="/images/services/repairs/oneplus.png"
                alt="Oneplus"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>OnePlus</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/lg">
              <Image
                src="/images/services/repairs/lg.png"
                alt="LG"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>LG</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/sony">
              <Image
                src="/images/services/repairs/sony.png"
                alt="sony"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Sony</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/nintendo">
              <Image
                src="/images/services/repairs/nintendo.png"
                alt="nintendo"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Nintendo</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs/motorola">
              <Image
                src="/images/services/repairs/motorola.png"
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
