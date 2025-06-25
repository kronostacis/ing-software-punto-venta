"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RealizarVenta( id_user ) {
  const [productos, setProductos] = useState([]);
  const [codigoProducto, setCodigoProducto] = useState("");
  const [medios_de_pago, setMediosDePago] = useState([]);
  const [medioPagoSeleccionado, setMedioPagoSeleccionado] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/medio_pago")
      .then((res) => {
        if (res.status === 200) {
          setMediosDePago(res.data);
        } else {
          console.error("Error al obtener los medios de pago");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  const agregarProductoPorId = async (id) => {
    try {
      const resProducto = await axios.get(`/api/productos/${id}`,
        {headers: { "Content-Type": "application/json" },
          withCredentials: true,});
      if (resProducto.status !== 200) {
        alert("Producto no encontrado");
        return;
      }

      const producto = resProducto.data;
      console.log("producto:",producto)

      const resLotes = await axios.get(`/api/get_lote/${id}`);
      if (resLotes.status !== 200) {
        alert("Error al obtener lotes del producto");
        return;
      }

      const lotes = resLotes.data;

      const productoConDatos = {
        ...producto,
        cantidad: 1,
        lotes,
      };

      setProductos((prev) => {
      // Buscar si el producto ya está
      const productoExistente = prev.find((p) => p.Id_producto === producto.Id_producto);
      if (productoExistente) {
        // Si existe, actualizar cantidad (sumar 1)
        return prev.map((p) =>
          p.Id_producto === producto.Id_producto
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        // Si no existe, agregar nuevo con cantidad 1 y lotes
        return [...prev, { ...producto, cantidad: 1, lotes }];
      }
    });

    setCodigoProducto(""); // limpiar input
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  const eliminarProductoPorId = (id) => {
    setProductos((prev) => prev.filter((producto) => producto.Id_producto !== id));
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    setProductos((prev) =>
      prev.map((producto) =>
        producto.Id_producto === id ? { ...producto, cantidad: nuevaCantidad } : producto
      )
    );
  };

  const calcularTotal = () => {
    const t = productos.reduce(
      (acc, p) => acc + p.Precio_venta * p.cantidad,
      0
    );
    setTotal(t);
  };

  useEffect(() => {
    calcularTotal();
  }, [productos]);

  const realizarVenta = async () => {
    //console.log("Medio de pago:", id_user);
    try {
      
      let utilidad = 0;

      for (const producto of productos) {
        const cantidadNecesaria = producto.cantidad;
        const lotes = [...producto.lotes];
        let cantidadRestante = cantidadNecesaria;

        const stockTotal = lotes.reduce((acc, lote) => acc + lote.Stock, 0);
        if (stockTotal < cantidadNecesaria) {
          alert(`Stock insuficiente para el producto "${producto.nombre}"`);
          return;
        }

        for (const lote of lotes) {
          if (cantidadRestante === 0) break;

          if (lote.Stock >= cantidadRestante) {
            const nuevoStock = lote.Stock - cantidadRestante;
            utilidad +=
              (producto.Precio_venta - lote.Precio_compra) * cantidadRestante;

              /*
            await axios.put(`/api/lote_productos/${lote.Id_lote}`, {
              Stock: nuevoStock,
            });
            */
            try {
                await axios.put(`/api/lote_productos/${lote.Id_lote}`, {
                  Stock: nuevoStock,
                  Cantidad: lote.Cantidad,
                });
              } catch (error) {
                console.error("Error al actualizar lote:", error.response?.data || error.message);
              }
            cantidadRestante = 0;
          } else {
            await axios.put(`/api/lote_productos/${lote.Id_lote}`, {
              Stock: 0,
              Cantidad: lote.Cantidad,
            });

            utilidad +=
              (producto.Precio_venta - lote.Precio_compra) * lote.Stock;
            cantidadRestante -= lote.Stock;
          }
        }
      }

      const res = await axios.post("/api/realizar_venta", {
        Id_pago: medioPagoSeleccionado,
        Total_venta: total,
        Id_usuario: id_user.id,
        Utilidad_total: utilidad,
        Id_estado_venta: 1,
      });

      const idVenta = res.data.Id_venta;

      for (const producto of productos) {
        console.log("Producto: ",producto);
        await axios.post("/api/detalle_venta", {
          Id_venta: idVenta,
          Id_producto: producto.Id_producto,
          Cantidad: producto.cantidad,
          Precio_total: producto.Precio_venta * producto.cantidad,
        });
      }

      alert("Venta realizada correctamente");
      setProductos([]);
      setMedioPagoSeleccionado(null);
      setTotal(0);
    } catch (error) {
      console.error("Error al realizar la venta: ", error);
      alert("Error al realizar la venta.");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Realizar Venta</h2>

      {/* Input para agregar producto por código */}
      <div>
        <input
          type="number"
          value={codigoProducto}
          onChange={(e) => setCodigoProducto(e.target.value)}
          placeholder="Código del producto"
        />
        <button onClick={() => agregarProductoPorId(codigoProducto)}>
          Agregar
        </button>
      </div>

      {/* Productos agregados */}
      <h3>Productos en la venta</h3>
      <ul>
        {productos.map((prod) => (
          <li key={prod.Id_producto}>
            {prod.Nombre} - ${prod.Precio_venta} x{" "}
            <input
              type="number"
              value={prod.cantidad}
              min={1}
              onChange={(e) =>
                cambiarCantidad(prod.Id_producto, parseInt(e.target.value))
              }
              style={{ width: "50px" }}
            />{" "}
            = ${prod.Precio_venta * prod.cantidad}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => eliminarProductoPorId(prod.Id_producto)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <h3>Total: ${total}</h3>

      {/* Selección de medio de pago */}
      <div>
        <label>Medio de pago: </label>
        <select
          value={medioPagoSeleccionado || ""}
          onChange={(e) => setMedioPagoSeleccionado(parseInt(e.target.value))}
        >
          <option value="">Seleccione un medio</option>
          {medios_de_pago.map((m) => (
            <option key={m.Id_pago} value={m.Id_pago}>
              {m.Nombre_pago}
            </option>
          ))}
        </select>
      </div>

      {/* Botón realizar venta */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={realizarVenta}>Realizar venta</button>
      </div>
    </div>
  );
}
