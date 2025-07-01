interface HeroData {
  businessName: string;
  slogan: string;
  description: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  // Dumb component - only renders data passed from smart component
  return (
    <header className="text-center space-y-6 sm:space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
          {data.businessName}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-green-600 font-medium">
          {data.slogan}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="pt-4">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full">
          <span className="text-2xl sm:text-3xl">🍃</span>
        </div>
      </div>
    </header>
  );
}
