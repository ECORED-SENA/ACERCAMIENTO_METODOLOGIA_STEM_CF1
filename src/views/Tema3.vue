<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Propósitos de la educación STEM

    p.mt-4 A nivel mundial existen muchas experiencias sobre la educación STEM, en especial en los Estados Unidos a partir de los estándares de tecnología y los nuevos estándares de Ciencias Naturales para las nuevas generaciones, con los cuales se ha dado una gran revolución educativa, pero a nivel de Latinoamérica no es un tema muy difundido, por lo que este curso busca dar a conocer las características de esta nueva educación que busca transformar la educación para el siglo XXI.

    p.mt-3 #[strong Se observa, entonces, cómo el marco de referencia motiva a la generación de ideas de cómo enseñar y aprender ciencias, siguiendo tres aspectos.]

    .row.mt-5
      .col-md-4.col-lg.mb-5
        .tarjeta-Avatar
          img.img_thumbnail(src='@/assets/curso/tema3/1.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-3(style="background-color:#F3F9FF;border-radius:0px;min-height:180px;")
            p.mt-3(style="color:#12263F;font-weight:bold;") Enseñar STEM en las asignaturas de Ciencias, Tecnología, Ingeniería y Matemáticas.

      .col-md-4.col-lg.mb-5
        .tarjeta-Avatar
          img.img_thumbnail(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-3(style="background-color:#F3F9FF;border-radius:0px;min-height:180px;")
            p.mt-3(style="color:#12263F;font-weight:bold;") Desarrollar las habilidades STEM.

      .col-md-4.col-lg.mb-5
        .tarjeta-Avatar
          img.img_thumbnail(src='@/assets/curso/tema3/3.svg' alt='AvatarTop')
          .tarjeta.color-primario.text-white.p-3(style="background-color:#F3F9FF;border-radius:0px;min-height:180px;")
            p.mt-3(style="color:#12263F;font-weight:bold;") Enfocarse en la innovación.

    .titulo-segundo.mt-5
        #t_3_1.h4 3.1 La integración curricular en áreas STEM


    p.mt-4 La integración de las asignaturas es quizás uno de los aspectos de la innovación en la educación que más llaman la atención. Bybee (2013) muestra que es posible encontrar diversas combinaciones de asignaturas y escenarios que pueden ser parte de la realidad de una institución educativa. A continuación, se presentan algunos ejemplos basados en el pensamiento de Bybee (2013, p .75):

    p.mt-4 Antes de abordar la integración curricular, es necesario observar esta imagen ¿qué se puede concluir de esto?

    h5.text-center.mt-5 Perspectiva silos y huecos

    .col-8.mt-5(style="margin:0 auto;")
        .row.text-center
            .col-3.mb-4
                h6 S
                img.mt-4(src='@/assets/curso/tema3/4.svg' alt='AvatarTop')
                h6.mt-3 Ciencias
            .col-3.mb-4
                h6 T
                img.mt-4(src='@/assets/curso/tema3/5.svg' alt='AvatarTop')
                h6.mt-3 Tecnología
            .col-3.mb-4
                h6 E
                img.mt-4(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
                h6.mt-3 Ingeniería
            .col-3.mb-4
                h6 M
                img.mt-4(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
                h6.mt-3 Matemáticas

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Se hace la analogía con la forma en que se almacenan lo granos, en este tipo de perspectiva las asignaturas de Ciencias y Matemáticas, incluyen contenido apreciable, las otras dos, Tecnología e Ingeniería, no tienen contenidos o no se están aplicando en el currículo escolar, esta perspectiva implica que no existe ningún nivel de integración.

    p.mt-5 ¿Cómo hacer la integración curricular en áreas STEM?, a continuación, se deben observar las imágenes y las indicaciones para lograrlo.

    h5.mt-5.text-center La asignatura líder

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')


    .col-10.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p La asignatura líder trae las otras para apoyar la entrega de conocimiento en un tema dado.  No hay que olvidar que la ingeniería brinda  las conexiones entre las asignaturas a través del proceso de diseño.

    h5.text-center.mt-5 Silos

    .col-8.mt-5(style="margin:0 auto;")
        .row.text-center
            .col-3.mb-4
                h6 S
                img.mt-4(src='@/assets/curso/tema3/9.svg' alt='AvatarTop')
                h6.mt-3 Ciencias
            .col-3.mb-4
                h6 T
                img.mt-4(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
                h6.mt-3 Tecnología
            .col-3.mb-4
                h6 E
                img.mt-4(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
                h6.mt-3 Ingeniería
            .col-3.mb-4
                h6 M
                img.mt-4(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
                h6.mt-3 Matemáticas

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p En esta perspectiva la forma de enseñar las asignaturas es de manera separada, como se define en la educación STEM, muy común en las instituciones educativas.

    h5.mt-5.text-center Interconexión a través de otra asignatura

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/13.svg' alt='AvatarTop')

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p En esta perspectiva se presenta cuando las ciencias y las matemáticas, que están siendo dictadas de forma separada, se conectan a través de la tecnología o la ingeniería.

    h5.mt-5.text-center Coordinación

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/14.svg' alt='AvatarTop')


    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Otro recurso que utilizan los docentes para profundizar en el aprendizaje de un tema de una asignatura es solicitar la colaboración de otros docentes como apoyo.  El beneficio es evidente, pero no hay un nivel de integración real entre estas asignaturas, dado que los profesores no tienen pleno conocimiento de los contenidos que sus colegas dictan.

    h5.mt-5.text-center La combinación

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/15.svg' alt='AvatarTop')


    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p En esta perspectiva, la institución educativa tiene la intención de crear una asignatura llamada “curso STEM”, en la que se combinan las asignaturas de Ciencias, Tecnología y Matemáticas y se tienen resultados para las ferias de ciencias.

    h5.mt-5.text-center La superposición

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/16.svg' alt='AvatarTop')

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Esta perspectiva es muy utilizada cuando se tiene un proyecto de investigación que busca responder a una pregunta de diseño y de tecnología, los estudiantes van pasando por las diferentes asignaturas tomando los elementos que necesitan para desarrollar el proyecto; es un proceso de información aislada, no holística.

    .titulo-segundo.mt-5
        .h4 3.1.1. Niveles de la integración

    p.mt-4 Una educación STEM integrada permite a los docentes y los estudiantes poder observar el panorama completo del conocimiento que se le debe brindar a los estudiantes y cómo se articulan entre ellos. A continuación, se presentan algunos ejemplos:

    h5.mt-5.text-center Integración multidisciplinaria o temática

    .col-6.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/17.svg' alt='AvatarTop')

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Perspectiva que presenta la integración de manera holística y de manera transdisciplinaria, esta integración se presenta cuando se propone un proyecto que trata de resolver un problema de la vida real, permitiendo no solo integrar las asignaturas STEM, como el Arte, el Lenguaje, entre otras.

    br

    h5.mt-5.text-center Integración interdisciplinaria

    .col-11.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/18.svg' alt='AvatarTop')

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Este nivel de integración es más desarrollado ya que se planea desde el currículo que los diferentes temas de las asignaturas se fusionen.  No es muy diferente del multidisciplinario, pero en este caso dos asignaturas buscan conocimientos y habilidades iguales.

            p.mt-3 Para lograr un nivel interdisciplinario más completo, se pueden agregar más asignaturas.

    br

    h5.mt-5.text-center Integración transdisciplinaria

    .col-10.mt-5(style="margin:0 auto;")
        .text-center
            img.mt-4(src='@/assets/curso/tema3/19.svg' alt='AvatarTop')

    .col-11.mt-5(style="margin:0 auto;")
        .mt-5.p-5(style="background-color:#EDFFF6;")
            p Esta perspectiva es la integración con mayor nivel y con mayor potencial para el éxito de la educación STEM, está basado en la teoría constructivista y totalmente centrado en el estudiante, pues le permite desarrollar habilidades del siglo XXI.

    br
    br
    .titulo-segundo.mt-5
        #t_3_2.h4 3.2 Principios para el diseño de estrategias STEM

    p.mt-4 Es importante resaltar que, para este modelo de educación STEM, es muy destacado que los futuros ciudadanos realicen prácticas de ingeniería que les brinden a los estudiantes la oportunidad de aprender conceptos de las Ciencias y descubrir sus grandes logros y aportes a la sociedad, apoyados en cuatro principios:

    SlyderB.mb-5.mt-5(:datos="datosSlyder")

    p.mt-5 De acuerdo con Vásquez, Sneier y Comer (2013), al momento de diseñar problemas para el desarrollo de las experiencias de aprendizaje es necesario contar con unos principios pedagógicos para el diseño de estrategias que el docente siempre debe tener en mente al momento de desarrollar sus actividades con sus estudiantes. Por ello, se debe revisar la siguiente información para valorar su aporte a las prácticas de enseñanza y aprendizaje en el contexto colombiano.

    br

    .row.mt-5
        .col-4
            img(src='@/assets/curso/tema3/24.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Intencionalidad
                p.mt-3 Siempre se deben desarrollar las actividades pensando en fusionar las asignaturas, es claro que no todas las asignaturas son posibles de integrar en todos los casos, sin embargo, los objetivos de cada actividad indican la importancia de la integralidad. 

    .row.mt-4
        .col-4
            img(src='@/assets/curso/tema3/25.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 La educación STEM
                p.mt-3 No es una metodología, no es un currículo ni un plan de estudios; no se trata de un ingrediente más para desarrollar la clase, se trata de la forma en la que son presentados los temas, la decisión de esta nueva forma implica el grado de profundización que se le  a cada  aspecto a enseñar y la profundidad del mismo. 

    .row.mt-4
        .col-4
            img.mt-5(src='@/assets/curso/tema3/26.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Relevancia
                p.mt-3 Los estándares curriculares, el plan de estudios y las actividades de instrucción indican cuáles contenidos presentar  a los estudiantes y, al final, se evalúa su desempeño dentro de los temas relacionados con estos contenidos.  Sin embargo, se debe dar relevancia a los contenidos con problemas del mundo real de la vida cotidiana, de este país.

                p.mt-3 Lo anterior, siempre haciendo énfasis en cómo estos conceptos contribuyen a desempeñarse en situaciones reales.  Por lo anterior, para seleccionar los temas se debe considerar que, para poder profundizar en el aprendizaje, las actividades demandan más tiempo en su desarrollo. Por lo tanto, será necesario descartar algunos temas y concentrarse en otros.

    .row.mt-4
        .col-4
            img(src='@/assets/curso/tema3/27.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Desarrollo de habilidades para el siglo XXI  
                p.mt-3 Es necesario desarrollar la capacidad de los ciudadanos de desenvolverse adecuadamente en diferentes ámbitos personales y profesionales, el conocimiento con una enseñanza en profundidad, ayuda a potencializar una fuerza social y económica acorde a las necesidades actuales.

    .row.mt-4
        .col-4
            img(src='@/assets/curso/tema3/28.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Desafiar a los estudiantes
                p.mt-3 Se debe mantener el interés de los estudiantes a través de los desafíos, esto permite que su curiosidad esté activa, pero hay que mantener un equilibrio y evitar que se aburran o se den por vencidos por exigencias extremas.

    .row.mt-4
        .col-4
            img(src='@/assets/curso/tema3/29.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Mezclarlo todo
                p.mt-3 Es muy importante que los estudiantes puedan desenvolverse  en actividades que les permitan encontrar soluciones, construir modelos y demostrar el conocimiento adquirido.  Al exponerlo a estos principios se potencializa su aprendizaje. Cuando un estudiante logra aprender conceptos nuevos, manifiesta su deseo de demostrar los logros alcanzados para que le sean reconocidos.

    .row.mt-4
        .col-4
            img(src='@/assets/curso/tema3/30.svg' alt='AvatarTop')
        .col-8
            .p-5(style="background-color:#F3F9FF")
                .h6 Fallar es parte del camino de aprender
                p.mt-3 Es una oportunidad de descubrimiento que se hace mediante un proceso de análisis de resultados y es la clave para descubrir nuevas formas de realizar la tarea y lograr soluciones que no se habían ni siquiera considerado, el docente debe permitir a los estudiantes reflexionar sobre lo acontecido y la actividad queda incompleta, esto permite el desarrollo de habilidades como el pensamiento crítico, solución de problemas, creatividad y colaboración.


    p.mt-5 Comprendida la información anterior, se han seleccionado algunas recomendaciones para el diseño de estrategias según autores como Traig (2015), que complementan la propuesta de Vásquez, Sneier y Comer (2013). Ellas son:

    .row.mt-5
        .col-6
            .p-5(style="background-color:#EDFFF6")
                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Hacer que los estudiantes expresen sus conocimientos previos sobre el tema específico que se está presentando, esta alternativa es muy útil para el docente porque se pueden determinar el nivel de conocimiento de todo el grupo.

                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Buscar que los estudiantes se mantengan en un constante descubrimiento, para motivar su aprendizaje.

                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Lograr que los estudiantes tomen posición y defiendan sus ideas frente al tema específico propuesto y las debatan en grupo, de manera que puedan sustentar su conocimiento con evidencias tangibles.

                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Dar al estudiante el tiempo para que encuentre sentido a sus ideas, a través del aporte de las ideas de los demás estudiantes, esto permite evaluar si la comprensión ha sido completa; esta profundización en el aprendizaje forjará conocimientos previos para las futuras actividades.

        .col-6
            .p-5(style="background-color:#EDFFF6")
                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Mantener la actitud de “las manos en los bolsillos” ante cualquier complicación de los estudiantes en el desarrollo de la actividad propuesta, por lo que es mejor no enseñar que el docente es una vía de escape, los estudiantes se sentirán felices de salir solos de la situación.

                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p Orientar la clase mediante preguntas que despierten la curiosidad, para que verifiquen si con sus conocimientos están logrando la solución aceptable. Ejemplo: ¿usted qué piensa de esto?, ¿ya probaron esto y aquello?, ¿qué evidencia apoya su afirmación?, ¿habrá otra explicación adicional?

                .row.mb-3
                    .col-auto
                        img.mt-2(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
                    .col
                        p.mb-3 Presentar actividades siempre nuevas de manera tal que los estudiantes no se presenten en situaciones desalentadoras porque ya conocen la dinámica de la actividad; el docente deberá mantener un repositorio de temas nuevos para evitar estas situaciones y mantener la misma dinámica de los estudiantes de estar al descubrimiento de nuevo conocimiento.

    br
    br
    br
    .titulo-segundo.mt-5
        #t_3_3.h4 3.3 Metodología para la evaluación de experiencias de aula


    p.mt-4 Para poner en marcha de manera correcta la evaluación de actividades STEM efectivas, es importante seguir las siguientes recomendaciones:

    .row.mb-5.mt-5
        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#CC3D60;")
            .tarjeta-numerada__numero(style="background-color:#CC3D60")
              .h4 1
            p 
              b Forma de evaluación:
            p El estudiante debe entender desde el principio de la actividad la forma de evaluación. Es muy importante que se les expongan a los estudiantes las “reglas del juego” así sabrán que se espera de ellos y que deberán esforzarse para cumplir con los requerimientos.

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#FFC93C;")
            .tarjeta-numerada__numero(style="background-color:#FFC93C")
              .h4 2
            p 
              b Criterios de evaluación:
            p Se deben exponer los criterios de evaluación desde el inicio de las actividades, indicando cuáles serán los grados de desempeño; por ejemplo, con rúbricas, será más fácil que él comprenda, que no es solo lo que se le pide sino el grado de calidad que será aceptable.

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#31326F;")
            .tarjeta-numerada__numero(style="background-color:#31326F")
              .h4 3
            p 
              b Demostración de conocimientos:
            p Se le debe brindar al estudiante la forma adecuada de demostrar sus conocimientos y desempeños; la planeación de una actividad debe ser lo suficientemente flexible para realizar la evaluación eje: informe, debate, presentación, entre otros.

    .row.mb-5.mt-5
        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#B0C0D2;")
            .tarjeta-numerada__numero(style="background-color:#B0C0D2")
              .h4 4
            p 
              b Evaluación diagnóstica:
            p El docente debe destinar el tiempo necesario para realizar una evaluación diagnóstica de conocimientos previos, ya que esto marcará al docente el camino que debe seguir para abordar la actividad STEM. Por ejemplo, si para una actividad es necesario el conocimiento de la hoja de cálculo, se debe sacar el tiempo para que los estudiantes la dominen al grado de conocimiento que requiere la actividad propuesta.

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#9A9A9A;")
            .tarjeta-numerada__numero(style="background-color:#9A9A9A")
              .h4 5
            p 
              b Autoevaluación:
            p  Los estudiantes deben fijarse sus propios retos. El docente debe hacer que el estudiante se autoevalúe y que se establezca metas o retos, esto es muy importante para un mejor desempeño.
            br

        .col-md-4.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5(style="border-color:#9DDFD3;")
            .tarjeta-numerada__numero(style="background-color:#9DDFD3")
              .h4 6
            p 
              b Mejora continua: 
            p Es importante dar la oportunidad a nuevas evidencias de conocimiento y desempeño que deben primar sobre las anteriores, el estudiante debe encontrar opciones de evaluación que le ayuden a mostrar su conocimiento.

    p.mt-5 Se han descrito algunas recomendaciones para la evaluación, pero surge la pregunta ¿cómo estructurar una evaluación de una actividad STEM?, para encontrar una respuesta a este interrogante es importante partir de la concepción de evaluación del National Research Council of the National Academies (2012), que la define como la forma de medir los resultados del currículo y los procesos de formación y logros de los estudiantes.

    p.mt-3 #[strong En este sentido, se presenta algunas condiciones deseables para construir un buen sistema de evaluación, dos marcos de referencia. Ahora, se debe revisar la siguiente información.]

    .col-11.mt-5(style="margin:0 auto;")
        .row
            .col-6
                .p-5(style="background-color:#EDFFF6")
                    p.text-center #[strong(style="color:#31326F;") Ambiente de aprendizaje]
                    p.mt-4 Estos se caracterizan por proveer experiencias de tipo holístico del hacer.
                .p-5(style="background-color:#9DDFD3;min-height:420px;")
                    p #[strong Centrado en el conocimiento:] está basado en lo que se quiere, que los estudiantes aprendan y estén en capacidad de hacer.

                    p.mt-3 #[strong Centrado en los estudiantes:]  conectará las fortalezas, los intereses y las preconcepciones con las actividades y tareas que les permitirá identificarse como personas dentro de una evolución de aprendizaje

                    p.mt-3 #[strong Centrado en la evaluación:]  ofrecerá muchas oportunidades para monitorear el avance y hacer evidente el progreso durante el desarrollo de las actividades.

            .col-6
                .p-5(style="background-color:#545590")
                    p.text-center.text-white #[strong Planeación de actividades STEM]
                    p.mt-4.text-white Son evidencias de cómo los estudiantes han aprendido y lo que son capaces de hacer.

                .p-5(style="background-color:#31326F;min-height:420px;")
                    p.text-white ¿Los estudiantes aprendieron los conceptos?
                    p.text-white.mt-4 Como docente, ¿cómo lo puedo saber?
                    p.text-white.mt-4 ¿Qué tan profundo es su conocimiento?
                    p.text-white.mt-4 ¿Qué tan bien pueden aplicar los estudiantes este conocimiento?

    p.mt-5 Sumado a lo anterior es importante definir los tipos de evaluación que se pueden implementar en la educación STEM. Para más información, se debe explorar el siguiente gráfico y responder ¿cómo podrías asociar la información que se presentará en tú práctica de enseñanza?

    .col-10.mt-5.text-center(style="margin:0 auto;")
        img.mt-2(src='@/assets/curso/tema3/32.svg' alt='AvatarTop')

    .mt-5.p-5(style="background-color:#FFF7E2")
        p #[strong Evaluación diagnóstica]
        p.mt-3 Cuando se inicia una actividad STEM es necesario realizar una evaluación diagnóstica, ya que el grupo de estudiantes no está preparado de forma igual y cada uno tiene en su mente una constelación de conceptos, capacidades, aptitudes y condiciones diferentes. Esta evaluación establece el grado de conocimiento del grupo de estudiantes y se enfocará en reconocer posibles conceptos erróneos que puedan existir. ¿Cómo hacerlo? Es necesario que cada estudiante exprese lo que sabe; y no tiene por objetivo asignar una calificación, sino lograr hacer correcciones a las deficiencias que se puedan presentar dentro del grupo.

    .mt-2.p-5(style="background-color:#FFE2E9")
        p #[strong Evaluación formativa]
        p.mt-3 La evaluación formativa busca asistir a los estudiantes con el proceso de aprendizaje, es aquí donde se destaca el rol del docente como tutor o guía, y es importante mantener controlado el flujo de trabajo de los estudiantes. Este control ayuda también a hacer mediciones sobre la forma como los grupos de trabajo van avanzado en sus tareas, esto permite al docente, en algunos casos, destrabar el proceso de aprendizaje.

    .mt-2.p-5(style="background-color:#EBFFFB")
        p #[strong Evaluación sumativa]
        p.mt-3 Al finalizar la unidad de aprendizaje STEM se hace necesario dar a los interesados un informe del estado de conocimiento y capacidad del estudiante.  Se otorga, entonces, una medición cuantitativa o cualitativa, compuesta en algunos casos por una nota o grado, y en otros por una descripción del desempeño del estudiante, como puede ser superior, suficiente, aceptable, deficiente, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Principio de progreso durante el desarrollo',
        texto:
          'Permitir que los estudiantes construyan su conocimiento a partir de su curiosidad ante lo que le rodea y cómo fue construido el mundo.',
        imagen: require('@/assets/curso/tema3/20.svg'),
      },
      {
        titulo: 'Principio de progresividad',
        texto:
          'Desarrollar el principio de progreso desde los años iniciales de formación y planificar su desarrollo a través de todos los grados de estudio escolar.',
        imagen: require('@/assets/curso/tema3/21.svg'),
      },
      {
        titulo: 'Principio de ideas fundamentales',
        texto:
          'Priorizar la selección de ideas fundamentales para dar la oportunidad, tanto a los docentes y estudiantes, de que tengan tiempo suficiente para profundizar y experimentar de manera coherente los temas; no se trata de dictar una cantidad de temas de manera superficial y sin oportunidad de práctica.',
        imagen: require('@/assets/curso/tema3/22.svg'),
      },
      {
        titulo:
          'Principio de integralidad entre la investigación científica y el diseño de ingeniería',
        texto:
          'Promover el aprendizaje de Ciencias e Ingeniería mediante la integración de estos dos importantes componentes y las asignaturas del plan de estudios.',
        imagen: require('@/assets/curso/tema3/23.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass">
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
.img_thumbnail
  max-width: 70px
.slyder-b__slyde .h3
    font-size: 1.25em
.slyder-b__slyde .h5
    font-size: 1.25em
</style>
