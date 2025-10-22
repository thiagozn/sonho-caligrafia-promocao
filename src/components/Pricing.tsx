import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Combo +300 atividades caligrafia",
    "Módulo de coordenação motora",
    "Módulo de alfabeto cursivo",
    "Módulo de lettering",
    "Acesso imediato via WhatsApp e e-mail",
    "Garantia de 7 dias",
    "Suporte via WhatsApp",
  ];

  return (
    <section id="pricing" className="py-8 md:py-24 bg-gradient-to-br from-muted/30 to-background scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-secondary font-bold text-base sm:text-lg md:text-xl">OFERTA EXCLUSIVA DE LANÇAMENTO</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-2">
              Aproveite Nossa Oferta Exclusiva!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Garanta acesso ao método completo com desconto especial por tempo limitado
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-border max-w-3xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
              VEJA TUDO O QUE VOCÊ VAI RECEBER HOJE:
            </h3>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-base md:text-lg mb-1">Caderno de Caligrafia Infantil Completo</p>
                  <p className="text-muted-foreground text-sm">Valor normal: <span className="line-through">R$ 69,90</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-base md:text-lg mb-1">Caderno Bônus de Caligrafia para Adultos</p>
                  <p className="text-muted-foreground text-sm">Valor normal: <span className="line-through">R$ 28,00</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-base md:text-lg mb-1">Bônus Exclusivo: Caderno de Orações</p>
                  <p className="text-secondary font-semibold text-sm">Não está à venda</p>
                </div>
              </div>
              <div className="border-t-2 border-border pt-5 mt-6">
                <p className="text-xl md:text-2xl font-bold text-center text-foreground">
                  VALOR TOTAL: <span className="text-destructive line-through">R$ 97,90</span>
                </p>
              </div>
            </div>
          </div>

          <div id="checkout" className="relative px-2 sm:px-0 scroll-mt-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))] rounded-2xl md:rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-[var(--shadow-lg)] border-2 border-primary/20">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-block bg-secondary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-3 md:mb-4 animate-pulse">
                  🔥 MAIS VENDIDO
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-2">
                  Pacote Completo - Caligrafia dos Sonhos
                </h3>

                <div className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
                  <p className="text-destructive line-through text-base sm:text-lg md:text-xl font-semibold">De R$97,90</p>
                  <div className="flex items-center justify-center gap-1 md:gap-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-success">R$10</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-success">,00</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Pagamento via PIX</p>
                </div>

                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left max-w-md mx-auto">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3">
                      <div className="bg-success/10 rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                      </div>
                      <span className="text-success font-semibold text-xs sm:text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="xl"
                  variant="gradient"
                  className="w-full text-sm sm:text-base md:text-lg font-bold py-5 md:py-6"
                  onClick={() => window.open('https://www.ggcheckout.com/checkout/v2/uhau9HBJyikmsKZWG5Ti', '_blank')}
                >
                  ACESSAR AGORA
                </Button>

                <div className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span>🔒</span>
                  <span>Compra 100% segura e protegida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
