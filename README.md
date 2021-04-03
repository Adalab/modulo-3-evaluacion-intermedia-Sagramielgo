## Poke React Sagra Mielgo #gitFuntastic

Ejercicio sencillo de React con los personajes de Pokemon.

Partimos de una plantilla de React que primero he descargado y después de hacer `npm install` deberemos ejecutar en la terminal `npm start` para visionar el estado del ejercicio en la web.

Podemos modificar dicha plantilla para que se acomode a nuestras necesidades.
Para ello he creado primero una estructura de carpetas para guardar de forma ordenada los archivos:
Carpeta componentes para javascript; carpeta styleSheet para archivos scss y carpeta de data para contenido dado en el enunciado, en este caso un array de datos; he actualizado también el archivo package json para que al crear la carpeta de producción no sea necesario ejecutar npm build, si no que con npm docs crea automáticamente una carpeta con este nombre, docs, necesaria para publicar en gitHub pages.

Después he realizado una estructura de 3 componentes de javascript con código escrito en JSX, cuya sintaxis es similar a HTML pero en este caso se escribe en archivos de js.
He preferido utilizar componentes funcionales; la sintaxis no es tan compleja como en los componentes de clase.

A continuación he aplicado un Hook para la elección de favorita cambiando el color de fondo y un lifing con dos funciones manejadoras que añaden el mensaje "ELIGE"
Finalmente he añadido estilos en scss, también en diferentes archivos que se corresponden con los 3 componentes de js, a los que he nombrado del mismo modo para que se asocien facilmente y sean migrables en código conjunto, cada componente js con su archivo scss correspondiente.

Más sobre mí, [AQUÍ](https://github.com/Sagramielgo)
