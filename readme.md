# Ejercicio de entrega de NodeJs
## Enunciado

Se requiere una API REST que permita manejar librerías y los libros asociados a cada una de las librerías. Utilizar Node.Js, Express, Sequelize y Passport como la infraestructura para crear el servicio. Usar SQLlite como motor de base de datos.

### Entidades:

### Libreria
- Descripción: Una librería puede tener desde 0 a muchos libros.
- Ruta: /library
- Acciones
	+ Crear librería (AUTH)
	+	Obtener una librería, debe traer también todos los libros
	+ Obtener todas las librerías, debe traer también todos los libros
	+ Modificar una librería (AUTH)
	+ Eliminar una librería ** (AUTH)
	+ Agregar un libro nuevo * (AUTH)


- Entidad

|id       | Int   | El identificador de la librería|
|---------|-------|--------------------------------|
|name     |String | Nombre de la librería
|location |String |Dirección física de la librería
|phone    |String | Número de teléfono

### Libro
- Descripción: Un libro tiene todos los datos del mismo, puede pertenecer a una librería o no y representan la instancia (copia) de un libro. Puede haber más de un libro con los mismos datos, excepto el id que es único para esa instancia.
- Ruta: /book
- Acciones
  - Crear libro * (AUTH)
  - Obtener un libro en particular
  - Obtener todos los libros
  - Modificar un libro (AUTH)
  - Eliminar un libro ** (AUTH)


- Entidad

|id |Int |El identificador de este libro en particular|
|---|----|--------------------------------------------|
|isbn |Int |Este identificador es único en todo el mundo y representa el libro, la versión del autor y el año de edición
|tittle |String |Título del libro
|author |String |Autor del libro
|year |String |Año de edición del libro
|idLibrary |Int |El identificador de la librería en donde este libro se encuentra

\* : Para crear un libro, pueden hacerlo de las dos formas:
  - Haciendo que la librería tenga un método para agregar un libro nuevo
  - Crear un libro directamente con /book y enviar el id de la librería

\*\* : El borrado, siempre de forma lógica. Esto quiere decir que no borramos de la base de datos si no que marcamos que fué borrado.

### Usuario
- Descripción: Un usuario del sistema. Estos usuarios van a ser creados en la base de datos cuando se inicia el sistema
- Ruta: /user
- Acciones
  - Login
- Entidad (A definir)

Debe existir un usuario con name: admin y password: admin

Puntos a evaluar:
- Que la API permite hacer un CRUD de librerías
- Que la API permite hacer un CRUD de libros
- Que las acciones marcadas con (AUTH) sólo se puedan ejecutar si el usuario está autenticado
- Definir y crear la entidad de Usuario
- Describir el proceso de desarrollo. (Cómo fueron fueron creados los archivos y por qué)
- Bonus: Que haya validación de las entidades al momento de crearse/actualizarse

---

## Desarrollo y archivos
#### `app.js`
Punto inicial del proyecto, se define el numero de puerto, el inicio de servidor con express.js y la conexion con la base de datos y la inclucion de los middleware.
Se importa los archivos desde la carpeta Routes.

### Routes
Se definen los archivos para el enrutamiento.

- `library.js`: archivo para al gestion de las rutas de la entidad de las librerias, permitiento ver las librerias cargadas, crear una nueva libreria, como asi tambien buscar, editar o eliminar una libreria en particular identificado con su id.
- `book.js`: archivo para al gestion de las rutas de la entidad de libros, permitie ver los libros registrados, crear un nuevo libro, como asi tambien buscar, editar o eliminar un libro en particular identificado con su id.
- `user.js`: archivo para al gestion de las rutas de la entidad de usuario, permitie ver los usuarios registrados, crear un nuevo usuario, tambien buscar el cual puede ser con el id del usuario o con el nombre, editar o eliminar un usurio en particular identificado con su id.
- `auth.js`: archivo para al gestion de las del logeo de los usuario tomando como dato su username y su password, genera el token para el usario.

Una vez definida la ruta se pasa la gestion a los controladores que son importados desde Controller.

### Controller
Se definen los archivos que separa la logica de la aplicacion del enrutado antes de continuar con la gestion.

- `library.js`: Define parte de la logica de la aplicacion en la gestion de las librerias en funcion de la funcion llamada desde el enrutamiento, obteniendo los valores de los parametros desde el request.
- `book.js`: Define parte de la logica de la aplicacion en la gestion de los libros en funcion de la funcion llamada desde el enrutamiento, obteniendo los valores de los parametros desde el request.
- `user.js`: Define parte de la logica de la aplicacion en la gestion de los usuarios en funcion de la funcion llamada desde el enrutamiento, obteniendo los valores de los parametros desde el request.

Posteriormente se llama al las gestiones de Services.

### Service
Se definen los archivos que separa la logica de negocio del controlador antes de continuar con la gestion.

- `library.js`: Archivo que define parte de la logica de negocio en la gestion de librerias para posteriormente ser enviado a los providers.
- `book.js`: Archivo que define parte de la logica de negocio en la gestion de libros para posteriormente ser enviado a los providers.
- `user.js`: Archivo que define parte de la logica de negocio en la gestion de user para posteriormente ser enviado a los providers.

Posteriormente se llama a los Providers.

### Provider
Define los archivos que se encargan de realizar las consultas contra la base de datos.

- `library.js`: Archivo que se encarga de realizar las distintas consultas hacia la base de datos para la gestion de librerias  y devolver los resultados correspondientes.
- `book.js`: Archivo que se encarga de realizar las distintas consultas hacia la base de datos para la gestion de libros y devolver los resultados correspondientes.
- `user.js`: Archivo que se encarga de realizar las distintas consultas hacia la base de datos para la gestion de usuarios y devolver los resultados correspondientes.

Importa los archivos desde la carpeta Models.

### Model
Contiene los archivos que definen los modelos que seran utilizados para interactuar con la base de datos.

- `library.js`: Define la estrucrura del modelo de la entidad de libreria detallando los nombres y tipos de los atibutos, tambien se define la relacion que tiene con libros.
- `book.js`: Define la estrucrura del modelo de la entidad de libros detallando los nombres y tipos de los atibutos.
- `user.js`: Define la estrucrura del modelo de la entidad de usuarios detallando los nombres y tipos de los atibutos.

Se utilza una instancia de Sequelize para la definicion de las entidades.

### Config
- `config.db.js`: Archivo que se encarga del inicio de la base de datos y la creacion de la instancia de la clase sequelize para la definicion de las entidades.

### Middleware
- `auth-mdw.js`: Archivo que se encarga de proveer un middleware para verificar la autorizacion del usiario para permitir la ejecucion de determinadas tareas

---

En la base de datos ya se cargo el usuario Admin y uno adicional, como asi tambien algunas libretias y libros

Admin: 
```
{ 
	"username": "admin",
	"password": "admin", 
	"name": "Cosme",
	"surname": "Fulanito",
	"email": "cosmefulano@springfield.com"
}
```

Usuario: 
```
{
	"username": "barto",
	"password": "barto",
	"name": "Bart",
	"surname": "Simpson",
	"email": "elbarto@springfield.com"
}
```