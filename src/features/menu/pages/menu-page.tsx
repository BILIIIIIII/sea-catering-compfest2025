"use client";

import { useState } from "react";
import { MealPlanCard } from "../components/meal-plan-card";
import { MealPlanModal } from "../components/meal-plan-modal";

interface MealPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export function MenuPage() {
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);

  const mealPlans: MealPlan[] = [
    {
      id: "diet-plan",
      name: "Diet Plan",
      price: 30000,
      description:
        "Perfect for weight management with balanced, low-calorie meals that don't compromise on taste.",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Low-calorie balanced meals",
        "Fresh vegetables and lean proteins",
        "Portion-controlled servings",
        "Weight management focused",
      ],
      nutritionalInfo: {
        calories: "300-400 per meal",
        protein: "25-30g",
        carbs: "30-40g",
        fat: "10-15g",
      },
    },
    {
      id: "protein-plan",
      name: "Protein Plan",
      price: 40000,
      description:
        "High-protein meals designed for active individuals and fitness enthusiasts.",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "High-protein content",
        "Muscle building support",
        "Post-workout recovery meals",
        "Premium protein sources",
      ],
      nutritionalInfo: {
        calories: "450-550 per meal",
        protein: "35-45g",
        carbs: "40-50g",
        fat: "15-20g",
      },
    },
    {
      id: "royal-plan",
      name: "Royal Plan",
      price: 60000,
      description:
        "Premium gourmet meals with the finest ingredients and sophisticated flavors.",
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Gourmet ingredients",
        "Chef-crafted recipes",
        "Premium presentation",
        "Luxury dining experience",
      ],
      nutritionalInfo: {
        calories: "500-650 per meal",
        protein: "30-40g",
        carbs: "45-60g",
        fat: "20-25g",
      },
    },
  ];

  const openModal = (plan: MealPlan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="w-full">
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Meal Plans
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted meal plans designed to meet your
              specific health and lifestyle goals.
            </p>
          </header>

          {/* Meal Plans Grid */}
          <section className="w-full">
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {mealPlans.map((plan) => (
                <MealPlanCard
                  key={plan.id}
                  plan={plan}
                  onSeeMore={() => openModal(plan)}
                />
              ))}
            </article>
          </section>
        </div>
      </main>

      {/* Modal */}
      {selectedPlan && (
        <MealPlanModal plan={selectedPlan} onClose={closeModal} />
      )}
    </div>
  );
}
