DROP TABLE IF EXISTS `Detalle_ventas_productos`;
DROP TABLE IF EXISTS `Lote_productos`;
DROP TABLE IF EXISTS `Ventas`;
DROP TABLE IF EXISTS `Productos`;
DROP TABLE IF EXISTS `Medio_pagos`;
DROP TABLE IF EXISTS `Usuarios`;
DROP TABLE IF EXISTS `Cargos`;


CREATE TABLE `Cargos` (
    `Id_cargo` INT NOT NULL,
    `Nombre_cargo` VARCHAR(255),
    PRIMARY KEY (`Id_cargo`)
);

CREATE TABLE `Usuarios` (
    `Id_usuario` INT NOT NULL,
    `Nombre` VARCHAR(60),
    `Apellido_1` VARCHAR(80),
    `Apellido_2` VARCHAR(80),
    `Contrasena` VARCHAR(255),
    `Cargo` INT,
    PRIMARY KEY (`Id_usuario`),
    FOREIGN KEY (`Cargo`) REFERENCES `Cargos`(`Id_cargo`)
);

CREATE TABLE `Medio_pagos` (
    `Id_pago` INT NOT NULL AUTO_INCREMENT,
    `Nombre_pago` VARCHAR(255),
    PRIMARY KEY (`Id_pago`)
);

CREATE TABLE `Productos` (
    `Id_producto` INT NOT NULL,
    `Nombre` VARCHAR(255),
    `Precio_venta` DECIMAL(10,2),
    `Stock` INT,
    PRIMARY KEY (`Id_producto`)
);

CREATE TABLE `Ventas` (
    `Id_venta` INT NOT NULL,
    `Id_pago` INT,
    `Total_venta` DECIMAL(10,2),
    `Fecha_venta` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `Id_usuario` INT not NULL,
    `Utilidad_total` DECIMAL(10,2),

    PRIMARY KEY (`Id_venta`),
    FOREIGN KEY (`Id_pago`) REFERENCES `Medio_pagos`(`Id_pago`),
    FOREIGN KEY (`Id_usuario`) REFERENCES `Usuarios`(`Id_usuario`)
);

CREATE TABLE `Lote_productos` (
    `Id_lote` INT NOT NULL AUTO_INCREMENT,
    `Id_producto` INT,
    `Precio_compra` DECIMAL(10,2),
    `Cantidad` INT,
    `Stock` INT,
    `Fecha` DATE,
    PRIMARY KEY (`Id_lote`),
    FOREIGN KEY (`Id_producto`) REFERENCES `Productos`(`Id_producto`)
);

CREATE TABLE `Detalle_ventas_productos` (
    `Id_ventas` INT,
    `Id_producto` INT,
    `Cantidad` INT,
    `Precio_total` DECIMAL(10,2),
    PRIMARY KEY (`Id_ventas`, `Id_producto`),
    FOREIGN KEY (`Id_producto`) REFERENCES `Productos`(`Id_producto`),
    FOREIGN KEY (`Id_ventas`) REFERENCES `Ventas`(`Id_venta`)
);

INSERT INTO `Cargos` (`Id_cargo`, `Nombre_cargo`) VALUES
(1, 'Administrador'),
(2, 'Cajero'),
(3, 'Dueño');

INSERT INTO `Medio_pagos` (`Id_pago`, `Nombre_pago`) VALUES
(1, 'Efectivo'),
(2, 'Transbank Debito Nacional'),
(3, 'SumUp Credito'),
(4, 'SumUp Debito'),
(5, 'Transbank Credito Nacional'),
(6, 'Transferencia'),
(7, 'Transbank Credito Extranjero'),
(8, 'Transbank Debito Extranjero');

INSERT INTO `Usuarios` (`Id_usuario`, `Nombre`, `Apellido_1`, `Apellido_2`, `Contrasena`, `Cargo`) VALUES
(210463003, 'Benjamin', 'Villablanca', 'Zuñiga', '$argon2i$v=19$m=16,t=2,p=1$b2xCSFgxVzF1SnhZUGJySg$HYmqPvP8tXr0XqSptyFTrA', 1);
(212058890, 'Diego', 'Muñoz', 'Sazo', '$argon2i$v=19$m=16,t=2,p=1$b2xCSFgxVzF1SnhZUGJySg$HYmqPvP8tXr0XqSptyFTrA', 1);


DELIMITER //
CREATE TRIGGER actualizar_stock_producto
AFTER INSERT ON Lote_productos
FOR EACH ROW
BEGIN
    UPDATE Productos p
    JOIN (
        SELECT Id_producto, SUM(Stock) AS NuevoStock
        FROM Lote_productos
        WHERE Id_producto = NEW.Id_producto
    ) AS SumarStock
    ON p.Id_producto = SumarStock.Id_producto
    SET p.Stock = SumarStock.NuevoStock;
END;
//
DELIMITER ;

DELIMITER //

-- Trigger para actualizar el stock después de un DELETE en Lote_productos
CREATE TRIGGER actualizar_stock_producto_despues_delete
AFTER DELETE ON Lote_productos
FOR EACH ROW
BEGIN
    UPDATE Productos p
    LEFT JOIN (
        SELECT Id_producto, IFNULL(SUM(Stock), 0) AS NuevoStock
        FROM Lote_productos
        WHERE Id_producto = OLD.Id_producto
    ) AS SumarStock
    ON p.Id_producto = SumarStock.Id_producto
    SET p.Stock = SumarStock.NuevoStock
    WHERE p.Id_producto = OLD.Id_producto;
END;
//

-- Trigger para actualizar el stock después de un UPDATE en Lote_productos
CREATE TRIGGER actualizar_stock_producto_despues_update
AFTER UPDATE ON Lote_productos
FOR EACH ROW
BEGIN
    IF OLD.Stock <> NEW.Stock OR OLD.Id_producto <> NEW.Id_producto THEN
        UPDATE Productos p
        JOIN (
            SELECT Id_producto, SUM(Stock) AS NuevoStock
            FROM Lote_productos
            WHERE Id_producto = NEW.Id_producto
        ) AS SumarStock
        ON p.Id_producto = SumarStock.Id_producto
        SET p.Stock = SumarStock.NuevoStock
        WHERE p.Id_producto = NEW.Id_producto;
    END IF;
END;
//

DELIMITER ;

CREATE TRIGGER eliminar_detalle_y_venta
BEFORE DELETE ON Ventas
FOR EACH ROW
BEGIN
    -- Eliminar los detalles de la venta antes de eliminar la venta
    DELETE FROM Detalle_ventas_productos
    WHERE Id_venta = OLD.Id_venta;

END$$

DELIMITER ;


