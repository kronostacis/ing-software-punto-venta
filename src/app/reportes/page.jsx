"use client";

import { useEffect, useState } from "react";
import GraficoBarra from "@/components/GraficoBarra";

export default function Home() {
  const [ventasDiarias, setVentasDiarias] = useState([]);
  const [ventasMensuales, setVentasMensuales] = useState([]);
  const [ventasPorPago, setVentasPorPago] = useState([]);

  useEffect(() => {
    fetch("/api/reportes/reportes_ventasDiarias")
      .then(res => res.json())
      .then(setVentasDiarias);
    fetch("/api/reportes/reportes_ventasMensuales")
      .then(res => res.json())
      .then(setVentasMensuales);
    fetch("/api/reportes/reportes_ventasPagos")
      .then(res => res.json())
      .then(setVentasPorPago);
  }, []);

    return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-20 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Seccion de Reportes</h1>

      <div className="w-full max-w-6xl flex flex-col gap-10">
        <GraficoBarra
          title="Ventas Diarias"
          data={ventasDiarias}
          xKey="fecha"
          yKey="total"
        />

        <GraficoBarra
          title="Ventas Mensuales"
          data={ventasMensuales}
          xKey="Mes"
          yKey="Total"
        />

        <GraficoBarra
          title="Ventas por Medio de Pago"
          data={ventasPorPago}
          xKey="metodo"
          yKey="total"
        />
      </div>
    </div>
  );
}
