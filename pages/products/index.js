import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";

export default function Products({ data }) {
  return (
    <Layout pageName="Products" Description="Products">
      <main className="p-5 bg-white mt-10 md:mt-20 mx-2 md:mx-4">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest text-yellow-300">
            Products{" "}
          </h1>
          <p className="text-md ">
            Select the product category you are interested in
          </p>

 redesigning
          <article className="flex flex-col md:flex-row flex-wrap gap-5 justify-center text-center p-10">
            <figure
              // key={product.index}
              className="bg-gray-100 rounded-lg p-5 flex flex-col justify-between gap-10"
            >
              <div className="w-52 h-44">
                <Link href={"/products/accessories"}>
                  <Image
                    src={"/images/products/iphone.png"}
                    alt="productname"

          <article className="grid gap-5 justify-center text-center p-10">
            {data.map((product) => (
              <figure key={product.index} className="border-4 border-black p-5">
                <Link href={"/products/" + product.url}>
                  <Image
                    src={"/images/products/" + product.image}
                    alt={product.name}
 main
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div>
                <figcaption>Accessories</figcaption>
              </div>
            </figure>
            <figure
              // key={product.index}
              className="bg-gray-100 rounded-lg p-5 flex flex-col justify-between gap-10"
            >
              <div className="w-52 h-44">
                <Link href={"/products/accessories"}>
                  <Image
                    src={"/images/products/mobile.png"}
                    alt="productname"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div>
                <figcaption>Accessories</figcaption>
              </div>
            </figure>
            <figure
              // key={product.index}
              className="bg-gray-100 rounded-lg p-5 flex flex-col justify-between gap-10"
            >
              <div className="w-52 h-44">
                <Link href={"/products/accessories"}>
                  <Image
                    src={"/images/products/iphone.png"}
                    alt="productname"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div>
                <figcaption>Accessories</figcaption>
              </div>
            </figure>
            <figure
              // key={product.index}
              className="bg-gray-100 rounded-lg p-5 flex flex-col justify-between gap-10"
            >
              <div className="w-52 h-44">
                <Link href={"/products/accessories"}>
                  <Image
                    src={"/images/products/mobile.png"}
                    alt="productname"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div>
                <figcaption>Accessories</figcaption>
              </div>
            </figure>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("product");
    console.log("Inside GetStaticProps" + db);

    const data = await db
      .collection("listproduct")
      .find({})
      .sort({ rank: 1 })
      .toArray();
    console.log("InsideGetStaticProps" + data);

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
    console.error(e);
  }
}
