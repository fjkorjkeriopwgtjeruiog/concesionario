drop table coche;
drop table tienda;
drop table empleado;
drop table cliente;
drop table compra;

create table coche(
  id serial primary key,
  nombre varchar,
  fabricante varchar,
  anno_fabricacion integer,
  precio integer,
  plazas integer
);

insert into coche (nombre,fabricante,anno_fabricacion,precio,plazas) values('ignis','suzuki',2017,17000,8);
insert into coche (nombre,fabricante,anno_fabricacion,precio,plazas) values('petroska','motorola',2010,9000,4);

create table cliente(
  id serial primary key,
  nombre varchar,
  dni char(9),
  fecha_registro date
);

insert into cliente (nombre, dni, fecha_registro) values('Paco Monales','39011210u','2010-02-25');
insert into cliente (nombre, dni, fecha_registro) values('Laura Gimenez','90518271q','2018-04-17');

create table empleado(
  id serial primary key,
  nombre varchar,
  fecha_nacimiento date,
  dni char(9),
  ciudad_natal varchar,
  fecha_contratacion date
);

insert into empleado (nombre, fecha_nacimiento, dni, ciudad_natal, fecha_contratacion) values('Miguel Torero','1990-01-01','45121098g','Cadiz','2015-10-03');
insert into empleado (nombre, fecha_nacimiento, dni, ciudad_natal, fecha_contratacion) values('Mike Bastones','1995-02-17','10293456z','Chiclana','2012-03-08');

create table tienda(
  id serial primary key,
  nombre varchar,
  ciudad varchar,
  anno_construccion varchar,
  gerente integer unique references empleado(id) on delete cascade
);

insert into tienda(nombre, ciudad,anno_construccion,gerente) values('El Acelerador Feliz','San Fernando',2003,1);
insert into tienda(nombre, ciudad,anno_construccion,gerente) values('El Pedal Mágico','Chiclana',2008,2);

create table compra(
  id serial primary key,
  coche integer references coche(id) on delete cascade,
  cliente integer references cliente(id) on delete cascade,
  empleado integer references empleado(id) on delete cascade,
  tienda integer references tienda(id) on delete cascade,
  fecha date
);

insert into compra (coche,cliente,empleado,tienda,fecha) values(1,1,1,1,'2020-02-25');
insert into compra (coche,cliente,empleado,tienda,fecha) values(2,2,2,1,'2020-07-12');

select tienda.nombre,ciudad,anno_construccion,empleado.nombre from tienda join empleado on gerente=empleado.id;
select coche.fabricante||' '||coche.nombre as vehiculo, cliente.nombre, empleado.nombre, tienda.nombre, fecha from compra, coche, cliente, empleado, tienda where coche.id=coche and cliente.id=cliente and empleado.id=empleado and tienda.id=tienda;