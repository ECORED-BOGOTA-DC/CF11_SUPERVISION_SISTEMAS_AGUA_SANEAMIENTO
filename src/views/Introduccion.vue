<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .container-100.d-flex.flex-wrap.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      img.col-lg-5.mb-4.mb-lg-auto.img-movil(src="@/assets/curso/temas/img-1.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7.ps-lg-4
        p.mb-5(data-aos="fade-right") Para definir  el concepto de salud, es necesario tener en cuenta las diferentes perspectivas asociadas a los puntos de vista cultural, histórico, social e incluso religioso, las cuales fueron adoptadas por la Organización Mundial de la Salud (OMS) en 1947, definiendo la salud como:
        .bloque-texto-d.p-4.pb-0.bloque-texto-d-edit.mb-5
          .bloque-texto-d__texto.mb-2.d-md-flex
            i.fas.fa-quote-left(style="color: #3BC192; font-size: 28px")
            p.text-regular.fw-bold(style="font-size: 20px" data-aos="fade-left") <em>Un estado de completo bienestar físico, mental y social y no solamente la ausencia de afecciones o enfermedades.</em>
          .bloque-texto-d__autor.d-flex.justify-content-end
            .h5.mb-0 (Organización Panamericana de la Salud, 2018, p. 4).
            i.fas.fa-quote-right(style="color: #3BC192; font-size: 28px")
        p.mb-0(data-aos="fade-right") Esta definición de salud implica el análisis transversal y más amplio del tema, mucho más que las definiciones usuales, que conciben la salud como ausencia de enfermedad, lo que implica que para establecer el estado de salud de una persona no es suficiente con que ésta no presente dolencias físicas, sino que además implica tener en cuenta su entorno, condiciones de vida, ambientales y emocionales, que puedan llegar a alterar su calidad de vida.
    
    .tarjeta.p-3.mb-5(style="background-color: #F6F6F6; box-shadow: 0 3px 4px 2px #00000010")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img-action-btn.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.mb-1 ¿Qué es la salud pública?
              p.mb-0 Los invitamos a ver el siguiente video para contextualizar a través de un ejemplo la salud Pública.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7_KY68QjmJo" target="_blank" style="min-width: ")
                span.pe-3 Ir a página
                img(src="@/assets/curso/temas/img-2.svg" style="max-width: 15px")
    p.mb-0(data-aos="fade-right") Una estrategia transversal de la Política de Atención Integral en Salud, que se fundamenta en la articulación e interacción de los agentes del sistema de salud y otros sectores para identificar, evaluar, medir, intervenir (desde la prevención hasta la paliación) y llevar a cabo el seguimiento y monitoreo de los riesgos para la salud de las personas, familias y comunidades, orientada al logro de resultados en salud y al bienestar de la población. La gestión del riesgo en salud, GIRS se anticipa a las enfermedades y los traumatismos para que éstos no se presenten o se detecten y traten precozmente para impedir, acortar o paliar su evolución y consecuencias.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
