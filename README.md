<a href="#challenge-técnico---gestión-de-usuarios-y-películas" id="top"></a>

<h1>Challenge Técnico - Gestión de Usuarios y Películas</h1>

<p>
  Este repositorio contiene una API REST que permite la gestión de usuarios y películas, basada en el universo de Star Wars. La aplicación está construida con <strong>NestJS</strong> y proporciona operaciones CRUD completas para manejar usuarios y películas.
</p>

<h2><a href="#funcionalidades">Funcionalidades</a></h2>

<ul>
  <li><strong>Usuarios</strong>:
    <ul>
      <li>Registro de nuevos usuarios regulares.</li>
      <li>Inicio de sesión para usuarios regulares.</li>
      <li>Crear nuevos usuarios (administrador).</li>
      <li>Leer información de usuarios existentes.</li>
      <li>Actualizar información de usuarios.</li>
      <li>Eliminar usuarios.</li>
    </ul>
  </li>
  <li><strong>Películas</strong>:
    <ul>
      <li>Crear nuevas películas.</li>
      <li>Leer detalles de películas.</li>
      <li>Actualizar información de películas.</li>
      <li>Eliminar películas.</li>
    </ul>
  </li>
  <li><strong>Sincronización Automática</strong>:
    <ul>
      <li>La API ejecuta un cron cada 8 horas para sincronizar los datos de la API pública de Star Wars con la base de datos interna.</li>
      <li>Este proceso de sincronización solo actualiza los datos que vienen de la API pública, identificados con la flag <code>isApi</code>.</li>
      <li>Los datos creados manualmente por un administrador no son modificados ni sobrescritos durante la sincronización.</li>
    </ul>
  </li>
</ul>

<h2><a href="#consumo-de-api-pública">Consumo de API Pública</a></h2>

<p>
  Este repositorio consume una API pública de Star Wars para obtener datos relacionados con el universo de Star Wars. La API pública proporciona información sobre personajes, películas, planetas, naves estelares, vehículos y especies, que es utilizada por nuestra aplicación para enriquecer las funcionalidades de la misma.
</p>

<h2><a href="#guardias-personalizadas">Guardias Personalizadas</a></h2>

<p>
  Para asegurar que solo usuarios autorizados accedan a ciertos endpoints, la aplicación implementa guardias personalizadas. Estas guardias controlan el acceso según los roles de los usuarios y otros criterios de seguridad, asegurando que solo los usuarios con permisos adecuados puedan realizar ciertas acciones, como la creación o eliminación de recursos.
</p>

<h2><a href="#instalación">Instalación</a></h2>
<li>Debe tener instalado mongo </li>
<li>Clona el repositorio: </li>

```bash
$ git clone https://github.com/tu-usuario/nombre-del-repositorio.git
$ cd nombre-del-repositorio
```
 
<li>Instala las dependencias:  </li>

 ```bash
$ npm install
```
 

<li>Configura las variables de entorno:
    <p>
     Crea un archivo <code>.env</code> en la raíz del proyecto y pegue las variables que le han sido proporcionadas.
    </p>
  </li>
  <li>Inicia la aplicación:</li>

```bash
$ nest start
```

<h2><a href="#uso">Uso</a></h2>

<p>
  Una vez que la aplicación esté en funcionamiento, puedes interactuar con ella utilizando herramientas como <strong>Postman</strong> o <strong>cURL</strong> para realizar solicitudes HTTP a los endpoints disponibles.
</p>
<p>
  La API cuenta con una documentación completa de los endpoints utilizando <strong>Swagger</strong>. Puedes acceder a esta documentación en <code>/api</code> para ver los detalles de cada endpoint, incluyendo los métodos disponibles, parámetros requeridos, y ejemplos de respuesta.
</p>


<p align="right">
  <a href="#top">Volver al inicio</a>
</p>


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
