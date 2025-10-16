import childWithBook from "@/assets/child-with-calligraphy-book.webp";
import { Sparkles } from "lucide-react";

const ChildrenSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full font-semibold">
            <Sparkles className="h-5 w-5" />
            <span>PREPARE SEU FILHO PARA UM FUTURO BRILHANTE!</span>
            <Sparkles className="h-5 w-5" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            PREPARE SEU FILHO PARA UM FUTURO BRILHANTE!
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O método é ideal tanto para adultos quanto para crianças que estão na fase de
            alfabetização e aprendendo a escrever, faça seu filho se destacar estimulando a
            escrita com diversão e confiança!
          </p>

          <div className="max-w-xs mx-auto">
            <img
              src={childWithBook}
              alt="Criança feliz segurando o caderno Método Caligrafia dos Sonhos"
              className="w-full rounded-2xl shadow-[var(--shadow-lg)] border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;
