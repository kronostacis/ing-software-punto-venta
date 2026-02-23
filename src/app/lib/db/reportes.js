import prisma from "@/app/lib/prisma";

// ventas diarias (días de un mes/año específico)
export async function obtenerVentasDiarias(month, year) {
  const result = await prisma.$queryRawUnsafe(`
    SELECT DAY(Fecha_venta) AS Dia,
           SUM(Total_venta) AS Total
    FROM Ventas
    WHERE YEAR(Fecha_venta) = ${year}
      AND MONTH(Fecha_venta) = ${month}
    GROUP BY DAY(Fecha_venta)
    ORDER BY Dia;
  `);

  const map = new Map(result.map(r => [Number(r.Dia), Number(r.Total)]));
  const daysInMonth = new Date(year, month, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, i) => ({
    fecha: `${i + 1}`,
    total: map.get(i + 1) || 0,
  }));
}

// Ventas mensuales (12 meses de un año específico)
export async function obtenerVentasMensuales(year) {
  const result = await prisma.$queryRawUnsafe(`
    SELECT MONTH(Fecha_venta) AS Mes,
           SUM(Total_venta) AS Total
    FROM Ventas
    WHERE YEAR(Fecha_venta) = ${year}
    GROUP BY MONTH(Fecha_venta)
    ORDER BY Mes;
  `);

  const map = new Map(result.map(r => [Number(r.Mes), Number(r.Total)]));

  const meses = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];

  return meses.map((nombre, i) => ({
    Mes: nombre,
    Total: map.get(i + 1) || 0,
  }));
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