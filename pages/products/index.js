import Layout from '../../components/layout';

export default function Products() {
  return (
    <Layout pageName="Products Page" Description="Products Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl  mb-10">Products </h1>

          <iframe
            src="https://lml-repair1.square.site/"
            style={{border: 'none'}}
            aria-hidden="false"
            title="LML Repair Store"
            className="w-full h-screen mt-5"
          ></iframe>
        </section>
      </main>
    </Layout>
  );
}
