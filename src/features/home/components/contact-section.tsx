interface ContactData {
  manager: string;
  phone: string;
}

interface ContactSectionProps {
  data: ContactData;
}

export function ContactSection({ data }: ContactSectionProps) {
  // Dumb component - only renders contact data
  return (
    <footer className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8">
      <div className="text-center space-y-6">
        <header>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Ready to start your healthy eating journey? Contact us today!
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <ContactItem icon="👨‍💼" label="Manager" value={data.manager} />
            <ContactItem icon="📱" label="Phone" value={data.phone} />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-500">
            We`re here to help you achieve your health goals with delicious,
            nutritious meals.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
      <span className="text-xl">{icon}</span>
      <div className="text-left">
        <p className="text-xs sm:text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-sm sm:text-base text-gray-900 font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
}
