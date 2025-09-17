import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Qicky made getting a loan incredibly easy and fast. The process was seamless, and I got the funds I needed within hours. Highly recommended!",
      name: "Sarah J.",
      rating: 5,
    },
    {
      quote: "I was impressed by the transparency and competitive rates. No hidden fees, just straightforward service. Qicky is my go-to for quick financial needs.",
      name: "Michael R.",
      rating: 5,
    },
    {
      quote: "The flexible repayment options were a lifesaver. Qicky truly understands customer needs and provides solutions that work. Excellent experience!",
      name: "Emily C.",
      rating: 4,
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-qicky-dark text-qicky-text">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          What Our <span className="bg-gradient-to-r from-qicky-blue to-qicky-lightblue text-transparent bg-clip-text">Customers Say</span>
        </h2>
        <p className="text-lg text-qicky-textmuted mb-12 max-w-3xl mx-auto">
          Don't just take our word for it. Hear from our satisfied customers who have experienced the Qicky difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-dark-card border border-qicky-blue/30 p-6 rounded-xl shadow-lg text-qicky-text text-left">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-qicky-pink' : 'text-qicky-textmuted opacity-50'} fill-current`}
                  />
                ))}
              </div>
              <p className="text-base text-qicky-text mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-qicky-lightblue">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;