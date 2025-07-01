import { ContactSection } from "@/features/home/components/contact-section";

export function ContactPage() {
  const contactData = {
    manager: "Brian",
    phone: "08123456789",
  };

  return (
    <div className="w-full">
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team. We`re here to help you start your
              healthy eating journey.
            </p>
          </header>

          <section className="w-full">
            <article className="w-full">
              <ContactSection data={contactData} />
            </article>
          </section>

          {/* Additional Contact Information */}
          <section className="w-full mt-12">
            <article className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <header className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Business Hours
                </h2>
              </header>
              <div className="space-y-4 text-center">
                <div>
                  <p className="font-medium text-gray-900">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Saturday - Sunday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    We typically respond to inquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
