import Layout from "../../../components/layout";
import Image from "next/image";

export default function Backbacks() {
  return (
    <Layout
      pageName="Device Buyback & Trade-In"
      Description="Device Buyback & Trade-In"
    >
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Buybacks</h1>
          <Image
            src="/images/services/devicetradein.png"
            alt="Device Trade-In"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              Device Buybacks & Trade-In
            </caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Buybacks</td>
                <td>Call Us</td>
              </tr>
              <tr>
                <td>Trade-Ins</td>
                <td>Call Us</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
}
