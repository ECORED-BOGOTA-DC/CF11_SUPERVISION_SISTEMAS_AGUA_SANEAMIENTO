<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Salud pública
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.col-xl-4.mx-auto.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/img-1.svg' style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")
      .col-12.col-lg-7.col.xl-8.ps-lg-4.ms-auto
        .tarjeta.tarjeta-row
          p.mb-0 El concepto de salud, en el sentido de un estado completo de bienestar, incluyendo factores internos y externos de la persona, implica el desarrollo de un modelo socioeconómico de salud, mediante el cual se incluyan los principales factores determinantes de la salud y sus interacciones.
            br
            br
            |Para ello, se puede tomar como base el modelo descrito por López, S. (2013) en su documento Introducción a la salud pública, en el cual presenta los diferentes determinantes de la salud por medio de capas de influencia sobre el individuo, de la siguiente forma:

    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5(style="background-color: #FFF0DF")
      SlyderA(tipo="b")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0.offset-xl-1(data-aos="fade-right")
            p En el medio se encuentra el individuo con los factores que influyen en su salud y que no pueden ser modificados, como son la edad, el sexo y determinantes genéticos, los cuales son conocidos como factores constitucionales de la salud.
          .order-lg-2.order-1.col-lg-6.col-xl-4.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-2.svg' style="max-width: 375px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0.offset-xl-1(data-aos="fade-right")
            p Alrededor se encuentran las capas que representan los factores determinantes en la salud que pueden ser modificados, como son por ejemplo, los estilos de vida saludables, que implican cambios en hábitos nocivos, por hábitos protectores de la salud. En definitiva, los aspectos descritos anteriormente y los programas asociados a los mismos se conocen como promoción de la salud, entre lo que se encuentra las campañas en contra del uso de tabaco, fomento de actividad física, entre otras. 
          .order-lg-2.order-1.col-lg-6.col-xl-4.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-3.svg' style="max-width: 375px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0.offset-xl-1(data-aos="fade-right")
            p En una tercera capa, se tiene en cuenta el entorno comunitario del individuo y cómo este puede afectar sus esfuerzos a través de su influencia en la adopción o no de sus hábitos saludables, por ejemplo, desestimular el consumo de tabaco en un individuo que se encuentra rodeado de personas que fuman en sus entornos familiar y laboral, representando un factor de dificultad mayor.
          .order-lg-2.order-1.col-lg-6.col-xl-4.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-4.svg' style="max-width: 375px" data-aos="fade-left" alt="Imagen decorativa")
        .row.align-items-center
          .order-lg-1.order-2.col-lg-6.col-xl-4.mb-4.mb-md-0.offset-xl-1(data-aos="fade-right")
            p En la capa más externa se encuentran los determinantes que tienen una influencia más amplia. Allí se encuentran las condiciones laborales, condiciones de vida, acceso a los alimentos, servicios de saneamiento básico y agua potable, accesibilidad a los servicios de salud, calidad y condiciones de vivienda, que afectan de igual forma las condiciones y estado de salud del individuo.
          .order-lg-2.order-1.col-lg-6.col-xl-4.mx-auto.mb-4.mb-lg-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-5.svg' style="max-width: 375px" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mb-5 Este modelo representa las principales capas de influencia determinantes de la salud como se muestra en la (Figura 1). En el Centro es un factor individual y constitucional que afectan su salud, pero no se cambian. Alrededor de esto, existen posibles determinantes cambiables, comenzando con el estilo de vida, el objeto de décadas de esfuerzos para fortalecer la salud. Los determinantes, considerados más amplios o profundos, desde el punto de vista de su influencia, están asociados con las condiciones de vida y trabajo, alimentos y acceso a los servicios principales, además de las condiciones socioeconómicas, culturales y ambientales presentadas en el más nivel externo.
    
    .col-lg-10.col-xl-8.mx-auto
      .titulo-sexto.color-secundario
        h5 Figura 1.
        span.mb-0 Modelo socioeconómico de salud
      figure.mb-5(data-aos="fade-left")
        img.mb-3(src='@/assets/curso/temas/tema2/img-6.svg' alt='Muestra condiciones socioeconómicas, culturales y ambientales, redes sociales y comunitarias y estilos de vida del individuo, transversalizadas por  agricultura, educación, ambiente laboral, condiciones de vida y trabajo, desempleo, agua y saneamiento, servicios de atención de salud y vivienda.')
        figcaption <b>Nota.</b> Adaptado de López, S. (2013). Introducción a la salud pública.

    p.mb-5 Teniendo en cuenta los determinantes de salud descritos, es necesario implementar estrategias que logren influir positivamente en cada una de las capas y mejoren las condiciones de la población, lo cual se logra a través de la implementación de la salud pública, que es descrita por la Organización Panamericana de la Salud como: 

    .bloque-texto-d.p-4.pb-0.bloque-texto-d-edit.mb-5.col-lg-10.col-xl-8.mx-auto
      .bloque-texto-d__texto.mb-2.d-md-flex
        i.fas.fa-quote-left(style="color: #3BC192; font-size: 28px")
        p.text-regular.fw-bold(style="font-size: 20px" data-aos="fade-left") <em>“El esfuerzo organizado de la sociedad, principalmente a través de sus instituciones de carácter público, para mejorar, promover, proteger y restaurar la salud de las poblaciones por medio de actuaciones de alcance colectivo”</em>
      .bloque-texto-d__autor.d-flex.justify-content-end
        .h5.mb-0 (López, S., 2013, p. 2).
        i.fas.fa-quote-right(style="color: #3BC192; font-size: 28px")
    
    p.mb-5 El Estado colombiano, como garante del bienestar de sus ciudadanos, implementa diferentes programas y estrategias para la protección de la salud pública.  Un ejemplo, es el Decreto 3518 (2006), por medio del cual se reglamenta el Sistema de Vigilancia en Salud pública para la República de Colombia (Sivigila), dentro del cual se definen:

    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      figure.mb-5.col-lg-10.col-xl-8.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-7.svg' alt='muestra diagrama con actividades del sistema de vigilancia publica donde definen:  Actividades de salud pública, Responsables del sistema de vigilancia en salud pública y sus funciones y Plan decenal de salud pública.')
    Separador 
    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1. Actividades de salud pública
    
    p.mb-5 La salud pública, según López (2013), se enfoca básicamente en las siguientes cuatro (4) actividades:

    .d-flex.flex-wrap.align-items-start
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img-8.svg' style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Protección de la salud" data-aos="fade-left")
            p Son actividades de salud pública, dirigidas al control sanitario del medio ambiente, en su sentido más amplio, para el control de la contaminación del suelo, agua, aire y de los alimentos. Además, se incluye la seguridad en el trabajo y en el transporte.
          .row(titulo="Promoción de la salud" data-aos="fade-left")
            p Son actividades que intentan fomentar la salud de los individuos y colectividades, promoviendo la adopción de estilos de vida saludables, mediante intervenciones de educación sanitaria a través de medios de comunicación de masas, en las escuelas y en atención primaria. Así, para toda la comunidad que no tiene los recursos necesarios para la salud, la educación sanitaria debe ser complementada con los cambios necesarios en el medio ambiente y en las condiciones sociales y económicas, de tal forma que permita a los ciudadanos el ejercicio efectivo de los estilos de vida saludables y la participación en la toma de decisiones que afecten su salud.
          .row(titulo="Prevención de la enfermedad" data-aos="fade-left")
            p Se basa en intervenciones de prevención primaria, prevención secundaria o detección precoz de enfermedades y de prevención terciaria o de contención y rehabilitación de la secuela dejada por el o los daños de las funciones físicas, psíquicas o sociales.
          .row(titulo="Restauración de la salud" data-aos="fade-left")
            p Consiste en todas las actividades que se realizan para recuperar la salud en caso de su pérdida, que son responsabilidad de los servicios de asistencia sanitaria que despliegan sus actividades en dos (2) niveles: atención primaria y atención hospitalaria.
    
    Separador 
    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2. Responsables del sistema de vigilancia en salud pública y sus funciones
    
    p.mb-5 Para dar cumplimiento a las actividades de la salud pública anteriormente descritas, por medio del Decreto 3518 (2006), en su capítulo II, artículo 6°, se establecieron los responsables del sistema y sus funciones, dentro de las cuales se pueden resaltar algunas como:

    .titulo-edit
      h3 Ministerio de protección social

    img.ps-md-5.ms-md-3.mb-5(src='@/assets/curso/temas/tema2/img-9.svg' style="max-width: 328px" alt="Imagen decorativa")

    .d-flex.flex-wrap
      ol.lista-ol--cuadro.lista-ol--separador.col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1
        li.d-flex
          .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/decorador-lista.svg" style="max-width: 20px")
          | Como ente de vigilancia será quien dirigirá el Sivigila.
        li.d-flex
          .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/decorador-lista.svg" style="max-width: 20px")
          | Definirá políticas, planes, programas, proyectos y demás acciones técnicas y operativas para el Sivigila y para cualquier problemática de salud pública nacional.
        li.d-flex
          .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/decorador-lista.svg" style="max-width: 20px")
          | Coordinará la participación de las organizaciones de salud y de otros actores.
        li.d-flex
          .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/decorador-lista.svg" style="max-width: 20px")
          | Será quien brinde asistencia técnica a las entidades adscritas del orden nacional, al igual que integrará a los laboratorios, tanto distritales como regionales, al Sivigila.
        li.d-flex
          .mb-0.lista-ol--cuadro__vineta(style="background-color: transparent")
            img(src="@/assets/curso/temas/decorador-lista.svg" style="max-width: 20px")
          | Una de sus funciones más relevantes es que “realizará el análisis de situaciones de salud del país y tendrá la responsabilidad de declarar la emergencia nacional en salud pública” (Decreto 3518, 2006, p. 4).
      img.col-lg-5.col-xl-4.img-movil.img-edit-offset.order-1.order-lg-2.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/img-10.svg' style="max-width: 400px" alt="Imagen decorativa")
    
    p.mb-5 <b>El Instituto Nacional de Salud (INS) y el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), tienen como funciones relevantes: </b>

    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      figure.mb-5.col-lg-8.col-xl-6.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-11.svg' alt="Imagen decorativa")

    .titulo-edit.mb-5
      h3 Direcciones departamentales y distritales de salud
    
    p.mb-5 Siendo las entidades rectoras del Sivigila a nivel territorial, deben de acatar todas las funciones dispuestas en el Decreto 3518 (2006) o el que lo sustituya, dentro de las cuales se pueden resaltar:

    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      figure.mb-5.col-lg-8.col-xl-6.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-12.svg' alt='Muestra pirámide con funciones dispuestas en el DEcreto 3518 (2006) donde resalta: a) Gerenciar el sistema Sivigila en su territorio. b) Difundir todo el sistema de información del Ministerio de Salud. c) Vigilar y coordinar las actividades de operación del sistema Sivigila. d) Apoyar a los territorios en acciones de control epidemiológico. e) Cumplir y hacer cumplir todas las normas y leyes referentes a salud pública.')

    .titulo-edit.mb-5
      h3 Direcciones municipales de salud
    
    p.mb-5 Al igual que otras entidades territoriales, las direcciones municipales se enfocan en procesos básicos de vigilancia, de acuerdo con la Ley 715 (2001). Dentro de sus funciones se pueden resaltar: 

    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      figure.mb-5.col-lg-8.col-xl-6.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-13.svg' alt='Imagen decorativa')

    .titulo-edit.mb-5
      h3 Entidades administradoras de planes de beneficios de salud
    
    p.mb-5 Entre las cuales se encuentran entidades promotoras de salud y entidades adaptadas. Dentro de sus funciones se encuentran:

    .container-100.py-5.mb-5(style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, #E8F3FD 50%, rgba(255,255,255,1) 100%);")
      figure.mb-5.col-lg-10.col-xl-8.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-14.svg' alt='Imagen decorativa')

    .titulo-edit.mb-5
      h3 Unidades primarias generadoras de datos
    
    p.mb-5 Son aquellas Instituciones Prestadoras de Salud (IPS), laboratorios clínicos y bancos de sangre u órganos, entre otros, que deben cumplir con funciones como:

    .row.justify-content-center
      .col-lg-4.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.d-flex.align-items-center
            img(src='@/assets/curso/temas/tema2/img-15.svg' alt='AvatarTop' style="filter: drop-shadow(0 3px 4px 2px #00000010)")
          .tarjeta.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 7px 4px 2px #00000010")
            .p-4
              p.mb-0 Implementar todas las directrices del Ministerio de Salud
      .col-lg-4.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.d-flex.align-items-center
            img(src='@/assets/curso/temas/tema2/img-16.svg' alt='AvatarTop' style="filter: drop-shadow(0 3px 4px 2px #00000010)")
          .tarjeta.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 7px 4px 2px #00000010")
            .p-4
              p.mb-0 Informar y actualizar bases de datos de vigilancia
      .col-lg-4.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.d-flex.align-items-center
            img(src='@/assets/curso/temas/tema2/img-17.svg' alt='AvatarTop' style="filter: drop-shadow(0 3px 4px 2px #00000010)")
          .tarjeta.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 7px 4px 2px #00000010")
            .p-4
              p.mb-0 Analizar y utilizar la información de vigilancia para la toma de decisiones
      .col-lg-4.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.d-flex.align-items-center
            img(src='@/assets/curso/temas/tema2/img-18.svg' alt='AvatarTop' style="filter: drop-shadow(0 3px 4px 2px #00000010)")
          .tarjeta.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 7px 4px 2px #00000010")
            .p-4
              p.mb-0 Notificar cualquier evento sujeto de vigilancia
      .col-lg-4.d-flex
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.d-flex.align-items-center
            img(src='@/assets/curso/temas/tema2/img-19.svg' alt='AvatarTop' style="filter: drop-shadow(0 3px 4px 2px #00000010)")
          .tarjeta.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 7px 4px 2px #00000010")
            .p-4
              p.mb-0 Participar en las estrategias de vigilancia especiales planteadas por la autoridad sanitaria, entre otras

    .titulo-edit.mb-5
      h3 Otras entidades
    
    .cajon.color-acento-botones.p-4.mb-5.col-lg-8.mx-auto(style="background-color: #98D8D7")
      p.mb-0(data-aos="fade-left") Aquellas entidades que antes de la entrada en vigor del presente decreto no participaban en los procesos de vigilancia, deberán integrarse funcionalmente al Sistema de Vigilancia en salud pública (Sivigila) y a la operación del mismo, en la medida en que sean diseñados e implementados modelos de vigilancia en los que puedan participar como proveedores de información de interés en salud pública (Decreto 3518, 2006).

    p.mb-5 Para ampliar la información acerca del funcionamiento del Sistema de Vigilancia en Salud Pública se recomienda consultar el Decreto 3518 de 2006:

    .tarjeta.color-acento-botones.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.mx-auto(src="@/assets/curso/temas/img-3.svg" style="max-width: 50px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(data-aos="fade-left")
              h3.mb-1 Decreto 3518 de 2006
              p.mb-0 Para ampliar la información puede consultar el siguiente documento
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/Decreto-3518-de-2006.pdf')" target="_blank")
                span.pe-3 Descargar 
                i.fas.fa-file-download
    Separador
    .titulo-segundo.color-acento-botones
      h2#t_2_3 2.3. Plan decenal de salud pública
    
    p.mb-5 Para poner en marcha las actividades del sistema de salud se desarrollan los planes decenales de salud pública, los cuales se proyectan cada 10 años, atendiendo las necesidades identificadas para el país. Actualmente, está vigente el Plan Decenal correspondiente a los años 2012 - 2021, en el cual se priorizan las siguientes siete (7) dimensiones para atender las necesidades en Salud pública (Ministerio de Salud y Protección Social, 2013).

    .tarjeta.p-4.mb-5(style="background-color: #EBF4FD")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="1")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Salud ambiental
            p Conjunto de políticas, planificadas y desarrolladas de manera intersectorial, con la participación de los diferentes actores sociales, que buscan materializar el derecho a un ambiente sano, que favorezca y promueva la calidad de vida y salud de la población de presentes y futuras generaciones, a través de la transformación positiva de los determinantes sociales, sanitarios, laborales, ocupacionales y ambientales.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-1.svg' style="max-width: 305px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="2")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Vida saludable y condiciones no transmisibles
            p Conjunto de políticas e intervenciones transectoriales que buscan el bienestar y el disfrute de una vida sana en las diferentes etapas del transcurso de la vida, promoviendo modos, condiciones y estilos de vida saludables en los espacios cotidianos de las personas, familias y comunidades, así como el acceso a una atención integrada de condiciones no transmisibles con enfoque diferencial.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-2.svg' style="max-width: 345px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="3")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Convivencia social y salud mental
            p Espacio de acción transectorial y comunitario que, mediante la promoción de la salud mental y la convivencia, la transformación de problemas y trastornos prevalentes en salud mental y la intervención sobre las diferentes formas de la violencia, contribuye al bienestar y al desarrollo humano y social en todas las etapas del curso de la vida, con equidad y enfoque diferencial, en los territorios cotidianos.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-3.svg' style="max-width: 319px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="4")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Seguridad alimentaria y nutricional
            p Acciones que buscan garantizar el derecho a la alimentación sana con equidad, en las diferentes etapas del ciclo de vida, mediante la reducción y prevención de la malnutrición, el control de los riesgos sanitarios y fitosanitarios de los alimentos y la gestión intersectorial de la seguridad alimentaria y nutricional con perspectiva territorial.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-4.svg' style="max-width: 295px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="5")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Derechos y sexualidad
            p Conjunto de acciones intersectoriales que se orientan a promover las condiciones sociales, económicas, políticas y culturales que permiten el ejercicio libre, autónomo e informado de la sexualidad como un derecho humano, para el desarrollo de las potencialidades de las personas durante todo su ciclo vital, así como de los grupos y comunidades, desde un enfoque de género y diferencial.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-5.svg' style="max-width: 225px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="6")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Vida saludable libre de enfermedades transmisibles
            p Espacio de acción transectorial y comunitario que busca garantizar el disfrute de una vida sana, en las diferentes etapas del ciclo de vida, promoviendo modos, condiciones y estilos de vida saludables en los territorios cotidianos de las personas, familias y comunidades, así como el acceso a una atención integrada ante situaciones, condiciones y eventos transmisibles, con enfoque diferencial y equidad social, desde una perspectiva de desarrollo humano sostenible. 
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-6.svg' style="max-width: 292px" alt="Imagen decorativa")
        .row.align-items-center.col-xl-11.mx-auto.justify-content-between(titulo="7")
          .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
            h3 Salud pública en emergencias y desastres
            p Espacio de acción transectorial y comunitario que propende por la protección de individuos y colectivos ante los riesgos de emergencias o desastres, procurando reducir los daños que afectan la salud humana y ambiental, a través de la gestión integral del riesgo como un proceso social que orienta la formulación, ejecución, seguimiento y evaluación de políticas, estrategias, planes, programas y acciones permanentes para el conocimiento, la reducción del riesgo y el manejo de emergencias y desastres, con el fin de contribuir en la seguridad sanitaria, el bienestar, la calidad de vida de las personas y el desarrollo sostenible en el territorio nacional.
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/lt-7.svg' style="max-width: 266px" alt="Imagen decorativa")

</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema2',
  components: { TabsA },
  data: () => ({}),
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
.container-card-folder
  display: flex
  margin-bottom: 2rem
  .container-number
    width: 105px
    min-width: 105px
    height: 105px
    display: flex
    justify-content: center
    align-items: center
    background-color: #0078BB
    color: white
    font-weight: bold
    font-size: 60px
    margin-top: 1.5rem
    position: relative
    border-top-left-radius: 8px
    border-bottom-left-radius: 8px
  .container-folder
    border-radius: 8px
    background: linear-gradient(0deg, #DEDEDE 0%, white 50%, #DEDEDE 100%)
    flex: 1 0 0%
    box-shadow: 0 0 5px 2px #00000010
    .sup-folder
      height: 1.5rem
    h3
      padding: .4rem 1.5rem
      background-color: #0078BB
      min-height: 40px
      display: flex
      align-items: center
      color: white
      margin-bottom: 0
    .container-text-folder
      padding: 1rem 1.5rem
      min-height: 89px
  @media (max-width: 768px)
    .container-number
      min-width: 60px
      width: 60px
      height: 60px
      font-size: 30px
.pasos-a
  .pasos-a__linea
    .pasos-a__linea__esquina
      .pasos-a__linea__esquina__linea
        border-radius: 0
.tarjeta-row
  background-color: #E8E8E8
  position: relative
  padding: 2rem
  &::before
    content: ''
    position: absolute
    left: -100px
    top: 50%
    transform: translateY(-50%)
    border-top: 90px solid transparent
    border-right: 50px solid #E8E8E8
    border-bottom: 90px solid transparent
    border-left: 50px solid transparent
  @media (max-width: 1200px)
    &::before
      border: none
.img-edit-offset
  margin-top: -5rem
  @media (max-width: 991px)
    margin-top: auto
</style>
