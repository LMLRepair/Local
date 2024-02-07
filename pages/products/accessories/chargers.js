import Layout from "../../../components/layout";
import Image from "next/image";

export default function ScreenProtectors() {
  return (
    <Layout pageName="Chargers" Description="Chargers">
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Chargers</h1>
          <Image
            src="/images/products/accessories/chargers.png"
            alt="unlocks"
            width={200}
            height={200}
          />
        </section>
        <article className="flex justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5 caption-top">
              Chargers
            </caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>iPhone Charger</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Android Charger</td>
                <td>$15</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
}
