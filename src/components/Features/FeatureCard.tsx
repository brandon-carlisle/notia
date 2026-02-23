import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  text: string;
}

function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <div className="block h-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-4 text-5xl text-gray-900">{icon}</div>
      <p className="font-normal text-gray-700">{text}</p>
    </div>
  );
}

export default FeatureCard;
