# ¿Que vas a hacer?

Este proyecto consiste en una página web que maneja una cadena de concesionarios.
La página debe gestionar los concesionarios, los empleados, los clientes y los coches.
También recopila información sobre la venta de vehículos: Que vehículo compró el cliente, cual fue el cliente, en que concesionario se realizó la venta, que encargado le vendió al cliente el coche...
La empresa tiene una política por la cual los empleados van periódicamente rotando de concesionario, por lo que puede aparecer el mismo empleado en diferentes concesionarios.
Cada concesionario está ubicado en una ciudad, aunque una ciudad puede tener más de un concesionario, por lo que para reconocerlos, cada concesionario tiene su propio nombre. Además, cada concesionario está dirigida por un gerente, el cual es uno de los empleados del concesionario. Cada concesionario tiene un solo gerente y cada empleado solo puede ser gerente de un solo concesionarios.

## Las tablas y sus columnas

- Coche: id, nombre, fabricante, anno_fabricacion, precio, plazas y foto.
- Cliente: id, nombre, dni y fecha_registro.
- Empleado: id, nombre, fecha_nacimiento, dni, ciudad_natal y fecha_contratacion.
- Tienda: id, nombre, ciudad, anno_construccion y gerente.
- Compra: id, coche, cliente, empleado, tienda y fecha.

### Postdatas

- Se tratan de tablas SQL. Si borras una fila de una tabla y una columna de otra tabla tenía una clave foránea apuntando a dicha tabla, se producirá un borrado en cascada.
- La columna gerente de la tabla Tienda es clave foránea de la tabla Empleado. Las columnas coche, cliente, empleado y tienda son claves foráneas de Coche, Cliente, Empleado y Tienda.
- Las columnas id de las 5 tablas son la clave primaria.
- La columna foto de la tabla Coche y la columna gerente de la tabla Tienda son únicos.
- Si bien las columnas dni de las tablas Cliente y Empleado no se han indicado como únicas, al manipular la BBDD desde la página web una función se encargará de revisar que no aparezcan valores de dni repetidos entre las 2 tablas. Por ejemplo, no puedes poner el DNI 12345678 en la tabla Cliente si en la tabla Empleado ya existe una fila cuya columna dni tiene ese valor.

## Páginas

- Al llegar el usuario a nuestra web, empezará en la página de inicio. Esta página saludará al usuario y tendrá un botón con la lista de coches disponibles y su información.
- En la ficha de cada coche verás un botón que llevará a un formulario para modificar sus datos. También verás un botón que al pulsarlo eliminará el coche de la BBDD.
- En la cabecera de la página web verás enlaces que llevan a las listas de coches, clientes, empleados, concesionario y ventas.
- Las listas de empleados, clientes, concesionarios y ventas también tienen los botones para modificar y eliminar los datos de ese componente.
- Cada una de las 5 listas también incluyen un botón que lleva a un formulario que permite crear un nuevo registro en esa tabla en particular. En el caso de cliente, empleado y venta, usaras como fecha de inscripción/contratación/compra la fecha en actual, por lo que no aparecen dichas variables entre los campos a rellenar de sus formularios.

### Postdatas

- De cada cliente veremos tambien cuanto dinero se han gastado comprando coches.

## Técnología usada

- Este es un proyecto Monorepo, con una carpeta "servidor" manejando la BBDD y una carpeta "cliente" que gestiona lo que verá el usuario.
- Para crear la BBSS usamos PostgreSQL. Las tablas que utilizamos y sus variables pueden verse en el fichero "tienda.sql".

## Instalación

1. Al descargarte el proyecto, el primer paso es activar postgresql, para lo cual abrimos nuestro terminal y escribimos "sudo service postgresql start".
2. Lo siguiente es introducir en la BBDD las tablas que necesitarás, por lo que escribe en tu terminal "psql -d (nombre de tu BBDD)" para entrar en el modo SQL e introduce las tablas y valores que aparecen en el fichero "tienda.sql".
3. Renombra base_ejemplo.js a base.js y modifica sus datos para que se conecte con tu terminal SQL.
4. Abre una 2ª pestaña en tu terminal. En una de las pestañas escribirás "yarn workspace server start" y en la otra "yarn workspace server start". Si todo va bien, debería abrirse el navegador web con la página de la cadena de concesionarios.

### Capturas de pantalla

![Screenshot](client/src/images/arranque.png)
![Screenshot](client/src/images/presentacion.png)
