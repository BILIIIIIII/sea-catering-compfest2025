"use client";

interface MealPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface MealPlanCardProps {
  plan: MealPlan;
  onSeeMore: () => void;
}

export function MealPlanCard({ plan, onSeeMore }: MealPlanCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={plan.image || "/placeholder.svg"}
          alt={plan.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <header>
          <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {formatPrice(plan.price)}
          </p>
          <p className="text-sm text-gray-500">per meal</p>
        </header>

        <p className="text-gray-600 text-sm leading-relaxed">
          {plan.description}
        </p>

        <footer className="pt-2">
          <button
            onClick={onSeeMore}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            See More Details
          </button>
        </footer>
      </div>
    </div>
  );
}
