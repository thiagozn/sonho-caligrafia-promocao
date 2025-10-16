import { Mail, Printer, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mail,
      title: "Receba Imediatamente",
      description: "Assim que concluir a compra, o material digital chega direto no seu WhatsApp e e-mail, de forma automática e instantânea.",
    },
    {
      icon: Printer,
      title: "Baixe & Imprima",
      description: "Baixe todos os materiais em PDF e imprima as páginas de forma rápida e prática.",
    },
    {
      icon: TrendingUp,
      title: "Pratique & Evolua",
      description: "Reserve de 10 a 30 minutos por dia, siga os exercícios e veja sua caligrafia ficar mais bonita e firme a cada traço.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            Veja como é Fácil e Prático:
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 border-primary/20 text-center"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mt-8 space-y-4">
                    <h3 className="font-bold text-xl text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
