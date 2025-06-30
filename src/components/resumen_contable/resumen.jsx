"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Resumen_contable() {
  const [Ingresos, setIngresos] = useState(null);
  const [Egresos, setEgresos] = useState(null);
  const [Utilidad, setUtilidad] = useState(null);
  const [From, setFrom] = useState("2024-01-01");
  const [To, setTo] = useState(new Date().toISOString().split("T")[0]); // formato YYYY-MM-DD

  const [Caja, setCaja] = useState(null);
  const [Inventario, setInventario] = useState(null);

  useEffect(() => {
    const fromDate = new Date(From);
    const toDate = new Date(To);

    actualizarData(fromDate, toDate);
    Cuentas();
  }, []);

  const actualizarData = async (fromDate, toDate) => {
    try {
      const fromISO = fromDate.toISOString();
      const toISO = toDate.toISOString();

      const [ingresosRes, egresosRes, utilidadRes] = await Promise.all([
        axios.get(`/api/flujo_caja/ingreso?from=${fromISO}&to=${toISO}`),
        axios.get(`/api/flujo_caja/egreso?from=${fromISO}&to=${toISO}`),
        axios.get(`/api/flujo_caja/utilidad?from=${fromISO}&to=${toISO}`)
      ]);

      setIngresos(ingresosRes.data.ingreso);
      setEgresos(egresosRes.data.egreso);
      setUtilidad(utilidadRes.data.utilidad);
    } catch (error) {
      console.error("Error al obtener el resumen contable:", error);
    }
  };

  const Cuentas = async () => {
    try {
      const [cajaRes, inventarioRes] = await Promise.all([
        axios.get(`/api/flujo_caja/caja`),
        axios.get(`/api/flujo_caja/inventario`)
      ]);

      setCaja(cajaRes.data.caja);
      setInventario(inventarioRes.data.inventario);
    } catch (error) {
      console.error("Error al obtener los datos de la caja:", error);
    }
  };

  const handleActualizarClick = () => {
    const fromDate = new Date(From);
    const toDate = new Date(To);
    actualizarData(fromDate, toDate);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Resumen Contable</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Desde: </label>
        <input
          type="date"
          value={From}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label style={{ marginLeft: "1rem" }}>Hasta: </label>
        <input
          type="date"
          value={To}
          onChange={(e) => setTo(e.target.value)}
        />
        <button
          style={{ marginLeft: "1rem" }}
          onClick={handleActualizarClick}
        >
          Actualizar
        </button>
      </div>

      <p>Ingresos: {Ingresos ?? "Cargando..."}</p>
      <p>Egresos: {Egresos ?? "Cargando..."}</p>
      <p>Utilidad: {Utilidad ?? "Cargando..."}</p>

      <h2>Cuentas actuales</h2>
      <p>Caja: {Caja ?? "Cargando..."}</p>
      <p>Inventario: {Inventario ?? "Cargando..."}</p>
    </div>
  );
}