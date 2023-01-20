function FeatureCard({ icon, text }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md h-full">
      <div className="text-5xl text-gray-900 mb-4">{icon}</div>
      <p className="font-normal text-gray-700">{text}</p>
    </div>
  );
}
export default FeatureCard;
