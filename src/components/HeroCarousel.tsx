import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CarouselSlideProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ icon: Icon, title, description, iconColor }) => (
  <Card className="w-full max-w-md bg-gradient-dark-card border border-qicky-border rounded-xl p-6 shadow-lg flex-shrink-0">
    <div className="flex items-center mb-4">
      <Icon className={cn("h-6 w-6 mr-3", iconColor)} />
      <h3 className="text-xl font-semibold text-qicky-text">{title}</h3>
    </div>
    <p className="text-qicky-textmuted mb-6">{description}</p>
    <div className="flex items-center justify-end mt-8">
      <Link to="/about">
        <Button variant="ghost" className="text-qicky-textmuted hover:text-qicky-purple hover:bg-qicky-purple/10 transition-colors">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </Card>
);

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      icon: Sparkles,
      title: "Competitive Rates",
      description: "Starting at just 9.99% per annum, tailored to your financial profile.",
      iconColor: "text-qicky-lightblue",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      description: "Your data is safe with us. Enjoy complete transparency with no hidden fees.",
      iconColor: "text-qicky-purple",
    },
    {
      icon: TrendingUp,
      title: "Flexible Repayments",
      description: "Choose a repayment plan that fits your budget and lifestyle, with options to adjust.",
      iconColor: "text-qicky-lightblue",
    },
  ];

  return (
    <div className="relative w-full max-w-md">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((slide, index) => (
            <div className="flex-none w-full pl-4" key={index}>
              <CarouselSlide {...slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                emblaApi && index === emblaApi.selectedScrollSnap()
                  ? "bg-qicky-purple"
                  : "bg-qicky-textmuted opacity-50"
              )}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="text-qicky-textmuted hover:bg-qicky-purple/10 rounded-full" onClick={scrollPrev}>
            <ArrowRight className="h-5 w-5 rotate-180" />
          </Button>
          <Button variant="ghost" size="icon" className="text-qicky-textmuted hover:bg-qicky-purple/10 rounded-full" onClick={scrollNext}>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;