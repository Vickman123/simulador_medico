/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Banco de Preguntas y Evaluación Educativa
 * Vickora Labs | Ciencias Médicas y Morfológicas
 */

import { AnatomicalSystemId } from '../anatomy/catalog.js';

export interface QuizQuestion {
  id: string;
  systemId: AnatomicalSystemId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clinicalNote: string;
  targetStructureId: string;
}

export const ANATOMICAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    systemId: 'circulatory',
    question: '¿Cuál es la función principal de la arteria aorta al emerger del ventrículo izquierdo?',
    options: [
      'Distribuir sangre ricamente oxigenada a todo el árbol arterial sistémico',
      'Transportar sangre desoxigenada hacia los alvéolos pulmonares',
      'Filtrar productos de desecho nitrogenado hacia la vena cava',
      'Regular directamente la síntesis de eritropoyetina',
    ],
    correctIndex: 0,
    explanation: 'La arteria aorta nace del ventrículo izquierdo y es el tronco de origen de todo el sistema arterial sistémico que distribuye sangre oxigenada a los tejidos.',
    clinicalNote: 'La disección aórtica tipo A de Stanford es una emergencia cardiovascular absoluta con alta mortalidad sin resolución quirúrgica inmediata.',
    targetStructureId: 'heart',
  },
  {
    id: 'q2',
    systemId: 'respiratory',
    question: '¿Por qué el pulmón izquierdo posee dos lóbulos en comparación con los tres del pulmón derecho?',
    options: [
      'Para acomodar el mediastino medio y la escotadura cardíaca del corazón inclinado a la izquierda',
      'Por una menor demanda metabólica del hemitórax izquierdo',
      'Debido a la ausencia de ramas del árbol bronquial izquierdo',
      'Para permitir mayor movilidad al hemidiafragma izquierdo',
    ],
    correctIndex: 0,
    explanation: 'El corazón ocupa una posición oblicua en el mediastino medio con su vértice apuntando hacia la izquierda, generando la escotadura cardíaca en el pulmón izquierdo.',
    clinicalNote: 'La língula del pulmón izquierdo es el equivalente anatómico homologable al lóbulo medio del pulmón derecho.',
    targetStructureId: 'lungs',
  },
  {
    id: 'q3',
    systemId: 'urinary',
    question: '¿En qué estructura histofuncional del riñón se produce el ultrafiltrado inicial del plasma sanguíneo?',
    options: [
      'En el corpúsculo renal (glomérulo y cápsula de Bowman) de la corteza renal',
      'En el asa de Henle de la médula interna',
      'En la pelvis renal y cálices mayores',
      'En el esfínter uretral interno vesical',
    ],
    correctIndex: 0,
    explanation: 'La barrera de filtración glomerular en el corpúsculo renal filtra agua y pequeños solutos del plasma, generando unos 180 L de ultrafiltrado al día.',
    clinicalNote: 'La presencia persistente de proteinuria o hematuria glomerular orienta hacia nefropatías primarias o secundarias a diabetes o hipertensión.',
    targetStructureId: 'kidneys',
  },
  {
    id: 'q4',
    systemId: 'digestive',
    question: '¿Qué gran vaso sanguíneo transporta la mayor parte de los nutrientes absorbidos en el intestino directamente hacia el hígado?',
    options: [
      'La vena porta hepática (confluencia mesentérica superior y esplénica)',
      'La arteria hepática propia',
      'La vena cava inferior',
      'El conducto torácico linfático',
    ],
    correctIndex: 0,
    explanation: 'La vena porta aporta aproximadamente el 75% del flujo sanguíneo hepático total, cargada de aminoácidos, monosacáridos y nutrientes digeridos para su procesamiento.',
    clinicalNote: 'La hipertensión portal secundaria a cirrosis hepática genera várices esofágicas, esplenomegalia y ascitis clínica.',
    targetStructureId: 'liver',
  },
  {
    id: 'q5',
    systemId: 'nervous',
    question: '¿A qué nivel de la columna vertebral finaliza habitualmente el cono medular de la médula espinal en el adulto sano?',
    options: [
      'A nivel del disco intervertebral L1 - L2',
      'A nivel del sacro (S1 - S2)',
      'A nivel de la última vértebra torácica (T12)',
      'A nivel de la quinta vértebra lumbar (L5)',
    ],
    correctIndex: 0,
    explanation: 'Debido al crecimiento diferencial de la columna vertebral sobre la médula durante el desarrollo embrionario, el cono medular termina en L1-L2 en el adulto.',
    clinicalNote: 'La punción lumbar y la anestesia raquídea se efectúan con seguridad en L3-L4 o L4-L5 para evitar lesionar la médula espinal.',
    targetStructureId: 'spinal_cord',
  },
  {
    id: 'q6',
    systemId: 'endocrine',
    question: '¿Cuál es el rol primordial del timo en el sistema endocrino e inmunológico durante las primeras etapas de la vida?',
    options: [
      'Diferenciación, maduración y selección clonal positiva/negativa de linfocitos T',
      'Síntesis de tiroxina y triyodotironina libre',
      'Producción de insulina y glucagón postprandial',
      'Almacenamiento y liberación de catecolaminas suprarrenales',
    ],
    correctIndex: 0,
    explanation: 'El timo es el órgano linfoide primario donde los precursores tímicos adquieren el receptor TCR y aprenden la tolerancia hacia lo propio antes de salir a la periferia.',
    clinicalNote: 'El síndrome de DiGeorge (deleción 22q11.2) cursa con aplasia o hipoplasia tímica e inmunodeficiencia celular grave susceptible a infecciones oportunistas.',
    targetStructureId: 'thymus',
  },
  {
    id: 'q7',
    systemId: 'skeletal',
    question: '¿Cuál es el hueso más largo y resistente del esqueleto humano que articula proximalmente con el acetábulo pélvico?',
    options: [
      'El fémur',
      'La tibia',
      'El húmero',
      'El radio',
    ],
    correctIndex: 0,
    explanation: 'El fémur soporta enormes fuerzas de compresión durante la marcha y la bipedestación, articulando con el cótilo o acetábulo en la articulación coxofemoral.',
    clinicalNote: 'Las fracturas del cuello femoral en pacientes geriátricos con osteoporosis conllevan alto riesgo de necrosis avascular de la cabeza femoral.',
    targetStructureId: 'skeleton',
  },
  {
    id: 'q8',
    systemId: 'digestive',
    question: '¿Qué porción del intestino delgado recibe el quimo ácido gástrico junto con el jugo pancreático y la bilis por la ampolla de Vater?',
    options: [
      'El duodeno (segunda porción o descendente)',
      'El yeyuno medio',
      'El íleon terminal',
      'El colon ascendente',
    ],
    correctIndex: 0,
    explanation: 'El conducto colédoco y el conducto pancreático de Wirsung desembocan juntos en la papila duodenal mayor (ampolla de Vater) en la segunda porción del duodeno.',
    clinicalNote: 'La coledocolitiasis obstructiva en la ampolla duodenal puede desencadenar pancreatitis aguda litiásica por reflujo de enzimas activadas.',
    targetStructureId: 'intestine_small',
  },
  {
    id: 'q9',
    systemId: 'endocrine',
    question: '¿Qué población celular de los islotes de Langerhans en el páncreas se encarga de sintetizar la hormona insulina?',
    options: [
      'Células beta (aprox. 65-70% del islote)',
      'Células alfa (productoras de glucagón)',
      'Células delta (productoras de somatostatina)',
      'Células acinares exocrinas',
    ],
    correctIndex: 0,
    explanation: 'Las células beta secretan insulina en respuesta al aumento de glucemia plasmática para facilitar la captación celular de glucosa.',
    clinicalNote: 'La destrucción autoinmune mediada por linfocitos T contra las células beta origina la Diabetes Mellitus Tipo 1.',
    targetStructureId: 'pancreas',
  },
  {
    id: 'q10',
    systemId: 'muscular',
    question: '¿Qué músculo potente de la cintura escapular es el principal abductor del brazo a partir de los 15 grados y le da forma al hombro?',
    options: [
      'Músculo deltoides',
      'Músculo pectoral mayor',
      'Músculo bíceps braquial',
      'Músculo dorsal ancho',
    ],
    correctIndex: 0,
    explanation: 'El músculo supraespinoso inicia los primeros 15° de abducción, y el deltoides ejecuta la abducción potente del brazo hasta los 90° o más.',
    clinicalNote: 'La lesión del nervio axilar (circunflejo) por luxación anterior de hombro o fractura del cuello quirúrgico del húmero causa parálisis del deltoides.',
    targetStructureId: 'muscular',
  },
];
