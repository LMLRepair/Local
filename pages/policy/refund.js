
const NoRefundPolicyComponent = () => {
    const noRefundPolicy = {
        title: "No Refund Policy",
        description: "At LML Repair, we strive to provide high-quality repair services to our customers. However, due to the nature of our services and the potential for unforeseen circumstances, we have implemented a strict no refund policy. Please review the following terms and conditions:",
        terms: [
          "All sales are final. Once a repair service is completed and payment is processed, no refunds will be issued.",
          "We do not offer refunds or exchanges for change of mind or buyer's remorse.",
          "In the rare event that a repair service is found to be defective or unsatisfactory, we will make every effort to rectify the issue at no additional cost to the customer.",
          "Any disputes regarding the quality or outcome of a repair service should be brought to our attention immediately for resolution."
        ],
        disclaimer: "Please note that our no refund policy applies to all repair services provided by LML Repair. By agreeing to proceed with a repair service, customers acknowledge and accept these terms and conditions.",
        modification: "LML Repair reserves the right to modify or update this no refund policy at any time without prior notice. Any changes to the policy will be effective immediately upon posting on our website or other communication channels."
      };


      return (
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">{noRefundPolicy.title}</h2>
          <p className="mb-6">{noRefundPolicy.description}</p>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Terms:</h3>
            <ul className="list-disc list-inside">
              {noRefundPolicy.terms.map((term, index) => (
                <li key={index} className="mb-1">{term}</li>
              ))}
            </ul>
          </div>
          <p className="mb-6">{noRefundPolicy.disclaimer}</p>
          <p>{noRefundPolicy.modification}</p>
        </div>
      );
};

export default NoRefundPolicyComponent;
