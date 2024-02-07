import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Accessories() {
  return (
    <Layout pageName="Accessories Page" Description="Accessories Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl  mb-10">Accessories </h1>

          <article className="grid gap-5 justify-center text-center p-10">
            <figure className="border-4 border-black p-5">
              <Link href="/products/accessories/cases">
                <Image
                  src="/images/products/accessories/cases.png"
                  alt="Cases"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Cases</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/accessories/screenprotectors">
                <Image
                  src="/images/products/accessories/screenprotectors.png"
                  alt="Screen Protectors"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Screen Protectors</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/accessories/chargers">
                <Image
                  src="/images/products/accessories/chargers.png"
                  alt="chargers"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Chargers</figcaption>
            </figure>
          </article>
        </section>
      </main>
    </Layout>
  );
}
