import Layout from "../../../components/layout";
import Image from "next/image";

export default function devicebuybackandtradein() {
  return (
    <Layout
      pageName="Device Buyback and Trade-In"
      Description="Device Buyback and Trade-In"
    >
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Device Buyback and Trade-In</h1>
          <Image
            src="/images/services/devicebuybackandtradein.png"
            alt="Device Buyback and Trade-In"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              Device Buyback and Trade-In
            </caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
                <th>Time Frame</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>All Types</td>
                <td>???</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
}
