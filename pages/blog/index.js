import Image from 'next/image';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function Blog() {
  const categories = [
    {
      category: 'Tech News',
      href: 'new',
      src: 'news.jpeg',
    },

    {
      category: 'Repair Guides',
      href: 'guide',
      src: 'guides.png',
    },

    {
      category: 'Product Reviews',
      href: 'review',
      src: 'reviews.png',
    },
  ];
  return (
    <Layout pageName="Blogs" Description="Blogs Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl ">Blogs</h1>
        </section>
        <article className="grid grid-row-3 gap-10 content-center items-center text-center justify-items-center p-10">
          {categories.map((category) => (
            <figure key={category.index} className="border-4 border-black p-5">
              <Link href={'/blog/' + category.href}>
                <a>
                  <Image
                    src={'/images/blog/' + category.src}
                    alt={category.series}
                    width={200}
                    height={200}
                  />
                </a>
              </Link>

              <figcaption>{category.category}</figcaption>
            </figure>
          ))}
        </article>
      </main>
    </Layout>
  );
}
