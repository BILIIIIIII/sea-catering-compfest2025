import { HeroSection } from "../components/hero-section";
import { FeaturesSection } from "../components/features-section";
import { ContactSection } from "../components/contact-section";

export function HomePage() {
  // Smart component - contains layout logic and data
  const heroData = {
    businessName: "SEA Catering",
    slogan: "Healthy Meals, Anytime, Anywhere",
    description:
      "Welcome to SEA Catering, your trusted partner for customizable healthy meal services with delivery all across Indonesia. We're committed to making nutritious eating convenient and accessible for everyone.",
  };

  const featuresData = [
    {
      id: 1,
      title: "Meal Customization",
      description:
        "Personalize your meals according to your dietary preferences and nutritional needs",
      icon: "🍽️",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver fresh, healthy meals to major cities across Indonesia",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Nutritional Information",
      description:
        "Get detailed nutritional information for every meal to track your health goals",
      icon: "📊",
    },
    {
      id: 4,
      title: "Fresh Ingredients",
      description:
        "We use only the freshest, locally-sourced ingredients for optimal taste and nutrition",
      icon: "🥬",
    },
  ];

  const contactData = {
    manager: "Brian",
    phone: "08123456789",
  };

  return (
    <div className="w-full">
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
          {/* Hero Section */}
          <section className="w-full">
            <article className="w-full">
              <HeroSection data={heroData} />
            </article>
          </section>

          {/* Features Section */}
          <section className="w-full">
            <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <FeaturesSection features={featuresData} />
            </article>
          </section>

          {/* Contact Section */}
          <section className="w-full">
            <article className="w-full">
              <ContactSection data={contactData} />
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
