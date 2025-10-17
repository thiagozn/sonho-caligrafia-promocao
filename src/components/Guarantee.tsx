import { Shield, Clock, Mail, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  const guarantees = [
    {
      icon: Clock,
      iconColor: "text-blue-500",
      title: "Garantia de 7 dias",
      description: "Satisfação garantida ou seu dinheiro de volta em até 7 dias.",
    },
    {
      icon: Mail,
      iconColor: "text-blue-500",
      title: "Acesso imediato via WhatsApp e e-mail",
      description: "Após a compra, você receberá acesso imediato ao conteúdo digital direto no WhatsApp e e-mail.",
    },
    {
      icon: CreditCard,
      iconColor: "text-cyan-500",
      title: "Pagamento por Pix ou cartão",
      description: "Escolha a forma de pagamento que for mais conveniente para você.",
    },
    {
      icon: Shield,
      iconColor: "text-orange-500",
      title: "Compra protegida com total segurança",
      description: "Seus dados estão protegidos por criptografia avançada.",
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
              Compra 100% Segura!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Garantimos sua total segurança e satisfação na compra
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-border text-center"
                >
                  <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className={`h-8 w-8 ${guarantee.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{guarantee.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-br from-success/10 to-success/5 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-success/30 mx-2 sm:mx-0 shadow-[var(--shadow-lg)] max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-success/20 w-20 h-20 rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-success" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Garantia Incondicional de 7 Dias (Risco Zero!)
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Sua satisfação é nossa única prioridade. Se, por qualquer motivo, você ou seu filho não amarem o material, basta nos enviar um único e-mail dentro de 7 dias e nós devolveremos <strong className="text-success">100% do seu investimento</strong>. Sem perguntas, sem burocracia e a gente continua amigo. <strong className="text-foreground">O risco é todo nosso.</strong>
            </p>
            <Button
              size="xl"
              variant="success"
              className="w-full text-sm sm:text-base md:text-lg py-5 md:py-6"
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
