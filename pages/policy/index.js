import Layout from "../../components/layout";
import NoRefundPolicyComponent from "./refund.js";
import WarrantyPolicyComponent from "./warranty.js";

export default function Policy() {
  return (
    <Layout pageName="Policy" Description="Policy">
      <div className="flex flex-col justify-center items-center p-5 bg-white">
        <h1 className="text-4xl  tracking-widest">Policy</h1>
        <WarrantyPolicyComponent />
        <NoRefundPolicyComponent />
      </div>
    </Layout>
  );
}
