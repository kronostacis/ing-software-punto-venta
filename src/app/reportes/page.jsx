"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import GraficoBarra from "@/components/GraficoBarra";
import axios from "axios";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export default function Home() {
  const now = new Date();
  const [ventasDiarias, setVentasDiarias] = useState([]);
  const [ventasMensuales, setVentasMensuales] = useState([]);
  const [ventasPorPago, setVentasPorPago] = useState([]);
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);

  // Filtros
  const [dailyMonth, setDailyMonth] = useState(now.getMonth() + 1);
  const [dailyYear, setDailyYear] = useState(now.getFullYear());
  const [monthlyYear, setMonthlyYear] = useState(now.getFullYear());

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get("/api/usuarios/session");
        if (res.status === 200) {
          setUserRole(res.data.cargo);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        router.push("/login");
      }
    };
    fetchUserRole();
  }, [router]);

  const fetchDiarias = useCallback(() => {
    fetch(`/api/reportes/reportes_ventasDiarias?month=${dailyMonth}&year=${dailyYear}`)
      .then(res => res.json())
      .then(setVentasDiarias);
  }, [dailyMonth, dailyYear]);

  const fetchMensuales = useCallback(() => {
    fetch(`/api/reportes/reportes_ventasMensuales?year=${monthlyYear}`)
      .then(res => res.json())
      .then(setVentasMensuales);
  }, [monthlyYear]);

  const fetchPagos = useCallback(() => {
    fetch("/api/reportes/reportes_ventasPagos")
      .then(res => res.json())
      .then(setVentasPorPago);
  }, []);

  // Cargar datos iniciales cuando se confirma el rol
  useEffect(() => {
    if (userRole !== null && (userRole === 1 || userRole === 2)) {
      fetchDiarias();
      fetchMensuales();
      fetchPagos();
    } else if (userRole !== null) {
      router.push("/not-found");
    }
  }, [userRole, router, fetchDiarias, fetchMensuales, fetchPagos]);

  // Rango de años disponibles
  const currentYear = now.getFullYear();
  const yearOptions = [];
  for (let y = currentYear; y >= currentYear - 5; y--) {
    yearOptions.push(y);
  }

  if (userRole === null) {
    return <div>Cargando...</div>;
  }

  if (userRole !== 1 && userRole !== 2) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Panel de Reportes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Ventas Diarias */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center gap-3 mb-4">
              <select
                value={dailyMonth}
                onChange={(e) => setDailyMonth(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {MESES.map((nombre, i) => (
                  <option key={i} value={i + 1}>{nombre}</option>
                ))}
              </select>
              <select
                value={dailyYear}
                onChange={(e) => setDailyYear(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {yearOptions.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <GraficoBarra
              title={`Ventas Diarias — ${MESES[dailyMonth - 1]} ${dailyYear}`}
              data={ventasDiarias}
              xKey="fecha"
              yKey="total"
            />
          </div>

          {/* Ventas Mensuales */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center gap-3 mb-4">
              <select
                value={monthlyYear}
                onChange={(e) => setMonthlyYear(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md py-1.5 px-3 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {yearOptions.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <GraficoBarra
              title={`Ventas Mensuales — ${monthlyYear}`}
              data={ventasMensuales}
              xKey="Mes"
              yKey="Total"
            />
          </div>

          {/* Ventas por Medio de Pago */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <GraficoBarra
              title="Ventas por Medio de Pago"
              data={ventasPorPago}
              xKey="metodo"
              yKey="total"
              horizontal
            />
          </div>
        </div>
      </div>
    </div>
  );
}
