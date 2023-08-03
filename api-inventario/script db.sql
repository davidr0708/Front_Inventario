USE inventario_digitalizacion;

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de la tabla ´estado´. 
--						Tabla creada para definir los diferentes estados los 
--                      cuales podría estar un dispositivo
--
CREATE TABLE estado(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);


--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de la 'tabla tipo_dispositivo'. 
--						Tabla creada para definir los diferentes tipos de dispositios.
--

CREATE TABLE tipo_dispositivo(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de la tabla ´dispositivo´.
--						Tabla creada para registrar los dispositivos manejados en el area
--

CREATE TABLE dispositivo(
	id INT PRIMARY KEY AUTO_INCREMENT,
    serial VARCHAR(10) UNIQUE NOT NULL,
    referencia VARCHAR(50) NOT NULL,
    id_tipo INT,
    id_estado INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de una llave foranea
--						en la tabla 'dispositivo' referenciandola desde la 
--                      tabla 'estado'
--

ALTER TABLE dispositivo
	ADD CONSTRAINT FK_estado_dispositivo 
    FOREIGN KEY (id_estado) REFERENCES estado(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de una llave foranea
--						en la tabla 'dispositivo' referenciandola desde la 
--                      tabla 'tipo_dispositivo'
--

ALTER TABLE dispositivo
	ADD CONSTRAINT FK_tipo_dispositivo 
    FOREIGN KEY (id_tipo) REFERENCES tipo_dispositivo(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de la tabla ´usuario´.
--						Tabla creada para registrar las personas del area
--

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL
);

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de la tabla ´trazabilidad´.
--						Tabla creada para registrar los movimientos que ha tenido 
--                      un dispositivo, para que se está utilizando, que funciones,
--                      a que persona está asignado, etcetera
--

CREATE TABLE trazabilidad(
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_dispositivo INT,
    id_usuario INT,
    estado INT(1) NOT NULL,
    definicion TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de una llave foranea
--						en la tabla 'trazabilidad' referenciandola desde la 
--                      tabla 'usuario'
--

ALTER TABLE trazabilidad
	ADD CONSTRAINT FK_usuario_trazabilidad
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

--
--	@Autor: Victor Vivas
--  
--  Descripcion bloque: Sentencia DDL para la creación de una llave foranea
--						en la tabla 'trazabilidad' referenciandola desde la 
--                      tabla 'dispositivo'
--

ALTER TABLE trazabilidad
	ADD CONSTRAINT FK_dispositivo_trazabilidad
    FOREIGN KEY (id_dispositivo) REFERENCES dispositivo(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;


-- Volcado de tablas

-- Registros de pruebas tabla usuarios
INSERT INTO `inventario_digitalizacion`.`usuario` (nombre, area) VALUES
	("Victor Vivas", "Tecnología"),
    ("Octavio Robles", "Tecnología"),
    ("Sandro Bustamante", "Tecnología"),
    ("John Leon", "Tecnología");


-- Registros de pruebas tabla estado
INSERT INTO `inventario_digitalizacion`.`estado` (nombre, descripcion) VALUES
	("Asignado", "El dispositivo está asignado a un usuario"),
    ("Almacen", "El dispositivo está listo para devolver a almacen"),
    ("Pruebas", "El dispositivo está asignado para un proceso y/o actividad"),
    ("Disponible", "El dispositivo se encuentra en el área");

-- Registros de pruebas tabla tipo_dispositivo
INSERT INTO `inventario_digitalizacion`.`tipo_dispositivo` (nombre, descripcion) VALUES
	("Escaner", NULL),
    ("Portatil", NULL);


-- Registros de pruebas tabla dispositivo
INSERT INTO `inventario_digitalizacion`.`dispositivo` (serial, referencia, id_tipo, id_estado) VALUES
	("Portatil0", "ProBook 440 G9", 2, 1),
    ("Portatil1", "ProBook 440 G9", 2, 1),
    ("Portatil2", "ProBook 440 G9", 2, 1),
    ("Portatil3", "ProBook 440 G9", 2, 1),
    ("Portatil4", "ProBook 440 G8", 2, 3),
    ("Portatil5", "ProBook 440 G8", 2, 3),
    ("Portatil6", "ProBook 440 G8", 2, 3),
    ("Portatil7", "ProBook 440 G8", 2, 3),
    ("Escaner0", "EPSON", 2, 2),
    ("Escaner1", "Fujitsu EKO", 2, 2),
    ("Escaner2", "Canon DR-C240", 2, 2),
    ("Escaner3", "Canon DR-M160", 2, 2),
    ("Escaner4", "EPSON", 2, 3),
    ("Escaner5", "Fujitsu EKO", 2, 3),
    ("Escaner6", "Canon DR-C240", 2, 3),
    ("Escaner7", "Canon DR-M160", 2, 3),
    ("Portatil8", "ProBook 440 G8", 2, 4),
    ("Portatil9", "ProBook 440 G8", 2, 4)
    ;
