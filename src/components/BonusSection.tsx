import { Gift } from "lucide-react";
import bonusOracoes from "@/assets/bonus-oracoes.webp";

const BonusSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-lg)] border-4 border-secondary/30 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold mb-6">
              <Gift className="h-5 w-5" />
              <span>BÔNUS EXCLUSIVO</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-destructive">Comprando HOJE: Ganhe um Bônus Exclusivo!</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-8 text-center">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-6 md:p-8 mb-6">
                <img
                  src={bonusOracoes}
                  alt="Caderno de Caligrafia com Orações Bíblicas"
                  className="w-full max-w-md h-auto mx-auto rounded-lg shadow-lg object-contain"
                />
              </div>

              <p className="text-foreground text-lg md:text-xl mb-4 leading-relaxed">
                Ao adquirir o <strong>Caligrafia dos Sonhos</strong> hoje, você vai receber <strong>GRATUITAMENTE</strong> um <strong>Caderno de Caligrafia com Orações Bíblicas</strong> para complementar sua prática de forma ainda mais especial!
              </p>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                Este caderno contém orações selecionadas para você praticar sua caligrafia enquanto reflete sobre palavras de fé e inspiração.
              </p>

              <div className="space-y-2">
                <p className="text-muted-foreground line-through text-lg md:text-xl">
                  Valor de Mercado: R$49,90
                </p>
                <p className="text-success text-xl md:text-2xl font-bold">
                  Você vai receber de graça ao comprar o Caligrafia dos Sonhos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
