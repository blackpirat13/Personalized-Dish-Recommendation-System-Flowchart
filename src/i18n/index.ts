import type { Translations } from '../types';

export const translations: Record<string, Translations> = {
  'en': {
    title: 'Personalized Dish Recommendation System',
    start: 'Start',
    collectData: 'Collect Client Data',
    preprocess: 'Preprocess Data',
    features: 'Feature Engineering',
    trainModel: 'Train ML Model',
    generateRecommendations: 'Generate Recommendations',
    presentToClient: 'Present to Client',
    feedback: 'Feedback',
    updateModel: 'Update Model',
    end: 'End',
    challenges: 'Challenges and Solutions',
    coldStart: 'Cold Start',
    coldStartSolution: 'Solution: Initial questionnaire and collaborative filtering',
    realTime: 'Real Time',
    realTimeSolution: 'Solution: Apache Spark and distributed cache',
    privacy: 'Privacy',
    privacySolution: 'Solution: E2E encryption and GDPR compliance'
  },
  'es-419': {
    title: 'Sistema de Recomendación de Platos Personalizado',
    start: 'Inicio',
    collectData: 'Recopilar Datos del Cliente',
    preprocess: 'Preprocesar Datos',
    features: 'Ingeniería de Características',
    trainModel: 'Entrenar Modelo de ML',
    generateRecommendations: 'Generar Recomendaciones',
    presentToClient: 'Presentar al Cliente',
    feedback: 'Retroalimentación',
    updateModel: 'Actualizar Modelo',
    end: 'Fin',
    challenges: 'Desafíos y Soluciones',
    coldStart: 'Inicio en frío',
    coldStartSolution: 'Solución: Cuestionario inicial y filtrado colaborativo',
    realTime: 'Tiempo real',
    realTimeSolution: 'Solución: Apache Spark y caché distribuido',
    privacy: 'Privacidad',
    privacySolution: 'Solución: Encriptación E2E y RGPD'
  }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es-419', name: 'Español Latino', flag: '🌎' }
];