import Layout from "../../../components/layout";
import Image from "next/image";

export default function Cleaning() {
  return (
    <Layout pageName="Cleaning" Description="Cleaning">
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Cleaning</h1>
          <Image
            src="/images/services/cleaning.png"
            alt="Cleaning"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              Device Cleaning
            </caption>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
                <th>Time Frame</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Phones</td>
                <td>$10</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td>Laptops</td>
                <td>$15</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>Watches</td>
                <td>$10</td>
                <td>5 min</td>
              </tr>
              <tr>
                <td>Tablets</td>
                <td>$10</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>Computers</td>
                <td>$15</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>Consoles</td>
                <td>$20</td>
                <td>20 min</td>
              </tr>
            </tbody>
          </table>
        </article>
    
      </main>
    </Layout>
  );
}
