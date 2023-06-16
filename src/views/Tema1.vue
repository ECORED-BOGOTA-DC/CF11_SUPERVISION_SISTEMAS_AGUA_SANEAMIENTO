<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Enfermedad
    
    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-5 Según Brooker (2010), la enfermedad es definida como:
      .cajon.color-acento-botones.p-4.mb-5.col-lg-8.mx-auto(style="background-color: #98D8D7")
        p.mb-0(data-aos="fade-left") Cualquier desviación o interrupción de una estructura y función normales de cualquier parte del cuerpo. Se manifiesta por una serie característica de signos y síntomas y en la mayor parte de los casos se conoce la etiología, patología y pronóstico (p. 159).
      p.mb-0 Para establecer la presencia de alguna enfermedad se deben identificar: 
    
    .tarjeta--container.row.mb-4
      .d-flex.align-content-center.col-md.tarjeta.p-5(style="background-color: #9CD1F2; min-height: 599px;")
        .my-auto.pb-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema1/img-1.svg' style="max-width: 182px" data-aos="fade-left")
          h2.text-center Signos
          p.mb-0 Cualquier evidencia objetiva de enfermedad. Por ejemplo: temperatura elevada, hinchazón, ruidos respiratorios anormales o vomitar sangre (Brooker, C., 2010). Estas manifestaciones se pueden percibir a través de un examen físico que se le realiza al paciente.

      .d-flex.align-content-center.col-md.tarjeta.p-5(style="background-color: #F6CC9A; min-height: 599px;")
        .my-auto.pb-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema1/img-2.svg' style="max-width: 182px" data-aos="fade-left")
          h2.text-center Síntomas
          p.mb-0 Fenómenos o manifestaciones subjetivas de la enfermedad (Brooker, 2010). Es decir, todas aquellas manifestaciones que solo puede percibir el paciente, como lo son: mareo, fatiga, dolor.
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
  data: () => ({
    indicadorTarjetaSlide: true,
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

<style lang="sass">
.linea-tiempo-d__item
  .linea-tiempo-d__item__number
    background-color: #E8E8E8
  .linea-tiempo-d__item__content
    background-color: #E8E8E8
.container-text-img-2
  display: flex
  flex-wrap: wrap
  img
    margin-right: -10rem
    position: relative
  p
    padding: 2rem
    background-color: #F6F6F6
    border-bottom-right-radius: 50px
    border-top-left-radius: 50px
    display: flex
    align-items: center
    padding-left: 11rem
    margin-top: 2rem
  @media (max-width: 991px)
    img
      margin-left: auto
      margin-right: auto
    p
      margin-top: 0
      padding-left: 2rem
.pasos-edit
  .pasos-a__item
    .pasos-a__numero
      &::after
        border-color: black !important
      .pasos-a__circle
        background-color: white
        border: 6px solid #FFA031
        .h2
          color: black
    .pasos-a__linea
      .pasos-a__linea__esquina
        .pasos-a__linea__esquina__linea
          border-radius: 0 !important
          border-color: black
      .hor-line
        border-color: black
</style>
