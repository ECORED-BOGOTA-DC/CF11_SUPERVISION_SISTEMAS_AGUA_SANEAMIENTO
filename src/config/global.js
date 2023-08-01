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
        download: 'downloads/921200_CF11_DU.pdf',
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
      tema: 'Política distrital de salud ambiental',
      referencia:
        'Ministerio de Salud y Protección y Protección Social. (2020). <em>Modelo operativo de inspección, vigilancia y control para salud ambiental.</em>',
      tipo: 'Artículo',
      link: 'https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf',
    },
    {
      tema: 'Salud pública',
      referencia:
        'Decreto No. 3518 de 2006. [Ministerio de Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. 8 de junio  2017.',
      tipo: 'Decreto',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agente etiológico',
      significado:
        'entidad física, química o biológica que puede causar enfermedad en un organismo (Boletín agrario, 2020).',
    },
    {
      termino: 'Demografía',
      significado:
        'estudio estadístico de una colectividad humana, referido a un determinado momento o a su evolución (Asociación de academias de la lengua española, 2020).',
    },
    {
      termino: 'Género',
      significado:
        'grupo al que pertenecen los seres humanos de cada sexo, entendido este desde un punto de vista sociocultural, en lugar de exclusivamente biológico (Asociación de academias de la lengua española, 2020).',
    },
    {
      termino: 'Plaga',
      significado:
        'aparición masiva y repentina de seres vivos de la misma especie que causan graves daños a poblaciones animales o vegetales, como, respectivamente, la peste bubónica y la filoxera (Asociación de academias de la lengua española, 2020).',
    },
    {
      termino: 'Residuos líquidos',
      significado:
        'todo vertimiento de residuos líquidos deberá someterse a los requisitos y condiciones que establezca el Ministerio de salud. Teniendo en cuenta las características del sistema de alcantarillado y de la fuente receptora correspondiente (Congreso de la República de Colombia, 1979).',
    },
    {
      termino: 'Vector',
      significado:
        'agente que transporta algo de un lugar a otro. Ser vivo que puede transmitir o propagar una enfermedad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beaglehole, R. (2003). <em>Epidemiología Básica.</em> Organización Mundial de la Salud.',
      link: '',
    },
    {
      referencia: 'Brooker, C. (2010). Diccionario médico. El Manual Moderno.',
      link: '',
    },
    {
      referencia:
        'Dabanch, J. (2003). Zoonosis. Revista Chilena de Infectología, 20 (1), 47 - 51.',
      link: 'https://scielo.conicyt.cl/pdf/rci/v20s1/art08.pdf ',
    },
    {
      referencia:
        'Decreto No 596 de 2011. [Alcaldía Mayor de Bogotá]. Por medio del cual se adopta la política distrital de salud ambiental para Bogotá D.C. 2011-2023. 19 de diciembre de 2011.',
      link:
        'http://www.saludcapital.gov.co/DocumentosPoliticasEnSalud/POL%C3%8D.%20SALUD%20AMBIENTAL.%20DECRETO%20NO%20596%20DE%202011.PDF',
    },
    {
      referencia:
        'Decreto No. 3518 de 2006. [Ministerio de Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. 8 de junio 2017.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Idrovo, A. J. (2000). <em>Epidemias, endemias y conglomerados: conceptos básicos.</em> Revista Facultad de Medicina de la Universidad Nacional de Colombia, 48(3), 175 - 180. ',
      link:
        'https://revistas.unal.edu.co/index.php/revfacmed/article/download/19623/20690',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2017). <em>Guía para la vigilancia por laboratorio de Enfermedad Diarreica Aguda (EDA) y Enfermedad Transmitida por Alimentos (ETA) de origen bacteriano.</em>',
      link:
        'https://www.ins.gov.co/buscador-eventos/Informacin%20de%20laboratorio/Gu%C3%ADa%20para%20la%20vigilancia%20por%20laboratorio%20de%20EDA%20y%20ETA.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2022). <em>Protocolo de vigilancia en salud pública para el cólera.</em>',
      link:
        'https://www.ins.gov.co/buscador-eventos/Lineamientos/Pro_C%C3%B3lera.pdf  ',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2017). <em>Protocolo de vigilancia para Infección Respiratoria Aguda (IRA).</em>',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/PRO-Infecci%C3%B3n-respiratoria-aguda.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2017). <em>Protocolo en vigilancia pública Hepatitis A.</em>',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2016). <em>Enfermedades Vehiculizadas por Agua (EVA) e Índice de Riesgo de la Calidad Agua (IRCA) en Colombia 2015.</em> ISBN:978-958-13-0174-4',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2015).  Enfermedades Vehiculizadas por Agua-EVA e Índice de Riesgo de la Calidad-IRCA. Colombia 2014.',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2015%20Enfermedades%20Vehiculizadas%20por%20Agua%202014.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2014). <em>Protocolo de vigilancia en Salud pública. Enfermedades transmitidas por alimentos.</em> Instituto Nacional de Salud.',
      link: '',
    },
    {
      referencia:
        'López, S. F. (2013). <em>Introducción a la salud pública.</em> Universidad de San Carlos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud & Instituto Nacional de Salud. (2017). <em>Lineamiento táctico y operativo de la estrategia de gestión integrada para las enfermedades transmitidas por vectores (EGI-ETV) a nivel territorial.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/Lineamiento-Tatico-operativo-egi-Etv.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). <em>Guía metodológica nacional para la caracterización de fuentes de información para la salud en Colombia.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/guia%20definitiva%2019062014.pdff',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). <em>Modelo operativo de inspección, vigilancia y control para salud ambiental.</em>',
      link: 'https://www.minsalud.gov.co/RID/modelo-operativo-ivc-t.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2 de Mayo de 2017). <em>Enfermedades diarreicas.</em> OMS.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/diarrhoeal-disease#:~:text=Hay%20tres%20tipos%20cl%C3%ADnicos%20de,dura%2014%20d%C3%ADas%20o%20m%C3%A1s.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2011). <em>Guía vigilancia de las enfermedades transmitidas por alimentos.</em>',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=10540:2015-capitulo-i-guia-veta-inocuidad-de-alimentos&Itemid=0&lang=es#gsc.tab=0',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2018). <em>Indicadores de salud aspectos conceptuales y operativos.</em> Washington D.C. ISBN: 978-92-75-32005-1',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/49058/9789275320051_spa.pdf?sequence=5&isAllowed=y',
    },
    {
      referencia:
        'Resolución No 1229. Ministerio de Protección Social. Colombia. 23 de abril de 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1229-de-2013.pdf',
    },
    {
      referencia:
        'Secretaría Distrital de Salud de Bogotá. (2011). <em>Control vectorial de artrópodos y roedores plaga. Secretaría Distrital de Salud de Bogotá.</em>',
      link: '',
    },
    {
      referencia:
        'Whittembury, A. (2011). <em>El perfil epidemiológico y el análisis de situación del país.</em>',
      link: 'http://www.esperantra.org/biblioteca/peaepweb.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuadora Instrucciona',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Liliana Morales Gualdrón',
          cargo: 'Responsable línea de producción Distrito Capital',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
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
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Revisora de estilo',
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
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
