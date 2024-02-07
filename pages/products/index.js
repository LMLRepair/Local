import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  return (
    <Layout pageName="Products Page" Description="Products Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Products </h1>
          <p className="text-md ">Select the product category you are interested in</p>

          <article className="grid gap-5 justify-center text-center p-10">
            <figure className="border-4 border-black p-5">
              <Link href="/products/accessories">
                <Image
                  src="/images/products/accessories.png"
                  alt="Accessories"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Accessories</figcaption>
            </figure>
       {/*
            <figure className="border-4 border-black p-5">
              <Link href="/products/devices">
                <Image
                  src="/images/products/devices.jpeg"
                  alt="Devices"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Devices</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/gadgets">
                <Image
                  src="/images/products/gadgets.jpeg"
                  alt="unlocks"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Gadgets</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/dyi">
                <Image
                  src="/images/products/dyi.jpeg"
                  alt="DYI"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>DYI Repairs</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/insurance">
                <Image
                  src="/images/products/insurance.jpeg"
                  alt="Insurance"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Insurance</figcaption>
            </figure>
*/}
          </article>
        </section>
      </main>
    </Layout>
  );
}
