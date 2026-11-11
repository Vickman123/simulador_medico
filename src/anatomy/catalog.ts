/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Catálogo Centralizado de Sistemas y Estructuras Anatómicas
 * Vickora Labs
 */

export interface AnatomicalStructure {
  id: string;
  name: string;
  latinName: string;
  systemId: AnatomicalSystemId;
  description: string;
  function: string;
  location: string;
  clinicalPearls: string[];
  keyComponents?: string[];
  modelFile?: string;
  colorHex: number;
  highlightColorHex: number;
  tags: string[];
  suggestedCameraOffset?: [number, number, number];
  suggestedLookAt?: [number, number, number];
}

export type AnatomicalSystemId =
  | 'skeletal'
  | 'muscular'
  | 'circulatory'
  | 'nervous'
  | 'digestive'
  | 'respiratory'
  | 'urinary'
  | 'endocrine';

export interface AnatomicalSystemInfo {
  id: AnatomicalSystemId;
  name: string;
  latinName: string;
  accentColor: string;
  colorHex: number;
  icon: string;
  overview: string;
  organsCount: number;
  clinicalSignificance: string;
  learningObjectives: string[];
}

export const ANATOMICAL_SYSTEMS: Record<AnatomicalSystemId, AnatomicalSystemInfo> = {
  skeletal: {
    id: 'skeletal',
    name: 'Sistema Óseo',
    latinName: 'Systema skeletale',
    accentColor: '#e2e8f0',
    colorHex: 0xf1f5f9,
    icon: '🦴',
    overview: 'Armazón rígido de 206 huesos que otorga soporte estructural, protege órganos vitales, permite el movimiento junto a los músculos y almacena calcio y fósforo.',
    organsCount: 206,
    clinicalSignificance: 'Fundamental en traumatología y ortopedia: fracturas, osteoporosis, artrosis, escoliosis y patología de la médula ósea hematopoyética.',
    learningObjectives: [
      'Diferenciar entre esqueleto axial y apendicular',
      'Identificar la anatomía del cráneo, columna vertebral y caja torácica',
      'Comprender la función biomecánica de las articulaciones diartrodiales',
    ],
  },
  muscular: {
    id: 'muscular',
    name: 'Sistema Muscular',
    latinName: 'Systema musculare',
    accentColor: '#f43f5e',
    colorHex: 0xe11d48,
    icon: '💪',
    overview: 'Más de 650 músculos esqueléticos que generan movimiento voluntario, mantienen la postura corporal, estabilizan articulaciones y producen calor metabólico.',
    organsCount: 650,
    clinicalSignificance: 'Miopatías, distrofias musculares, desgarros fibrilares, sarcopenia en el adulto mayor y síndrome compartimental.',
    learningObjectives: [
      'Identificar los principales grupos musculares del tronco y extremidades',
      'Reconocer el mecanismo de contracción por deslizamiento de actina y miosina',
      'Comprender el control motor y la unión neuromuscular',
    ],
  },
  circulatory: {
    id: 'circulatory',
    name: 'Sistema Circulatorio',
    latinName: 'Systema cardiovasculare',
    accentColor: '#ef4444',
    colorHex: 0xdc2626,
    icon: '❤️',
    overview: 'Circuito hemodinámico cerrado compuesto por el corazón y una extensa red de arterias, venas y capilares que transporta oxígeno, nutrientes y hormonas a todos los tejidos.',
    organsCount: 3,
    clinicalSignificance: 'Primera causa de morbimortalidad mundial: cardiopatía isquémica, infarto agudo de miocardio, hipertensión arterial e insuficiencia cardíaca.',
    learningObjectives: [
      'Diferenciar la circulación mayor (sistémica) de la menor (pulmonar)',
      'Identificar las cuatro cavidades cardíacas y el aparato valvular',
      'Comprender el ciclo cardíaco (sístole y diástole) y el sistema de conducción',
    ],
  },
  nervous: {
    id: 'nervous',
    name: 'Sistema Nervioso',
    latinName: 'Systema nervosum',
    accentColor: '#38bdf8',
    colorHex: 0x0284c7,
    icon: '🧠',
    overview: 'Red de alta velocidad formada por el encéfalo, médula espinal y nervios periféricos encargada de percibir estímulos, procesar información y coordinar respuestas corporales.',
    organsCount: 4,
    clinicalSignificance: 'Eventos cerebrovasculares (EVC), epilepsia, enfermedades neurodegenerativas (Alzheimer, Parkinson), traumatismo craneoencefálico y esclerosis múltiple.',
    learningObjectives: [
      'Identificar los lóbulos cerebrales, cerebelo y tronco encefálico',
      'Trazar las vías motoras piramidales y sensitivas ascendentes en la médula espinal',
      'Comprender la propagación del potencial de acción y la sinapsis',
    ],
  },
  digestive: {
    id: 'digestive',
    name: 'Sistema Digestivo',
    latinName: 'Systema digestorium',
    accentColor: '#f59e0b',
    colorHex: 0xd97706,
    icon: '🥗',
    overview: 'Tracto gastrointestinal desde la boca hasta el recto, acompañado de glándulas anexas (hígado, páncreas), destinado a la digestión, absorción de nutrientes y excreción.',
    organsCount: 8,
    clinicalSignificance: 'Úlcera péptica, cirrosis hepática, apendicitis aguda, pancreatitis, colelitiasis y enfermedades inflamatorias intestinales.',
    learningObjectives: [
      'Seguir la ruta anatómica del bolo alimenticio y quimo',
      'Identificar las funciones metabólicas del hígado y la vía biliar',
      'Comprender la función exocrina pancreática y la motilidad por peristalsis',
    ],
  },
  respiratory: {
    id: 'respiratory',
    name: 'Sistema Respiratorio',
    latinName: 'Systema respiratorium',
    accentColor: '#06b6d4',
    colorHex: 0x0891b2,
    icon: '🫁',
    overview: 'Vías aéreas superiores e inferiores y pulmones que permiten el intercambio gaseoso (hematosis) entre el aire ambiental y la sangre capilar.',
    organsCount: 5,
    clinicalSignificance: 'EPOC, asma bronquial, neumonía, tromboembolia pulmonar, síndrome de dificultad respiratoria aguda y neumotórax.',
    learningObjectives: [
      'Identificar la anatomía lobar pulmonar y el árbol bronquial',
      'Comprender la mecánica ventilatoria de inspiración y espiración',
      'Explicar la hematosis y la barrera alvéolo-capilar',
    ],
  },
  urinary: {
    id: 'urinary',
    name: 'Sistema Urinario',
    latinName: 'Systema urinarium',
    accentColor: '#10b981',
    colorHex: 0x059669,
    icon: '💧',
    overview: 'Compuesto por riñones, uréteres, vejiga y uretra. Filtra la sangre, elimina desechos metabólicos, regula el volumen plasmático, el equilibrio hidroelectrolítico y el pH.',
    organsCount: 4,
    clinicalSignificance: 'Insuficiencia renal aguda y crónica, glomerulonefritis, litiasis urinaria, infecciones de vías urinarias e hipertensión renovascular.',
    learningObjectives: [
      'Identificar la corteza, médula y sistema pielocalicial renal',
      'Describir el trayecto de los uréteres hacia la vejiga urinaria',
      'Comprender los procesos de filtración glomerular, reabsorción y secreción tubular',
    ],
  },
  endocrine: {
    id: 'endocrine',
    name: 'Sistema Endocrino',
    latinName: 'Systema endocrinum',
    accentColor: '#a855f7',
    colorHex: 0x9333ea,
    icon: '⚡',
    overview: 'Conjunto de glándulas secretoras que liberan hormonas al torrente sanguíneo para regular el crecimiento, metabolismo, balance electrolítico y reproducción.',
    organsCount: 7,
    clinicalSignificance: 'Diabetes mellitus, hipotiroidismo, hipertiroidismo, síndrome de Cushing, acromegalia y trastornos del eje hipotálamo-hipofisario.',
    learningObjectives: [
      'Localizar las principales glándulas endocrinas en el eje corporal',
      'Identificar la función del timo en la inmunocompetencia de linfocitos T',
      'Comprender la retroalimentación hormonal negativa (feedback negativo)',
    ],
  },
};

export const ANATOMICAL_STRUCTURES: Record<string, AnatomicalStructure> = {
  heart: {
    id: 'heart',
    name: 'Corazón',
    latinName: 'Cor',
    systemId: 'circulatory',
    description: 'Órgano muscular hueco de cuatro cavidades que actúa como bomba impelente y aspirante central del sistema cardiovascular humano.',
    function: 'Bombea sangre desoxigenada a los pulmones a través de la arteria pulmonar y sangre oxigenada al organismo a través de la arteria aorta.',
    location: 'Mediastino medio de la cavidad torácica, descansando sobre el diafragma, entre ambos pulmones, inclinado hacia la izquierda.',
    clinicalPearls: [
      'Gasto cardíaco en reposo: aprox. 5 litros/minuto (70 latidos/minuto x 70 ml/latido).',
      'La arteria coronaria descendente anterior irriga gran parte del ventrículo izquierdo y el tabique.',
      'El nódulo sinoauricular (marcapasos fisiológico) inicia el impulso a 60-100 lpm.',
    ],
    keyComponents: ['Aurícula derecha', 'Ventrículo derecho', 'Aurícula izquierda', 'Ventrículo izquierdo', 'Aorta ascendente', 'Arteria pulmonar'],
    modelFile: 'models/heart.glb',
    colorHex: 0xcc2936,
    highlightColorHex: 0xff4d6d,
    tags: ['miocardio', 'aorta', 'valvulas', 'ventriculo', 'auricula'],
    suggestedCameraOffset: [0, 1.35, 0.75],
    suggestedLookAt: [0, 1.3, 0],
  },
  lungs: {
    id: 'lungs',
    name: 'Pulmones',
    latinName: 'Pulmones',
    systemId: 'respiratory',
    description: 'Par de órganos esponjosos esenciales para la respiración. El pulmón derecho posee tres lóbulos y el izquierdo dos debido a la escotadura cardíaca.',
    function: 'Efectúan el intercambio gaseoso (hematosis): incorporan oxígeno a los eritrocitos capilares y eliminan dióxido de carbono por difusión pasiva.',
    location: 'Cavidad torácica, a ambos lados del mediastino, recubiertos por la pleura visceral y parietal.',
    clinicalPearls: [
      'Superficie alveolar total de intercambio: aprox. 70 a 100 m² (equivalente a una cancha de tenis).',
      'El surfactante pulmonar sintetizado por neumocitos tipo II previene el colapso alveolar.',
      'El hilio pulmonar alberga la arteria pulmonar, venas pulmonares y el bronquio principal.',
    ],
    keyComponents: ['Lóbulo superior derecho', 'Lóbulo medio', 'Lóbulo inferior derecho', 'Lóbulo superior izquierdo', 'Lóbulo inferior izquierdo', 'Árbol bronquial'],
    modelFile: 'models/lungs.glb',
    colorHex: 0x38bdf8,
    highlightColorHex: 0x7dd3fc,
    tags: ['bronquios', 'alveolos', 'pleura', 'lobulos', 'hematosis'],
    suggestedCameraOffset: [0, 1.35, 0.85],
    suggestedLookAt: [0, 1.3, 0],
  },
  brain: {
    id: 'brain',
    name: 'Encéfalo',
    latinName: 'Encephalon',
    systemId: 'nervous',
    description: 'Centro de control maestro del cuerpo, compuesto por el cerebro (telencéfalo y diencéfalo), cerebelo y tronco del encéfalo.',
    function: 'Procesa información sensorial, regula funciones motoras, gobierna la homeostasis autónoma y da soporte a las facultades cognitivas superiores.',
    location: 'Cavidad craneal, protegido por las meninges (duramadre, aracnoides, piamadre) y el líquido cefalorraquídeo.',
    clinicalPearls: [
      'Consume aproximadamente el 20% del oxígeno y glucosa corporal a pesar de representar solo el 2% del peso corporal.',
      'El polígono de Willis asegura flujo colateral entre las arterias carótidas internas y vertebrales.',
      'La barrera hematoencefálica protege el parénquima contra patógenos y toxinas circulantes.',
    ],
    keyComponents: ['Lóbulo frontal', 'Lóbulo parietal', 'Lóbulo temporal', 'Lóbulo occipital', 'Cerebelo', 'Tronco encefálico'],
    modelFile: 'models/brain.glb',
    colorHex: 0xa855f7,
    highlightColorHex: 0xc084fc,
    tags: ['corteza', 'cerebelo', 'tronco', 'neuronas', 'sinapsis'],
    suggestedCameraOffset: [0, 1.7, 0.65],
    suggestedLookAt: [0, 1.65, 0],
  },
  spinal_cord: {
    id: 'spinal_cord',
    name: 'Médula Espinal',
    latinName: 'Medulla spinalis',
    systemId: 'nervous',
    description: 'Cordón cilíndrico de tejido neural que desciende desde el bulbo raquídeo a lo largo del canal vertebral hasta el nivel de L1-L2.',
    function: 'Conduce impulsos motores eferentes desde el encéfalo y aferencias sensitivas hacia el mismo, además de coordinar reflejos espinales autónomos.',
    location: 'Dentro del conducto raquídeo de la columna vertebral.',
    clinicalPearls: [
      'Termina en el cono medular a nivel de L1-L2, continuándose como la cauda equina (cola de caballo).',
      'La punción lumbar se realiza con seguridad en los espacios intervertebrales L3-L4 o L4-L5.',
    ],
    keyComponents: ['Sustancia gris en mariposa', 'Cordones blancos anterior/lateral/posterior', 'Raíces dorsales y ventrales'],
    modelFile: 'models/spinal_cord.glb',
    colorHex: 0x38bdf8,
    highlightColorHex: 0x67e8f9,
    tags: ['reflejos', 'cono medular', 'vias motoras', 'sensibilidad'],
    suggestedCameraOffset: [0, 1.4, 0.75],
    suggestedLookAt: [0, 1.2, 0],
  },
  liver: {
    id: 'liver',
    name: 'Hígado',
    latinName: 'Hepar',
    systemId: 'digestive',
    description: 'La glándula más voluminosa del cuerpo humano, de color rojo pardo, situada en el hipocondrio derecho y epigastrio.',
    function: 'Metaboliza carbohidratos, lípidos y proteínas; sintetiza albúmina y factores de coagulación; detoxifica xenobióticos y secreta bilis para digerir grasas.',
    location: 'Hipocondrio derecho y epigastrio, debajo del hemidiafragma derecho, protegido por las costillas 7ª a 11ª.',
    clinicalPearls: [
      'Recibe un doble aporte sanguíneo: 75% venoso de la vena porta (nutrientes intestinales) y 25% arterial de la arteria hepática.',
      'Posee una extraordinaria capacidad de regeneración celular a partir de hepatocitos y células ovales.',
    ],
    keyComponents: ['Lóbulo derecho', 'Lóbulo izquierdo', 'Lóbulo caudado', 'Lóbulo cuadrado', 'Hilio hepático', 'Vena porta'],
    modelFile: 'models/liver.glb',
    colorHex: 0x991b1b,
    highlightColorHex: 0xef4444,
    tags: ['bilis', 'hepatocitos', 'metabolismo', 'vena porta', 'coagulacion'],
    suggestedCameraOffset: [0, 1.15, 0.75],
    suggestedLookAt: [0.08, 1.1, 0],
  },
  pancreas: {
    id: 'pancreas',
    name: 'Páncreas',
    latinName: 'Pancreas',
    systemId: 'endocrine',
    description: 'Glándula mixta retroperitoneal alargada transversalmente en la pared posterior del abdomen.',
    function: 'Función exocrina: secreta enzimas digestivas (amilasa, lipasa, tripsina) al duodeno. Función endocrina: los islotes de Langerhans secretan insulina y glucagón.',
    location: 'Retroperitoneo, detrás del estómago, enmarcado por el marco duodenal a la derecha y en contacto con el bazo a la izquierda.',
    clinicalPearls: [
      'Las células beta secretan insulina en respuesta a hiperglucemia; las células alfa secretan glucagón.',
      'La autodigestión por activación prematura de enzimas zimógenas causa pancreatitis aguda grave.',
    ],
    keyComponents: ['Cabeza', 'Cuello', 'Cuerpo', 'Cola', 'Conducto pancreático principal de Wirsung', 'Islotes de Langerhans'],
    modelFile: 'models/pancreas.glb',
    colorHex: 0xf59e0b,
    highlightColorHex: 0xfbbf24,
    tags: ['insulina', 'glucagon', 'enzimas', 'islotes', 'duodeno'],
    suggestedCameraOffset: [0, 1.15, 0.65],
    suggestedLookAt: [0, 1.1, 0],
  },
  intestine_small: {
    id: 'intestine_small',
    name: 'Intestino Delgado',
    latinName: 'Intestinum tenue',
    systemId: 'digestive',
    description: 'Tubo digestivo de aproximadamente 6 a 7 metros de longitud dividido en duodeno, yeyuno e íleon.',
    function: 'Completa la digestión enzimática de los alimentos y absorbe agua, electrolitos, aminoácidos, monosacáridos y ácidos grasos hacia la circulación.',
    location: 'Cavidad abdominal central e inferior, rodeado por el marco cólico del intestino grueso.',
    clinicalPearls: [
      'Las microvellosidades y pliegues circulares multiplican la superficie absortiva hasta unos 250 m².',
      'Las placas de Peyer en el íleon constituyen un componente crítico del sistema inmune asociado a mucosas (MALT).',
    ],
    keyComponents: ['Duodeno', 'Yeyuno', 'Íleon', 'Mesenterio', 'Vellosidades intestinales'],
    modelFile: 'models/intestine_small.glb',
    colorHex: 0xd97706,
    highlightColorHex: 0xf59e0b,
    tags: ['absorcion', 'yeyuno', 'ileon', 'duodeno', 'peristalsis'],
    suggestedCameraOffset: [0, 0.95, 0.75],
    suggestedLookAt: [0, 0.9, 0],
  },
  intestine_large: {
    id: 'intestine_large',
    name: 'Intestino Grueso',
    latinName: 'Intestinum crassum',
    systemId: 'digestive',
    description: 'Segmento terminal del tubo digestivo de 1.5 metros compuesto por ciego, apéndice, colon ascendente, transverso, descendente, sigmoide y recto.',
    function: 'Reabsorbe agua y sales minerales, compacta las heces y alberga la microbiota comensal productora de vitaminas K y B.',
    location: 'Enmarca la cavidad abdominal en forma de arco alrededor del intestino delgado.',
    clinicalPearls: [
      'El apéndice cecal nace del fondo del ciego; su obstrucción luminal provoca apendicitis aguda, la urgencia quirúrgica más frecuente.',
      'Se caracteriza por tenias cólicas, haustras y apéndices epiploicos.',
    ],
    keyComponents: ['Ciego y apéndice', 'Colon ascendente', 'Colon transverso', 'Colon descendente', 'Colon sigmoide', 'Recto'],
    modelFile: 'models/intestine_large.glb',
    colorHex: 0xb45309,
    highlightColorHex: 0xd97706,
    tags: ['colon', 'ciego', 'recto', 'microbiota', 'apendice'],
    suggestedCameraOffset: [0, 0.95, 0.75],
    suggestedLookAt: [0, 0.9, 0],
  },
  kidneys: {
    id: 'kidneys',
    name: 'Riñones',
    latinName: 'Renes',
    systemId: 'urinary',
    description: 'Par de órganos retroperitoneales en forma de habichuela encargados de la depuración sanguínea y homeostasis hídrica.',
    function: 'Filtran unos 180 litros de plasma diarios, forman la orina, regulan la presión arterial mediante el eje renina-angiotensina-aldosterona y estimulan la eritropoyesis (eritropoyetina).',
    location: 'Espacio retroperitoneal paravertebral, entre T12 y L3; el riñón derecho se ubica ligeramente más bajo por la presencia del hígado.',
    clinicalPearls: [
      'La nefrona es la unidad funcional; cada riñón alberga aproximadamente 1 a 1.2 millones de nefronas.',
      'Filtrado glomerular normal: > 90 ml/min/1.73m².',
    ],
    keyComponents: ['Corteza renal', 'Médula y pirámides de Malpighi', 'Cálices menores y mayores', 'Pelvis renal', 'Arteria y vena renal'],
    modelFile: 'models/kidney_left.glb',
    colorHex: 0x059669,
    highlightColorHex: 0x10b981,
    tags: ['nefrona', 'filtracion', 'orina', 'eritropoyetina', 'renina'],
    suggestedCameraOffset: [0, 1.1, 0.75],
    suggestedLookAt: [0, 1.05, 0],
  },
  bladder: {
    id: 'bladder',
    name: 'Vejiga Urinaria',
    latinName: 'Vesica urinaria',
    systemId: 'urinary',
    description: 'Órgano muscular distensible situado en la pelvis menor que sirve de reservorio temporal de la orina antes de la micción.',
    function: 'Almacena entre 300 y 500 ml de orina en condiciones fisiológicas normales; el músculo detrusor se contrae coordinadamente para el vaciamiento miccional.',
    location: 'Pelvis menor, detrás de la sínfisis del pubis y anterior al recto (en el varón) o anterior al útero (en la mujer).',
    clinicalPearls: [
      'El trígono vesical es una región triangular de base superior delimitada por las desembocaduras de ambos uréteres y el orificio uretral interno.',
      'La inervación parasimpática (S2-S4) induce contracción del detrusor y relajación esfinteriana.',
    ],
    keyComponents: ['Músculo detrusor', 'Trígono vesical', 'Orificios ureterales', 'Cuello vesical'],
    modelFile: 'models/bladder.glb',
    colorHex: 0x10b981,
    highlightColorHex: 0x34d399,
    tags: ['miccion', 'detrusor', 'trigono', 'pelvis', 'orina'],
    suggestedCameraOffset: [0, 0.8, 0.65],
    suggestedLookAt: [0, 0.75, 0],
  },
  thymus: {
    id: 'thymus',
    name: 'Timo',
    latinName: 'Thymus',
    systemId: 'endocrine',
    description: 'Órgano linfoide y endocrino bilobulado situado en el mediastino superior y anterior.',
    function: 'Maduración y selección clonal de linfocitos T inmunocompetentes; secreta timosina y timopoyetina que modulan la respuesta inmunológica.',
    location: 'Mediastino superior y anterior, por detrás del manubrio esternal y por delante de los grandes vasos y el pericardio.',
    clinicalPearls: [
      'Alcanza su desarrollo y peso máximo relativo en la pubertad, sufriendo después una involución fisiológica con reemplazo por tejido adiposo.',
      'La deleción cromosómica 22q11.2 (Síndrome de DiGeorge) cursa con aplasia tímica e inmunodeficiencia celular grave.',
    ],
    keyComponents: ['Lóbulo derecho', 'Lóbulo izquierdo', 'Corteza tímica', 'Médula tímica y corpúsculos de Hassall'],
    modelFile: 'models/thymus.glb',
    colorHex: 0x9333ea,
    highlightColorHex: 0xa855f7,
    tags: ['linfocitos T', 'inmunidad', 'mediastino', 'hormonas'],
    suggestedCameraOffset: [0, 1.45, 0.65],
    suggestedLookAt: [0, 1.4, 0],
  },
  skeleton: {
    id: 'skeleton',
    name: 'Esqueleto Completo',
    latinName: 'Skeleton humanum',
    systemId: 'skeletal',
    description: 'Conjunto articulado de 206 huesos que conforman el esqueleto axial (cráneo, columna, costillas, esternón) y apendicular (cinturas escapular/pélvica y extremidades).',
    function: 'Soporte mecánico antigravitatorio, palancas de locomoción, protección encefálica y visceral, y reservorio del 99% del calcio corporal.',
    location: 'Eje axial y apendicular de toda la anatomía humana.',
    clinicalPearls: [
      'El fémur es el hueso más largo y resistente del cuerpo humano.',
      'La médula ósea roja del esternón, crestas ilíacas y cuerpos vertebrales es la sede principal de hematopoyesis en el adulto.',
    ],
    keyComponents: ['Cráneo y mandíbula', 'Columna vertebral', 'Caja torácica', 'Cintura escapular', 'Cintura pélvica', 'Extremidades superiores e inferiores'],
    modelFile: 'models/skeleton.glb',
    colorHex: 0xf1f5f9,
    highlightColorHex: 0x38bdf8,
    tags: ['huesos', 'femur', 'craneo', 'vertebras', 'calcio'],
    suggestedCameraOffset: [0, 1.0, 2.2],
    suggestedLookAt: [0, 0.9, 0],
  },
  muscular: {
    id: 'muscular',
    name: 'Sistema Muscular Esquelético',
    latinName: 'Systema musculare',
    systemId: 'muscular',
    description: '177 grupos musculares reales segmentados anatómicamente: deltoides, pectorales, bíceps, rectos abdominales, cuádriceps, gemelos y aponeurosis tendinosas.',
    function: 'Genera fuerza mecánica mediante el deslizamiento de filamentos de actina y miosina accionado por ATP y calcio, permitiendo la marcha, postura y estabilidad.',
    location: 'Insertado a lo largo de todo el esqueleto axial y apendicular.',
    clinicalPearls: [
      'El músculo más potente en relación a su tamaño es el masetero; el más largo es el sartorio.',
      'La unión neuromuscular utiliza acetilcolina como neurotransmisor primordial.',
    ],
    keyComponents: ['Pectoral mayor', 'Deltoides', 'Bíceps braquial', 'Recto abdominal', 'Cuádriceps femoral', 'Tendón de Aquiles'],
    modelFile: 'models/muscles.glb',
    colorHex: 0xe11d48,
    highlightColorHex: 0xfb7185,
    tags: ['musculos', 'deltoides', 'biceps', 'cuadriceps', 'contraccion'],
    suggestedCameraOffset: [0, 1.1, 1.6],
    suggestedLookAt: [0, 1.0, 0],
  },
  stomach: {
    id: 'stomach',
    name: 'Estómago y Esófago',
    latinName: 'Gaster & Oesophagus',
    systemId: 'digestive',
    description: 'Dilatación en forma de J del tubo digestivo interpuesta entre el esófago y el duodeno.',
    function: 'Digestión química mediante ácido clorhídrico (HCl) y pepsina, degradación mecánica del bolo alimenticio y formación del quimo.',
    location: 'Hipocondrio izquierdo y epigastrio, bajo la cúpula hemidiafragmática izquierda.',
    clinicalPearls: [
      'Las células parietales secretan ácido clorhídrico y factor intrínseco (esencial para absorber vitamina B12 en íleon).',
      'La barrera mucosa gástrica resiste un pH luminal tan ácido como 1.5 a 2.0.',
    ],
    keyComponents: ['Cardias', 'Fundus gástrico', 'Cuerpo', 'Antro', 'Píloro', 'Curvatura mayor', 'Curvatura menor'],
    modelFile: 'models/intestine_small.glb',
    colorHex: 0x9e4736,
    highlightColorHex: 0xf87171,
    tags: ['estomago', 'acido', 'pepsina', 'quimo', 'fundus'],
    suggestedCameraOffset: [0, 1.2, 0.7],
    suggestedLookAt: [-0.03, 1.15, 0],
  },
  digestive_spleen: {
    id: 'digestive_spleen',
    name: 'Bazo',
    latinName: 'Splen / Lien',
    systemId: 'digestive',
    description: 'Órgano linfoide y hemocaterético vascularizado situado en el hipocondrio izquierdo.',
    function: 'Filtra la sangre eliminando eritrocitos senescentes (hemocateresis), almacena plaquetas y coordina respuestas inmunes humorales contra bacterias capsuladas.',
    location: 'Hipocondrio izquierdo, posterolateral al estómago, protegido por las costillas 9ª a 11ª.',
    clinicalPearls: [
      'Un traumatismo abdominal cerrado puede causar rotura esplénica con hemoperitoneo masivo por su rica vascularización.',
      'Los pacientes esplenectomizados requieren vacunación obligatoria contra bacterias encapsuladas (Neumococo, Meningococo, Hib).',
    ],
    keyComponents: ['Pulpa roja (sinusoides y cordones de Billroth)', 'Pulpa blanca (folículos linfoides)', 'Cápsula fibroelástica', 'Arteria esplénica'],
    modelFile: 'models/spleen.glb',
    colorHex: 0x4a1525,
    highlightColorHex: 0xc084fc,
    tags: ['bazo', 'inmunidad', 'hemocateresis', 'linfocitos', 'plaquetas'],
    suggestedCameraOffset: [0, 1.2, 0.65],
    suggestedLookAt: [-0.08, 1.17, 0],
  },
  thyroid: {
    id: 'thyroid',
    name: 'Glándula Tiroides',
    latinName: 'Glandula thyroidea',
    systemId: 'endocrine',
    description: 'Glándula neuroendocrina bilobulada en forma de mariposa unida por un istmo transversal.',
    function: 'Sintetiza hormonas tiroideas (T4 tiroxina y T3 triyodotironina) para regular el metabolismo basal, así como calcitonina (células C para homeostasis del calcio).',
    location: 'Región anterior del cuello, abrazando la tráquea por debajo del cartílago tiroides (C5-T1).',
    clinicalPearls: [
      'La glándula tiroides depende del yodo dietético para la síntesis de hormonas; su deficiencia produce bocio endémico.',
      'El nervio laríngeo recurrente transcurre íntimamente ligado a la cara posterior de los lóbulos tiroideos.',
    ],
    keyComponents: ['Lóbulo derecho', 'Lóbulo izquierdo', 'Istmo tiroideo', 'Folículos tiroideos y coloide'],
    modelFile: 'models/thymus.glb',
    colorHex: 0x8f3c39,
    highlightColorHex: 0xf43f5e,
    tags: ['tiroides', 'metabolismo', 'T3', 'T4', 'calcitonina'],
    suggestedCameraOffset: [0, 1.5, 0.55],
    suggestedLookAt: [0, 1.48, 0],
  },
};

export const MODEL_ATTRIBUTIONS = [
  {
    assetName: 'skeleton.glb (Articulated Human Skeleton)',
    source: 'BodyParts3D, Database Center for Life Science (DBCLS), Japan & OrganUI adaptation',
    license: 'Creative Commons Attribution-ShareAlike 2.1 Japan (CC BY-SA 2.1 JP)',
    citation: 'Mitsuhashi et al., "BodyParts3D: 3D structure database for anatomical concepts", Nucleic Acids Research 37 (2009), D782-D785.',
    notes: '242 named bones with meshoptimizer vertex simplification and coordinate normalization.',
  },
  {
    assetName: 'muscles.glb (177 Segmented Skeletal Muscle Groups)',
    source: 'BodyParts3D, Database Center for Life Science (DBCLS), Japan & OrganUI adaptation',
    license: 'Creative Commons Attribution-ShareAlike 2.1 Japan (CC BY-SA 2.1 JP)',
    citation: 'OrganUI Anatomical Musculoskeletal Mapping dataset.',
    notes: '177 real muscle groups with anatomical nomenclature and PBR muscle fiber striation.',
  },
  {
    assetName: 'skin.glb (Translucent Glass Holographic Silhouette)',
    source: 'HuBMAP Consortium - Human Reference Atlas (HRA) Visible Human Male Silhouette',
    license: 'Creative Commons Attribution 4.0 International (CC-BY 4.0)',
    notes: '1.83m male reference body envelope with cyber-medical transmission glass shader.',
  },
  {
    assetName: 'heart.glb, lungs.glb, liver.glb, spleen.glb, kidneys, intestines, bladder, thymus, spinal_cord',
    source: 'HuBMAP Consortium - Human Reference Atlas (HRA) 3D Reference Library & NIH 3D',
    license: 'Creative Commons Attribution 4.0 International (CC-BY 4.0)',
    citation: 'Börner et al., "Anatomical structures, cell types, and biomarkers tables plus 3D reference organs in HuBMAP", Nature Methods (2021).',
    notes: 'Segmented from Visible Human Project datasets in standardized Common Coordinate Framework (CCF).',
  },
  {
    assetName: 'brain.glb (Allen Human Reference Atlas)',
    source: 'Allen Institute for Brain Science & HuBMAP Consortium',
    license: 'Creative Commons Attribution 4.0 International (CC-BY 4.0)',
    citation: 'Allen Human Reference Atlas 3D Brain coordinate space.',
    notes: 'High-resolution anatomical segmentation of cerebrum, cerebellum, and brainstem.',
  },
];
