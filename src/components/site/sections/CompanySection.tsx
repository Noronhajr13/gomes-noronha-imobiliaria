import React from 'react';

// Define a type for the pillar data to ensure type safety
interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const companyInfo = {
  title: 'Gomes & Noronha Negócios Imobiliários',
  subtitle: 'Realizando Sonhos de Geração para Geração',
  intro: 'Na Gomes & Noronha, unimos a vasta experiência do renomado Despachante Imobiliário, <span class="font-bold">Claudio Noronha</span>, com a modernidade, tecnologia e o marketing representados pelo Corretor de Imóveis <span class="font-bold">Wesley Gomes</span> e pela especialista em Marketing Digital <span class="font-bold">Mariana Noronha</span>.',
  pillars: [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 1.292-.74 2.457-1.928 3.094l-2.43 1.343a2.25 2.25 0 01-2.126 0l-2.43-1.343C5.74 12.957 5 11.792 5 10.5c0-3.328 2.672-6 6-6s6 2.672 6 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 00-7.8-4.5h15.6A9 9 0 0012 21z" />
        </svg>
      ),
      title: 'Família',
      description: 'Nossa base, o alicerce de tudo que fazemos.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.125.292l4.636 5.094a.563.563 0 01-.292.95l-4.996.726a.563.563 0 00-.404.292l-2.222 5.253a.563.563 0 01-.98-.01L6.155 16.79a.563.563 0 00-.404-.292L.75 16.27a.562.562 0 01-.292-.95l4.636-5.094a.563.563 0 00.125-.292l2.125-5.111z" />
        </svg>
      ),
      title: 'Realização',
      description: 'Nosso propósito é transformar o sonho dos nossos clientes em realidade.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.077 0-2.135.289-3.114.819L5.357 5.132a.5.5 0 01-.233.159c-.933.284-1.848.59-2.753.916a.5.5 0 00-.2.628L3.25 10.5a.5.5 0 01-.2.628l-.946 1.419a.5.5 0 00-.094.485c.162.302.483.526.852.526h15.65c.37 0 .69-.224.852-.526a.5.5 0 00-.094-.485l-.946-1.419a.5.5 0 01-.2-.628l1.79-2.705a.5.5 0 00-.2-.628c-.905-.326-1.82-.632-2.753-.916a.5.5 0 01-.233-.159L4.814 4.569A8.967 8.967 0 0012 6.042z" />
        </svg>
      ),
      title: 'Legado',
      description: 'Construímos algo que será passado de geração para geração.',
    },
  ],
  approach: [
    'Comunicação aberta: Trabalhamos juntos, fortalecidos pela diversidade de pensamentos e experiências.',
    'Estrutura de ponta: Utilizamos tecnologia, expertise e cuidado para apresentar seu imóvel da melhor forma, com imagens de alta qualidade.',
  ],
  callToAction: 'Conecte-se com a gente e descubra a revolução no mercado imobiliário.',
};

const CompanySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="mb-2 text-4xl font-bold text-center md:text-5xl">{companyInfo.title}</h1>
        <h2 className="mb-8 text-xl text-center text-gray-600 md:text-2xl">{companyInfo.subtitle}</h2>
        <p className="mb-12 text-lg text-center" dangerouslySetInnerHTML={{ __html: companyInfo.intro }} />
        
        {/* Nossos Pilares Section */}
        <div className="my-12">
          <h3 className="mb-8 text-3xl font-bold text-center">Nossos Pilares</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {companyInfo.pillars.map((pillar: Pillar, index: number) => (
              <div key={index} className="p-8 text-center bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{pillar.icon}</div>
                <h4 className="mb-2 text-xl font-semibold">{pillar.title}</h4>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nossa Abordagem Section */}
        <div className="my-12">
          <h3 className="mb-8 text-3xl font-bold text-center">Nossa Abordagem</h3>
          <ul className="space-y-4 text-center list-none">
            {companyInfo.approach.map((item: string, index: number) => (
              <li key={index} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <p className="mt-8 text-xl font-bold text-center text-indigo-600">{companyInfo.callToAction}</p>
      </div>
    </section>
  );
};

export default CompanySection;