<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelo de Inspección Vigilancia y Control (IVC)
    
    p.mb-5 A continuación, se explicará qué es un Modelo IVC.

    .tarjeta.p-4.p-md-5.mb-5(style="background-color: #FFF0DF;")
      div(style="overflow: hidden;")
        SlyderA.slyder-a-edit(tipo="b")
          .row.align-items-center.col-xl-10.mx-auto(style="margin-bottom: -3rem")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-1.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-2.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-3.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-4.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-5.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-6.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-7.svg')
          .row.align-items-center.col-xl-10.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema4/img-8.svg')
    p.mb-5 Uno de los documentos más importantes es el de inspección y vigilancia sanitaria, que brinda el Ministerio de Salud y Protección Social, de la página 11 a la 39, el cual se puede consultar a continuación:

    .tarjeta.color-acento-botones.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/img-3.svg" style="max-width: 50px; min-width: 50px")
        .col.ps-4
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.mb-1 Llamado modelo operativo
              p.mb-0 Para ampliar la información puede consultar el siguiente documento
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/modelo-operativo-ivc-t.pdf')" target="_blank")
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

<style lang="sass">
.slyder-a-edit
  .horizontal-scroll__wrapper
    overflow: visible !important
</style>
