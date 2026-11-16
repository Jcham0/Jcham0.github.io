export const proyectos = [
  {
    slug: 'torneo-videojuegos',
    title: 'Torneo de videojuegos',
    repo: 'PROYECTO_TORNEO',
    repoUrl: 'https://github.com/Jcham0/PROYECTO_TORNEO',
    description:
      'App web Django para gestionar torneos, inscripciones, resultados y clasificación pública con visualización gráfica.',
    problema:
      'Necesidad de organizar competiciones de videojuegos de forma centralizada, con control de participantes, resultados y una clasificación pública que fuera clara y fácil de consultar.',
    solucion:
      'Desarrollé una aplicación en Django para gestionar torneos completos, desde la inscripción hasta la publicación de resultados, incluyendo gráficos con Matplotlib para una mejor lectura de los datos.',
    tecnologias: ['Python', 'Django', 'SQLite', 'Matplotlib', 'Git', 'GitHub'],
    funcionalidades: [
      'Gestión de torneos, inscripciones y resultados.',
      'Clasificación pública accesible para participantes y público.',
      'Panel de administración con control de datos y estados.',
      'Gráficas automáticas de rendimiento y evolución del torneo.',
      'Pruebas automatizadas para validar la lógica del sistema.',
    ],
  
  },
  {
    slug: 'gestion-alumnos',
    title: 'Gestión de alumnos',
    repo: 'gestion_alumnos',
    repoUrl: 'https://github.com/Jcham0/gestion_alumnos',
    description:
      'Sistema Django para gestionar alumnos, notas, boletines y acceso por roles con importación masiva desde CSV.',
    problema:
      'La gestión académica requería separar permisos entre alumnos y profesores, optimizar la carga de notas y facilitar la generación de informes sin depender de procesos manuales.',
    solucion:
      'Implementé una solución Django con autenticación por roles, importación de calificaciones desde CSV usando Pandas, y generación de informes y boletines para cada alumno y grupo docente.',
    tecnologias: ['Python', 'Django', 'SQLite', 'Pandas', 'Git', 'GitHub'],
    funcionalidades: [
      'Acceso diferenciado para alumnos y profesores.',
      'Importación de notas desde CSV con Pandas.',
      'Informes y boletines descargables para cada estudiante.',
      'Comandos de datos de prueba para facilitar el desarrollo y testing.',
      'Pruebas automatizadas para validar comportamiento principal del sistema.',
    ],

  },
];
