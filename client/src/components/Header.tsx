import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const whatsappUrl = 'https://wa.me/5519989045748?text=Olá%20Eng.%20Gustavo,%20gostaria%20de%20agendar%20uma%20vistoria%20técnica.';

  return (
    <>
      {/* Header Principal */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-blue-900">Eng. Gustavo Freitas</h1>
              <p className="text-xs text-gray-600">Perícias & Vistorias</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Início</button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Serviços</button>
            <button onClick={() => scrollToSection('assistencia')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Assistência Técnica</button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Sobre</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-900 font-medium text-sm transition">Contato</button>
          </nav>

          {/* Botão WhatsApp Desktop */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded font-medium transition">
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>

          {/* Menu Mobile */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Início</button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Serviços</button>
            <button onClick={() => scrollToSection('assistencia')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Assistência Técnica</button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Sobre</button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2">Contato</button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded font-medium text-center transition mt-2">Falar no WhatsApp</a>
          </div>
        )}
      </header>

      {/* Botão WhatsApp Flutuante */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 transition transform hover:scale-110">
        <MessageCircle size={28} />
      </a>
    </>
  );
}
