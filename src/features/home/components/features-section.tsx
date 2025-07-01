interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  // Dumb component - only maps through features data
  return (
    <>
      <div className="sm:col-span-2 mb-8">
        <header className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Key Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover what makes SEA Catering the perfect choice for your healthy
            lifestyle
          </p>
        </header>
      </div>

      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </>
  );
}

interface FeatureCardProps {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-2xl sm:text-3xl">{feature.icon}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
