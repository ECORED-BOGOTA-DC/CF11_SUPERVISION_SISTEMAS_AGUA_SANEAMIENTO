<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recolección de datos

    .mb-5.container-100(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-0 Dentro del contexto de los sistemas de información en salud, podría definirse una fuente de información como el conjunto de instrumentos que buscan producir información fiable, de calidad y oportuna a partir de datos sanitarios y no sanitarios (Ministerio de Salud y Protección Social, 2014, p. 12).
        br
        br
        |Según la Ministerio de Salud (2014), en su documento “Guía Metodológica Nacional para la caracterización de fuentes de información para la salud en Colombia, en los sistemas de información sanitarios”, se identifican dos grupos para las fuentes de información:
    
    .d-flex.flex-wrap.align-items-center.p-4.mb-5(style="background-color: #F0FBFF")
      img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/img-1.svg" style="max-width: 88px")
      .mb-0.col-md.ps-md-4
        h3 Información basada en la población:
        p.mb-0 Incluyen los censos, registro de hechos vitales y las encuestas poblacionales.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.col-lg-10.mx-auto.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.jpg')})`}"
      )
      .bloque-texto-g__texto.d-block.p-4.py-lg-5
        h4 Información basada en los servicios de salud:
        br
        p.mb-0 Incluye sistemas rutinarios de información en salud, sistemas clásicos de vigilancia de las enfermedades, registro de las actividades de prestación de servicios de salud, registro de centros de salud sobre causas de muerte, atenciones ambulatorias, recursos de salud, recursos humanos, infraestructura física, cuentas en salud a nivel nacional y territorial. 
    p.mb-5 Otras fuentes de información que pueden complementar un sistema de información en salud están relacionadas con la investigación en salud (Ej. Los ensayos clínicos o estudios longitudinales de las comunidades) (Ministerio de Salud y Protección Social, 2014, p. 12).

    .titulo-edit.mb-5
      h3 Caracterización de las fuentes de información
    
    p.mb-5 Lograr, caracterizar la fuente de información permite hacer una selección de las más apropiadas y de su aplicación consecutiva, buscando reducir a toda costa la incertidumbre y la posibilidad de error de tomar datos no reales. Para ello se sugiere realizar 12 pasos: 

    PasosA.col-md-10.col-lg-8.col-xl-6.mx-auto.color-primario.mb-5(tipo="n")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Revisión documental y de recursos. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-1.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-2.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Análisis de la normatividad.
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Revisión y diligenciamiento de la ficha de caracterización.
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-3.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-4.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Proceso de producción de la fuente basado en el ciclo Planear, Hacer, Verificar y Actuar (PHVA). 
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Flujo de información para la fuente.
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-5.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-6.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Catálogo de variables.
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Protocolos de seguridad de la fuente y confidencialidad de los datos. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-7.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-8.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Asistencia técnica.
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Manual de auditoría. 
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-9.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-10.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Validación de variables. 
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        p.order-2.order-md-1.mb-0.col-md.pe-md-4(data-aos="fade-right") Indicadores de gestión de la fuente: Cobertura, Calidad y Oportunidad (CCO).
        img.mx-auto.order-1.order-md-2.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-11.svg" style="max-width: 131px" data-aos="fade-left" alt="Imagen decorativa")
      .d-flex.flex-wrap.align-items-center.col-lg-9.mx-auto
        img.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema5/pa-12.svg" style="max-width: 131px" data-aos="fade-right" alt="Imagen decorativa")
        p.mb-0.col-md.ps-md-4(data-aos="fade-left") Línea de base.

    p.mb-5 Para ampliar la información acerca del uso, ventajas y desventajas de los sistemas o mecanismos de recolección de información, es importante consultar la “Guía metodológica nacional para la caracterización de fuentes de información para la salud en Colombia”, de las páginas 13 a la 21. En cuanto a la caracterización de las fuentes de información, consultar las páginas de la 25 a la 37.

    .tarjeta.color-acento-botones.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/img-3.svg" style="max-width: 50px; min-width: 50px")
        .col.ps-4
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.mb-1 Guia definitiva
              p.mb-0 Para ampliar la información puede consultar el siguiente documento
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/19062014.pdf')" target="_blank")
                span.pe-3 Descargar 
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
