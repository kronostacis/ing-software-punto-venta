import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import * as XLSX from "xlsx";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const desde = searchParams.get("desde"); // yyyy-mm-dd
    const hasta = searchParams.get("hasta"); // yyyy-mm-dd
    const usuario = searchParams.get("usuario"); // nombre del usuario

    // Construir filtro dinámico
    const where = {};

    if (desde || hasta) {
      where.Fecha_venta = {};
      if (desde) {
        where.Fecha_venta.gte = new Date(`${desde}T00:00:00`);
      }
      if (hasta) {
        where.Fecha_venta.lte = new Date(`${hasta}T23:59:59`);
      }
    }

    if (usuario) {
      // Buscar el Id del usuario por nombre
      const user = await prisma.usuarios.findFirst({
        where: { Nombre: usuario },
        select: { Id_usuario: true },
      });
      if (user) {
        where.Id_usuario = user.Id_usuario;
      }
    }

    const ventas = await prisma.ventas.findMany({
      where,
      include: {
        Medio_pagos: true,
        Usuarios: true,
        Estado_ventas: true,
      },
      orderBy: { Fecha_venta: "desc" },
    });

    // Transformar datos para Excel — una fila por venta
    const rows = ventas.map((venta) => ({
      "ID Venta": venta.Id_venta,
      "Fecha": new Date(venta.Fecha_venta).toLocaleString("es-CL", {
        dateStyle: "short",
        timeStyle: "short",
      }),
      "Vendedor": venta.Usuarios?.Nombre || "",
      "Medio de Pago": venta.Medio_pagos?.Nombre_pago || "",
      "Estado": venta.Estado_ventas?.Nombre_estado_venta || "",
      "Total Venta": Number(venta.Total_venta ?? 0),
    }));

    // Crear workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);

    // Ajustar ancho de columnas
    ws["!cols"] = [
      { wch: 10 }, // ID Venta
      { wch: 18 }, // Fecha
      { wch: 20 }, // Vendedor
      { wch: 18 }, // Medio de Pago
      { wch: 14 }, // Estado
      { wch: 14 }, // Total Venta
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Ventas");

    const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    // Nombre del archivo con fecha
    const today = new Date().toISOString().split("T")[0];
    let filename = `ventas_${today}`;
    if (desde && hasta) {
      filename = `ventas_${desde}_a_${hasta}`;
    } else if (desde) {
      filename = `ventas_desde_${desde}`;
    } else if (hasta) {
      filename = `ventas_hasta_${hasta}`;
    }
    if (usuario) {
      filename += `_${usuario.replace(/\s+/g, "_")}`;
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}.xlsx"`,
      },
    });
  } catch (error) {
    console.error("Error al exportar ventas:", error);
    return NextResponse.json(
      { error: "Error al exportar ventas" },
      { status: 500 }
    );
  }
}
