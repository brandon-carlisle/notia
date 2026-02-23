import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  text: string;
}

function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <div className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 text-4xl text-gray-900">{icon}</div>
      <p className="text-sm leading-6 text-gray-700">{text}</p>
    </div>
  );
}

export default FeatureCard;
