<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 La Educación STEM

    p.mt-4 Cada momento histórico del ser humano está caracterizado por unas dinámicas sociales, políticas, económicas, tecnológicas y ambientales que determinan las formas de enseñanza y aprendizaje concebidas en los proyectos de las instituciones de educación. El siglo XXI no ha sido ajeno a estas dinámicas a partir de nuevas metodologías, estrategias, currículos y enfoques de educación, por lo que el STEM es una alternativa que incide en las formas de enseñar y aprender del presente.

    .row.mt-5

        .col.mt-5
            p #[strong La educación STEM] se presenta como la forma de educar de manera integradora sin parcelar el conocimiento, buscando que los estudiantes puedan aprender y utilizar la Ciencia y la Ingeniería para la solución de los problemas que se les presentan en la sociedad, preparando a los futuros ciudadanos del siglo XXI que están ahora rodeados de manera permanente de tecnología para que puedan entenderla, utilizarla y tomar decisiones acertadas sobre ella, y lograr desarrollar nuevas soluciones con el apoyo de la Ciencia y la Ingeniería.

        .col-auto.text-center
            img(src='@/assets/curso/tema1/1.svg' alt='La Educación STEM' style="display:inline;width:auto;height:auto;")

    p.mt-0 #[strong ¿Qué es la educación STEM?]
            
    p.mt-3 La educación STEM según Botero (2018) está conformada del acrónimo en inglés STEM. Cabe mencionar que en nuestra lengua castellana el acrónimo es CTIM, pero acá se hará referencia a STEM. Para descubrir su significado y otra información se debe explorar el siguiente recurso de aprendizaje que ayudará a identificar elementos básicos de la educación STEM.

    .text-center
      img.mt-5(src='@/assets/curso/tema1/2.svg' alt='La Educación STEM' style="display:inline;width:auto;height:auto;")


    .row.mt-5
      .col-md-4.col-lg.mb-5.pl-0.pr-0.ml-0.mr-0
        .tarjeta-Avatar
          img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-4(style="background-color:#FFC93C;border-radius:0px;min-height:500px;")
            .h5.mt-3.text-center(style="color:#12263F;") ¿Cuál cree son los orígenes de la ciencia?
            p(style="color:#12263F;") Es una pregunta interesante y que en cualquier momento de la existencia se hace, pero, #[strong(style="color:#12263F;") ¿cuál es su origen?, ¿de dónde viene?] #[br] Se sugiere observar el siguiente video para fomentar su curiosidad.

            .mt-5
              a.btn.btn-light(style="color:#12263F;" target="_blank" href="https://www.youtube.com/watch?v=kspO2QJhEsY") Ver video #[i.fas.fa-play-circle(style="color:#12263F;")]

      .col-md-4.col-lg.mb-5.pl-0.pr-0.ml-0.mr-0
        .tarjeta-Avatar
          img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-4(style="background-color:#9DDFD3;border-radius:0px;min-height:500px;")
            .h5.mt-3.text-center(style="color:#12263F;") ¿Qué es la tecnología?
            p(style="color:#12263F;") El entorno natural se ha transformado a partir del conocimiento desarrollado por el ser humano, ¿quién ha aplicado este a su contexto?, ¿será que todo lo que existe en el mundo es tecnología? Encuentre una respuesta con las reflexiones de este curso.

      .col-md-4.col-lg.mb-5.pl-0.pr-0.ml-0.mr-0
        .tarjeta-Avatar
          img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-4(style="background-color:#CC3D60;border-radius:0px;min-height:500px;")
            .h5.mt-3.text-center ¿Qué es la ingeniería?
            p La solución de problemas hace parte de las características de la ingeniería. Para saber más sobre ella, se sugiere revisar la siguiente página web.

            .mt-5
              a.btn.btn-light(style="color:#12263F;" target="_blank" href="https://grupocarman.com/blog/2019/03/11/historia-de-la-ingenieria/") Ver recurso web #[i.fas.fa-link(style="color:#12263F;")]

      .col-md-4.col-lg.mb-5.pl-0.pr-0.ml-0.mr-0
        .tarjeta-Avatar
          img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-4(style="background-color:#81C140;border-radius:0px;min-height:500px;")
            .h5.mt-3.text-center(style="color:#12263F;") ¿Cual es el origen de las Matemáticas?
            p(style="color:#12263F;") Mayor, menor, cantidad… son algunas palabras que llevan a pensar en los números, los cuales son objeto de las matemáticas que es un universo interesante y desafiante para muchos. Para más información, revisar el siguiente documento desde la página 45 a la 60. Enlace:

            .mt-5
              a.btn.btn-light(style="color:#12263F;" target="_blank" href="http://repository.pedagogica.edu.co/bitstream/handle/20.500.12209/7761/TE-17583.pdf?sequence=1&isAllowed=y") Ver PDF #[i.fas.fa-file-pdf(style="color:#12263F;")]

    .mt-4.p-4(style="background-color:#EDFFF6;")
      p Ahora, cuando se han reconocido los aspectos que hacen referencia al acrónimo STEM, se sugiere explorar el sitio web Suturi Neff que ha creado una línea de tiempo de la historia de la educación STEM. Para más información ver el siguiente enlace:

      a.anexo.mb-4.mb-lg-0.mt-4.bg-white.col-6(href="https://www.sutori.com/story/a-history-of-stem-education--XsxYavG6btgGC6fihNfrMbYa" target="_blank")
        .anexo__icono(style="background-color:#FFC93C")
          img(src="@/assets/curso/tema1/7.svg")
        .anexo__texto
          p #[strong Enlace web.] Una historia de la educación STEM

    .titulo-segundo.mt-5
        #t_1_1.h4 1.1  ¿Cómo surge la educación STEM?

    p.mt-4 #[strong STEM] es un acrónimo creado en 1990 por la NSF (Fundación Nacional de Ciencias) de los Estados Unidos, organismo gubernamental que impulsa la investigación en todos los campos no médicos de la ciencia y la tecnología, sin embargo, es importante identificar momentos históricos del ser humano en relación con la Ciencia, la Tecnología, Ingeniería y Matemáticas.

    p.mt-3 Así, se debe empezar pensando en estas preguntas: #[strong(style="background-color:#FFE5EB;padding:4px;") ¿cómo surge la educación STEM?, ¿qué características tiene la educación STEM?;] para resolver estas preguntas y otras que surgirán, se invita a conocer los antecedentes de la educación STEM.

    LineaTiempoC.color-acento-contenido.mt-5.p-4(style="background-color:#FAFAFA")
      .row.col-10(titulo="1" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/8.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p El hombre primitivo y la naturaleza han caminado de la mano desde su aparición hace 315.000 millones de años.

      .row.col-10(titulo="2" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/9.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p Inicialmente hizo uso de sus manos y piernas como instrumentos tecnológicos para resolver problemas básicos de transporte y comunicación, entre otros.

      .row.col-10(titulo="3" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/10.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p El hombre ha hecho uso de la Ciencia, la Técnica y la Tecnología, convirtiéndolas en grandes herramientas para adaptarse y dominar la naturaleza.

      .row.col-10(titulo="4" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/11.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p En la medida de su alcance acondicionó su entorno para el desarrollo de la sociedad.


      .row.col-10(titulo="5" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/12.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p En el siglo XX se inicia el auge de la ciencia, la tecnología y las ingenierías, perfeccionando cada vez más el trabajo.

      .row.col-10(titulo="6" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/13.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p En el siglo XXI surge un mundo hiperconectado con diversos y grandes problemas que a veces parece no se logran resolver, pero se abren nuevas formas y horizontes para interactuar en la sociedad.

      .row.col-10(titulo="7" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/14.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p Dentro de los grandes desarrollos se presenta la posibilidad de cambiar los combustibles fósiles por energías limpias que no sigan contaminando el planeta.

      .row.col-10(titulo="8" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/15.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p El desarrollo de viajes interplanetarios a otros planetas como Marte.

      .row.col-10(titulo="9" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/16.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p Todo este desarrollo lleva a preparar a las futuras generaciones de ciudadanos, acorde a las necesidades de siglo XXI.

      .row.col-10(titulo="10" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/17.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p Pero se sigue enseñando de la misma manera planeada por los griegos y romanos: una escuela, un aula, un maestro o luz de sabiduría que guía a sus alumnos por el camino del conocimiento, que han sido configurados por caminos separados las Ciencias, el Lenguaje, las Matemáticas, la Historia, la Geografía, las Artes, la Educación Física… que son impartidas de manera magistral y cada una en su espacio establecido

      .row.col-10(titulo="11" style="margin:0 auto;")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/18.svg', alt='Avatar')
      
        .col-md-8.mt-4
          p La Educación STEM es  la forma de educar de manera integradora, buscando que los estudiantes puedan aprender y utilizar la ciencia y la ingeniería para la solución de los problemas, preparando a los futuros ciudadanos del siglo XXI.

    p.mt-5 En el año 1990 en los Estados Unidos surge en la Fundación Nacional para la Ciencias - NSF la idea de acuñar las asignaturas de Ciencia, Tecnología con Ingeniería y las Matemáticas (Katzenmeyer, 2006), presentando cambios en la forma como se debe enseñar la que deber ser más acorde como se la realidad actual, donde los avances tecnológicos son tan amplios que no se alcanzan a asimilar todos los impactos en la sociedad.

    p.mt-3 La reflexión que se presentó en la Fundación Nacional para la Ciencias en ese momento fue cómo la sociedad de los Estados Unidos, líder mundial en muchos campos y desarrollos tecnológicos, en especial en la innovación, se estaba quedando atrás en los avances socio-económicos (Purzer, 2014); dentro de las conclusiones más relevantes estaban:

    .mt-4.p-4(style="background-color:#EDFFF6")

      .row.mb-3
        .col-auto.mt-2
          img(src='@/assets/curso/tema1/19.svg', alt='Avatar')
        .col
          p En la actualidad la sociedad estadounidense cuenta con científicos, ingenieros y técnicos y otras profesiones que fueron formados con el mundo desarrollado hace 34 años atrás.

      .row.mb-3
        .col-auto.mt-2
          img(src='@/assets/curso/tema1/19.svg', alt='Avatar')
        .col
          p El contraste de la formación recibida y la realidad actual permite tomar decisiones acertadas para continuar manteniendo el desarrollo del liderazgo mundial.

      .row.mb-3
        .col-auto.mt-2
          img(src='@/assets/curso/tema1/19.svg', alt='Avatar')
        .col
          p Los nuevos avances configuran situaciones como la posibilidad del trabajo remoto, lo que genera en las empresas la necesidad de estar interconectadas, ya sea porque sus empleados trabajan desde casa o porque las sedes de sus empresas quedan ubicadas en diferentes lugares del mundo, estas nuevas necesidades demandas nuevas formas de enfrentar la realidad y exige el fortalecimiento y desarrollo de ciertas habilidades.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass" scoped>
.titulo-principal__numero .h3
  color: #31326F !important
.pl-0
  padding-left: 0px !important
.pr-0
  padding-right: 0px !important
.ml-0
  margin-left: 0px !important
.mr-0
  margin-right: 0px !important
</style>
