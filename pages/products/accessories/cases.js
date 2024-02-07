import Layout from "../../../components/layout";
import Image from "next/image";

export default function Cases() {
  return (
    <Layout pageName="Cases" Description="Cases">
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Cases</h1>
          <Image
            src="/images/products/accessories/cases.png"
            alt="unlocks"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">Cases</caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Clear Case</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Magnetic Case</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Silicon Case</td>
                <td>$20</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
}
