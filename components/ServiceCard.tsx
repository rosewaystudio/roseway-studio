interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

export default function ServiceCard({ title, description, features, pricing }: ServiceCardProps) {
  return (
    <div className="bg-white border-l-4 border-teal p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg 
              className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-6 border-t border-gray-100">
        <p className="text-2xl font-bold text-navy">{pricing}</p>
      </div>
    </div>
  );
}