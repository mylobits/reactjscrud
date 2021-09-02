# Manejador de Peliculas 

Este proyecto es de ReactJS y NodeJS API usando Sequilizer para la parte ORM DB.

## Scripts Disponibles

En el directorio del projecto solo hay que ejecutar:

### `docker-compose up`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requerimientos

### Propósito
Esta CRUD tiene como propósito evaluar la aptitud de desarrollar aplicaciones web y la
orientación a resolver problemas, esto mediante el desarrollo de una aplicación para
administrar películas y actores.
### Alcance y Solución
El alcance de este proyecto es crear una aplicación para administrar películas. La solución
debe ser hecha en React JS y NodeJS(backend) dentro de la misma dos proyectos: la aplicación
Web y el Web Service.

### Los proyectos deberán utilizar las siguientes tecnologías:
    • React JS.
    • NodeJS 12 (o superior).
    • La base de datos a utilizar puede ser SQL Server 2012 (o superior) o postgresql(Preferible).

# El portal debe tener los siguientes elementos:

### Mantenimiento de Actores:

    • Página para consultar los actores existentes. Este debe ser el punto de entrada para crear o modificar actores. Dicha página debe poder consultar los actores por medio de filtros; Sexo (DropDownList), Búsqueda General (TextBox).
    • Página para crear o modificar un actor.
    • Pop Up donde muestre detalles avanzados del actor (por ejemplo, todas las películas en donde él ha participado).
    • Campos de actores: ID (autogenerado), Nombre Completo, Fecha de Nacimiento, Sexo, Foto.
    
### Mantenimiento de Películas:

    • Página para consultar las películas existentes. Este debe ser el punto de entrada para crear o modificar películas. Dicha página debe poder consultar las películas por medio de filtros; Genero (DropDownList), Búsqueda General (TextBox).
    • Página para crear o modificar una película.
    • Pop Up donde muestre detalles avanzados de la película (por ejemplo, todos los actores que participan).
    • Campos de películas: ID (autogenerado), Titulo, Genero, Fecha de Estreno, Foto.
    • Después del formulario anterior, agregar a una tabla los actores que participan en la misma. Este dato debe ser enviado vía XML a la base de datos.

### Validaciones:

    • No debe existir más de una película con el mismo título.
    • No se puede asignar dos veces el mismo actor en la misma película.

### Otras informaciones
    • Facilidad de uso: el sistema desarrollado debe ser intuitivo y fácil de usar; realizado pensado para usuarios que utilizan aplicaciones digitales.
    • Flexibilidad: el sistema desarrollado debe ser sumamente flexible y escalable, pensado para que soporte actualizaciones y mejoras.
    • Las búsquedas generales son búsquedas por cualquier tipo de información (Ej.: si escribes ARTHUR debe buscar por título de la película o actores que pertenecen a esta película.

### Entregables
    • Códigos fuentes de la solución (dos proyectos: el de la aplicación Web y del Web Service).
    • Scripts o Backup de la base de datos.
    • Documentación de incidencias, experiencias y soluciones encontradas (la misma puede estar incrustada en los fuentes y scripts de base de datos.

### Criterios de evaluación
    • Estructuración de código, estándares y documentación. Creación y consumo de Web Service.
    • Estructuración de la base de datos.

## Technologias Usadas

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting