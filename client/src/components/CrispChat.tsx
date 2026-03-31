import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispChat() {
  useEffect(() => {
    // Inicializar Crisp Chat
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = 'seu-id-crisp-aqui'; // Será substituído pelo usuário

    const d = document;
    const s = d.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = true;
    d.getElementsByTagName('head')[0].appendChild(s);

    // Configurar dados do usuário quando Crisp carregar
    if ((window as any).$crisp) {
      (window as any).$crisp.push(['set', 'user:email', ['contato@gfengenhariaepericias.com.br']]);
      (window as any).$crisp.push(['set', 'user:nickname', ['Eng. Gustavo Freitas']]);
      (window as any).$crisp.push(['set', 'session:data', [[
        ['Serviço', 'Perícias e Vistorias Técnicas'],
        ['Localização', 'Campinas, SP'],
        ['Experiência', '7 anos']
      ]]]);

      // Mensagem de boas-vindas
      setTimeout(() => {
        (window as any).$crisp.push(['do', 'message:show', ['text', 'Olá! 👋 Sou o assistente do Eng. Gustavo. Como posso ajudar?']]);
      }, 2000);
    }

    return () => {
      // Cleanup não é necessário para Crisp
    };
  }, []);

  return null; // Crisp renderiza seu próprio widget
}
