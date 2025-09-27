"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Quote, Star, Heart, Scale, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
}

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  iconColor: string;
  valueColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, iconColor, valueColor }) => (
  <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
    <div className={cn("p-3 rounded-full mb-4", iconColor)}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-base font-medium text-fintech-text-muted mb-2">{title}</h3>
    <p className={cn("text-3xl font-bold", valueColor)}>{value}</p>
  </Card>
);

const MemberTestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials: Testimonial[] = [
    {
      quote: "The home loan process was transparent and hassle-free. The representatives were extremely helpful in guiding me through all the paperwork and requirements.",
      name: "Vikram Mehta",
      title: "Healthcare Professional",
      location: "Chennai",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop", // Placeholder image
      rating: 5,
    },
    {
      quote: "Qicky made getting a loan incredibly easy and fast. The process was seamless, and I got the funds I needed within hours. Highly recommended!",
      name: "Sarah J.",
      title: "Software Engineer",
      location: "Bengaluru",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      rating: 5,
    },
    {
      quote: "I was impressed by the transparency and competitive rates. No hidden fees, just straightforward service. Qicky is my go-to for quick financial needs.",
      name: "Michael R.",
      title: "Small Business Owner",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070acf7?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Heart,
      title: "Happy Users",
      value: "10,000+",
      valueColor: "text-fintech-blue-accent",
      iconColor: "bg-fintech-blue-accent/20",
    },
    {
      icon: Star,
      title: "Avg. Rating",
      value: "4.8/5",
      valueColor: "text-fintech-gradient-pink-start",
      iconColor: "bg-fintech-gradient-purple-start/20",
    },
    {
      icon: Scale, // Using Scale for loan volume
      title: "Loan Volume",
      value: "₹500Cr+",
      valueColor: "text-fintech-gradient-pink-start",
      iconColor: "bg-fintech-gradient-pink-start/20",
    },
    {
      icon: Clock,
      title: "Avg. Approval Time",
      value: "5 mins",
      valueColor: "text-fintech-blue-accent",
      iconColor: "bg-fintech-blue-accent/20",
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6 md:px-12 lg:px-24 bg-fintech-main-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Testimonial Carousel */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            What Our <span className="bg-gradient-to-r from-fintech-button-primary-gradient-start to-fintech-button-primary-gradient-end text-transparent bg-clip-text">Members</span> Say
          </h2>
          <p className="text-lg text-fintech-text-muted mb-12 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Hear from real customers about their experience with Qicky's instant loan services. Their stories inspire us to keep improving.
          </p>

          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {testimonials.map((testimonial, index) => (
                  <div className="flex-none w-full pl-4" key={index}>
                    <Card className="bg-fintech-simulator-card-bg border border-fintech-border-light p-8 rounded-2xl shadow-lg text-white text-left">
                      <Quote className="h-16 w-16 text-fintech-blue-accent/20 mb-6" />
                      <p className="text-xl font-medium mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover mr-4" width={48} height={48} loading="lazy" /> {/* Added width/height and lazy loading */}
                        <div>
                          <p className="font-semibold text-lg text-fintech-blue-accent">{testimonial.name}</p>
                          <p className="text-sm text-fintech-text-muted">{testimonial.title} • {testimonial.location}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-fintech-star-yellow fill-current' : 'text-fintech-text-muted opacity-50'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 px-4">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      emblaApi && index === emblaApi.selectedScrollSnap()
                        ? "bg-fintech-blue-accent w-6"
                        : "bg-fintech-text-muted opacity-50"
                    )}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={scrollPrev} className="text-fintech-text-muted hover:bg-fintech-blue-soft/10 rounded-full">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={scrollNext} className="text-fintech-text-muted hover:bg-fintech-blue-soft/10 rounded-full">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberTestimonialsSection;