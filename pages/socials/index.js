import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  return (
    <Layout pageName="Socials" pageDescription="Socials">
      <div className="p-10 bg-white">
        <h1 className="text-4xl tracking-widest mx-auto flex justify-center text-center mb-10">
          Socials
        </h1>

        <section className="flex justify-center gap-4">
          <a
            href="https://www.youtube.com/channel/UCON9Vw6MI5RFLYiNWqgjCUw"
            className="w-20"
          >
            <Image
              src="/images/socials/youtube.png"
              alt="Youtube"
              height={200}
              width={200}
            />
          </a>

          <a
            href="https://www.tiktok.com/@lookmanlookrepair?lang=en"
            className="w-20"
          >
            <Image
              src="/images/socials/tiktok.png"
              alt="TikTok"
              height={200}
              width={200}
            />
          </a>

          <a
            href="https://www.instagram.com/lookmanlookrepair/"
            className="w-20"
          >
            <Image
              src="/images/socials/instagram.png"
              alt="Instagram"
              height={200}
              width={200}
            />
          </a>

          <a href="https://twitter.com/lmlrepair" className="w-20">
            <Image
              src="/images/socials/twitter.png"
              alt="Twitter"
              height={200}
              width={200}
            />
          </a>

          <a
            href="https://www.snapchat.com/add/lookmanlookrepair"
            className="w-20"
          >
            <Image
              src="/images/socials/snapchat.png"
              alt="Snapchat"
              height={200}
              width={200}
            />
          </a>
        </section>
      </div>
    </Layout>
  );
}
