import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "O Caligrafia dos Sonhos transformou a caligrafia do meu filho! Em apenas 5 dias, a letra dele ficou muito mais legível!",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Comprei para mim mesmo e estou impressionado com os resultados. Minha escrita melhorou significativamente em pouco tempo.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Material excelente! Minha filha está adorando praticar todos os dias. Já vejo uma grande diferença na coordenação motora dela.",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      text: "Método simples e eficaz. Recomendo para todos que querem melhorar a caligrafia de forma prática e divertida.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            Veja o que nossos alunos estão dizendo:
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-border relative"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed text-base md:text-lg">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-foreground">— {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Assista aos depoimentos em vídeo:
            </p>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Vídeo de depoimentos disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
