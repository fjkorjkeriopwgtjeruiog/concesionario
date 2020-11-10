# ¿Que vas a hacer?

Tu tarea consistirá en crear una base de datos que manejara una cadena de tiendas de coches.
Gestionarás las tiendas, los empleados, los clientes y los coches.
Es necesario tambien recopilar la venta de los vehículos: Que vehiculo fue comprado, cual fue el cliente, en que tienda, que encargado le vendio al cliente el coche...
Para hacerlo más interesante, la empresa tiene una política por la cual los empleados van periodicamente rotando de establecimiento, por lo que podría aparecer el mismo empleado en diferentes tiendas.
Además, de los clientes obtendremos cuanto dinero nos deben, y si aún deben dinero por el último coche comprado, no les permitiremos comprar otro coche hasta que la deuda del anterior haya sido saldada por completo.
Cada tienda estará ubicada en una ciudad, aunque una ciudad puede tener más de una tienda, por lo que para reconocerlas, cada tienda tiene su nombre único. Además, cada tienda estará dirigida por un gerente, el cual es uno de los empleados de la tienda. Recuerda que cada tienda tiene un solo gerente y cada empleado solo puede ser gerente de una sola tienda.

## Las tablas y sus variables

- Coche: id, nombre, anno_fabricacion, fabricante, precio y plazas
- Empleado: id, nombre, fecha_nacimiento, dni, ciudad_natal, fecha_contratacion
- Cliente: id, nombre, dni, fecha_registro, deuda
- Tienda: id, nombre, ciudad, anno_construccion, gerente
- Compra: id, coche, cliente, empleado, tienda, fecha

## Páginas

- Necesitamos una página de inicio. Esta página saludará al usuario y tendrá un botón con la lista de coches disponibles.
- En la página de la lista de coches, al pulsar sobre el nombre de un coche, irás a una página que mostrará información más avanzada del coche.
- Desde esa página, verás un botón a un formulario para modificar. Tambien verás un botón para eliminar el coche.
- En la cabecerá de la página web verás enlaces que llevan a las listas de coches, clientes, empleados, tiendas y compras.
- Las listas de empleados, clientes, tiendas y compras tambien deben tener la opción de consultar más datos de un elemento particular, incluyendo botones para modicar y eliminar los datos de ese componente.
- Cada una de las 5 listas deben tambien incluir un botón que lleve a un formulario que permita crear un nuevo registro en esa tabla en particular. En el caso de la venta, no permitiras la venta de coches a clientes que deban dinero, y si la venta se realiza con exito, el precio del coche pasará a ser la deuda a saldar de dicho cliente. En el caso de cliente y empleado, usaras como fecha de inscripción/contratación la fecha en actual.

## Avanzado

- Deberías a la hora de crear una venta impedir vender coches a empleados que sean gerentes, a no ser que el coche sea vendido en la tienda que esta actualmente dirigiendo.
- Crea una variable para los coches que muestre una foto.