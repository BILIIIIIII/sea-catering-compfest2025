export function SubscriptionPage() {
  return (
    <div className="w-full">
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your perfect meal plan and start your healthy eating
              journey today.
            </p>
          </header>

          <section className="w-full">
            <article className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚧</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Coming Soon!
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Our subscription system is currently under development. This
                  feature will be available in Level 3.
                </p>
                <p className="text-sm text-gray-500">
                  In the meantime, feel free to explore our meal plans and
                  contact us for more information.
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
