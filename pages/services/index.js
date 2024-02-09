import Image from "next/image";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Services() {
  return (
    <Layout pageName="Services" Description="Services">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Services</h1>
          <p className="text-md ">Select the service category you are interested in</p>
       </section>
        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4 border-black p-5">
            <Link href="/services/repairs">
              <Image
                src="/images/services/repairs.png"
                alt="Repairs"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Repairs</figcaption>
          </figure>

          {/*

         <figure className="border-4 border-black p-5">
            <Link href="/services/devicebuybackandtradein">
              <Image
                src="/images/services/devicebuybackandtradein.png"
                alt="Device Buyback & Trade-In"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Device Buyback and Trade-In</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/software">
              <Image
                src="/images/services/software.png"
                alt="Software"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Software Solutions</figcaption>
          </figure>

        
          <figure className="border-4 border-black p-5">
            <Link href="/services/cleaning">
              <Image
                src="/images/services/cleaning.png"
                alt="Cleaning"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Device Cleaning</figcaption>
          </figure>

         
       <figure className="border-4 border-black p-5">
            <Link href="/services/diagnostics">
              <Image
                src="/images/services/diagnostics.png"
                alt="Diagnostics"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Diagnostics</figcaption>
          </figure>






        <figure className="border-4 border-black p-5">
            <Link href="/services/unlocks">
              <Image
                src="/images/services/unlocks.png"
                alt="unlocks"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Unlocks</figcaption>
          </figure>



  <figure className="border-4 border-black p-5">
            <Link href="/services/customizations">
              <Image
                src="/images/services/customizations.png"
                alt="Customizations"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Customizations</figcaption>
          </figure>

*/}
        </article>
      </main>
    </Layout>
  );
}
