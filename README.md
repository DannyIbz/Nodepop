# Entrega de la práctica de DevOps 27.11.2016
-

Para el despliegue de la aplicación se ha usado los servicios de AWS. Con el objetivo de que la aplicación funcionara correctamente, se ha usado el código de Javier Miguel -> [Nodepop](https://bitbucket.org/agbo/agbo-master-nodejs-practica).

A continuación están los links a los diferentes recursos que sirve la instancia de AWS:

- Servidor de contenido estático (web) -> [doggify.es](https://doggify.es).
- Aplicación Nodepop -> [nodepop.doggify.es](https://nodepop.doggify.es). Los archivos estáticos son servidos por Nginx.
- Aplicación Nodechat -> [chat.doggify.es](https://chat.doggify.es). Al igual que la aplicación de Nodepop, los archivos estáticos son servidos por Nginx.

Todas las páginas aquí mostradas incluyen un certificado de seguridad propio obtenido haciendo uso de los servicios de *Let's Encrypt*.

También se hace uso del gestor de procesos PM2 para ninguna de las dos aplicaciones en Node aquí desplegadas dejen de estar en ejecución.

Por último, se sirven los archivos estáticos de la web junto con una cabecera personalizada, tal y como se pide en la práctica.


<br>
# Instrucciones de uso de la API
-

A continuación se detallan las instrucciones de uso para la API de *Nodepop*.

#### Primeros pasos
- Para poder hacer uso de esta API, antes de nada, se debe crear una base de datos `nodepop`haciendo uso del cliente MongoDB. Para hacer las pruebas en local, la dirección debe ser: *mongodb://localhost:27017/nodepop*.

- Una vez tengamos la base de datos en marcha, cargaremos una serie de anuncios y usuarios prestablecidos en un archivo JSON, y para ello haremos uso de `npm run installDB` desde el terminal.

- **Atención!** Este *script* lo primero que hará será __borrar las bases de datos existentes__ y nos creará una con 4 anuncios de ejemplo para empezar a trabajar con la API y 3 usuarios distintos con su contraseña para poder *loggin* en la interfaz web de la API.

- Una vez ejecurado el *script* `installDB` ya podemos arrancar la API desde su interfaz común y hacer uso de ella. Para esto, ejecutaremos desde el terminal el comando `npm start`.


####Usuarios

Como se ha comentado anteriormente, una vez ejecutado `npm run installDB`, se han creado 3 usuarios en la base de datos *nodepop*.

A continuación tiene un listado de los usuarios y contraseñas de prueba para empezar a hacer uso de esta API.

**Se recomienda** cambiar los usuarios una vez que se vaya a pasar esta API a producción ya que su seguridad es mínima.

| User      | Pass      |        eMail      |
| --------- |:---------:|:-----------------:|
| admin     | 12345     | admin@nodepop.com |
| usuario   | 0000      | user@nodepop.com  |
| dani      | pass123   | dani@nodepop.com  |

Tal y como se puede comprobar en la tabla, en el registro de los diferentes usuarios, exite el campo eMail que será de utilidad en el caso de que se deba resetear alguna clave.

Para crear nuevos usuarios se puede hacer uso del método POST haciendo uso de aplicaciones del tipo *Postman* para añadilos a la DB.



-
**Daniel Sánchez Torres**
