
const WarrantyPolicyComponent = () => {
    const warrantyPolicy = {
        coverage:
          "Our repair services are backed by a comprehensive warranty to ensure peace of mind for our customers.",
        duration:
          "We offer a 60-day warranty on all repairs performed by our technicians.",
        scope:
          "The warranty covers defects in parts and workmanship under normal use and conditions.",
        exclusions: [
          "New damage unrelated to the original repair.",
          "Lost or water-damaged devices.",
          "Issues caused by misuse, negligence, or unauthorized modifications.",
          "Repair attempts made by unauthorized third parties.",
        ],
        batteryWarranty:
          "Battery replacements are covered by a separate 6 month warranty policy.",
        claimsProcess:
          "Customers must present a valid proof of purchase or repair receipt to initiate a warranty claim. To claim warranty service, customers should contact or visit our repair center during business hours.",
        limitationOfLiability:
          "Our liability under this warranty is limited solely to the repair or replacement of defective parts or workmanship as outlined in this policy. We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our repair services.",
        modifications:
          "LML Repair reserves the right to modify or update this warranty policy at any time without prior notice. Any changes to the warranty policy will be effective immediately upon posting on our website or other communication channels.",
      };


    return (
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Warranty Policy</h2>
        <div className="mb-6">
          <p className="mb-2">{warrantyPolicy.coverage}</p>
          <p className="mb-2">{warrantyPolicy.duration}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Exclusions:</h3>
          <ul className="list-disc list-inside">
            {warrantyPolicy.exclusions.map((exclusion, index) => (
              <li key={index} className="mb-1">{exclusion}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <p className="mb-2">{warrantyPolicy.batteryWarranty}</p>
        </div>
        <div className="mb-6">
          <p className="mb-2">{warrantyPolicy.claimsProcess}</p>
        </div>
        <div className="mb-6">
          <p className="mb-2">{warrantyPolicy.limitationOfLiability}</p>
        </div>
        <div>
          <p>{warrantyPolicy.modifications}</p>
        </div>
      </div>
    );
  };

export default WarrantyPolicyComponent;
