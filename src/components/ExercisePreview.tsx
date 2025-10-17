import exerciseExample from "@/assets/exercise-example.webp";
import { Button } from "@/components/ui/button";

const ExercisePreview = () => {
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

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
            <img
              src={exerciseExample}
              alt="Exemplo de exercícios de caligrafia"
              className="w-full rounded-xl"
            />
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
