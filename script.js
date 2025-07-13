
const cursos = [
  {
    "nombre": "Matemática I",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Ciudadanía y reflexión ética",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Introducción a la Ingeniería Industrial",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Introducción a la vida universitaria",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Inglés I",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Comprensión y redacción de textos I",
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "nombre": "Matemática II",
    "ciclo": 2,
    "prerrequisitos": [
      "Matemática I"
    ]
  },
  {
    "nombre": "Química General",
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "nombre": "Laboratorio de Química General",
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "nombre": "Principios de Algoritmos",
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "nombre": "Individuo y medio ambiente",
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "nombre": "Inglés II",
    "ciclo": 2,
    "prerrequisitos": [
      "Inglés I"
    ]
  },
  {
    "nombre": "Dibujo para Ingeniería",
    "ciclo": 2,
    "prerrequisitos": [
      "Matemática I"
    ]
  },
  {
    "nombre": "Comprensión y redacción de textos II",
    "ciclo": 2,
    "prerrequisitos": [
      "Comprensión",
      "redacción de textos I"
    ]
  },
  {
    "nombre": "Laboratorio de química inorgánica",
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "nombre": "Cálculo I",
    "ciclo": 3,
    "prerrequisitos": [
      "Matemática II"
    ]
  },
  {
    "nombre": "Economía general",
    "ciclo": 3,
    "prerrequisitos": [
      "Introducción a la ingeniería industrial"
    ]
  },
  {
    "nombre": "Química industrial",
    "ciclo": 3,
    "prerrequisitos": [
      "Laboratorio de química general",
      "Química general"
    ]
  },
  {
    "nombre": "Problemas y desafíos en el perú actual I",
    "ciclo": 3,
    "prerrequisitos": [
      "Individuo",
      "medio ambiente"
    ]
  },
  {
    "nombre": "Herramientas informáticas para la toma de decisiones",
    "ciclo": 3,
    "prerrequisitos": []
  },
  {
    "nombre": "Mecánica clásica",
    "ciclo": 3,
    "prerrequisitos": [
      "Matemática II"
    ]
  },
  {
    "nombre": "Laboratorio de Mecánica clásica",
    "ciclo": 3,
    "prerrequisitos": [
      "Matemática II"
    ]
  },
  {
    "nombre": "Inglés III",
    "ciclo": 3,
    "prerrequisitos": [
      "Inglés II"
    ]
  },
  {
    "nombre": "Cálculo II",
    "ciclo": 4,
    "prerrequisitos": [
      "Cálculo I"
    ]
  },
  {
    "nombre": "Operaciones unitarias y procesos industriales",
    "ciclo": 4,
    "prerrequisitos": [
      "Química industrial"
    ]
  },
  {
    "nombre": "Fundamentos de electromagnetismo",
    "ciclo": 4,
    "prerrequisitos": [
      "Cálculo I",
      "Mecánica Clásica",
      "Laboratorio de Mecánica Clásica"
    ]
  },
  {
    "nombre": "Laboratorio de Fundamentos de electromagnetismo",
    "ciclo": 4,
    "prerrequisitos": [
      "Cálculo I",
      "Mecánica Clásica",
      "Laboratorio de Mecánica Clásica"
    ]
  },
  {
    "nombre": "Estadística descriptiva y probabilidades",
    "ciclo": 4,
    "prerrequisitos": [
      "Matemática II"
    ]
  },
  {
    "nombre": "Investigación académica",
    "ciclo": 4,
    "prerrequisitos": [
      "Comprensión",
      "redacción de textos II"
    ]
  },
  {
    "nombre": "Inglés IV",
    "ciclo": 4,
    "prerrequisitos": [
      "Inglés III"
    ]
  },
  {
    "nombre": "Ergonomía y estudio del trabajo",
    "ciclo": 5,
    "prerrequisitos": [
      "Herramientas informáticas para la toma de decisiones"
    ]
  },
  {
    "nombre": "Laboratorio de ergonomía y estudio del trabajo",
    "ciclo": 5,
    "prerrequisitos": [
      "Herramientas informáticas para la toma de decisiones"
    ]
  },
  {
    "nombre": "Cálculo para la toma de decisiones",
    "ciclo": 5,
    "prerrequisitos": [
      "Cálculo II"
    ]
  },
  {
    "nombre": "Contabilidad general",
    "ciclo": 5,
    "prerrequisitos": [
      "Economía general"
    ]
  },
  {
    "nombre": "Estadística inferencial",
    "ciclo": 5,
    "prerrequisitos": [
      "Estadística descriptiva",
      "probabilidades"
    ]
  },
  {
    "nombre": "Fluidos y termodinámica",
    "ciclo": 5,
    "prerrequisitos": [
      "Fundamentos de electromagnetismo",
      "Cálculo II",
      "Laboratorio de fundamentos de electromagnetismo"
    ]
  },
  {
    "nombre": "Laboratorio de fluidos y termodinámica",
    "ciclo": 5,
    "prerrequisitos": [
      "Fundamentos de electromagnetismo",
      "Cálculo II",
      "Laboratorio de fundamentos de electromagnetismo"
    ]
  },
  {
    "nombre": "Administración y organización de empresas",
    "ciclo": 5,
    "prerrequisitos": [
      "Economía general"
    ]
  },
  {
    "nombre": "Procesos para ingeniería",
    "ciclo": 5,
    "prerrequisitos": [
      "Estadística descriptiva",
      "probabilidades"
    ]
  },
  {
    "nombre": "Teoría de decisiones",
    "ciclo": 6,
    "prerrequisitos": [
      "Cálculo para la toma de decisiones"
    ]
  },
  {
    "nombre": "Gestión por procesos",
    "ciclo": 6,
    "prerrequisitos": [
      "Procesos para ingeniería"
    ]
  },
  {
    "nombre": "Gestión de personas",
    "ciclo": 6,
    "prerrequisitos": [
      "Administracion",
      "organización de empresas"
    ]
  },
  {
    "nombre": "Disposición de planta",
    "ciclo": 6,
    "prerrequisitos": [
      "Ergonomía",
      "estudio del trabajo"
    ]
  },
  {
    "nombre": "Curso integrador I - escuela de industrial",
    "ciclo": 6,
    "prerrequisitos": [
      "Procesos para ingeniería"
    ]
  },
  {
    "nombre": "Costos y presupuestos",
    "ciclo": 6,
    "prerrequisitos": [
      "Contabilidad general"
    ]
  },
  {
    "nombre": "Creatividad Empresarial",
    "ciclo": 6,
    "prerrequisitos": []
  },
  {
    "nombre": "Economía ambiental y sostenibilidad",
    "ciclo": 6,
    "prerrequisitos": []
  },
  {
    "nombre": "Marketing",
    "ciclo": 7,
    "prerrequisitos": [
      "Administración",
      "organización de empresas"
    ]
  },
  {
    "nombre": "Tecnología industrial",
    "ciclo": 7,
    "prerrequisitos": [
      "Operaciones unitarias",
      "procesos industriales"
    ]
  },
  {
    "nombre": "Investigación operativa",
    "ciclo": 7,
    "prerrequisitos": [
      "Estadística inferencial"
    ]
  },
  {
    "nombre": "Ingeniería económica",
    "ciclo": 7,
    "prerrequisitos": [
      "Costos",
      "presupuestos"
    ]
  },
  {
    "nombre": "Herramientas de calidad",
    "ciclo": 7,
    "prerrequisitos": [
      "Estadísticas descriptivas",
      "probabilidades"
    ]
  },
  {
    "nombre": "Gestión de operaciones",
    "ciclo": 7,
    "prerrequisitos": [
      "Curso integrador I - escuela de industrial"
    ]
  },
  {
    "nombre": "Liderazgo y conformación de equipos",
    "ciclo": 7,
    "prerrequisitos": [
      "Gestión de personas"
    ]
  },
  {
    "nombre": "Gestión de recursos humanos",
    "ciclo": 7,
    "prerrequisitos": []
  },
  {
    "nombre": "Automatización de procesos",
    "ciclo": 8,
    "prerrequisitos": [
      "Tecnología industrial"
    ]
  },
  {
    "nombre": "Logística",
    "ciclo": 8,
    "prerrequisitos": [
      "Gestión de operaciones"
    ]
  },
  {
    "nombre": "Gestión de la innovación",
    "ciclo": 8,
    "prerrequisitos": [
      "Curso integrador I - escuela de industrial"
    ]
  },
  {
    "nombre": "Sistemas de gestión de calidad",
    "ciclo": 8,
    "prerrequisitos": [
      "Herramientas de calidad"
    ]
  },
  {
    "nombre": "Planeamiento y control de operaciones",
    "ciclo": 8,
    "prerrequisitos": [
      "Gestión de operaciones"
    ]
  },
  {
    "nombre": "Planeamiento estratégico",
    "ciclo": 8,
    "prerrequisitos": [
      "Gestión por procesos"
    ]
  },
  {
    "nombre": "Content management",
    "ciclo": 8,
    "prerrequisitos": []
  },
  {
    "nombre": "Elementary business english",
    "ciclo": 8,
    "prerrequisitos": [
      "Inglés IV"
    ]
  },
  {
    "nombre": "Formación para la empleabilidad",
    "ciclo": 9,
    "prerrequisitos": [
      "Planeamiento estratégico"
    ]
  },
  {
    "nombre": "Herramientas para la comunicación efectiva",
    "ciclo": 9,
    "prerrequisitos": [
      "Curso integrador I - escuela de industrial"
    ]
  },
  {
    "nombre": "Simulación",
    "ciclo": 9,
    "prerrequisitos": [
      "Investigación operativa"
    ]
  },
  {
    "nombre": "Seguridad y salud ocupacional",
    "ciclo": 9,
    "prerrequisitos": [
      "Tecnología indutrial"
    ]
  },
  {
    "nombre": "Formulación y evaluación de proyectos",
    "ciclo": 9,
    "prerrequisitos": [
      "Ingeniería económica",
      "Administracióny organización de empresas"
    ]
  },
  {
    "nombre": "Formulación para la investigación - industrial",
    "ciclo": 9,
    "prerrequisitos": [
      "Planeamiento",
      "control de operaciones",
      "Investigación académica"
    ]
  },
  {
    "nombre": "Gestión de mantenimiento",
    "ciclo": 9,
    "prerrequisitos": [
      "Tecnología industrial"
    ]
  },
  {
    "nombre": "Neuromarketing",
    "ciclo": 9,
    "prerrequisitos": []
  },
  {
    "nombre": "Taller de investigación - industrial",
    "ciclo": 10,
    "prerrequisitos": [
      "Formación para la investigación - industrial"
    ]
  },
  {
    "nombre": "Gestión del medio ambiente",
    "ciclo": 10,
    "prerrequisitos": [
      "Individuo",
      "medio ambiente"
    ]
  },
  {
    "nombre": "Gestión de proyectos",
    "ciclo": 10,
    "prerrequisitos": [
      "Sistemas de gestión de calidad"
    ]
  },
  {
    "nombre": "Gestión de la cadena de abastecimiento",
    "ciclo": 10,
    "prerrequisitos": [
      "Logística"
    ]
  },
  {
    "nombre": "Ética profesional",
    "ciclo": 10,
    "prerrequisitos": [
      "Planeamiento estratégico"
    ]
  },
  {
    "nombre": "Curso integrador II - emprendimiento industrial",
    "ciclo": 10,
    "prerrequisitos": [
      "Curso integrador I - escuela de industrial",
      "Planeamiento estratégico",
      "Formulación",
      "evaluación de proyectos"
    ]
  },
  {
    "nombre": "Metodologías agiles",
    "ciclo": 10,
    "prerrequisitos": [
      "Formulación",
      "evaluación de proyectos"
    ]
  },
  {
    "nombre": "Lean six sigma",
    "ciclo": 10,
    "prerrequisitos": [
      "Planeamiento",
      "control de operaciones"
    ]
  }
];

const completados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const ciclos = [...new Set(cursos.map(c => c.ciclo))].sort((a, b) => a - b);

  ciclos.forEach(ciclo => {
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo $10`;
    contenedor.appendChild(titulo);

    cursos
      .filter(c => c.ciclo === ciclo)
      .forEach(curso => {
        const div = document.createElement("div");
        div.className = "curso bloqueado";
        div.textContent = curso.nombre;
        div.dataset.nombre = curso.nombre;
        div.addEventListener("click", () => {
          if (div.classList.contains("bloqueado")) return;

          if (div.classList.contains("tachado")) {
            div.classList.remove("tachado");
            completados.delete(curso.nombre);
          } else {
            div.classList.add("tachado");
            completados.add(curso.nombre);
          }

          actualizarDisponibilidad();
        });
        contenedor.appendChild(div);
      });
  });

  actualizarDisponibilidad();
}

function actualizarDisponibilidad() {
  const divs = document.querySelectorAll(".curso");
  divs.forEach(div => {
    const nombre = div.dataset.nombre;
    const curso = cursos.find(c => c.nombre === nombre);
    const puedeDesbloquearse = curso.prerrequisitos.every(pr => completados.has(pr));

    if (puedeDesbloquearse) {
      div.classList.remove("bloqueado");
    } else {
      if (!div.classList.contains("tachado")) {
        div.classList.add("bloqueado");
      }
    }
  });
}

crearMalla();
