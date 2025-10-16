import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import productPreview from "@/assets/product-preview.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-8 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-primary font-handwriting text-xl md:text-3xl lg:text-4xl font-bold italic text-center lg:text-left">
                Caligrafia dos Sonhos
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center lg:text-left">
                <span className="text-secondary">TRANSFORME SUA CALIGRAFIA</span>{" "}
                <span className="text-foreground">EM APENAS 7 DIAS!</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center lg:text-left">
                Se você quer escrever melhor, bonito e com mais agilidade, o Método
                Caligrafia dos Sonhos é pra você! Para adultos e crianças!
              </p>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-success flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">+300 exercícios práticos</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-success flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Resultados visíveis em até 7 dias</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-success flex-shrink-0" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">Acesso via WhatsApp e e-mail</p>
              </div>
            </div>

            <Button
              size="lg"
              variant="gradient"
              className="w-full md:w-auto text-sm sm:text-base md:text-lg px-6 py-5 md:py-6"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO MELHORAR MINHA LETRA AGORA!
            </Button>
          </div>

          <div className="relative px-2 sm:px-0">
            <div className="bg-card rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 shadow-[var(--shadow-lg)] border border-border">
              <img 
                src={productPreview} 
                alt="Prévia dos cadernos e exercícios de caligrafia - Baixe pelo celular ou computador" 
                className="w-full rounded-lg object-contain max-h-[300px] sm:max-h-[400px] md:max-h-none mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
