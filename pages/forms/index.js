import Layout from "../../components/layout";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Forms() {
  return (
    <Layout pageName="Forms" Description="Forms">
      <div className="flex flex-col justify-center items-center p-5 bg-white">
        <h1 className="text-4xl  tracking-widest">Forms</h1>
        <p className="text-md ">Fill Out The General Release Form </p>

        <iframe
          src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCZDIUpECByylXGUQ2msEJNmh-204QL0yZ8wL6ikBfTgk5uUBSnaaxCkzHG8iLfGMw*"
          title="General Release Form For Customers"
          height="1000px"
          className="w-full mt-5"
        />
      </div>
    </Layout>
  );
}
