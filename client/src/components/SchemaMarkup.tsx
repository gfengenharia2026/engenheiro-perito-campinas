import { useEffect } from 'react';
import { localBusinessSchema, professionalServiceSchema } from '@/lib/schema';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa uma vistoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O valor varia conforme o tipo de vistoria e tamanho do imóvel. Oferecemos orçamento personalizado. Clique em 'Agendar Vistoria' ou envie mensagem via WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é o prazo para entrega do laudo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O prazo varia de 5 a 15 dias úteis conforme a complexidade do caso. Vistorias simples podem ser entregues em até 3 dias."
      }
    },
    {
      "@type": "Question",
      "name": "O laudo tem validade jurídica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Todos os nossos laudos são elaborados conforme normas técnicas brasileiras (NBR 14653, NBR 16747) e têm validade jurídica comprovada em processos judiciais."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gfengenhariaepericias.com.br" },
    { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://gfengenhariaepericias.com.br#servicos" },
    { "@type": "ListItem", "position": 3, "name": "Sobre", "item": "https://gfengenhariaepericias.com.br#sobre" },
    { "@type": "ListItem", "position": 4, "name": "Contato", "item": "https://gfengenhariaepericias.com.br#contato" }
  ]
};

export default function SchemaMarkup() {
  useEffect(() => {
    const scripts = [
      { schema: localBusinessSchema, id: 'local-business-schema' },
      { schema: professionalServiceSchema, id: 'professional-service-schema' },
      { schema: faqSchema, id: 'faq-schema' },
      { schema: breadcrumbSchema, id: 'breadcrumb-schema' }
    ];

    const createdScripts = scripts.map(({ schema, id }) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      createdScripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
}
