import { useState, useEffect } from "react";
import exerciseExample from "@/assets/exercise-example.webp";
import exerciseBasic1 from "@/assets/exercise-basic-1.webp";
import exerciseBasic2 from "@/assets/exercise-basic-2.webp";
import exerciseBasic3 from "@/assets/exercise-basic-3.webp";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ExercisePreview = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const exercises = [
    { src: exerciseExample, alt: "Exemplo de exercícios de caligrafia" },
    { src: exerciseBasic1, alt: "Exercícios básicos de caligrafia - Padrões" },
    { src: exerciseBasic2, alt: "Exercícios básicos de caligrafia - Letras" },
    { src: exerciseBasic3, alt: "Exercícios básicos de caligrafia - Pontilhados" },
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Veja como são os exercícios:
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              São 5 módulos com mais de 300 páginas para melhorar o desempenho cognitivo e a escrita!
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {exercises.map((exercise, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] border border-border">
                      <img
                        src={exercise.src}
                        alt={exercise.alt}
                        className="w-full rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur-sm hover:bg-background" />
              <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur-sm hover:bg-background" />
            </Carousel>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center px-2">
            <Button
              size="xl"
              variant="gradient"
              className="w-full max-w-md text-sm sm:text-base md:text-lg font-bold py-5 md:py-6"
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO VER TODOS OS EXERCÍCIOS!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExercisePreview;
