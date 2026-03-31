import { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PriceCalculator() {
  const [serviceType, setServiceType] = useState('vistoria');
  const [area, setArea] = useState(100);
  const [urgency, setUrgency] = useState('normal');

  const calculatePrice = () => {
    let price = 500; // Base

    // Por tipo de serviço
    switch (serviceType) {
      case 'vistoria':
        price = 500;
        break;
      case 'laudo':
        price = 1200;
        break;
      case 'pericia':
        price = 1500;
        break;
      case 'avaliacao':
        price = 1000;
        break;
      case 'inspecao':
        price = 800;
        break;
      default:
        price = 500;
    }

    // Por área (R$ 5 por m²)
    price += area * 5;

    // Por urgência
    if (urgency === 'urgente') {
      price *= 1.5;
    }

    return price;
  };

  const finalPrice = calculatePrice();

  const serviceDescriptions = {
    vistoria: 'Vistoria completa com registro fotográfico',
    laudo: 'Laudo técnico detalhado com diagnóstico',
    pericia: 'Perícia para processos judiciais',
    avaliacao: 'Avaliação conforme NBR 14653',
    inspecao: 'Inspeção predial conforme NBR 16747'
  };

  return (
    <section id="calculadora" className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="text-blue-900" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Calcule o Preço
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Ferramenta interativa para estimar o valor do seu serviço
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 shadow-lg space-y-8">
          {/* Tipo de Serviço */}
          <div>
            <label className="block font-bold text-gray-900 mb-3">
              1. Tipo de Serviço
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { value: 'vistoria', label: 'Vistoria de Imóvel' },
                { value: 'laudo', label: 'Laudo Técnico' },
                { value: 'pericia', label: 'Perícia Judicial' },
                { value: 'avaliacao', label: 'Avaliação de Imóvel' },
                { value: 'inspecao', label: 'Inspeção Predial' }
              ].map((option) => (
                <label key={option.value} className="flex items-center p-3 border-2 rounded-lg cursor-pointer transition hover:bg-blue-100" style={{
                  borderColor: serviceType === option.value ? '#1E3A8A' : '#E5E7EB',
                  backgroundColor: serviceType === option.value ? '#F0F9FF' : 'transparent'
                }}>
                  <input
                    type="radio"
                    name="serviceType"
                    value={option.value}
                    checked={serviceType === option.value}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-4 h-4 text-blue-900"
                  />
                  <span className="ml-3 font-medium text-gray-900">{option.label}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {serviceDescriptions[serviceType as keyof typeof serviceDescriptions]}
            </p>
          </div>

          {/* Área do Imóvel */}
          <div>
            <label className="block font-bold text-gray-900 mb-3">
              2. Área do Imóvel: <span className="text-blue-900">{area}m²</span>
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-900"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>50m²</span>
              <span>500m²</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Adicional: R$ 5,00 por m²
            </p>
          </div>

          {/* Urgência */}
          <div>
            <label className="block font-bold text-gray-900 mb-3">
              3. Urgência
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { value: 'normal', label: 'Normal (7 dias)', desc: 'Sem acréscimo' },
                { value: 'urgente', label: 'Urgente (24h)', desc: '+50% no valor' }
              ].map((option) => (
                <label key={option.value} className="flex items-center p-3 border-2 rounded-lg cursor-pointer transition hover:bg-blue-100" style={{
                  borderColor: urgency === option.value ? '#1E3A8A' : '#E5E7EB',
                  backgroundColor: urgency === option.value ? '#F0F9FF' : 'transparent'
                }}>
                  <input
                    type="radio"
                    name="urgency"
                    value={option.value}
                    checked={urgency === option.value}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-4 h-4 text-blue-900"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{option.label}</p>
                    <p className="text-xs text-gray-600">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Resultado */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 text-center shadow-lg">
            <p className="text-sm font-semibold mb-2 opacity-90">Preço Estimado</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign size={40} />
              <p className="text-5xl font-bold">
                {finalPrice.toLocaleString('pt-BR')}
              </p>
            </div>
            <p className="text-sm opacity-90 mb-4">
              *Preço pode variar conforme complexidade do caso
            </p>
            <div className="bg-white/20 rounded p-3 text-sm mb-4">
              <p>Serviço: {serviceDescriptions[serviceType as keyof typeof serviceDescriptions]}</p>
              <p>Área: {area}m² (+ R$ {(area * 5).toLocaleString('pt-BR')})</p>
              {urgency === 'urgente' && <p>Urgência: +50% ({(finalPrice * 0.5).toLocaleString('pt-BR')})</p>}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/5519989045748?text=Gostaria%20de%20agendar%20uma%20vistoria.%20Preço%20estimado:%20R$%20${finalPrice}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded font-bold text-center transition transform hover:scale-105"
            >
              Agendar Agora via WhatsApp
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('agendamento');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded font-bold transition"
            >
              Agendar via Calendly
            </button>
          </div>

          {/* Nota */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
            <p className="text-orange-900 font-semibold mb-1">💡 Dica:</p>
            <p className="text-orange-800 text-sm">
              Este é um cálculo estimado. Para um orçamento preciso, agende uma consulta gratuita com nosso engenheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
