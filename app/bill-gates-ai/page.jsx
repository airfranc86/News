import Link from 'next/link';

export default function Article() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      {/* Navegación */}
      <nav className="mb-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sky-400 font-mono text-sm hover:text-white transition-colors"
        >
          <span>{'<-'}</span> Volver al Hub
        </Link>
      </nav>

      {/* Contenedor Principal del Artículo */}
      <article className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Cabecera del Artículo */}
        <header className="p-8 md:p-12 border-b border-slate-800 bg-gradient-to-b from-sky-900/20 to-transparent">
          <span className="inline-block font-mono text-xs text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            System.Essay // AI_Transition
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Un Cambio Epochal: La Era Turbulenta de la IA Está Aquí
          </h1>
          <h2 className="text-xl text-slate-400 font-light mb-8">
            El Plan Crítico para Asegurar que lo Bueno Supere a lo Malo
          </h2>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-lg">
              BG
            </div>
            <div>
              <p className="font-bold text-white">Bill Gates</p>
              <p className="text-xs text-sky-400 font-mono">Co-fundador de Microsoft & Filántropo</p>
            </div>
          </div>
        </header>

        {/* Cuerpo del Artículo (TEXTO COMPLETO) */}
        <div className="p-8 md:p-12 text-slate-300 text-lg leading-relaxed space-y-7 font-sans">
          
          <p>
            Durante toda mi vida he tenido solo dos trabajos. En el primero, participé en el desarrollo de software para empoderar a las personas a través de mi trabajo en Microsoft. En el segundo, que comencé a tiempo completo en 2008, estoy devolviendo la riqueza que gané en Microsoft con el objetivo de hacer un mundo más saludable, mejor educado y más equitativo. Este es el trabajo que tendré para el resto de mi vida. Ambas experiencias informan mi perspectiva sobre la inteligencia artificial.
          </p>

          <p>
            Cuando aprendí sobre computadoras a los 13 años, me fascinó la idea de hacerlas más inteligentes y capaces de realizar cosas que, en ese momento, solo los humanos podían hacer. Aunque el término "IA" se usaba desde alrededor del momento de mi nacimiento, la tecnología solo ha hecho avances significativos en la última década. Ahora es increíblemente capaz y sigue mejorando a un ritmo alucinante. Por primera vez, la IA puede reemplazar y incluso superar la cognición humana.
          </p>

          <blockquote className="my-10 p-6 md:p-8 bg-emerald-400/5 border-l-4 border-emerald-500 rounded-r-xl text-xl md:text-2xl italic text-slate-200 font-light">
            En términos de equidad, la IA será o el mayor igualador jamás inventado, o la peor fuente de injusticia. El desafío es monumental.
          </blockquote>

          <p>
            Incluso en las mejores circunstancias, la transición a esta nueva era de la IA será una de las épocas más turbulentas en la historia de la humanidad. ¿Cómo usaremos esta tecnología para hacer un mundo más justo y evitar que amplíe la brecha entre ricos y pobres? ¿Cómo protegeremos a las personas más vulnerables a los daños causados por la inteligencia artificial, incluidos aquellos que pierden sus medios de vida y la sensación de que tienen control sobre su futuro? Creo que responder estas preguntas y actuar sobre las respuestas debería ser la máxima prioridad del mundo.
          </p>

          <p>
            Si el mundo toma los pasos correctos, la IA será una fuerza para el bien y dejará a todos en mejores condiciones. Desafortunadamente, ahora mismo no nos estamos preparando para ello. No veo evidencia de que los líderes, expertos y comunidades estén enfrentando los desafíos adecuadamente. No hay un plan para facilitar la entrada a la era de la IA. Parte de la razón es que muchos comentaristas subestiman la magnitud del impacto que tendrá la IA.
          </p>

          <p>
            Creo que hay algunas razones para esto. Una es el hecho de que los modelos de IA todavía cometen errores. Es difícil imaginar que alguno de ellos reemplace la cognición humana cuando, no hace mucho, no podían resolver un simple sudoku ni contar cuántas "R" hay en la palabra "fresa". Pero el problema de la fiabilidad se está solucionando rápidamente, ya que los investigadores crean modelos que pueden revisar su propio trabajo y mejorarse a sí mismos. Pronto serán sustancialmente mejores que los humanos en muchas tareas.
          </p>

          <p>
            Otra razón por la que la gente subestima la IA es que las analogías con los efectos de las innovaciones pasadas son engañosas. No tenemos experiencia con una tecnología que pueda adoptarse tan rápido o que pueda pensar y moverse como un humano. Cuando llegó la PC, tardó veinte años en cambiar significativamente la forma en que trabajábamos porque el software tenía que desarrollarse, el precio tenía que bajar y las personas tenían que aprender a usar las herramientas e incorporarlas en sus procesos empresariales. La IA, por el contrario, corre en los dispositivos que ya tenemos y usa el lenguaje natural. No tenemos que adaptarnos a ella porque puede adaptarse a nosotros. Puede ver el mismo video de capacitación que se usa para entrenar a los trabajadores humanos y aprender de los datos existentes.
          </p>

          <p>
            Quiero reconocer un posible sesgo. Me he beneficiado enormemente de la industria tecnológica. Aunque he diversificado bastante mi cartera, todavía tengo vínculos financieros con ella. Estoy trabajando con Microsoft y otras empresas de IA en mi papel como presidente de la Fundación Gates para asegurar que la IA se despliegue de manera que realmente beneficie a las personas de todo el mundo. Sin embargo, mis puntos de vista sobre la IA no están motivados por el potencial de ganar dinero para mí. Cualquier ganancia generada por mis inversiones, incluidas las relacionadas con la tecnología, irá a la Fundación Gates para abordar la inequidad global. Por supuesto, los lectores tendrán que decidir por sí mismos si esto empaña mi punto de vista.
          </p>

          <p>
            Esta vez realmente es diferente. Durante tanto tiempo como recuerdo, he deseado que la innovación ocurriera más rápido. Con la IA, mis sentimientos son más complicados. Deseo que el mundo pueda obtener los beneficios rápidamente y retrasar los problemas que causará tanto como sea posible, pero los beneficios y los problemas están llegando al mismo tiempo. Creo que necesitamos tiempo para prepararnos para el período de agitación social, política y económica que estamos a punto de entrar. Las personas que más necesitan tiempo son las que tienen menos: el trabajador de contabilidad reemplazado por un bot o el trabajador de $20 por hora que pierde su trabajo por un robot de $10 por hora.
          </p>

          <p>
            Muchos observadores dicen que esta transición tecnológica será como las anteriores. Dan el ejemplo de cómo los empleos en Estados Unidos cambiaron de la agricultura al trabajo de oficina. Sin embargo, eso procedió a lo largo de varias generaciones y creó nuevos empleos donde se requería cognición humana. En este caso, la tecnología puede sustituir la cognición humana. Porque puede ver, escuchar, hablar y razonar, y eventualmente hará trabajo físico tan suavemente como cualquier humano, no solo afectará a un sector. La IA tomará trabajo en derecho, atención al cliente, medicina, software y manufactura. Golpeará estas industrias rápidamente, en el transcurso de una década en lugar de unas pocas generaciones. Habrá algunos nuevos empleos, pero sin las políticas correctas, habrá muchos menos de los que existen hoy.
          </p>

          <p>
            Si alguien tuviera un plan creíble para frenar los avances de la IA globalmente, es probable que lo apoyara. Sin embargo, no creo que eso vaya a suceder. Los incentivos geopolíticos y económicos están empujando demasiado fuerte para ir a toda velocidad. Para asegurarnos de maximizar los efectos positivos de esta tecnología sin precedentes y minimizar los malos para estar mejor en general, necesitamos entender tanto los beneficios como los riesgos.
          </p>

          <p>
            Comenzaré con los riesgos. La transición a la IA trae tres grandes riesgos. Planeo escribir sobre cada uno de estos con más detalle en el futuro, así que tocaré brevemente sobre ellos ahora.
          </p>

          {/* RIESGO 1 */}
          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Muchos empleos desaparecerán para siempre.</h3>
          <p>
            En 1933, durante la Gran Depresión, el desempleo en Estados Unidos fue de aproximadamente el 25%. Permaneció en dígitos dobles durante gran parte de la década siguiente. Finalmente se recuperó a medida que la demanda, la inversión y el crecimiento retornaron. La IA puede no llegar a este nivel, pero su impacto no desaparecerá con un ciclo económico. Los empleos en mayor riesgo son los de nivel de entrada y medio, y los nuevos empleos que se creen requerirán principalmente habilidades que toman muchos años en aprender. Los empleos de cuello blanco ya están siendo afectados modestamente. Después de la adopción generalizada de la IA generativa, el empleo cayó significativamente entre los trabajadores jóvenes en empleos especialmente vulnerables al reemplazo, pero no entre sus colegas mayores. Creo que esta tendencia continuará, pero no se limitará a un puñado de industrias u ocupaciones. Los empleos en ventas y soporte al cliente (en línea y por teléfono), ingeniería de software y trabajo de paralegal pueden estar entre los primeros afectados, pero la disrupción llegará mucho más lejos a medida que la IA asuma tareas que hoy todavía requieren trabajadores entrenados: cosas como evaluar solicitudes de préstamos, hacer análisis de datos y incluso triar pacientes. Algunas áreas como la ingeniería de software generarán nueva demanda a medida que bajen los costos, por lo que la pérdida neta de empleos en esas áreas será menor que en otras siempre que algunas tareas, como el diseño, sean mejores hechas por humanos.
          </p>

          <p>
            Los empleos de cuello azul también se verán afectados. Aunque los robots no están tan avanzados como la IA, eventualmente su costo será dramáticamente más bajo también. Muchos estadounidenses con los que hablo no se dan cuenta de lo rápido que están avanzando los robots diestros porque gran parte del trabajo avanzado se está haciendo en otros países, principalmente en China. O pueden estar confundidos por esos videos de robots bailando mal que han sido virales recientemente. Creo que los robots "inteligentes" comenzarán a competir con las personas en algunas tareas físicas, en las industrias de construcción y hospitalidad, por ejemplo, para finales de esta década. Los robots y la IA combinados pueden crear un círculo vicioso. Después de que una empresa los adopte y use los ahorros para bajar sus precios, sus competidores sentirán una presión inmensa para hacer lo mismo. Si las empresas existentes no los adoptan, las startups lo harán. Muchas personas cambiarán a otros empleos, pero el tumulto de perder el trabajo, ser reincorporado y encontrar otro trabajo será significativo. Las fuerzas del mercado harán que la adopción vaya más rápido y más rápido y, a menos que intervengamos, habrá menos buenos empleos disponibles y los beneficios se acumularán en un pequeño grupo.
          </p>

          <p>
            Me preocupa especialmente los jóvenes, quienes entrarán en una fuerza laboral con menos aperturas de nivel de entrada. Entienden el desafío porque son los usuarios más activos de la IA y ven tanto las capacidades como la tasa de mejora. No es de extrañar que muchos de ellos se sientan negativamente sobre la IA. El mayor cambio para los trabajadores sucederá cuando la IA proporcione trabajo casi sin errores. En ese punto, podrá funcionar por sí mismo sin que un humano lo verifique, y las compañías tendrán cada incentivo económico para dejarlo. Esto llevará a un cambio fundamental en cómo pensamos sobre el trabajo, el ingreso y la seguridad económica. ¿Cómo operará una economía que ha sido construida alrededor del empleo si hay menos personas trabajando, o si muchas personas trabajan menos horas? En una sociedad capitalista, el empleo es la forma en que la mayoría de las personas obtienen el dinero que necesitan para pagar las básicas de la vida, así como siendo una fuente clave de dignidad y conexión social. Cuando una comunidad tiene alto desempleo, los efectos secundarios pueden ser permeables. La investigación sugiere que en algunas partes de Estados Unidos, los cierres de fábricas contribuyen a un aumento en las muertes por sobredosis de opioides. Ahora imagina presiones similares en trabajadores de cuello blanco y azul a nivel nacional. Tenemos que pensar ahora en cómo reducir las pérdidas de empleos para que todos puedan compartir la prosperidad que crea la IA. Esperar hasta que las personas ya estén desplazadas o subempleadas será demasiado tarde. La IA es un desafío estructural a la forma en que está organizada nuestra economía, y requiere pensamiento y acción ahora.
          </p>

          {/* RIESGO 2 */}
          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">La IA empoderará a las personas (y quizás a las IAs) para hacer más daño.</h3>
          <p>
            Mucho antes de que la IA entrara a la corriente principal, había información en línea sobre cómo crear armas como bombas, armas biológicas, incluso virus informáticos. La IA hará mucho más fácil no solo obtener esta información sino actuar sobre ella. Incluso criminales con muy pocas habilidades podrán atacar víctimas a todas las escalas: individuos, compañías y gobiernos. El fraude, la desinformación, los deepfakes y la vigilancia habilitados por IA son los daños que muchas personas sentirán más agudamente en sus vidas cotidianas. Las capacidades de la IA están comenzando a usarse para ciberataques. Los expertos de ciberseguridad más inteligentes que conozco están asustados por los próximos años, porque los atacantes están obteniendo nuevas capacidades poderosas más rápido que los defensores pueden arreglar todas las debilidades. Después de todo, el mismo modelo de IA que puede encontrar una falla en el software para que una compañía lo arregle también puede ayudar a un criminal a explotarlo. Los recursos necesarios para hacer un ataque están bajando significativamente y no hemos podido separar esas capacidades del uso benigno.
          </p>

          <p>
            Piensa en la infraestructura que será vulnerable: hospitales, instituciones financieras, sistemas de agua, redes eléctricas, sistemas para gestionar beneficios gubernamentales. Cuando estas instituciones son atacadas, son los pacientes, clientes y receptores de beneficios los que pierden. Lo mismo va para el bioterrorismo. Aunque la IA llevará a avances que salvan vidas en drogas y vacunas, también hará más fácil diseñar una nueva enfermedad mortal. Nuevamente, las capacidades positivas son difíciles de separar de las peligrosas. Este es un problema global. Los riesgos que acabo de mencionar son todos sobre cómo la IA empoderará a actores malos que tienen relativamente poco poder ahora. Las mismas herramientas también concentrarán el poder en lugares donde ya existe. Armas autónomas, por ejemplo, harán que los gobiernos sean aún más capaces de usar fuerza letal sin que un ser humano sea parte de la decisión. Monitorear y manipular la opinión pública será más fácil, más barato y más efectivo también. Eventualmente, el poder de usar la IA para dañar a las personas no se limitará a personas o instituciones. Los sistemas de IA mismos ya actúan ocasionalmente de maneras que sus diseñadores no intentaron. La tecnología está mejorando más rápido de lo que cualquiera esperaba y de maneras sorprendentes, y a medida que los modelos se vuelven más poderosos, podrían comenzar a actuar contra nuestros intereses y podríamos perder el control. Tengo más que decir sobre esto en el futuro.
          </p>

          {/* RIESGO 3 */}
          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">La IA podría estancar el desarrollo de nuestros hijos y reemplazar las relaciones humanas.</h3>
          <p>
            Cuando crecía en Seattle, no tenía muchos amigos además de un par de otros chicos como yo. Tomó mucho trabajo y mucha ayuda de mi mamá desarrollar mis habilidades sociales para que pudiera relacionarme con diferentes tipos de personas. Todavía dibujo de esas lecciones hoy a los 70 años. Dudo que hubiera puesto el mismo trabajo si hubiera tenido un compañero de IA en ese entonces. Hablan contigo de maneras en las que ya estás cómodo. No te empujan fuera de tu zona de confort. Están siempre disponibles y nunca se enojan contigo. Esto les da el potencial de volverse altamente adictivos y robar las lecciones que aprendemos de conectarnos con otras personas. El cuerpo de evidencia sobre este tema es aún pequeño y un poco mixto, pero hay señales de que deberíamos estar muy preocupados. Por ejemplo, en un estudio de más de 1,100 personas que usan compañeros de IA, investigadores en Stanford y Carnegie Mellon encontraron que aquellos con redes sociales más pequeñas eran los más propensos a recurrir a un chatbot por compañía. Y cuanto más pesado y emocionalmente personal que el uso se volvía, peor se sentían. Los jóvenes podrían verse afectados por toda su vida. En su libro "The Anxious Generation" (La Generación Ansiosa), Jonathan Haidt hace una observación sobre el efecto de las redes sociales que es aún más cierta para la IA: "Como árboles jóvenes expuestos al viento, los niños que son expuestos rutinariamente a pequeños riesgos crecen para convertirse en adultos que pueden manejar riesgos mucho más grandes sin entrar en pánico. Por el contrario, los niños que son criados en un invernadero protegido a veces se vuelven incapacitados por la ansiedad antes de alcanzar la madurez". Un compañero de IA diseñado para nunca enojarte es un gran invernadero protegido.
          </p>

          <p>
            Solo estamos comenzando a entender los peligros que internet, especialmente las redes sociales, pueden plantear al desarrollo de los jóvenes. Estamos viendo uso compulsivo, sueño interrumpido, ciberacoso y exposición a contenido dañino. La IA podría magnificar muchos de estos riesgos haciéndolos más persuasivos y difíciles de escapar, y no deberíamos esperar otra generación para comenzar a tomarlos en serio. Países como Australia, Reino Unido y Noruega están adoptando protecciones para niños en línea. China ha ido más lejos. Sus reglas restringen aplicaciones de compañeros de IA ampliamente, prohíben diseños que fomenten dependencia emocional y prohíben parientes virtuales y parejas románticas para menores.
          </p>

          <p>
            La misma herramienta que permitirá a las personas aprender más que nunca también podría llevar a que muchas personas aprendan menos. También estoy preocupado por el impacto de la IA en la educación. Irónicamente, la misma herramienta que permitirá a las personas aprender más que nunca también podría llevar a que muchas personas aprendan menos. Una encuesta preliminar sugirió que el uso más pesado de IA se asociaba con menos pensamiento crítico. El efecto fue más fuerte para personas más jóvenes. Este sería el peor momento posible para que los humanos pierdan sus habilidades de pensamiento crítico. En una era de deepfakes y desinformación que pueden ser personalizados para ti individualmente, la habilidad de decir qué es verdadero de qué no se convierte en una habilidad de vida esencial. No está claro dónde trazar la línea en estos problemas psicosociales. En algunos casos, la IA puede ayudar a las personas a entender cómo hacer mejor en sus relaciones humanas. Puede ser el único contacto con el mundo exterior para personas mayores aisladas y personas con movilidad limitada, y será mejor que nada. Donde sea que terminemos trazando la línea, debería ser nuestra decisión, hecha intencionalmente.
          </p>

          {/* BENEFICIOS */}
          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Las cosas buenas que hacemos con la IA podrían ser muy, muy buenas.</h3>
          <p>
            A menudo se dice que sobreestimamos cuánto cambiará a corto plazo y subestimamos cuánto cambiará a largo plazo. Con la IA, veo algo diferente ocurriendo. Algunas personas solo ven el lado positivo de la IA y no se enfocan lo suficiente en los negativos. Otros cometen el error opuesto, que es enfocarse exclusivamente en los peligros—que son reales—a costa de perderse los beneficios potenciales. Necesitamos ambos: profunda preocupación por los daños de la IA que necesitamos minimizar, y optimismo fundamentado sobre los positivos si los maximizamos para todos. Maximizar los beneficios es tan importante como minimizar los daños. Si la gente ve cómo la IA hace sus vidas más fáciles, ayudará a construir la confianza pública que es necesaria para manejar las partes más difíciles de la transición. Si la primera cosa que la IA hace en la vida de la mayoría de las personas es quitarles su trabajo, aquellos que ya son escépticos la rechazarán outright. Esto hará más difícil entregar los beneficios y es otra razón por la cual los gobiernos, industrias incluyendo la médica, y compañías de IA deberían estar trabajando juntas ahora.
          </p>

          <p>
            Con su capacidad de sintetizar conocimiento de cada campo científico, la IA puede acelerar la innovación en los desafíos técnicos más difíciles del mundo: proporcionar energía limpia confiable para todos, combatir el cambio climático, cultivar suficiente comida, erradicar enfermedades, y más. Los investigadores trabajando en tratamientos de cáncer o energía nuclear pueden usar la IA para buscar a través de cantidades masivas de literatura científica. Puede ayudarles a identificar patrones que un humano podría perder y decidir qué experimentos ofrecen la mayor promesa. Cuando la inteligencia ya no es el factor limitante que es hoy, las compañías más pequeñas podrán competir con organizaciones que tienen presupuestos de investigación mucho más grandes. I+D e innovación serán superalimentadas.
          </p>

          <p>
            La salud es un área donde la IA puede ayudar a resolver problemas del mundo real. Muchos hospitales estadounidenses pequeños carecen de especialistas en el sitio que puedan diagnosticar rápidamente a un paciente durante una emergencia potencialmente mortal. En esos lugares, la IA podría asegurar que un ataque al corazón sea detectado a tiempo y una familia evite el costo aplastante de una emergencia médica. Viz.ai es un ejemplo. Analiza escáneres para detectar accidentes cerebrovasculares y otras emergencias y ayuda a los equipos médicos a coordinar el cuidado de sus pacientes. Está siendo usado en casi 2,000 hospitales de EE. UU. La IA también ayudará a los médicos de atención primaria a hacer mejores diagnósticos y mantenerse en contacto con sus pacientes cuando no están en la clínica. Ayudará a los pacientes a entender resultados de pruebas y horarios complicados para tomar su medicina.
          </p>

          <p>
            Sorprende a mucha gente cuando les digo que un segundo área—agricultura—es donde veo el impacto más rápido de la IA en países de bajos ingresos. En la mayoría de los países de bajos ingresos, los agricultores no reciben pronósticos meteorológicos confiables ni consejos sobre qué semillas plantar, cómo proteger sus cultivos y ganado de enfermedades, o cómo mejorar su suelo. Con el crecimiento de la población en estos países y los desafíos del cambio climático, estos agricultores necesitan más ayuda que nunca. Usando la IA, los agricultores de bajos ingresos pronto podrán obtener mejores consejos sobre todas estas cosas que incluso los agricultores más ricos obtienen hoy y aumentar su producción sustancialmente.
          </p>

          <p>
            Los servicios gubernamentales son un tercer área donde la IA puede hacer la vida de las personas más fácil. En Estados Unidos, he conocido familias que, comprensiblemente, estaban abrumadas por el proceso de aplicar para seguro de salud, ayuda estudiantil o asistencia alimentaria. Enfrentadas a una gran pila de formularios burocráticos complicados, muchas sintieron que querían rendirse. La IA puede agilizar las cosas dramáticamente para que reciban la ayuda que necesitan más rápido y el gobierno pueda operar más eficientemente. Los gobiernos pueden hacer la experiencia del ciudadano mucho mejor, comenzando con aquellos que necesitan más sus servicios de red de seguridad.
          </p>

          <p>
            A pesar de mis preocupaciones sobre su impacto en nuestra salud mental, creo que la IA también puede ayudar mucho allí. La mayoría de las comunidades tienen muy pocos consejeros, psiquiatras y especialistas en adicciones. Con las salvaguardias de privacidad correctas en su lugar, las herramientas de IA podrían ayudar a las personas a reconocer señales de advertencia. Luego, si es necesario, pueden ofrecer estrategias de afrontamiento basadas en evidencia y unirse a un humano para proporcionar tratamiento más responsivo. La IA puede ser una bendición para la educación también, a pesar de las preocupaciones que mencioné antes. Puede liberar a los maestros para que pasen más tiempo trabajando con estudiantes uno a uno o en grupos pequeños y darles una visión más clara de dónde toda la clase está luchando. Para los estudiantes, una herramienta de IA que preserva lo que los investigadores llaman "lucha productiva"—el trabajo cognitivo que construye comprensión—puede fortalecer el aprendizaje. Cuando un estudiante se encuentra primero con una idea nueva, la IA da explicaciones sustantivas y ofrece tanto preguntas como respuestas. Más tarde, cuando está verificando su comprensión, retiene la respuesta y los ayuda a llegar a ella por sí mismos.
          </p>

          <p>
            Tomadas en conjunto, los avances en todas estas áreas podrían hacer la vida cotidiana más fácil, más asequible y menos restringida por el ingreso o las conexiones de una persona. La IA podría dar a individuos y pequeñas empresas acceso a capacidades que hoy requieren ayuda profesional costosa o grandes staffs, mientras hace productos y servicios mejores y más baratos. Podría ayudar a personas con discapacidades a vivir más independientemente y permitir trabajadores y emprendedores con buenas ideas lograr mucho más de lo que pueden hoy. Lo más importante, podría devolver a las personas algo del tiempo y atención ahora consumidos por papeleo, burocracia, búsqueda de información confiable y tareas que no pueden permitirse pagar a alguien más para que las manejen. Estos beneficios pueden parecer modestos, pero multiplicados a través de millones de vidas, serían profundos: más personas recibiendo buen consejo cuando lo necesitan y teniendo mayor libertad para enfocarse en las vidas que quieren construir.
          </p>

          <p>
            En todas estas áreas, la palabra operativa es "puede"—la IA <em>puede</em> mejorar la vida para personas en todos los niveles de ingresos. Pero no lo hará automáticamente. Como con cualquier nueva tecnología, tenemos que ser deliberados sobre asegurar que beneficie a todos y no solo a unos pocos ricos. Esto requerirá que gobiernos y filantropía jueguen un papel fuerte para que ciudadanos menos ricos y países de bajos ingresos sean beneficiarios completos. La Fundación Gates tiene 19 años restantes de los 20 años en los que gastará sus restantes $200 mil millones. La IA lo ayudará a lograr sus objetivos ambiciosos tanto acelerando el descubrimiento de vacunas y medicamentos para VIH, tuberculosis, malaria y desnutrición como ayudando a la fuerza laboral de salud y pacientes a saber cómo usar esas herramientas. Los objetivos de la fundación incluyen cortar el número de niños que mueren cada año a la mitad de nuevo, como se hizo de 2000 a 2024. Todo nuestro trabajo, no solo salud sino también agricultura y educación, tomará ventaja completa de la IA. Escribiré mucho más sobre estos esfuerzos el próximo mes en el informe anual de Guardianes de la Fundación, incluyendo nuestro enfoque en asegurar que los modelos de IA estén disponibles en los idiomas hablados por personas en todos los países donde apoyamos trabajo, y no solo los que son comunes en países ricos y de ingresos medios. Muchas de las principales compañías de IA, incluyendo OpenAI, Anthropic, Google y Microsoft, están asociadas con la fundación en todas estas iniciativas, lo cual está haciendo una gran diferencia.
          </p>

          {/* EL PLAN */}
          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">El mundo necesita un plan.</h3>
          <p>
            Es grande que algunas compañías de IA propongan soluciones a desafíos planteados por su propia tecnología, pero no deberíamos esperar que lideren la carga. Algunos de los problemas están fuera de su área de experiencia, y en una sociedad democrática no es su rol decidir estas cosas. En cambio, las soluciones deberían ser desarrolladas a través de un proceso democrático público que incluya funcionarios electos, políticos, educadores, trabajadores de salud, funcionarios locales y líderes comunitarios. Millones de personas tendrán sus vidas interrumpidas, y necesitaremos una red de seguridad social más fuerte y flexible para ayudarlos a manejar la transición. Las comunidades locales ya están planteando preocupaciones sobre la energía y el agua necesarias para los centros de datos. Sin soluciones, algunos grupos empujarán para detener el desarrollo y despliegue de IA por completo. Las soluciones deberían ser moldeadas por nuestras respuestas a las preguntas profundas planteadas por la IA, incluyendo cómo preservamos nuestra humanidad en un tiempo cuando las máquinas pueden pensar más rápido que nosotros.
          </p>

          <p>
            Como personas que pasan sus vidas pensando en lo que significa ser humano, los líderes religiosos pueden jugar un papel clave en esto. Me fascinó la encíclica del Papa León XIV sobre la IA, "Protegiendo a la Persona Humana en el Tiempo de la Inteligencia Artificial". Establece una base fuerte para el trabajo que necesita ser hecho. En los próximos meses, compartiré más ideas para asegurar que los beneficios de la IA superen el daño que causa. Aquí hay tres para comenzar, comenzando con lo que creo que es el más importante.
          </p>

          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Construir un nuevo sistema para manejar la transición.</h3>
          <p>
            La máxima prioridad es una tarea monumental: crear un marco doméstico e internacional para lidiar con la IA. Ninguna de nuestras instituciones actuales fue diseñada para manejar una tecnología que se extiende tan rápido y toca tantas partes de nuestras vidas. Así que necesitaremos hacer nuevas. Es difícil sobreestimar lo enorme que será esta empresa. Después de los ataques del 11 de septiembre, el gobierno de EE. UU. pasó por su mayor reorganización desde la Segunda Guerra Mundial con el propósito de mejorar solo una función, seguridad nacional. La IA requerirá mucho, mucho más. Afectará seguridad nacional así como empleo, educación, impuestos, energía, elecciones, aire y agua, salud pública, sistema financiero, aplicación de la ley, transporte, tierras públicas y sistemas de TI. Estos sectores se superponen de maneras que nuestra burocracia existente no está diseñada para manejar. Un departamento de trabajo puede entender la disrupción de fuerza laboral pero no el riesgo de seguridad. Un regulador de negocios puede entender la concentración de mercado pero no los efectos de la IA en niños y adolescentes. Dejados a sí mismos, las instituciones verán solo una parte del sistema, mientras que las consecuencias de la IA se extenderán por todo el sistema.
          </p>

          <p>
            A nivel nacional, los países necesitarán cuerpos que puedan establecer prioridades entre agencias gubernamentales. El objetivo será asegurar que cada riesgo sea contabilizado. De lo contrario, un ataque habilitado por IA podría tener éxito porque nadie pensó que era su trabajo detenerlo. Pero incluso un país que ordena su propia casa aún estará expuesto a riesgos que cruzan fronteras. Esto es por qué una organización internacional necesitará ser construida en paralelo. Será diferente a cualquier otra institución que hemos creado, aunque puede seguir el modelo de algunos sistemas existentes. Hay un régimen de inspección para armas nucleares, regulaciones para aviación internacional, y acuerdos que protegen la capa de ozono. Una nueva organización global para la IA necesitará elementos de los tres y más. Es justo preguntarse si las instituciones del mundo están a la altura de diseñar e implementar esta nueva arquitectura. El gobierno se mueve lento cuando se mueve en absoluto, y la polarización dentro y entre países hace más difícil que nunca obtener cosas hechas. Alguna cooperación entre EE. UU. y China será requerida. No tenemos el lujo de movernos lento. El lugar para comenzar es con un proceso para construir las instituciones correctas antes de que la disrupción fuerce a los gobiernos a modo de crisis. Los líderes nacionales deberían convocar economistas, tecnólogos, expertos laborales, líderes empresariales y trabajadores mismos regularmente para identificar dónde las instituciones existentes están fallando y qué nuevas autoridades pueden ser necesarias. Los países necesitarán aprender el uno del otro. Y los países que albergan los principales desarrolladores de IA y controlan partes críticas de la cadena de suministro deberían comenzar a reunirse ahora para establecer normas compartidas, antes de que la presión competitiva haga más difícil para ellos cooperar. Construir el marco de que estoy hablando tomará años, por lo que necesitamos comenzar ahora.
          </p>

          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Reservar algunos trabajos para humanos.</h3>
          <p>
            Mi papá murió de Alzheimer en 2020. En las etapas finales de su enfermedad, fue cuidado día y noche por cuidadores pagados que lo entendían incluso cuando luchaba para expresarse. Él no siempre podía decirles cuando tenía hambre, pero siempre lo sabían. Mi familia y yo siempre estaremos gratos a ese grupo increíble de profesionales. Algo en el cuidado que le dieron a mi papá era irremplazablemente humano. Ningún robot podría o debería haberlo hecho. Pienso en ese equipo cuando viene la pregunta de qué trabajos desaparecerán y cuáles permanecerán. Creo que a medida que la IA y los robots mejoren, reservaremos ciertas cosas para que solo las hagan personas. He comenzado a llamar a este dominio "Reservado para Humanos", y es un ejemplo de los tipos de ideas que necesitaremos considerar. Me gusta la frase "Reservado para Humanos" porque me hace pensar en reservas naturales—lugares donde podríamos poner edificios y carreteras, pero elegimos no hacerlo porque la pérdida sería demasiado grande. Podríamos reservar algo como Reservado para Humanos por razones económicas. Por ejemplo, podríamos hacerlo porque permitir que las máquinas tomen un cierto rol desplazará a un gran número de personas que no pueden cambiar de trabajo fácilmente. No puedes decirle a un trabajador de construcción de 55 años que ha trabajado en construcción toda su vida que necesita ir a trabajar en un centro de cuidado de ancianos y esperar que lo encuentren satisfactorio.
          </p>

          <p>
            A veces la decisión de hacer algo Reservado para Humanos será impulsada por otros factores. En salud, por ejemplo, imagina un robot dándote la mala noticia de que tienes una enfermedad incurable. No hay razón técnica por la que no podría. Sin embargo no debería. El dominio Reservado para Humanos evolucionará con el tiempo—por ejemplo, deberíamos considerar reservar algunos trabajos ahora y implementar la IA lentamente a lo largo de años o décadas con un compromiso de preservar algunos trabajos. Algunas áreas, como educación y cuidado de salud mental, serán una mezcla, con un humano al mando que usa la tecnología para extender lo que pueden hacer. Las líneas también variarán de lugar a lugar. Algunos países podrían insistir en tener humanos cuidando a los ancianos. Pero un país como Japón, que tiene una fuerza laboral en shrinking y no suficientes jóvenes para cuidar a los viejos, podría aceptar un robot de cuidado. La idea de Reservado para Humanos plantea una serie de preguntas a las que no tengo respuestas. ¿Quién decide qué reservamos para humanos? ¿Qué criterios deberíamos usar? ¿Cómo evitas que las compañías hagan trampa y usen robots de todos modos? ¿Qué pasa con el comercio internacional cuando un país deja que robots hagan algo y otro país no? Estas necesitarán ser trabajadas en público como parte del plan de transición.
          </p>

          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Reequilibrar cómo tributamos el trabajo y el capital.</h3>
          <p>
            A medida que los trabajadores son empujados a diferentes empleos, necesitarán reentrenamiento y otro apoyo de la red de seguridad social. Pero trabajarán menos, lo que significa que pagarán menos en impuestos de ingreso, y los ingresos gubernamentales caerán justo cuando la demanda de esos servicios es mayor. Los fondos tendrán que venir de algún lugar en un tiempo cuando los presupuestos están estirados. Creo que deberíamos tributar tokens de IA y robots. Ahora mismo, si eres un empleador y contratas a alguien, pagas impuestos de nómina sobre sus ganancias. Pero si compras un robot, usualmente puedes escribirlo como gasto de negocio de inmediato. El sistema tributario te empuja a reemplazar personas con máquinas. Un tributo ralentizaría la carrera hacia away de la mano de obra humana un poco y levantaría dinero para reentrenamiento y una red de seguridad social más fuerte. Necesitaría ser dirigido para no ralentizar los usos puramente beneficiosos de la IA, como hacer medicina y educación más baratas. Los críticos de esta idea señalan que no es óptimamente eficiente en un sentido económico, pero no están considerando el valor más amplio del trabajo para individuos y sociedad. Y con toda la innovación acelerada que tendremos, podremos permitirnos un poco de ineficiencia como el precio por mantener a las personas empleadas. Propuse un tributo de robot años atrás y la mayoría de la reacción fue que era una idea extraña. Todavía soy un gran defensor de ello. Aunque no es la solución completa a la amenaza de la IA, es parte de una respuesta sabia. De cualquier forma que levantemos dinero para más asistencia, necesita llegar a las personas que más lo necesitan, incluyendo trabajadores que pierden sus empleos a IA y robots, personas cuyas horas o salarios disminuyen, y comunidades donde las pérdidas están concentradas. Necesitamos comenzar a hacer ese trabajo ahora para que los sistemas estén listos cuando la necesidad se vuelva aguda.
          </p>

          <h3 className="text-sky-400 font-semibold text-xl mt-8 mb-4">Lo que estoy haciendo.</h3>
          <p>
            Usaré mi voz y tiempo para poner a la IA y la equidad más alto en la agenda pública. Levantaré el tema con legisladores cada vez que visite Washington, D.C., y cuando me reúno con líderes alrededor del mundo. Estará en primer plano en mis conversaciones con las personas que están desarrollando modelos de IA. Abogaré por el marco nacional e internacional que describí antes. La Fundación Gates ayudará a impulsar el uso beneficioso, incluyendo en África. Breakthrough Energy, una compañía que fundé, usará la IA para ayudar a compañías a desarrollar energía limpia barata y ayudar a resolver el problema climático. También escribiré sobre la IA regularmente.
          </p>

          <p>
            Mi mensaje a los líderes es: Tienen una oportunidad de actuar ahora, antes de que el desempleo suba agudamente, las comunidades estén sufriendo, y la confianza pública se erosione. Pueden asegurar que su gobierno maneje el problema de manera holística, en lugar de dividirlo en múltiples feudos burocráticos. Pueden asegurar que la IA beneficie a todos. Y pueden trabajar con otros gobiernos para enfrentar este desafío nacional y global. Finalmente, intentaré ampliar el círculo de personas que dan forma a este debate. Debería incluir trabajadores, estudiantes universitarios que están a punto de entrar en la fuerza laboral, líderes comunitarios, líderes religiosos y organizaciones basadas en fe, padres, educadores y otros cuyas voces a menudo no son escuchadas pero que tienen información sobre cómo la transición afectará las vidas de las personas. ¿Cómo aseguramos que los beneficios de la IA alcancen a personas que no ya tienen riqueza, influencia y acceso? ¿Cómo fortalecemos la red de seguridad social y ayudamos a trabajadores y comunidades a prosperar incluso cuando son desplazados? ¿Cómo deberían las instituciones públicas adaptarse? ¿Y cómo preservamos nuestra humanidad a través de todo esto?
          </p>

          <p className="pb-8">
            Esta tecnología sin precedentes demanda una respuesta global sin precedentes. Si lo hacemos bien, el pago para la humanidad será fenomenal y el mundo será un lugar más equitativo. Rara vez dejo de pensar en la IA—no porque tenga todas las respuestas, sino porque las preguntas que plantea son demasiado consecuentes para dejarlas a un pequeño grupo de tecnólogos. Los líderes a través de academia, negocios, gobierno y sociedad civil todos tienen un rol que jugar en dar forma a lo que viene.
          </p>

          {/* --- INICIO: FUENTE ORIGINAL --- */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-slate-500 font-mono text-sm">
              Material original extraído y adaptado de su fuente oficial.
            </span>
            <a 
              href="https://www.gatesnotes.com/a-turbulent-ai-era-and-critical-choices-to-make" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors font-mono text-sm bg-sky-400/10 px-4 py-2 rounded-lg border border-sky-400/20 hover:bg-sky-400/20"
            >
              Ver publicación original {'->'}
            </a>
          </div>
          {/* --- FIN: FUENTE ORIGINAL --- */}

        </div>
      </article>
    </div>
  );
}