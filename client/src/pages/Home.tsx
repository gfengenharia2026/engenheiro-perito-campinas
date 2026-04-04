import { Card } from '@/components/ui/card';
import { MessageCircle, CheckCircle2, Award, Briefcase, Users, FileText, Home as HomeIcon, Zap, AlertCircle, Scale, Building2, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CalendlyWidget from '@/components/CalendlyWidget';
import PriceCalculator from '@/components/PriceCalculator';
import CrispChat from '@/components/CrispChat';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import LeadForm from '@/components/LeadForm';
import { WHATSAPP_URL, PHONE_DISPLAY, PROFESSIONAL_NAME, CREA_NUMBER, YEARS_EXPERIENCE, TOTAL_REPORTS, REGION, RATING, REVIEW_COUNT, TOTAL_CLIENTS } from '@/lib/constants';
import RiskCalculator from '@/components/RiskCalculator';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/hero-engenheiro-YD5NWNMKezgrrJhjC8vjux.webp';
const SERVICOS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/servicos-background-cFUjx8bDgh9m4NPLSfybPN.webp';
const AUTORIDADE_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/autoridade-background-jPPZs4gbkdNba3Ypb6yR9U.webp';
const PROBLEMAS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/problemas-background-hUw6tV8zoisycwdh2NchXw.webp';

function CounterNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString('pt-BR')}</span>;
}

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-white">
      <CrispChat />
      <Header />

      {/* HERO SECTION */}
      <section id="inicio" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Perícias de Engenharia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Perícias e Vistorias Técnicas de Engenharia em Campinas e Região
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Engenheiro civil especialista em laudos técnicos, perícias judiciais e vistorias imobiliárias. Mais de {TOTAL_REPORTS.toLocaleString('pt-BR')} laudos realizados com precisão e confiabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
              <button onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition">
                Agendar Vistoria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-blue-900 text-white py-6">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <CounterNumber target={RATING} duration={2000} />
              </div>
              <p className="text-sm">⭐ {REVIEW_COUNT}+ avaliações</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CounterNumber target={TOTAL_CLIENTS} duration={2500} />+
              </div>
              <p className="text-sm">Clientes atendidos com sucesso</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CounterNumber target={YEARS_EXPERIENCE} duration={1500} />
              </div>
              <p className="text-sm">Anos de experiência</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Resposta em 2h</div>
              <p className="text-sm">Garantido via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section id="autoridade" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Por Que Confiar em Mim?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <Award className="text-blue-900 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Experiência Comprovada</h3>
              <p className="text-gray-600 text-sm">{YEARS_EXPERIENCE} anos de atuação em perícias e vistorias técnicas</p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <FileText className="text-orange-400 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 mb-2 text-lg">{TOTAL_REPORTS.toLocaleString('pt-BR')}+ Laudos</h3>
              <p className="text-gray-600 text-sm">Laudos técnicos realizados com precisão e confiabilidade</p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <Scale className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Perícias Judiciais</h3>
              <p className="text-gray-600 text-sm">Atuação em TJSP, TRT-15 e TRF-3 com credibilidade jurídica</p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <CheckCircle2 className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-blue-900 mb-2 text-lg">CREA-SP {CREA_NUMBER}</h3>
              <p className="text-gray-600 text-sm">Registro profissional ativo e regularizado</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CALCULADORA DE RISCO */}
      <section id="calculadora" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <RiskCalculator />
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Serviços Especializados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition">
              <Building2 className="text-blue-900 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Vistoria de Imóvel</h3>
              <p className="text-gray-700 text-sm">Laudo detalhado com registro fotográfico completo para locação ou compra</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition">
              <AlertCircle className="text-orange-600 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Laudo de Patologias</h3>
              <p className="text-gray-700 text-sm">Diagnóstico de infiltração, fissuras, umidade e vícios construtivos</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition">
              <TrendingUp className="text-green-600 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Avaliação de Imóvel</h3>
              <p className="text-gray-700 text-sm">Laudo técnico conforme NBR 14653 para fins de mercado</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition">
              <Zap className="text-purple-600 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Inspeção Predial</h3>
              <p className="text-gray-700 text-sm">Check-up técnico completo conforme NBR 16747</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition">
              <Scale className="text-red-600 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Perícia de Engenharia</h3>
              <p className="text-gray-700 text-sm">Laudos técnicos utilizados em processos judiciais</p>
            </Card>

            <Card className="p-6 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition">
              <Briefcase className="text-indigo-600 mb-4" size={28} />
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Assistência Técnica</h3>
              <p className="text-gray-700 text-sm">Suporte pericial para escritórios de advocacia e clientes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section id="problemas" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Problemas Que Resolvemos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Conflitos entre Locador e Locatário</h3>
                <p className="text-gray-600">Laudos que comprovam responsabilidades e danos</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Problemas de Infiltração ou Fissuras</h3>
                <p className="text-gray-600">Diagnóstico preciso da origem e solução</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Danos Estruturais</h3>
                <p className="text-gray-600">Avaliação técnica e recomendações de reparo</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Disputas Judiciais</h3>
                <p className="text-gray-600">Laudos com validade jurídica comprovada</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Avaliação de Valor de Mercado</h3>
                <p className="text-gray-600">Laudos conforme normas técnicas brasileiras</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Assistência Técnica Pericial</h3>
                <p className="text-gray-600">Suporte completo para processos judiciais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA TÉCNICA PARA ADVOGADOS */}
      <section id="assistencia" className="py-20 bg-blue-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Assistência Técnica para Advogados</h2>

          <div className="bg-white rounded-lg p-8 border-l-4 border-orange-400">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Ofereço assistência técnica pericial especializada para escritórios de advocacia, incluindo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <FileText className="text-orange-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Formulação de Quesitos</h4>
                  <p className="text-gray-600 text-sm">Orientação técnica para quesitos pertinentes</p>
                </div>
              </div>

              <div className="flex gap-3">
                <FileText className="text-orange-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Parecer Técnico</h4>
                  <p className="text-gray-600 text-sm">Análise técnica fundamentada para processos</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Users className="text-orange-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Acompanhamento Judicial</h4>
                  <p className="text-gray-600 text-sm">Suporte durante todo o processo pericial</p>
                </div>
              </div>

              <div className="flex gap-3">
                <AlertCircle className="text-orange-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Impugnação de Laudos</h4>
                  <p className="text-gray-600 text-sm">Análise crítica de laudos da parte contrária</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-[#0D3B66]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Sobre o Engenheiro</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <div className="flex justify-center order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/Gemini_Generated_Image_u4c3x6u4c3x6u4c3_5c3766c9.webp"
                alt="Eng. Gustavo Freitas"
                className="rounded-lg shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Texto */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-white mb-6">{PROFESSIONAL_NAME}</h3>
              <p className="text-gray-100 mb-4 leading-relaxed">
                Engenheiro Civil e Engenheiro de Segurança do Trabalho com {YEARS_EXPERIENCE} anos de experiência em engenharia diagnóstica, perícias técnicas e elaboração de laudos especializados.
              </p>
              <p className="text-gray-100 mb-4 leading-relaxed">
                Realizado mais de {TOTAL_REPORTS.toLocaleString('pt-BR')} laudos técnicos com precisão e confiabilidade, atuando em perícias judiciais e extrajudiciais nos tribunais TJSP, TRT-15 e TRF-3.
              </p>
              <p className="text-gray-100 leading-relaxed mb-6">
                Especialista em diagnóstico de patologias construtivas, avaliação de imóveis conforme NBR 14653, inspeção predial conforme NBR 16747 e assistência técnica pericial para processos judiciais.
              </p>
              
              <button className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0D3B66] mb-12 text-center">Credenciais Profissionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="text-xl font-bold text-[#0D3B66] mb-6">Qualificações</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Profissão</p>
                  <p className="font-bold text-[#0D3B66]">Engenheiro Civil e de Segurança do Trabalho</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">CREA-SP</p>
                  <p className="font-bold text-[#0D3B66]">{CREA_NUMBER}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Experiência</p>
                  <p className="font-bold text-[#0D3B66]">{YEARS_EXPERIENCE} anos</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Laudos Realizados</p>
                  <p className="font-bold text-[#0D3B66]">{TOTAL_REPORTS.toLocaleString('pt-BR')}+</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Atuação Geográfica</p>
                  <p className="font-bold text-[#0D3B66]">{REGION}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Avaliação</p>
                  <p className="font-bold text-[#0D3B66]">⭐ {RATING} ({REVIEW_COUNT}+ avaliações)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CALCULADORA DE PREÇOS */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <PriceCalculator />
        </div>
      </section>

      {/* AGENDAMENTO CALENDLY */}
      <section id="calendly" className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <CalendlyWidget />
        </div>
      </section>

      {/* FORMULÁRIO DE LEAD */}
      <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container max-w-4xl mx-auto px-4">
          <LeadForm />
        </div>
      </section>

      {/* INFORMAÇÕES DE CONTATO */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Outras Formas de Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-blue-900 mb-2 text-lg">WhatsApp</h4>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-bold text-lg">{PHONE_DISPLAY}</a>
              <p className="text-xs text-gray-600 mt-2">Resposta em até 2 horas</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-blue-900 mb-2 text-lg">CREA-SP</h4>
              <p className="text-blue-600 font-bold text-lg">{CREA_NUMBER}</p>
              <p className="text-xs text-gray-600 mt-2">Registro profissional</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition">
              <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold text-blue-900 mb-2 text-lg">Experiência</h4>
              <p className="text-orange-600 font-bold text-lg">{YEARS_EXPERIENCE} Anos</p>
              <p className="text-xs text-gray-600 mt-2">{TOTAL_REPORTS.toLocaleString('pt-BR')}+ laudos</p>
            </Card>

            <Card className="p-6 text-center border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition">
              <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-blue-900 mb-2 text-lg">Localização</h4>
              <p className="text-purple-600 font-bold text-lg">Campinas, SP</p>
              <p className="text-xs text-gray-600 mt-2">Região de Campinas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Blog Técnico</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Como Identificar Infiltração em Imóveis</h3>
              <p className="text-gray-600 mb-4 text-sm">Guia técnico sobre os principais sinais de infiltração e como diagnosticar problemas de umidade em construções.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">NBR 14653: Avaliação de Imóveis</h3>
              <p className="text-gray-600 mb-4 text-sm">Entenda a norma técnica brasileira para avaliação de propriedades e como ela garante precisão nos laudos.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Perícia Judicial: O Papel do Engenheiro</h3>
              <p className="text-gray-600 mb-4 text-sm">Saiba como a perícia técnica é fundamental em processos judiciais e como o engenheiro contribui para a decisão.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{PROFESSIONAL_NAME}</h4>
              <p className="text-gray-300 text-sm">Especialista em perícias de engenharia e vistorias técnicas de imóveis em Campinas e região.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#servicos" className="hover:text-white">Vistoria de Imóvel</a></li>
                <li><a href="#servicos" className="hover:text-white">Laudo Técnico</a></li>
                <li><a href="#servicos" className="hover:text-white">Perícia Judicial</a></li>
                <li><a href="#servicos" className="hover:text-white">Avaliação de Imóvel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#inicio" className="hover:text-white">Início</a></li>
                <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
                <li><a href="#contato" className="hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-sm text-gray-300 mb-2">WhatsApp: {PHONE_DISPLAY}</p>
              <p className="text-sm text-gray-300 mb-2">CREA-SP: {CREA_NUMBER}</p>
              <p className="text-sm text-gray-300">Campinas, SP</p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 {PROFESSIONAL_NAME}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
