import prisma from "@/app/lib/prisma";
import { format } from "date-fns";

// ventas diarias
export async function obtenerVentasDiarias() {
  const ventas = await prisma.ventas.groupBy({
    by: ["Fecha_venta"],
    _sum: { Total_venta: true },
    orderBy: { Fecha_venta: "asc" },
  });

  return ventas.map(v => ({
    fecha: format(v.Fecha_venta, "yyyy-MM-dd"),
    total: Number(v._sum.Total_venta ?? 0),
  }));
}

// Ventas mensuales
export async function obtenerVentasMensuales() {
  const result = await prisma.$queryRawUnsafe(`
    SELECT DATE_FORMAT(Fecha_venta, '%Y-%m') AS Mes, 
           SUM(Total_venta) AS Total
    FROM Ventas
    GROUP BY Mes
    ORDER BY Mes;
  `);
  return result.map(r => ({ Mes: r.Mes, Total: Number(r.Total) }));
}

// Ventas por medio de pago
export async function obtenerVentasPorPago() {
  const agrupadas = await prisma.ventas.groupBy({
    by: ["Id_pago"],
    _sum: { Total_venta: true },
  });

  const pagos = await prisma.medio_pagos.findMany({
    select: { Id_pago: true, Nombre_pago: true },
  });

  const nombreMap = Object.fromEntries(pagos.map(p => [p.Id_pago, p.Nombre_pago]));

  return agrupadas.map(p => ({
    metodo: nombreMap[p.Id_pago] ?? `Pago ${p.Id_pago}`,
    total: Number(p._sum.Total_venta ?? 0),
  }));
}