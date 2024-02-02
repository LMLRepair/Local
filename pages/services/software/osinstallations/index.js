import Layout from "../../../../components/layout";
import Image from "next/image";

export default function Installations() {
  return (
    <Layout pageName="OS Installations" Description="OS Installations">
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">OS Installations</h1>
          <Image
            src="/images/services/software/osinstallations.png"
            alt="OS Installations"
            width={200}
            height={200}
          />
        </section>
        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
            OS Installations
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
                <td>Operating Systems</td>
                <td>??</td>
                <td>60 min</td>
              </tr>
       
             </tbody>
          </table>
        </article>
    
      </main>
    </Layout>
  );
}
