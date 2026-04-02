import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'vistoria',
    propertyType: 'residencial',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const createLeadMutation = trpc.crm.createLead.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Por favor, informe seu nome');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Por favor, informe um email válido');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      toast.error('Por favor, informe um telefone válido');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await createLeadMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType as 'vistoria' | 'laudo' | 'avaliacao' | 'inspecao' | 'pericia',
        propertyType: formData.propertyType as 'residencial' | 'comercial' | 'industrial',
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'vistoria',
        propertyType: 'residencial',
        message: '',
      });

      toast.success('Lead enviado com sucesso! Você receberá contato em breve.');

      // Redirecionar para WhatsApp após 3 segundos
      setTimeout(() => {
        window.location.href = `https://wa.me/5519989045748?text=Olá%20Eng.%20Gustavo,%20meu%20nome%20é%20${encodeURIComponent(formData.name)}%20e%20gostaria%20de%20agendar%20uma%20${formData.serviceType}.`;
      }, 2000);
    } catch (error) {
      console.error('[CRM] Lead creation failed:', error);
      toast.error('Erro ao enviar lead. Tente novamente ou use WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Lead Enviado com Sucesso! ✅</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Obrigado! Você será redirecionado para WhatsApp em alguns segundos para conversar diretamente com o Eng. Gustavo.
        </p>
        <a
          href={`https://wa.me/5519989045748?text=Olá%20Eng.%20Gustavo,%20meu%20nome%20é%20${encodeURIComponent(formData.name)}%20e%20gostaria%20de%20agendar%20uma%20${formData.serviceType}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition"
        >
          <MessageCircle size={20} />
          Abrir WhatsApp Agora
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Solicite sua Vistoria Técnica</h2>
        <p className="text-gray-600 text-lg">
          Preencha o formulário abaixo e receba uma resposta em até 2 horas
        </p>
      </div>

      <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Nome *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="João Silva"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joao@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Telefone (WhatsApp) *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(19) 98904-5748"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
              required
            />
          </div>

          {/* Tipo de Serviço */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Serviço *
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            >
              <option value="vistoria">Vistoria de Imóvel</option>
              <option value="laudo">Laudo Técnico de Patologias</option>
              <option value="avaliacao">Avaliação de Imóvel</option>
              <option value="inspecao">Inspeção Predial</option>
              <option value="pericia">Perícia de Engenharia</option>
            </select>
          </div>

          {/* Tipo de Imóvel */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Imóvel *
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
            >
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descreva sua Necessidade
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ex: Tenho infiltração na parede da sala e gostaria de um diagnóstico..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-900 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-blue-900 font-semibold">Resposta Rápida Garantida</p>
                <p className="text-sm text-blue-800">Você receberá contato em até 2 horas via WhatsApp ou email</p>
              </div>
            </div>
          </div>

          {/* Botão Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 font-bold text-lg rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                Enviando...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Enviar Solicitação
              </span>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Seus dados serão utilizados apenas para contato sobre sua solicitação
          </p>
        </form>
      </Card>
    </div>
  );
}
