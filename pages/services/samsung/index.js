import Image from "next/image";
import Layout from "../../../components/layout";
import Link from "next/link";

export default function Samsung() {
  const samsungs = [
    {
      category: "S Series",
      href: "galaxys",
      src: "galaxys.jpg",
    },
    {
      category: "Note Series",
      href: "galaxynote",
      src: "galaxynote.jpg",
    },
    {
      category: "A Series",
      href: "galaxya",
      src: "galaxya.jpg",
    },
  ];
  return (
    <Layout pageName="Samsung" Description="Samsung Repairs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl">Samsung Repairs</h1>
        </section>
        <article className="grid grid-cols-2 gap-10 content-center items-center text-center justify-items-center p-10">
          {samsungs.map((samsung) => (
            <figure key={samsung.index} className="border-4 border-black p-5">
              <Link href={"/services/samsung/" + samsung.href}>
                <Image
                  src={"/images/samsung/" + samsung.src}
                  alt={samsung.series}
                  width={200}
                  height={200}
                />
              </Link>

              <figcaption>{samsung.category}</figcaption>
            </figure>
          ))}
        </article>
        <b className="flex flex-col justify-center items-center p-5 bg-white">
          Cant find your device repair? Give us a call or text. We never charge
          for diagnostics.
        </b>
      </main>
    </Layout>
  );
}
