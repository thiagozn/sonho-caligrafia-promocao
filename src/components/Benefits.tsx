import { Pen, Brain, Heart, Lightbulb, Smile } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Pen,
      title: "Escrita mais rápida e bonita",
      description: "Aprenda técnicas para tornar sua escrita mais ágil e esteticamente agradável.",
    },
    {
      icon: Brain,
      title: "Aumento da concentração",
      description: "Os exercícios de caligrafia ajudam a melhorar o foco e a concentração.",
    },
    {
      icon: Heart,
      title: "Coordenação motora aprimorada",
      description: "Desenvolva habilidades motoras finas essenciais para muitas atividades cotidianas.",
    },
    {
      icon: Lightbulb,
      title: "Aumento da capacidade de raciocínio",
      description: "Estimule conexões cerebrais importantes durante o processo de aprendizagem da caligrafia.",
    },
    {
      icon: Smile,
      title: "Melhoria na comunicação e autoestima",
      description: "Ganhe confiança com uma escrita mais clara e comunicação aprimorada.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
          Benefícios que você terá já na primeira semana:
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Transforme sua escrita e desenvolva habilidades essenciais com nosso método comprovado
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="bg-gradient-to-br from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
