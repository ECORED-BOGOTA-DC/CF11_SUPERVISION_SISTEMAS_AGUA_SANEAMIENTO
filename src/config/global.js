export default {
  global: {
    componenteFormativo: 'Establecer condiciones de riesgo',
    descripcionCurso:
      'La salud pública está enfocada en la protección de la población mediante estrategias de promoción y prevención de la enfermedad. Para asegurarla, se requiere implementar técnicas de recolección de información y análisis epidemiológico que permitan establecer el estado actual de la población a través de indicadores. <br> <br>En este componente se desarrollarán las temáticas referentes al Sistema de salud pública y los principios de epidemiología.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Enfermedad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Actividades de salud pública',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Responsables del sistema de vigilancia en salud pública y sus funciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: ' Plan decenal de Salud pública',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Política distrital de salud ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelo de Inspección Vigilancia y Control (IVC)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recolección de información en salud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Conceptos básicos de epidemiología',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Estrategias de comunicación con actores',
      referencia:
        'Geilfus, F. (2009). <em>80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo, evaluación.</em>',
      tipo: 'Libro',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59',
    },
    {
      tema: 'Manejo de actores sociales',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Manual metodológico de participación ciudadana.</em> MinSalud.',
      tipo: 'Manual',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/manual-metodologico-de-participacion-ciudadana.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación ambiental',
      significado:
        'cualquier flujo de información ambientalmente relevante que involucra tanto comunicadores como audiencias y se logra mediante la entrega de mensajes efectivos y recepción interactiva Geilfus (2009).',
    },
    {
      termino: 'Consejos territoriales de participación ciudadana',
      significado:
        'en los niveles departamental, distrital y municipal (específicamente en los de categorías primera, segunda y especial) funcionan los Consejos Territoriales de Participación Ciudadana, los cuales se encargan, junto con las autoridades territoriales, de la política pública de participación ciudadana en sus territorios en articulación con el Consejo Nacional de Participación. Sus miembros son quienes ejerzan funciones equivalentes a las de los miembros señalados para el Consejo Nacional de Participación Ciudadana a nivel departamental, distrital o municipal (Ministerio del Interior, s.f.).',
    },
    {
      termino: 'Consultas populares de origen ciudadano',
      significado:
        'es un mecanismo de participación ciudadana donde se pone en consideración a los votantes un tema de trascendencia nacional, departamental, municipal, distrital o local. Con este es la ciudadanía la que contestando sí o no a una pregunta de carácter general termina definiendo si la decisión es conveniente o no para la comunidad (Ministerio del Interior, s.f.).',
    },
    {
      termino: 'Estrategia didáctica activa',
      significado:
        'selección de actividades y prácticas pedagógicas en diferentes momentos formativos, métodos y recursos en los procesos de enseñanza y aprendizaje. Manual de estrategias didácticas activas (2013).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'examen continuo de los procesos y la generación de productos de un programa durante la ejecución del mismo (Ministerio de Salud y Protección Social, 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Castro, P., Mendoza, S. y Castor, L. (2007). <em>Estrategia educación ambiental para el conocimiento, el uso y la conservación de la biodiversidad en Colombia.</em> Instituto de Investigaciones de Recursos Biológicos Alexander Von Humboldt.',
      link:
        'http://siar.minam.gob.pe/puno/documentos/estrategia-educacion-ambiental-conocimiento-uso-sostenible',
    },
    {
      referencia:
        'CEPAL. (2010). <em>Lineamientos metodológicos para la construcción de indicadores de desempeño.</em> CEPAL.',
      link: '',
    },
    {
      referencia:
        'CLDA. (2009). <em>Carta Iberoamericana de Participación Ciudadana en la Gestión Pública.</em> CLDA.',
      link:
        'https://observatorioserviciospublicos.gob.do/baselegal/carta_iberoamericana_de_participaci%C3%B3n_ciudadana.pdf',
    },
    {
      referencia:
        'Consultores Educativos Ambientales. (2014). <em>Plan de comunicación ambiental para la conservación de los arrecifes de coral de Puerto Rico.</em> CEA',
      link:
        'http://drna.pr.gov/wp-content/uploads/2017/06/Plan-de-Comunicaci%C3%B3n-Ambiental-para-la-Conservaci%C3%B3n-de-los-Arrecifes-de-Coral-de-Puerto-Rico.pdf',
    },
    {
      referencia:
        'Corporación Autónoma Regional de Cundinamarca. (2014). <em>Guía metodológica y pedagógica como soporte del proceso de educación ambiental.</em> CAR.',
      link:
        'http://sie.car.gov.co/bitstream/handle/20.500.11786/35887/28290.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Geilfus, F. (2009). <em>80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo, evaluación.</em>',
      link:
        'http://ejoventut.gencat.cat/permalink/aac2bb0c-2a0c-11e4-bcfe-005056924a59',
    },
    {
      referencia:
        'Instituto Distrital de la Participación y Acción Comunal. <em>(2007). Mecanismos de participación ciudadana.</em> IDPAC.',
      link:
        'https://participacionbogota.gov.co/mecanismos-participacion-ciudadana',
    },
    {
      referencia:
        'Ley 850 de 2003. [Poder público - Rama Legislativa]. <em>Por medio de la cual se reglamentan las veedurías ciudadanas.</em> Noviembre 19 de 2003. DO No. 45.376.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0850_2003.html',
    },
    {
      referencia:
        'Martínez, M. y Ciudad-Real, G. (2013). <em>Manual de estrategias didácticas activas.</em>',
      link:
        'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjP292r16XrAhVsx1kKHfixCAQQFjAAegQIARAB&url=https%3A%2F%2Fwww.orientacionandujar.es%2Fwp-content%2Fuploads%2F2015%2F03%2FManual-estrategias-didacticas.pdf&usg=AOvVaw3STa_5TlRI4TsVCGsoKotF',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Manual metodológico de participación ciudadana.</em> MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/RBC/manual-metodologico-de-participacion-ciudadana.pdf',
    },
    {
      referencia:
        'Núñez, L. (s.f). <em>Sostenibilidad y actores sociales en la protección del medioambiente en Cuba.</em> CLACSO.',
      link:
        'http://biblioteca.clacso.edu.ar/ar/libros/cuba/cips/caudales05/Caudales/ARTICULOS/ArticulosPDF/0416N076.pdf',
    },
    {
      referencia:
        'Zamalloa, E y Díaz, J. (2005). <em>Manual 5, guías metodológicas para la gestión ambiental.</em>',
      link:
        'https://www.academia.edu/25938537/Gu%C3%ADas_Metodol%C3%B3gicas_para_la_Gesti%C3%B3n_Ambiental',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
