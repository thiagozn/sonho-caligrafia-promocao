import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import feedback1 from "@/assets/feedback1.jpg";
import feedback2 from "@/assets/feedback2.jpg";
import feedback3 from "@/assets/feedback3.jpg";
import feedback4 from "@/assets/feedback4.jpg";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const feedbackImages = [
    { src: feedback1, alt: "Feedback de cliente 1" },
    { src: feedback2, alt: "Feedback de cliente 2" },
    { src: feedback3, alt: "Feedback de cliente 3" },
    { src: feedback4, alt: "Feedback de cliente 4" },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            Veja o que os pais estão dizendo sobre o Método Caligrafia dos Sonhos:
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {feedbackImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-12" />
              <CarouselNext className="right-2 md:-right-12" />
            </Carousel>

            <div className="flex justify-center gap-2 mt-6">
              {feedbackImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir para feedback ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
