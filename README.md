# HUMAN XR – Laboratorio de Anatomía Humana Inmersiva
### Demostración Tecnológica de Aprendizaje en Realidad Virtual y WebXR
**Desarrollado por Vickora Labs**  
**Innovación Tecnológica en Salud, Realidad Extendida (XR) y Ciencias Biomédicas**

---

![Vickora Labs](https://img.shields.io/badge/Desarrollado_por-Vickora%20Labs-00f0ff?style=for-the-badge)
![WebXR](https://img.shields.io/badge/WebXR-Meta%20Quest%203%20%2F%203S-00f0ff?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-0.187-black?style=for-the-badge)
![VXR Core](https://img.shields.io/badge/Core-VXR%20Framework-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT%20%2F%20CC--BY-green?style=for-the-badge)

---

## 1. Visión del Proyecto

**HUMAN XR** es un laboratorio virtual inmersivo creado por **Vickora Labs**, diseñado para ejecutarse nativamente en visores **Meta Quest 3 y Meta Quest 3S** a través del navegador web mediante la API estándar de **WebXR**, con soporte y controles para navegadores de escritorio.

El objetivo es revolucionar la enseñanza y exploración de las ciencias morfológicas, permitiendo a estudiantes, profesionales y entusiastas de la salud sumergirse en un laboratorio futurista de grado profesional: explorar el cuerpo humano en escala 1:1, activar y desactivar capas anatómicas, aislar órganos, observar simulaciones fisiológicas en tiempo real y validar conocimientos morfológicos mediante un módulo de evaluación interactivo.

---

## 2. Características Principales

### A. 8 Sistemas Anatómicos Tridimensionales Segmentados
Cada módulo cuenta con representación 3D de alta fidelidad, sombreadores de tejido PBR (*MeshPhysicalMaterial* con clearcoat especular seroso), fichas médicas detalladas, ubicación topográfica, funciones y perlas clínicas:
1. **Sistema Óseo (*Systema skeletale*):** Esqueleto completo articulado de 242 huesos individuales (BodyParts3D) en tono marfil osteológico con cartílagos costales y articulares azul hialino.
2. **Sistema Muscular (*Systema musculare*):** 177 grupos musculares reales segmentados (BodyParts3D): pectorales, deltoides, bíceps braquial, rectos abdominales, cuádriceps, gemelos y aponeurosis tendinosas nacaradas.
3. **Sistema Circulatorio (*Systema cardiovasculare*):** Corazón 3D anatómico tetra-cameral (NIH HuBMAP CCF) con aurículas, ventrículos, grandes vasos (aorta, arteria pulmonar) y red vascular sistémica arterial y venosa.
4. **Sistema Nervioso (*Systema nervosum*):** Encéfalo de alta resolución (Allen Human Reference Atlas) alojado en la cavidad craneal con textura cortical gris-rosácea y piamadre húmeda, médula espinal y plexos nerviosos periféricos.
5. **Sistema Digestivo (*Systema digestorium*):** Esófago, estómago curvado anatómico, hígado bilobulado con vesícula biliar en verde oliva, bazo linfoide, páncreas e intestino delgado y grueso con marco cólico.
6. **Sistema Respiratorio (*Systema respiratorium*):** Tráquea cartilaginosa, árbol bronquial y pulmones derecho (3 lóbulos) e izquierdo (2 lóbulos con escotadura cardíaca) con parénquima esponjoso y 94% de translucidez.
7. **Sistema Urinario (*Systema urinarium*):** Riñones bilaterales retroperitoneales en pardo-rojizo renal con cápsula de Gerota, uréteres y vejiga urinaria en pelvis menor.
8. **Sistema Endocrino (*Systema endocrinum*):** Timo mediastínico, glándula tiroides bilobulada sobre la tráquea (C5-T1), hipófisis en la silla turca, páncreas endocrino (islotes de Langerhans) y glándulas suprarrenales.

### B. Silueta Humana de Cristal (Ghost Hologram)
* Un modelo de piel de referencia humana masculina (*Visible Human Male*, NIH HuBMAP) con sombreador de vidrio holográfico (`transmission: 0.7`, `opacity: 0.14`, `depthWrite: false`).
* Se activa con el botón **`👤 Silueta Cristal`**, envolviendo el esqueleto y órganos en un holograma cian que otorga contexto anatómico exterior completo sin ocultar las estructuras internas.

### C. Interacciones Inmersivas (Meta Quest 3 / 3S y Escritorio)
* **Puntero Láser y Raycasting Unificado:** Apunta con los mandos Touch Plus de Meta Quest o con el cursor del ratón en escritorio para iluminar órganos en color cian bioluminiscente.
* **Ficha Médica Holográfica:** Selección directa de cualquier estructura anatómica para abrir un panel holográfico flotante en 3D y en el HUD lateral con nomenclatura anatómica en español y latín, funciones fisiológicas y correlaciones clínicas.
* **Aislamiento de Órganos ("Aislar Órgano"):** Atenúa el resto de las estructuras del cuerpo para centrar la atención en el órgano examinado con rotación orbital.
* **Vista Desglosada por Capas (Exploded View):** Expande suavemente los sistemas corporales hacia el exterior para observar las relaciones de profundidad y las capas anatómicas internas.
* **Presets de Cámara:** Botones de enfoque rápido a Tórax (mediastino y vísceras), Encéfalo (cráneo y cerebro), Frontal, Posterior y Lateral.
* **Síntesis de Voz y Lectura Médica:** Botón de audio para escuchar la descripción anatómica y clínica en voz alta.

### D. Simulaciones Fisiológicas en Tiempo Real
* **Ciclo Cardíaco y Pulso Acústico:** Contracción y relajación miocárdica sístole/diástole a 72 lpm con audio sintetizado proceduralmente mediante Web Audio API (cero dependencias de archivos de sonido externos).
* **Flujo Hemodinámico:** Partículas en movimiento que ilustran el flujo arterial oxigenado (rojo) y el retorno venoso desoxigenado (azul).
* **Mecánica Ventilatoria:** Expansión y relajación rítmica de los pulmones con visualización de flujo aéreo traqueobronquial.
* **Tránsito Digestivo:** Partículas que ilustran la peristalsis desde la cavidad oral hasta el colon.
* **Impulsos Nerviosos:** Potenciales de acción lumínicos propagándose a alta velocidad por la médula espinal y nervios periféricos.

### E. Módulo de Evaluación Médica
* Banco interactivo de preguntas clínicas de opción múltiple.
* Retroalimentación pedagógica inmediata con explicación científica y perlas de correlación clínica.
* Enfoque automático del modelo 3D sobre el órgano relevante durante cada pregunta.
* Contador de aciertos, porcentaje y reporte de desempeño final.

---

## 3. Arquitectura y Tecnologías

El proyecto está construido bajo una arquitectura modular y desacoplada, utilizando **VXR Core** como núcleo de gestión de experiencias WebXR:

```
simulador_medico/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automatización de despliegue en GitHub Pages (gh-pages)
├── public/
│   └── models/                   # Modelos 3D anatómicos optimizados (.glb)
│       ├── skeleton.glb          # 242 huesos individuales (BodyParts3D)
│       ├── muscles.glb           # 177 músculos reales segmentados (BodyParts3D)
│       ├── skin.glb              # Silueta de piel holográfica traslúcida (NIH HuBMAP)
│       ├── heart.glb             # Corazón humano tetra-cameral (NIH HRA)
│       ├── lungs.glb             # Pulmones humanos (NIH HRA)
│       ├── brain.glb             # Encéfalo (Allen Reference Atlas)
│       ├── liver.glb             # Hígado (NIH HRA)
│       ├── spleen.glb            # Bazo linfoide (NIH HRA)
│       └── kidneys, intestines...# Órganos viscerales y endocrinos
├── src/
│   ├── core/
│   │   ├── experienceManager.ts  # Orquestador maestro del ciclo de vida
│   │   ├── sceneManager.ts       # Iluminación y entorno del laboratorio futurista
│   │   ├── cameraManager.ts      # Vistas predefinidas y transiciones de cámara
│   │   └── vxr/                  # Núcleo VXR Core (XRApp, XRScene, XRRenderer, etc.)
│   ├── xr/
│   │   ├── xrSession.ts          # Negociación WebXR 72/90Hz y Fixed Foveated Rendering
│   │   ├── controllerManager.ts  # Controladores Touch Plus de Meta Quest y rayos láser
│   │   └── raycasting.ts         # Raycasting unificado escritorio + WebXR
│   ├── anatomy/
│   │   ├── catalog.ts            # Catálogo centralizado, licencias y datos médicos
│   │   ├── humanBody.ts          # Orquestador del cuerpo humano, podio y silueta
│   │   └── systems/              # Módulos de los 8 sistemas corporales
│   ├── animations/               # Simulaciones fisiológicas (cardíaca, respiratoria, etc.)
│   ├── education/                # Banco de preguntas, evaluación y paneles 3D
│   ├── interface/                # HUDs, selector de capas, controles y modales
│   ├── styles/
│   │   └── main.css              # Estilos del laboratorio futurista
│   └── main.ts                   # Entrypoint de la aplicación
├── index.html                    # Documento HTML principal
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración de TypeScript
└── vite.config.ts                # Configuración de compilación y bundling Vite
```

---

## 4. Modelos 3D y Licencias de Uso

Todos los modelos anatómicos incorporados en este proyecto proceden de repositorios científicos y médicos oficiales de acceso abierto con licencias de uso verificadas:

| Modelo 3D | Origen / Proyecto | Licencia | Modificaciones |
| :--- | :--- | :--- | :--- |
| `skeleton.glb` | **BodyParts3D** (Database Center for Life Science - DBCLS, Japón) / OrganUI | [CC BY-SA 2.1 JP](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en) | 242 huesos individuales, optimización de malla, coordenadas estandarizadas. |
| `muscles.glb` | **BodyParts3D** (DBCLS, Japón) / OrganUI | [CC BY-SA 2.1 JP](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en) | 177 grupos musculares reales segmentados individualmente, alineación 1:1 sobre esqueleto. |
| `skin.glb` | **NIH HuBMAP Consortium** (Visible Human Male) | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Silueta de 1.83m con sombreador de transmisión física de cristal cian. |
| `heart.glb` | **NIH HuBMAP Consortium** (Human Reference Atlas v1.2) | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Segmentado de Visible Human Project en espacio coordinado CCF. |
| `lungs.glb` | **NIH HuBMAP Consortium** (Human Reference Atlas v1.2) | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Segmentación lobar pulmonar en espacio CCF. |
| `brain.glb` | **Allen Institute for Brain Science** / HuBMAP | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Encéfalo completo (corteza, cerebelo, tronco encefálico). |
| `liver.glb`, `spleen.glb`, `kidneys`, `pancreas`, `thymus`, etc. | **NIH HuBMAP Consortium** (Human Reference Atlas v1.2) | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Órganos de referencia validados en espacio CCF. |

---

## 5. Optimización para Meta Quest 3 y Meta Quest 3S

La aplicación ha sido diseñada con estrictos estándares de rendimiento en realidad virtual:
1. **Tasa de Refresco Objetivo (72 / 90 FPS):** Negociación automática de tasa de cuadros mediante `XRSession.updateTargetFrameRate(72)` para asegurar confort y evitar cinetosis.
2. **Fixed Foveated Rendering (FFR):** En visores Meta Quest, se activa `fixedFoveation = 1.0` en la capa base de WebGL para reducir la carga de sombreado en la visión periférica.
3. **Mallas Simplificadas y Draw Calls Optimizadas:** Uso de geometrías optimizadas, materiales PBR compartidos y control estricto de memoria de video GPU (< 150 MB de VRAM).
4. **Sintetizador de Audio Procedural:** Sonidos de interfaz y latidos generados con la Web Audio API directamente, eliminando descargas de archivos `.mp3` o `.wav`.
5. **Autonomía Total sin Backend:** Funciona 100% en el lado del cliente (Client-Side), ideal para Meta Quest Browser y GitHub Pages.

---

## 6. Instrucciones de Instalación y Ejecución Local

### Prerrequisitos
- **Node.js** v18 o superior.
- **npm** v9 o superior.

### Pasos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Vickman123/simulador_medico.git
   cd simulador_medico
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
   El servidor estará disponible en `http://localhost:3000` (o `http://<tu-ip-local>:3000` para acceder desde el navegador de Meta Quest en la misma red Wi-Fi).

4. Compilar para producción:
   ```bash
   npm run build
   ```
   Los archivos estáticos listos para desplegar se generarán en la carpeta `dist/`.

---

## 7. Despliegue en GitHub Pages

Este proyecto incluye un flujo de trabajo automatizado con **GitHub Actions** en `.github/workflows/deploy.yml` que compila y publica automáticamente la aplicación en la rama `gh-pages`:

- **URL de producción:** [https://vickman123.github.io/simulador_medico/](https://vickman123.github.io/simulador_medico/)

---

## 8. Créditos

- **Desarrollo y Creación:** **Vickora Labs**
- **Enfoque:** Innovación médica, realidad extendida (XR), computación gráfica e interactividad inmersiva.
- **Datasets y Recursos Anatómicos:** NIH 3D Portal, HuBMAP Consortium, Allen Institute for Brain Science y Database Center for Life Science (DBCLS).
