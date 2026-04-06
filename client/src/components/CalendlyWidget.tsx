import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function CalendlyWidget() {
  useEffect(() => {
    // Carregar script do Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="agendamento" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-blue-900" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Agende Sua Vistoria
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Escolha o melhor horário para você. Resposta garantida em até 2 horas!
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gustavo-freitas/vistoria?hide_event_type_details=1&hide_gdpr_block=1&background_color=0d3b66"
            style={{ minWidth: '320px', height: '630px' }}
          />
        </div>

        {/* Fallback se Calendly não carregar */}
        <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-400 rounded">
          <p className="text-orange-900 font-semibold mb-2">
            ⚠️ Calendly não carregou?
          </p>
          <p className="text-orange-800 mb-4">
            Sem problema! Clique no botão WhatsApp abaixo e agende diretamente conosco. (Nota: Configure sua URL do Calendly em CalendlyWidget.tsx)
          </p>
          <a
            href="https://wa.me/5519989045748?text=Olá%20Eng.%20Gustavo,%20gostaria%20de%20agendar%20uma%20vistoria%20técnica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
