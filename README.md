# Sistema de Monitoreo de Dinosaurios - Frontend (Spring WebFlux)

# LINKS

FRONTEND: https://github.com/Tema4-Sistema-Monitoreo-Jurassic/Frontend-Dinosaurios

BACKEND: https://github.com/Tema4-Sistema-Monitoreo-Jurassic/Backend-Sistema-Monitoreo-Jurassic

---

# PARTICIPANTES

- **Nombre del equipo**: Jurassic Park Monitoring Team
- **Miembros**:
  - Jaime López Díaz
  - Nicolás Jimenez
  - Marcos García Benito
  - Juan Manuel Rodrigez

---

# CUENTAS PARA TESTEO:

-USUARIO --> Mail ** [usuario@gmail.com] ** - Nombre**[Usuario]** - Contraseña**[a12345_679]**

-ADMINISTRADOR --> Mail**[admin@gmail.com]** - Nombre**[Administrador]** - Contraseña**[a12345_67]**

-PALEONTOLOGO --> Mail**[paleontologist@gmail.com]** - Nombre**[Paleontologo]** - Contraseña**[a12345_678]**

---

# Gestión Dinosaurios Frontend

Este proyecto consiste en el desarrollo del frontend de una aplicación **[Spring-WebFlux que se aprovecha de una BBDD reactiva concretamente MongoDB]** y solapa la coordinacion y deteccion de sucesos mediante **[RabbitMQ]**. Partimos de un loggin que vifurca las diferentes actividades en base al rol con el que inicias sesion(usuario, admin o paleontologo), sesion que puedes crear en una sección de registro.
Desborda a nivel estetico gracias a la muestra-visualización e interacción activa con múltiples pantallas, las cuales presentan diversos ecosistemas (islas-criaderos-enfermerias). Estos sistemas han sido desarrollados mediante prácticas de reactividad, control de flujo, orientación a aspectos y monitorizacion pudiendo observar en dichos ecosistemas diferentes tipos de dinosaurios que se desenvulven como si estubiesen vivos (se desplazan, emferman/son curados en la enfermeria, interactuan entre ellos, comen, crecen e incluso fallecen de diversas causas).
Explotando la dinámica y la utilización transversal de los servicios necesarios planteados en el backend filtrados y monitorizados gracias al flujo, la reactividad y monitorización que trae consigo WebFlux+Reactive Mongo. Esto ha permitido optimizar el código, reduciendo su volumen y cumpliendo con todas las posibles interacciones y desempeños de los dinosaurios planteados (en la gran variedad que estos plantean en base a sus subtipos)

La aplicación frontend se comunica con el backend para obtener el estado inicial de los datos base, a partir de los cuales se pueden trabajar las diferentes funcionalidades ofrecidas. Estos datos se reciben y actualizan por interbalos permitiendo mostrar diversas mecánicas y actividades desempeñadas por los dinosaurios a lo largo de su ciclo de vida a través de maquetaciones visualmente atractivas, siempre en función de los usuarios y paleontolosgos responsables de la muestra de los sucesos desarrollados en la aplicación.

## **Extras a tener en cuenta:**

### -Clasificación y Comportamiento de los Dinosaurios
Los dinosaurios se clasifican en carnívoros, herbívoros y omnívoros, cada uno con subtipos específicos (acuáticos, terrestres y voladores). Cada tipo sigue un conjunto de reglas de interacción y alimentación propias. Por ejemplo:

Carnívoros: pueden cazar presas según su subtipo (un carnívoro acuático solo caza dinosaurios acuáticos, mientras que uno volador tiene acceso a una gama más amplia de presas).

Herbívoros: se alimentan únicamente de plantas, con interacciones que limitan su contacto con dinosaurios predadores.

Omnívoros: su dieta es más flexible, permitiéndoles consumir plantas y otros dinosaurios según su subtipo.

Estas reglas permiten una simulación natural y dinámica de la interacción entre diferentes tipos de dinosaurios, replicando patrones de comportamiento y relaciones de depredador-presa.

### -Manejo del Envejecimiento y Mortalidad
El sistema incluye una función de mortalidad que se activa cuando un dinosaurio alcanza los 20 años de edad. A partir de ese momento, cada año adicional incrementa en un 0.02 la probabilidad de muerte del dinosaurio, simulando el envejecimiento natural y los riesgos asociados a la longevidad en la vida salvaje. Este proceso se realiza en segundo plano, sin afectar la experiencia de usuario.

Para poder probar todas estas funcionalidades sin limitaciones, existen cuentas precreadas para un administrador, un paleontologo y un usuario convencional. Estas cuentas tienen el único de diferencias la experiencias a disfrutar pudiendo gestionar el registro de usuarios, la visualizacion de los dinosuarios (en cuerpo y alma en las islas y vislumbrar la gestión de sus datos por sensores en una tabla respectivamente).
En resumen, la aplicación cuenta con un panel de log-in, un panel de visualizacion con animaciones y fondo para las islas, y un panel de gestión de datos.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para la construcción de interfaces de usuario.
- **Webpack**: Empaquetador de módulos que compila el código de React.
- **Babel**: Compilador de JavaScript que permite usar la sintaxis moderna de ES6+ y JSX.
- **Styled Components**: Para manejar estilos en componentes de React.
- **Axios**: Cliente HTTP para realizar solicitudes al backend.
- **React Router DOM**: Para manejar el enrutamiento dentro de la aplicación React.
- **Chart.js** y **React-Chartjs-2**: Cargado en el JSON por si fuese necesario.
- ** Imagenes

## Requisitos

Para ejecutar el frontend necesitas tener instalados:

- **Node.js** (versión recomendada: 14+)
- **npm** (gestor de paquetes incluido con Node.js)

## Instalación

1. Clona el repositorio del frontend en tu máquina local:

```bash
git clone https://github.com/tu-usuario/frontend-dino.git
```

2. Navega al directorio del proyecto:

```bash
cd frontend-dino
```

3. Instala las dependencias del proyecto::

```bash
npm install
```

4- Clona el repositorio del frontend en tu máquina local:

```bash
npm start
```

## Estructura del Proyecto

- **src/**: Contiene el código fuente del proyecto.
- **components/**: Componentes reutilizables de React, como la visualización de la distribución.
- **pages/**: Páginas principales de la aplicación muestra de todo atraés de ellas (islas-panel de dinos-registro <-- loggin).
- **services/**: Funciones para interactuar con la API, como las llamadas a Axios para obtener los datos del backend + aprobechamiento de aop.
- **App.js**: Punto de entrada principal de la aplicación React.
- **index.js**: Archivo de arranque de la aplicación que renderiza el componente raíz en el DOM.
- **Images**: Recursos aplicados para la mejora de experiencia visal.

## Relación entre Frontend y Backend

### -Backend

El sistema de monitoreo de Jurassic Park expone endpoints RESTful a través de controladores desarrollados en Spring WebFlux, que permiten la interacción en tiempo real entre el backend y el frontend. Estos endpoints facilitan la consulta y actualización constante sobre aspectos clave del ecosistema, como el estado de salud, la posición y las interacciones de los dinosaurios. Gracias al patrón "Factory" cada tipo de dinosaurio —carnívoro, herbívoro y omnívoro— cuenta con subtipos acuáticos, terrestres y voladores, de manera similar se diferencian islas y sensores propios de cada dino y estos endpoints también permiten reflejar sus actividades únicas en el tablero visual del frontend. Por ejemplo, cuando un carnívoro terrestre caza a un herbívoro, o cuando un dinosaurio enfermo es llevado a la enfermería, los datos se envían y actualizan mediante la API REST, permitiendo a los administradores monitorear en tiempo real estos comportamientos específicos.

La arquitectura del sistema, basada en Spring WebFlux y MongoDB reactivo, es capaz de manejar los complejos eventos de un entorno donde los dinosaurios interactúan continuamente entre sí y con su entorno. Las islas del parque están organizadas por tipos de dinosaurios: la Isla Acuática, por ejemplo, alberga exclusivamente especies acuáticas, mientras que la Isla Terrestre/Aérea recibe dinosaurios terrestres y voladores, facilitando así que los dinosaurios se desarrollen en ambientes acordes a sus necesidades. MongoDB permite el almacenamiento y recuperación de datos en tiempo real para cada dinosaurio, lo que hace posible que el sistema maneje múltiples eventos de manera eficiente. Esto es crucial cuando, por ejemplo, un dinosaurio acuático crece y se traslada desde el criadero acuático a la Isla Acuática para convivir con otros de su tipo.

Para gestionar eventos críticos en el parque, el sistema también utiliza RabbitMQ, que envía alertas y notificaciones de manera asíncrona. Esto permite una rápida respuesta a situaciones en las que, por ejemplo, los sensores detectan un cambio alarmante en la frecuencia cardíaca de un dinosaurio o un comportamiento inusual que requiera que sea trasladado a la enfermería. RabbitMQ permite que los controladores en el backend respondan a estos eventos sin bloquear el flujo de datos y sin interferir en las interacciones de otros dinosaurios. De este modo, el sistema mantiene la agilidad en situaciones de emergencia, sincronizando al instante estos eventos críticos con el frontend.

Además de los endpoints específicos, el sistema también integra servicios transversales que manejan aspectos de seguridad, validación y autenticación en cada interacción. Estas funciones garantizan que cualquier acción sobre los dinosaurios, desde la reubicación en una isla hasta la actualización de su estado de salud, esté protegida y cumpla con las políticas del sistema. Cada acceso a la API se valida, lo que garantiza que solo usuarios autorizados pueden monitorear y gestionar el parque, proporcionando una plataforma segura y confiable para el ecosistema.

### -Frontend

El frontend, desarrollado con React, consume la API REST para obtener los datos de estado y distribución de varios hechizos, usuarios y eventos mágicos que se han creado, asignado y simulado transversalmente, reactivamente además de monitorizado gracias a un conjunto de prácticas de programación orientada al control y monitorización de flujo, reactividad  y aspectos. Estas prácticas se aplican antes, durante y después en los diferentes servicios según convenga, para la correcta generación, visualización y gestión de dinosuarios "vivoss e interactivos" por islas por pantalla, entre otras funcionalidades.

La aplicación proporciona una interfaz de usuario con múltiples pantallas para disfrutar de diversas funcionalidades, incluyendo el registro, loggin, progreso y visualización (mediante animaciones-ecosistemas) de distintos dinosaurios, la gestión de sus datos basada en los datos de los eventos que las proporcionan sus sensores, el registro de usuarios (creación de cuentas) y mucho más.


### -Conclusión

En conjunto, este sistema de Jurassic Park permite la gestión y visualización de un parque temático de dinosaurios de forma completa y en tiempo real. Desde la actualización constante de datos específicos hasta la respuesta rápida ante eventos críticos, la plataforma combina tecnologías reactivas, servicios transversales de seguridad y un robusto sistema de mensajería para ofrecer un entorno eficiente y escalable. Esto permite a los administradores gestionar el comportamiento y la salud de cada dinosaurio según su tipo, entorno y ciclo de vida, manteniendo el equilibrio y la seguridad en el ecosistema del parque.
