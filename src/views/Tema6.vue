<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Conceptos básicos de epidemiología

    .mb-5.container-100(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      p.mb-0 Para comprender mejor la temática relacionada con epidemiología, es necesario aclarar los términos que son usados en los diferentes diagnósticos y acciones de salud pública.
        br
        br
        |Lo primero que se debe aclarar es el concepto epidemiología:
        br
        br
        |Según Last, citado por Beaglehole (2003), la epidemiología es “el estudio de la distribución y de los determinantes de los estados o fenómenos relacionados con la salud en poblaciones específicas y la aplicación de este estudio al control de los problemas sanitarios” (p. 3). La epidemiología en salud pública se utiliza básicamente en estas formas: 


    TabsA.color-acento-contenido.mb-5.tabs-edit(data-aos="fade-left")
      .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Causalidad")
        .d-flex.flex-wrap.col-lg-11.mx-auto
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema6/img-1.svg" style="max-width: 248px" alt="Imagen decorativa")
          .col-md.ps-4.ps-md-5
            p Trata de las causas, que también es llamada etiología de las enfermedades transmisibles, trabajo que sigue siendo fundamental en el área de salud pública, ya que puede conducir a la identificación de métodos preventivos. En este sentido, la epidemiología es una ciencia médica básica cuyo objetivo es mejorar la salud de la población (Beaglehole, 2003, p. 3).
      .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Historia natural")
        .d-flex.flex-wrap.col-lg-11.mx-auto
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema6/img-2.svg" style="max-width: 169px" alt="Imagen decorativa")
          .col-md.ps-4.ps-md-5
            p Es el área que estudia la evolución y resultado final de las enfermedades en individuos y grupos (Beaglehole, 2003, p. 3). 
      .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Descripción del estado de<br> salud de las poblaciones")
        .d-flex.flex-wrap.col-lg-11.mx-auto
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema6/img-3.svg" style="max-width: 177px" alt="Imagen decorativa")
          .col-md.ps-4.ps-md-5
            p Este campo busca dar conocimiento sobre la carga de enfermedad en las distintas poblaciones, ayuda a las autoridades sanitarias a tomar decisiones sobre la forma más eficiente de invertir los recursos limitados para programas de prevención y atención en salud. Se tienen ramas especializadas como lo son la epidemiología ambiental y la epidemiología ocupacional o laboral, cuyo objeto principal de estudio son poblaciones en las que hay alguna exposición ambiental específica (Beaglehole, 2003, p. 4). 
      .tarjeta.p-4(style="background-color: #F6F6F6" titulo="Valoración de la intervención")
        .d-flex.flex-wrap.col-lg-11.mx-auto
          img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema6/img-4.svg" style="max-width: 198px" alt="Imagen decorativa")
          .col-md.ps-4.ps-md-5
            p Los epidemiólogos intervienen actualmente en la evaluación de la efectividad y la eficiencia de los servicios de salud, determinando, por ejemplo, la duración adecuada de la estancia hospitalaria en cuadros específicos. Estudian también el valor del tratamiento de la hipertensión, la eficiencia de las medidas sanitarias para contrarrestar las enfermedades diarreicas, el efecto sobre la salud pública de la reducción de los aditivos de plomo en la gasolina, etc. (Beaglehole, 2003, p. 4). 
    p.mb-5 Ahora conozca otros términos importantes:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5(style="background-color: #FFF0DF")
      SlyderA(tipo="b")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Epidemia
            p Según Brés, citado por Beaglehole (2003), se habla de epidemia cuando en una comunidad o región aparece una enfermedad con un número de casos inesperado o demasiado grande para ese momento y ese lugar. Cuando se describe una epidemia, han de especificarse claramente el periodo temporal, la región geográfica y las particularidades del grupo poblacional en el que se producen los casos (Beaglehole, 2003, p. 101).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-5.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Endemia
            p Una enfermedad endémica o "endemia" es la que se presenta en una zona geográfica o un grupo de población determinados en los que las tasas de prevalencia e incidencia son relativamente altas, comparadas con las que se observan en otras zonas o poblaciones (Beaglehole, 2003, p. 102).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-6.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Pandemia
            p El término pandemia es utilizado para describir una epidemia de grandes proporciones que se expande a varios países y más de un continente (Idrovo, 2000, p. 176).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-7.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Perfil epidemiológico
            p El perfil epidemiológico es la expresión de la carga de enfermedad (estado de salud) que sufre la población y cuya descripción requiere de la identificación de las características que lo definen. Entre estas características están la mortalidad y la morbilidad (Whittembury, 2011).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-8.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Indicadores de morbilidad
            p La Organización Panamericana de la Salud (OPS), en el documento “Indicadores de salud, aspectos conceptuales y operativos” (s.f.), describe que los indicadores de morbilidad tienen como finalidad medir la ocurrencia de enfermedades, lesiones y discapacidades en poblaciones.
              br
              br
              |También indica que “es necesario recurrir a la observación directa (con encuestas y otras investigaciones), la notificación de los eventos en los sistemas de vigilancia y enfermedades en los sistemas ambulatorios, hospitalarios o registros específicos, entre otros”. (Organización Panamericana de la Salud, 2018, p. 26).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-9.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0(data-aos="fade-right")
            h4 Indicador de mortalidad
            p Los datos de mortalidad representan información demográfica, geográfica y causa de muerte. Se usa para cuantificar los problemas de salud, y determinar o monitorear prioridades en salud.
              br
              br
              |A diferencia de la morbilidad, la muerte es un evento único, claramente identificable, refleja la ocurrencia y la gravedad de una enfermedad. Se recomienda desglosar los datos sobre mortalidad, por características como causa, edad, sexo, lugar de residencia y ocurrencia, y origen étnico, entre otras, con información base para su cálculo (Organización Panamericana de la Salud, 2018, p. 29).
          .order-lg-2.order-1.col-lg-6.col-xl-8.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema6/img-10.png' style="max-width: 715px" data-aos="fade-left" alt="Imagen decorativa")
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
