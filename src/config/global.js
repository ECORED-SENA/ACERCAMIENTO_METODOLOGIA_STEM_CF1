export default {
  global: {
    componenteFormativo: 'Introducción a la educación STEM',
    descripcionCurso:
      'La educación STEM surge como una oportunidad frente a las dinámicas de los diferentes sectores económicos de las sociedades que vienen exigiendo una demanda de una sociedad y personas cualificadas en Ciencia, Tecnología, Ingeniería y Matemáticas. Dimensiones que conllevan a integrarse en los currículos de las instituciones de educación para determinar nuevas formas de enseñar y aprender.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-video',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La Educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' ¿Cómo surge la educación STEM?',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Un marco de referencia para la educación STEM',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propósitos de la educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La integración curricular en áreas STEM',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principios para el diseño de estrategias STEM',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Metodología para la evaluación de experiencias de aula',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta temática',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica del Sena',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica del Sena',
      },
      {
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Juan Carlos Tapias Rueda', 'Carlos Julián Ramírez Benítez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Andrea Paola Botello De la Rosa',
          'Luis Jesús Pérez Madariaga',
        ],
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: [
          'Validación y vinculación en plataforma LMS',
          'Validación de recursos',
        ],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, M., J. (2014). Catálogo de videos sobre historia de las matemáticas. Un ámbito para la reflexión docente. Universidad Pedagógica Nacional',
      link: 'http://hdl.handle.net/20.500.12209/7761',
    },
    {
      referencia:
        'Botero, J. E. (2018). Educación STEM: introducción a una nueva forma de enseñar y aprender. STEM Colombia.',
    },
    {
      referencia:
        'Bybee, R. (2013). El caso de la educación STEM: desafíos y oportunidades. Prensa NSTA, 75.',
    },
    {
      referencia:
        'Carman Oficial Site. (2019) Carman: historia de la ingeniería.',
      link:
        'https://grupocarman.com/blog/2019/03/11/historia-de-la-ingenieria/',
    },
    {
      referencia:
        'Consejo Nacional, D. I. (2012). Investigación en educación basada en disciplinas: comprensión y mejora del aprendizaje en ciencias e ingeniería de pregrado. National Research Council of the National Academies.',
    },
    {
      referencia:
        'Katzenmeyer, C. (2006). Perspectivas de la Fundación Nacional de Ciencias sobre la naturaleza de la evaluación del programa STEM. Nuevas Direcciones para la Evaluación, 109, 7-18.',
    },
    {
      referencia:
        'López, V., Couso, D., y Simarro, C. (2020). Educación STEM en y para el mundo digital. Cómo y por qué llevar las herramientas digitales a las aulas de Ciencias, Matemáticas y Tecnologías. Revista Educación a Distancia.',
      link: 'https://revistas.um.es/red/article/view/410011',
    },
    {
      referencia: 'Periódico desdeabajo. (2018). Los orígenes de la ciencia',
      link: 'https://www.youtube.com/watch?v=kspO2QJhEsY',
    },
    {
      referencia:
        'Purzer, S., S. (2014). Ingeniería en entornos preuniversitarios: síntesis de investigación, políticas y prácticas. Prensa de la Universidad de Purdue.',
    },
    {
      referencia:
        'Stevenson, H. (2014). Mitos y motivos detrás de la educación STEM (ciencia, tecnología, ingeniería y matemáticas) y la narrativa sobre la escasez de trabajadores STEM. Problemas en la formación del Profesorado, 23(1), 133-146.',
    },
    {
      referencia:
        'Toma, R. B., y Ilena, M. G. (2016). Modelo interdisciplinar de educación STEM para la etapa de educación primaria. I. M',
      link: 'https://riubu.ubu.es/handle/10259/4681',
    },
    {
      referencia:
        'Traig, J. (. (2015). STEM to Story: Enthralling and Effective Lesson Plans for Grades 5-8. Jossey-Bass. ',
    },
    {
      referencia:
        'Vásquez, J. A., Comer, M., y Sneider, C. (2013). STEM Lesson Essentials, grades 3-8: Integrating Science, Technology, Engineering, and Mathematics. Portsmouth, NH: Heinemann., 58-76.',
    },
  ],
  glosario: [
    {
      termino: '100Kin10',
      significado:
        '100 Thousand Teachers in 10 years. Es una red de los EE. UU. a nivel nacional comprometida en llevar una educación STEM excelente mediante el aporte de 100.000 docentes más a los salones de clase para el año 2021 (Stevenson, 2014).',
    },
    {
      termino: 'ACOLA',
      significado:
        ' Australian Council of Learned Academies. Modelo de actividad interdisciplinaria de larga duración que utiliza la educación STEM.',
    },
    {
      termino: 'CTM',
      significado:
        'Acrónimo de STEM en español, utilizado en algunos países de habla hispana. No tiene ningún reconocimiento tan amplio como el STEM.',
    },
    {
      termino: 'NGSS',
      significado:
        ' Next Generation Science Standards. Estándares de ciencias para la próxima generación.',
    },
    {
      termino: 'OCDE',
      significado: ' Organización para la Colaboración y Desarrollo Económico.',
    },
  ],
  complementario: [
    {
      texto:
        'Toma, R. B., y Ilena, M. G. (2016). Modelo interdisciplinar de educación STEM para la etapa de educación primaria. I. M.',
      tipo: 'Artículo',
      link: 'https://riubu.ubu.es/handle/10259/4681 ',
    },
    {
      texto:
        'López, V., Couso, D., y Simarro, C. (2020). Educación STEM en y para el mundo digital. Cómo y por qué llevar las herramientas digitales a las aulas de Ciencias, Matemáticas y Tecnologías. Revista Educación a Distancia',
      tipo: 'Artículo',
      link: 'https://www.um.es/ead/red/58/lopez_et_al.pdf',
    },
  ],
}
