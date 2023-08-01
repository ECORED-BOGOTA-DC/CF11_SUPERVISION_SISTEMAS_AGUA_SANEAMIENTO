<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La salud pública es la disciplina enfocada en la protección de la población mediante estrategias de promoción y prevención de la enfermedad, por ello es necesario implementar y establecer condiciones de riesgo de acuerdo a normas técnicas, buscando promocionar acciones de acuerdo con normatividad.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra diagrama de síntesis del componente de formación condiciones de riesgo teniendo en cuenta: salud pública, enfermedad, conceptos de epidemiologia, política distrital de salud ambiental, modelo de inspección vigilancia y control (IVC) y recolección de información en salud")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
