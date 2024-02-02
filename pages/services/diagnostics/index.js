import Layout from "../../../components/layout";
import Image from "next/image";

export default function Diagnostics() {
  return (
    <Layout pageName="Diagnostics" Description="Diagnostics">
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">Diagnostics</h1>
          <Image
            src="/images/services/diagnostics.png"
            alt="Diagnostics"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
            Diagnostics
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
                <td>$30</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Laptops</td>
                <td>$40</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>Watches</td>
                <td>$30</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Tablets</td>
                <td>$30</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>Computers</td>
                <td>$40</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>Consoles</td>
                <td>$40</td>
                <td>30 min</td>
              </tr>
            </tbody>
          </table>
        </article>
    
      </main>
    </Layout>
  );
}
