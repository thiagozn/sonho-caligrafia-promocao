import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-handwriting font-bold">Caligrafia dos Sonhos</h3>
            <p className="text-white/80 text-sm">© 2025 - Todos os direitos reservados</p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 text-center text-sm text-white/70 leading-relaxed max-w-4xl mx-auto">
            <p>
              Todos os direitos reservados - Este material é protegido por direitos autorais com
              registro no INPI e Biblioteca Nacional. Qualquer reprodução, distribuição ou
              comercialização não autorizada constitui violação dos direitos autorais e está
              sujeita às medidas civis e criminais previstas na Lei nº 9.610/98
            </p>
          </div>

          <div className="text-center">
            <p className="flex items-center justify-center gap-2 text-white/90">
              Feito com <Heart className="h-4 w-4 fill-red-400 text-red-400" /> para ajudar você a melhorar sua escrita
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
