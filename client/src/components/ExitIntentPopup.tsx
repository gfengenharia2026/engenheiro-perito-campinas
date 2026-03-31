import { X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const whatsappUrl = 'https://wa.me/5519989045748?text=Olá%20Eng.%20Gustavo,%20gostaria%20de%20agendar%20uma%20vistoria%20técnica.';

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar se o mouse saiu pela parte superior (sinal de saída)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Esconder pop-up após 10 segundos
        setTimeout(() => setIsVisible(false), 10000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-bounce">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-lg relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-white hover:bg-white/20 p-1 rounded"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold mb-2">Espera aí! 👋</h2>
          <p className="text-blue-100">Não saia sem falar com nosso engenheiro perito</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 font-semibold mb-3">
              ✅ Resposta em até 2 horas
            </p>
            <p className="text-gray-700 font-semibold mb-3">
              ✅ Mais de 15.000 laudos realizados
            </p>
            <p className="text-gray-700 font-semibold mb-3">
              ✅ Atendimento em Campinas e região
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
            <p className="text-orange-900 font-bold text-sm">
              🎁 Primeira consulta gratuita via WhatsApp
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsVisible(false)}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold flex items-center justify-center gap-2 transition transform hover:scale-105"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp Agora
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full mt-3 text-gray-600 hover:text-gray-800 font-medium py-2 transition"
          >
            Continuar navegando
          </button>
        </div>
      </div>
    </div>
  );
}
