import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, CheckCircle2, Award, Briefcase, Users, FileText, Home as HomeIcon, Zap, AlertCircle, Scale, Building2, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CalendlyWidget from '@/components/CalendlyWidget';
import PriceCalculator from '@/components/PriceCalculator';
import CrispChat from '@/components/CrispChat';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/hero-engenheiro-YD5NWNMKezgrrJhjC8vjux.webp';
const SERVICOS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/servicos-background-cFUjx8bDgh9m4NPLSfybPN.webp';
const AUTORIDADE_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/autoridade-background-jPPZs4gbkdNba3Ypb6yR9U.webp';
const PROBLEMAS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663057289090/FfhZ2VxW9RDUmNFz5qwBY3/problemas-background-hUw6tV8zoisycwdh2NchXw.webp';

const whatsappUrl = 'https://wa.me/5519999999999?text=Olá%20Eng.%20Gustavo,%20gostaria%20de%20agendar%20uma%20vistoria%20técnica.';

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
  return (
    <div className="min-h-screen bg-white">
      <CrispChat />
      <Header />

      {/* HERO SECTION */}
      <section id="inicio" className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Perícias de Engenharia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10 flex items-center min-h-[600px]">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Perícias e Vistorias Técnicas de Engenharia em Campinas e Região
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Engenheiro civil especialista em laudos técnicos, perícias judiciais e vistorias imobiliárias. Mais de 15.000 laudos realizados com precisão e confiabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded font-bold text-lg transition flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
              <button onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded font-bold text-lg transition">
                Agendar Vistoria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">
                <CounterNumber target={15000} />+
              </div>
              <p className="text-gray-600 font-medium">Laudos Realizados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">
                <CounterNumber target={7} />
              </div>
              <p className="text-gray-600 font-medium">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">
                <CounterNumber target={3} />
              </div>
              <p className="text-gray-600 font-medium">Tribunais (TJSP, TRT-15, TRF-3)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">CREA</div>
              <p className="text-gray-600 font-medium">5071007855</p>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <Award className="text-blue-900 flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Engenheiro Registrado no CREA</h3>
                  <p className="text-gray-600">Atuação em perícias judiciais e extrajudiciais nos tribunais TJSP, TRT-15 e TRF-3.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="text-blue-900 flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Laudos Técnicos Precisos</h3>
                  <p className="text-gray-600">Mais de 15.000 laudos técnicos realizados com rigor metodológico e confiabilidade jurídica.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-blue-900 flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Atendimento Regional</h3>
                  <p className="text-gray-600">Campinas, Hortolândia, Sumaré, Paulínia, Valinhos e região com disponibilidade de agenda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Serviços Especializados</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Soluções completas em engenharia diagnóstica, perícias judiciais e vistorias técnicas de imóveis.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vistoria de Imóvel */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <HomeIcon className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Vistoria de Imóvel para Locação</h3>
              </div>
              <p className="text-gray-600">Laudo detalhado com registro fotográfico completo, identificando condições estruturais e funcionalidades do imóvel.</p>
            </Card>

            {/* Laudo de Patologias */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Laudo Técnico de Patologias</h3>
              </div>
              <p className="text-gray-600">Diagnóstico especializado de infiltração, fissuras, umidade, mofo e vícios construtivos com recomendações de solução.</p>
            </Card>

            {/* Avaliação de Imóveis */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Avaliação de Imóveis</h3>
              </div>
              <p className="text-gray-600">Laudo técnico conforme NBR 14653, determinando valor de mercado com metodologia científica e precisa.</p>
            </Card>

            {/* Inspeção Predial */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Inspeção Predial</h3>
              </div>
              <p className="text-gray-600">Check-up técnico completo conforme NBR 16747, avaliando estrutura, sistemas e segurança do imóvel.</p>
            </Card>

            {/* Perícia de Engenharia */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Perícia de Engenharia</h3>
              </div>
              <p className="text-gray-600">Laudos técnicos especializados para processos judiciais, com fundamentação científica e rigor metodológico.</p>
            </Card>

            {/* Assistência Técnica */}
            <Card className="p-6 hover:shadow-lg transition border-0 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-orange-400" size={28} />
                <h3 className="text-xl font-bold text-blue-900">Assistência Técnica Pericial</h3>
              </div>
              <p className="text-gray-600">Suporte especializado para escritórios de advocacia: formulação de quesitos, parecer técnico e acompanhamento.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Problemas que Resolvemos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Conflitos entre Locador e Locatário</h3>
                <p className="text-gray-600">Laudos técnicos imparciais para resolver disputas sobre danos e responsabilidades no imóvel locado.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Problemas de Infiltração ou Fissuras</h3>
                <p className="text-gray-600">Diagnóstico técnico especializado identificando causas e recomendando soluções duráveis.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Danos Estruturais</h3>
                <p className="text-gray-600">Avaliação completa de problemas estruturais com recomendações de reparo e segurança.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Disputas Judiciais Envolvendo Imóveis</h3>
                <p className="text-gray-600">Perícia técnica com fundamentação científica para processos judiciais em tribunais.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Avaliação de Valor de Mercado</h3>
                <p className="text-gray-600">Laudos de avaliação conforme NBR 14653 para fins de compra, venda ou financiamento.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Impugnação de Laudos</h3>
                <p className="text-gray-600">Análise crítica e contra-perícia de laudos técnicos anteriores com parecer especializado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA TÉCNICA PARA ADVOGADOS */}
      <section id="assistencia" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Assistência Técnica para Advogados</h2>
              <p className="text-gray-600 mb-6 text-lg">Suporte especializado para escritórios de advocacia em processos que envolvem questões técnicas de engenharia.</p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Zap className="text-orange-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Formulação de Quesitos</h4>
                    <p className="text-gray-600 text-sm">Elaboração de quesitos técnicos precisos e eficazes para perícia.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Zap className="text-orange-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Parecer Técnico</h4>
                    <p className="text-gray-600 text-sm">Análise técnica especializada para fundamentar argumentação jurídica.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Zap className="text-orange-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Acompanhamento do Perito Judicial</h4>
                    <p className="text-gray-600 text-sm">Suporte durante a perícia e análise de laudos produzidos.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Zap className="text-orange-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900">Impugnação de Laudos</h4>
                    <p className="text-gray-600 text-sm">Contra-perícia e parecer crítico sobre laudos adversários.</p>
                  </div>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded font-bold transition">
                Solicitar Assistência
              </a>
            </div>

            <div>
              <img src={AUTORIDADE_BG} alt="Assistência Técnica para Advogados" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Sobre o Engenheiro</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Eng. Gustavo da Silva Freitas</h3>
                <p className="mb-4">Engenheiro Civil e Engenheiro de Segurança do Trabalho</p>
                <p className="mb-4 font-bold">CREA-SP 5071007855</p>

                <div className="space-y-3 mt-6 border-t border-blue-700 pt-6">
                  <p><strong>Experiência:</strong> 7 anos em engenharia diagnóstica e perícias</p>
                  <p><strong>Laudos Realizados:</strong> Mais de 15.000 laudos técnicos</p>
                  <p><strong>Especialidade:</strong> Perícias judiciais, vistorias técnicas e avaliações imobiliárias</p>
                  <p><strong>Atuação:</strong> TJSP, TRT-15 e TRF-3</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Especialização em Engenharia Diagnóstica</h3>
              <p className="text-gray-600 mb-4">Com mais de 7 anos de experiência, o Eng. Gustavo da Silva Freitas é especialista em engenharia diagnóstica, perícias judiciais e elaboração de laudos técnicos com rigor metodológico e confiabilidade jurídica.</p>

              <p className="text-gray-600 mb-4">Sua atuação abrange perícias em tribunais estaduais e federais (TJSP, TRT-15, TRF-3), com mais de 15.000 laudos realizados, cobrindo vistorias de imóveis, diagnóstico de patologias, avaliações imobiliárias e inspeções prediais.</p>

              <p className="text-gray-600">Oferece assistência técnica especializada para escritórios de advocacia, formulando quesitos, elaborando pareceres técnicos e acompanhando perícias judiciais com precisão e profissionalismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Depoimentos de Clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-gray-50">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-4 italic">"Excelente profissional. Laudo técnico muito bem elaborado, com fotografias de qualidade e análise detalhada. Recomendo!"</p>
              <p className="font-bold text-blue-900">João Silva</p>
              <p className="text-sm text-gray-500">Cliente - Vistoria de Imóvel</p>
            </Card>

            <Card className="p-6 border-0 bg-gray-50">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-4 italic">"Profissional muito competente. Seu laudo foi fundamental para resolver nossa disputa judicial. Muito obrigado!"</p>
              <p className="font-bold text-blue-900">Dra. Maria Santos</p>
              <p className="text-sm text-gray-500">Advogada - Perícia Judicial</p>
            </Card>

            <Card className="p-6 border-0 bg-gray-50">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-4 italic">"Atendimento ágil, profissional e confiável. Recomendo para qualquer tipo de perícia ou vistoria técnica."</p>
              <p className="font-bold text-blue-900">Carlos Oliveira</p>
              <p className="text-sm text-gray-500">Imobiliária - Avaliação de Imóvel</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Perguntas Frequentes</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 border-0">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Quanto custa uma vistoria?</h3>
              <p className="text-gray-600">O valor varia conforme o tipo e complexidade da vistoria. Para imóveis residenciais, o valor é mais acessível. Solicite um orçamento via WhatsApp com detalhes do imóvel.</p>
            </Card>

            <Card className="p-6 border-0">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Qual prazo para entrega do laudo?</h3>
              <p className="text-gray-600">Geralmente, o laudo é entregue em 5 a 10 dias úteis após a vistoria. Para casos urgentes, podemos negociar prazos menores.</p>
            </Card>

            <Card className="p-6 border-0">
              <h3 className="font-bold text-lg text-blue-900 mb-3">O laudo tem validade jurídica?</h3>
              <p className="text-gray-600">Sim. Todos os laudos são elaborados conforme normas técnicas (NBR) e têm validade jurídica para fins de processos judiciais, financiamentos e transações imobiliárias.</p>
            </Card>

            <Card className="p-6 border-0">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Atende em qual região?</h3>
              <p className="text-gray-600">Atendimento em Campinas, Hortolândia, Sumaré, Paulínia, Valinhos e região. Para localidades mais distantes, consulte disponibilidade.</p>
            </Card>

            <Card className="p-6 border-0">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Como agendar uma vistoria?</h3>
              <p className="text-gray-600">Clique no botão "Falar no WhatsApp" e descreva sua necessidade. Você receberá um orçamento e poderá agendar a data mais conveniente.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CALCULADORA DE PREÇOS */}
      <PriceCalculator />

      {/* AGENDAMENTO CALENDLY */}
      <CalendlyWidget />

      {/* BLOG */}
      <section id="blog" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Blog & Artigos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Conteúdo técnico sobre perícias, vistorias e engenharia diagnóstica.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Como Identificar Infiltração em Imóveis</h3>
              <p className="text-gray-600 mb-4 text-sm">Guia técnico sobre os principais sinais de infiltração e como diagnosticar problemas de umidade em construções.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>

            <Card className="p-6 border-0 bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">NBR 14653: Avaliação de Imóveis</h3>
              <p className="text-gray-600 mb-4 text-sm">Entenda a norma técnica brasileira para avaliação de propriedades e como ela garante precisão nos laudos.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>

            <Card className="p-6 border-0 bg-gray-50 hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-blue-900 mb-3">Perícia Judicial: O Papel do Engenheiro</h3>
              <p className="text-gray-600 mb-4 text-sm">Saiba como a perícia técnica é fundamental em processos judiciais e como o engenheiro contribui para a decisão.</p>
              <a href="#" className="text-orange-400 font-bold hover:text-orange-500">Leia mais →</a>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Entre em Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Formulário de Contato</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                <input type="email" placeholder="Seu Email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                <input type="tel" placeholder="Seu Telefone" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900" />
                <textarea placeholder="Sua Mensagem" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"></textarea>
                <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded font-bold transition">Enviar Mensagem</button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">WhatsApp</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 font-bold">(19) 99999-9999</a>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Email</h4>
                  <a href="mailto:contato@engustavo.com.br" className="text-orange-400 hover:text-orange-500 font-bold">contato@engustavo.com.br</a>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Localização</h4>
                  <p className="text-gray-600">Campinas, São Paulo - Brasil</p>
                  <p className="text-gray-600">Atendimento em Campinas, Hortolândia, Sumaré, Paulínia, Valinhos e região</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Profissional</h4>
                  <p className="text-gray-600">Engenheiro Civil e Engenheiro de Segurança do Trabalho</p>
                  <p className="text-gray-600">CREA-SP 5071007855</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Eng. Gustavo Freitas</h4>
              <p className="text-gray-300 text-sm">Especialista em perícias de engenharia e vistorias técnicas de imóveis.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><a href="#servicos" className="hover:text-white">Vistoria de Imóvel</a></li>
                <li><a href="#servicos" className="hover:text-white">Laudo Técnico</a></li>
                <li><a href="#servicos" className="hover:text-white">Perícia Judicial</a></li>
                <li><a href="#servicos" className="hover:text-white">Avaliação de Imóvel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Informações</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
                <li><a href="#assistencia" className="hover:text-white">Assistência Técnica</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#contato" className="hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-gray-300 text-sm">WhatsApp: (19) 99999-9999</p>
              <p className="text-gray-300 text-sm">Email: contato@engustavo.com.br</p>
              <p className="text-gray-300 text-sm">CREA-SP: 5071007855</p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <p className="text-gray-300 text-sm text-center">© 2026 Eng. Gustavo Freitas. Todos os direitos reservados. | Perícias de Engenharia em Campinas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
