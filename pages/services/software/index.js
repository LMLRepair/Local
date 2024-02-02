import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";

export default function Software() {
  return (
    <Layout pageName="software" Description="software">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Software</h1>
        </section>
        <article className="grid gap-5 justify-center text-center p-10">
          <figure className="border-4 border-black p-5">
            <Link href="/services/software/datarecovery">
              <Image
                src="/images/services/software/datarecovery.png"
                alt="Data Recovery"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Data Recovery & Transfer</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/software/osinstallations">
              <Image
                src="/images/services/software/osinstallations.png"
                alt="OS Installations"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>OS Installations</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/software/softwaretroublshooting">
              <Image
                src="/images/services/software/softwaretroublshooting.png"
                alt="Software Troublshooting"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Software Troublshooting</figcaption>
          </figure>

          <figure className="border-4 border-black p-5">
            <Link href="/services/software/virusandmalwareremoval">
              <Image
                src="/images/services/software/virusandmalwareremoval.png"
                alt="virusandmalwareremoval"
                width={200}
                height={200}
              />
            </Link>
            <figcaption>Virus and Malware Removal</figcaption>
          </figure>
        </article>
      </main>
    </Layout>
  );
}
