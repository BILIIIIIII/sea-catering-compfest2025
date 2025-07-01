"use client";

import type React from "react";

import { useState } from "react";

interface Testimonial {
  id: number;
  customerName: string;
  message: string;
  rating: number;
  createdAt: Date;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8">
      <header className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Real experiences from our satisfied customers
        </p>
      </header>

      {/* Testimonial Carousel */}
      <div className="relative mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-green-600" : "bg-green-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Add Testimonial Button */}
      <div className="text-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          {showForm ? "Hide Form" : "Share Your Experience"}
        </button>
      </div>

      {/* Testimonial Form */}
      {showForm && (
        <div className="mt-8">
          <TestimonialForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <StarRating rating={testimonial.rating} />
      </div>
      <blockquote className="text-gray-700 text-lg italic">
        {testimonial.message}
      </blockquote>
      <footer className="text-gray-600">
        <cite className="font-medium not-italic">
          — {testimonial.customerName}
        </cite>
      </footer>
    </div>
  );
}

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

interface TestimonialFormProps {
  onClose: () => void;
}

function TestimonialForm({ onClose }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    message: "",
    rating: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show an alert (database integration in Level 3)
    alert(
      `Thank you ${formData.customerName}! Your testimonial has been submitted.`
    );
    setFormData({ customerName: "", message: "", rating: 5 });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Share Your Experience
      </h3>

      <div>
        <label
          htmlFor="customerName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Name *
        </label>
        <input
          type="text"
          id="customerName"
          required
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Review *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Tell us about your experience with SEA Catering..."
        />
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Rating *
        </label>
        <select
          id="rating"
          value={formData.rating}
          onChange={(e) =>
            setFormData({
              ...formData,
              rating: Number.parseInt(e.target.value),
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
          <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
          <option value={3}>⭐⭐⭐ (3 stars)</option>
          <option value={2}>⭐⭐ (2 stars)</option>
          <option value={1}>⭐ (1 star)</option>
        </select>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
        >
          Submit Review
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
