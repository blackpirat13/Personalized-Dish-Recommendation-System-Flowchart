import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { WindowsFrame } from './components/WindowsFrame';
import { LanguageSelector } from './components/LanguageSelector';
import { useLanguageStore } from './store/languageStore';

const App: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguageStore();

  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        curve: 'basis',
        padding: 15
      }
    });
    mermaid.run();
  }, [translations]);

  const getMermaidDiagram = () => `
    flowchart TD
        A[${translations.start}] --> B[${translations.collectData}]
        B --> C[${translations.preprocess}]
        C --> D[${translations.features}]
        D --> E[${translations.trainModel}]
        E --> F[${translations.generateRecommendations}]
        F --> G[${translations.presentToClient}]
        G --> H[${translations.feedback}]
        H --> I[${translations.updateModel}]
        I --> J[${translations.end}]

        subgraph Datos
        B --> B1[Historial]
        B --> B2[Preferencias]
        B --> B3[Alergias]
        end

        subgraph Proceso
        C --> C1[Limpieza]
        C --> C2[Normalización]
        D --> D1[Características]
        end

        subgraph ML
        E --> E1[Entrenamiento]
        E --> E2[Validación]
        F --> F1[Predicciones]
        end
  `;

  return (
    <>
      <LanguageSelector />
      <WindowsFrame title={translations.title}>
        <div className="space-y-8">
          <div className="card mb-12">
            <div className="mermaid text-center" ref={mermaidRef}>
              {getMermaidDiagram()}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-[#0078D4]">
              {translations.challenges}
            </h2>
            <ul className="list-challenges space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-[#0078D4] mb-2">
                  {translations.coldStart}
                </h3>
                <p className="text-gray-600">
                  {translations.coldStartSolution}
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-[#0078D4] mb-2">
                  {translations.realTime}
                </h3>
                <p className="text-gray-600">
                  {translations.realTimeSolution}
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-[#0078D4] mb-2">
                  {translations.privacy}
                </h3>
                <p className="text-gray-600">
                  {translations.privacySolution}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </WindowsFrame>
    </>
  );
};

export default App;