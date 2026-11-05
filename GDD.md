### **PROYECTO エフデイstyle**

### **by 六七号線の奴ら**



###### **Game Design Document**



&#x09;**Miembros:**



&#x09;**·** Alejandro Jiménez Rojo

&#x09;· Leo Reyes Funk

&#x09;· Juan José de Reyna Godoy



*Última actualización - 4 de noviembre de 2026*



**---------------------------------------------------------------------------**



#### **ÍNDICE**



* [Descripción](#descripción)
* [Espacio de juego](#espacio-de-juego)
* [Selección de personajes](#selección-de-personajes)
* [Aura](#aura)
* [Batallas](#batallas)
* [Objetos](#objetos)
* [Misiones secundarias](#misiones-secundarias)
* [Tiendas](#tiendas)
* [Menús](#menús)
* [UI](#ui)
* [Cómo se gana y cómo se pierde](#cómo-se-gana-y-cómo-se-pierde)
* [Experiencia de juego](#experiencia-de-juego)
* [Formas de jugar](#formas-de-jugar)
* [Estética](#estética)
* [Referencias](#referencias)



**---------------------------------------------------------------------------**



#### **DESCRIPCIÓN**



Las características tomadas en consideración para crear este juego son las siguientes:



##### **Público objetivo**



El público objetivo del juego es un público jovén de entre los 14 y los 20 años, preferiblemente aficionados a los juegos de ritmo.



##### **Tiempo de juego**



Entre 25 o 35 minutos, en función de la habilidad del jugador y cuantas batallas decida luchar.



##### **Bucle de juego**



El bucle principal del juego consiste en



<img width="300" height="250" alt="bucle-de-juego" src="https://github.com/user-attachments/assets/d530d178-4244-4878-85d3-7fd5c094c668" />



##### **Objetivo del juego**



El objetivo principal es llegar a las oficinas de Kojima tras haber obtenido el suficiente aura y conseguir impresionar a Kojima.

Sin embargo, también contamos con objetivos secundarios, tales como completar todas las batallas, obtener todas las skins y obtener todos los coleccionables.



##### **Resumen de la historia**



Tres profesores de la FDI –Toni, Pablo e Isma– viajan a Japón con el propósito de hacerse amigos de Kojima, pero para lograrlo primero deberán farmear mucha aura en el barrio de Shibuya bailando y haciendo poses to’ guapas. Así, cuando pillen el tren a Minato –donde se encuentra el edificio de Kojima Productions– el mismísimo Hideo Kojima se quedará asombrado por el mazo aura que se cargan los profes de la FDI.



**---------------------------------------------------------------------------**



#### **ESPACIO DE JUEGO**



El mapa es un espacio en el que el jugador controla el cursor de su ratón. El jugador podrá seleccionar distintos espacios a los que ir, haciendo click en estos. Al colocar el cursor sobre una zona, la representación del personaje (mini personaje, o una carita) que el jugador ha seleccionado aparecerá en esa zona. Al ir, cambiará la escena a la de esa zona, que puede ser de distintos tipos.



(imagen)



##### **Zonas**



Hay dos tipos de zonas disponibles dentro del mapa: *Zonas de batallas* y *Tienda*



##### **Zonas de batallas**



En estas zonas el jugador tendrá la opción de interactuar con NPCs o iniciar una batalla de aura. La manera de hacer una de estas opciones es hacer click sobre el área de la pantalla que represente la acción, es decir, sobre el NPC o la “pista de aura”.



(imagen)

(imagen)



**Localizaciones:**

*- Arcade.*

*- Cruce de Shibuya*

*- Callejón*

*- SevenSixSeven*



**Batallas:**



(imagen)



##### **Tienda**



La tienda del juego será un Don Quijote en el que el jugador podrá comprar tanto skins como objetos y coleccionables con yenes. 



**---------------------------------------------------------------------------**



#### **SELECCIÓN DE PERSONAJES**



Al inicio de la partida el jugador podrá escoger como qué profesor jugar, esta elección le otorgará un beneficio distinto.



(imagen)



##### **Personajes Jugables**



\- **Toni:** (beneficios - reducción de precios en la tienda)

Toni tendrá el beneficio de caerle bien al/la la cajero/a, y por tanto conseguir que le de cupones de descuento en objetos de la tienda.



\- **Isma:** (beneficios - pierde menos aura en la batalla)

La presencia de Isma hace que la penalización por fallos se le reduzca, haciendo que pierda menos dominancia con cada fallo.



\- **Pablo:** (beneficios - facilidad de desbloquear eventos de NPCs)

Los vínculos sociales de Pablo se extienden de Madrid a Tokyo, lo que le permitirá adentrarse en misiones exclusivas.



**---------------------------------------------------------------------------**



#### **AURA**



Recurso principal del juego con el que se mide el progreso y se representa con un porcentaje. Se muestra al jugador como una barra que se va llenando en la UI del mapa. Se consigue al ganar batallas, cada una dando una cantidad distinta. Una vez ganes x cantidad de aura, no la puedes perder. 



Conseguir el 100% de la barra de aura es lo que te permite llegar al final con Kojima y terminar el juego.



No será necesario pasarse todos los niveles para llegar al jefe final.



Internamente el contador podrá aumentar más allá del 100% y afectará a las misiones secundarias, pudiendo desbloquear más misiones cuantos más niveles te pases.



**---------------------------------------------------------------------------**



#### **BATALLAS**



Las batallas consistirán en farmear aura, para ello el jugador deberá realizar los movimientos adecuados en el momento adecuado. Esto se le indicará con unas flechas de distintas direcciones y colores que llegan a una línea de juicio. El jugador tendrá que presionar la misma flecha en el teclado que la que aparece en pantalla al momento de tocar la línea de juicio. El color de la flecha debe coincidir con el estado del jugador (entre naranja y morado), que cambia con las teclas ‘j’ y ‘k’.





En las batallas existen 2 parámetros:



\- **AURA**: vida del jugador durante la batalla. Empieza llena del todo y se 

vacía con cada error, pero se puede rellenar al hacer movimientos

correctos. Si el aura llega a 0, la batalla acabará automáticamente con una derrota.



\- **PUNTOS DE FARMEO**: puntuación acumulada por el jugador durante la

batalla. Empieza a 0 y aumenta con cada movimiento correcto. Varios movimientos correctos seguidos generan un combo que hace de multiplicador para los puntos que se consiguen. Tanto este multiplicador como los puntos se mostrarán en la pantalla.



(imagen)



Cada batalla durará un tiempo predeterminado y tendrá un patrón de movimientos único e invariable, haciendo que repetir una batalla implique repetir la misma experiencia.



Una batalla se gana al completarla sin haber sido derrotado, es decir, manteniendo un aura de batalla superior a 0 en todo momento.



Al ganar una batalla el jugador obtendrá una nota (S, A, B, D, F) que dependerá de los puntos de farmeo que haya conseguido durante la batalla.



Completar una batalla por primera vez otorgará una cantidad de AURA global que dependerá de la dificultad de la batalla. Repetir el nivel no dará más aura.



Siempre se ganará dinero tras ganar una batalla, la cantidad dependerá de la nota que haya sacado el jugador en la batalla.



**---------------------------------------------------------------------------**



#### **OBJETOS**



##### **Skins**



Elementos que nos permiten cambiar cómo se ve el personaje que el jugador esté usando. Su función es meramente estética. Se podrán obtener en la tienda.



Las skins desbloqueables son siguientes:

*· Neko-chan (gato)*

*· Uniforme Escolar*

*· Maid :3*

*· Halloween*



##### **Coleccionables**



Los coleccionables son objetos especiales que podremos comprar en las tiendas u obtener en misiones. No aportarán ninguna ventaja al jugador. 



##### **Objetos de misión**



Son objetos necesarios para completar misiones de NPCs. Cada objeto en específico sirve para una misión en específico. Se pueden comprar ilimitadamente. Una vez completada la misión, se eliminarán del inventario.



**---------------------------------------------------------------------------**



#### **MISIONES SECUNDARIAS**



La aparición de misiones secundarias se rigen por un sistema de misiones dinámicas, es decir, que su presentación al jugador depende del estado del mundo y/o del jugador.



Las misiones aparecerán o no en función del nivel de aura del jugador y de las batallas que se hayan superado.



Habrá un total de 4 misiones secundarias.



**---------------------------------------------------------------------------**



#### **TIENDAS**



Dentro del mundo podremos encontrar tiendas, en estas tiendas podremos adquirir: Skins, Coleccionables y Objetos de misión, y hablar con la persona que esté de servicio al público.



(imagen)



##### **Sistema Monetario**



Puesto que la ambientación del juego se sitúa en Japón, la moneda del juego serán yenes. Estos se pueden conseguir al ganar batallas o cumplir con misiones secundarias y se gastan en la tienda.



**---------------------------------------------------------------------------**



#### **MENÚS**



El juego tendrá dos menús para acomodar al usuario.



##### **Menú Principal**



Tendrá el título del juego, un botón que lleve a los créditos, y un botón para iniciar una partida. Una vez pulsado, aparecerán tres botones para elegir personaje.



(imagen)



##### **Menú de Ajustes**



Tendrá opciones para modificar el volumen del juego, y otras cuestiones de comodidad para el jugador, o entrada salida. También tendrá las opciones para cambiar los disfraces del personaje jugador.



(imagen)

(imagen)



**---------------------------------------------------------------------------**




#### **UI**



(imagen)



(imagen)



**---------------------------------------------------------------------------**




#### **CÓMO SE GANA Y CÓMO SE PIERDE**



Para ganar el juego, el jugador debe llegar a las oficinas de Kojima Productions. Para ello tienes que llenar el 100% de la barra de aura. Esta barra aumentará al salir victorioso de los enfrentamientos con otros enemigos.



Las batallas de aura se ganan al tener más dominancia de batalla que el rival (batallas de aura). Como se explica en su apartado, si tu dominancia de batalla llega a cero, perderás la batalla de aura.



No hay manera de perder el juego en su totalidad, pues siempre se puede volver a intentar una batalla después de perderla.



**---------------------------------------------------------------------------**




#### **EXPERIENCIA DE JUEGO**



La experiencia principal del juego se basará en la prueba y error, repitiendo los niveles hasta conseguir superarlo.



Al completar el nivel se espera que el jugador se sienta satisfecho con su esfuerzo y quiera enfrentarse al siguiente.



En cambio si el jugador se queda atascado con un nivel, podrá enfrentarse a otro, ya que no es necesario completar todos los niveles para poder llegar al final.



Esto nos ofrece diversas rutas con las que llegar al final.

Por ejemplo:



Si el jugador decide empezar por un nivel fáciles y continuar con los más difíciles, el jugador se encontrará con una experiencia de dificultad lineal.



En cambio, si el jugador decide hacer todos los niveles fáciles y continuar por los de dificultad media, experimentará una partida mucho más suave.



El jugador también podrá enfrentarse a los niveles más difíciles desde un principio, enfrentándose a un reto mucho superior.



**---------------------------------------------------------------------------**



#### **FORMAS DE JUGAR**



El juego cuenta con una gran cantidad de dinámicas, algunas que podemos mencionar son:

**· Directo**: el jugador decide hacer las misiones necesarias para encontrarse con Kojima.

**· Coleccionista**: el jugador que decide hacer todas las misiones posibles del juego e intenta obtener todos los coleccionables.



A su vez debemos recalcar que el juego te permite realizar las distintas batallas en el orden que desee el jugador y que tampoco es necesario hacer todas para obtener el mínimo de aura necesaria. Esto permite una gran variedad de formas en las que completar el juego.



**---------------------------------------------------------------------------**

&#x20;

#### **ESTÉTICA**



El juego contará con una estética cartoon en el diseño de sus entornos y personajes. A su vez, los entornos adoptarán aspectos visuales de las zonas urbanas japonesas y elementos de la estética Y2K y de la cultura popular de los videojuegos.



La paleta de colores será viva y llamativa, sin llegar a ser chillona



La música estará basada en el pop de los 2000s, el rap y el Hip Hop, mientras que los efectos de sonido recrearán aquellos de las consolas de las interfaces de las consolas de sexta y séptima generación.



Los videojuegos Jet Set Radio, Persona 3 o PaRappa the Rapper  sirven como referencia para el estilo visual del juego.



**---------------------------------------------------------------------------**



#### **REFERENCIAS**



* Scratchin’ melodii by LJ LephemStar 
* Friday Night Funkin’  by  The Funkin’ Crew Inc. 
* Monster Con  by  Beautiful Glitch
* Osu!  by ppy Pty Ltd



**---------------------------------------------------------------------------**



Copyright ©2026/2027



