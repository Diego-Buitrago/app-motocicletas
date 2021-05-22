CREATE DATABASE control_vehiculos;

ALTER TABLE seguimiento DROP CONSTRAINT fK_seguimiento_motocicletas;

DROP TRIGGER AI_delete ON motocicletas;
DROP TRIGGER AI_delete ON motocicletas;

DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS motocicletas;
DROP TABLE IF EXISTS seguimiento;
DROP TABLE IF EXISTS veihiculos_eliminados;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    contrasena VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE motocicletas(
    nro_placa VARCHAR(20) PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    linea VARCHAR(50) NOT NULL,
    modelo INTEGER NOT NULL,
    fecha_ven_seguro DATE NOT NULL,
    fecha_ven_tecnomecanica DATE,
    seguimiento BOOLEAN DEFAULT false
);

CREATE TABLE seguimiento(
    id SERIAL PRIMARY KEY,
    placa_moto VARCHAR(50) NOT NULL,
    marca VARCHAR(50)  NOT NULL,
    linea VARCHAR(50) NOT NULL,
    fecha_reparacion DATE NOT NULL,
    tipo_seguimiento VARCHAR(50) NOT NULL,
    observaciones VARCHAR(200)
);

CREATE TABLE veihiculos_eliminados(
    nro_placa VARCHAR(20) PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    linea VARCHAR(50) NOT NULL,
    modelo INTEGER NOT NULL
);

-- crear disparador o trigger
create function vehiculos_eliminados_AI() returns trigger
as
$$
begin

	insert into veihiculos_eliminados (nro_placa, marca, linea, modelo) values (old.nro_placa, old.marca, old.linea, old.modelo);

return new;
end
$$
language plpgsql;

create trigger AI_delete after delete on motocicletas
for each row 
execute procedure vehiculos_eliminados_AI();

-- crear disparador o trigger
create function vehiculos_seguimiento() returns trigger
as
$$
begin

	update motocicletas set seguimiento = true where nro_placa = new.placa_moto;

return new;
end
$$
language plpgsql;

create trigger insert_segumiento after insert on seguimiento
for each row 
execute procedure vehiculos_seguimiento();