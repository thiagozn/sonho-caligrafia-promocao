import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana S., mãe do Lucas",
      text: "Meu filho odiava escrever, agora ele pede para fazer os exercícios! A letra dele melhorou 100% em poucos dias. Estou impressionada!",
      rating: 5,
    },
    {
      name: "Patricia R., mãe da Júlia",
      text: "Não acreditava que seria tão rápido! Em menos de uma semana a professora já elogiou a caligrafia da minha filha. Vale cada centavo!",
      rating: 5,
    },
    {
      name: "Fernanda M., mãe do Gabriel",
      text: "Finalmente achei algo que funciona! Meu filho tem 8 anos e sempre teve letra ilegível. Agora até os avós conseguem ler o que ele escreve!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            Veja o que os pais estão dizendo sobre o Método Caligrafia dos Sonhos:
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
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

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
