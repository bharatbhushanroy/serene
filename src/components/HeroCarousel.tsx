"use client";

import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlide from './HeroSlide'; // Import the new HeroSlide component
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
  isMobile: boolean; // Add isMobile prop
}

const heroSlidesData = [
  {
    badgeText: "Instant Loans",
    titlePart1: "Get",
    gradientWord1: "Instant Loans",
    titlePart2: "with",
    gradientWord2: "Quick Approvals",
    subtitle: "Apply for a loan in minutes and get approved instantly. No hidden fees, no complex paperwork.",
    ctaButton1Text: "Apply Now",
    ctaButton1Link: "/apply-loan",
    ctaButton2Text: "Learn More",
    ctaButton2Link: "/about",
    features: [
      "Instant Personal loans up to ₹5,00,000",
      "Disbursement in 5 minutes",
      "100% Digital process with Zero paperwork",
    ],
    mockupComponent: 'MobileMockup',
    mockupProps: { className: "scale-90" },
  },
  {
    badgeText: "Credit Cards",
    titlePart1: "Unlock",
    gradientWord1: "Exclusive Rewards",
    titlePart2: "with Our Best",
    gradientWord2: "Credit Cards",
    subtitle: "Find the perfect credit card to match your lifestyle and financial goals. Compare features, rewards, and benefits.",
    ctaButton1Text: "Explore Cards",
    ctaButton1Link: "/products/credit-cards",
    ctaButton2Text: "Learn More",
    ctaButton2Link: "/products/credit-cards",
    features: [
      "Exclusive rewards & cashback",
      "Low interest rates",
      "Secure online transactions",
      "Global acceptance",
    ],
    mockupComponent: 'CreditCardMockup',
    mockupProps: {
      colorClass: "bg-fintech-card-mockup-purple",
      animationDelay: "delay-100",
      animationClass: "animate-card-float-1",
      cardNumber: "**** **** **** 1234",
      cardHolder: "JOHN DOE",
      rotation: "rotate-3",
    },
  },
  {
    badgeText: "Financial Planning",
    titlePart1: "Achieve Your",
    gradientWord1: "Financial Goals",
    titlePart2: "with Smart",
    gradientWord2: "Planning",
    subtitle: "Take control of your money with our intuitive tools and expert advice. Budget, save, and invest with confidence.",
    ctaButton1Text: "Start Planning",
    ctaButton1Link: "/dashboard",
    ctaButton2Text: "Read Blog",
    ctaButton2Link: "/blog",
    features: [
      "Track income & expenses",
      "Set financial goals",
      "Budgeting tools",
      "Investment insights",
    ],
    mockupComponent: 'LoanApprovedMockup', // Reusing this mockup for a generic finance success visual
    mockupProps: {},
  },
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ isMobile }) => { // Accept isMobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlidesData.map((slide, index) => (
            <div className="flex-none w-full" key={index}>
              <HeroSlide {...slide} isMobile={isMobile} /> {/* Pass isMobile to HeroSlide */}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

      {/* Dots for navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === selectedIndex ? "bg-white w-6" : "bg-white/50"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;