import { Brain, Pen, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatYouLearn = () => {
  const modules = [
    {
      icon: Brain,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
      title: "Exercícios para coordenação motora",
      description: "Atividades especialmente desenvolvidas para aprimorar suas habilidades motoras finas, fundamentais para uma boa caligrafia.",
    },
    {
      icon: Pen,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      title: "Caligrafia prática com treino diário",
      description: "Rotinas de treino progressivas que garantem evolução constante na sua escrita, com exercícios simples e eficazes.",
    },
    {
      icon: BookOpen,
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50",
      title: "9 tipos de alfabetos para treino",
      description: "Aprenda diferentes estilos de escrita, desde a básica até estilos artísticos, ampliando seu repertório caligráfico.",
    },
    {
      icon: Sparkles,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
      title: "Técnicas de lettering",
      description: "Fundamentos de lettering para transformar sua escrita em verdadeiras obras de arte, com técnicas acessíveis para todos os níveis.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            O que você vai aprender com o Método Caligrafia dos Sonhos?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-border"
                >
                  <div className="flex gap-4">
                    <div className={`${module.bgColor} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-8 w-8 ${module.iconColor}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-foreground">{module.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="xl"
              variant="gradient"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO COMPRAR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
