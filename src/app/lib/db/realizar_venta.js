import prisma from "@/app/lib/prisma";

export async function getProductbyID(id) {
  const product = await prisma.productos.findUnique({
    where: { Id_producto: id },
    select: {
      Id_producto: true,
      Nombre: true,
      Precio_venta: true,
      Stock: true,
    },
  });

  return product;
}

export async function getAllPayMethods() {
  const q = await prisma.medio_pagos.findMany({
    select: {
      Id_pago: true,
      Nombre_pago: true,
      Estado_medios_pago: true,
    },
  });

  return q;
}

export async function newSale(data) {
  const { Id_venta, Id_pago, Total_venta, Id_usuario, Utilidad_total, Id_estado_venta } =
    data;

  const user = await prisma.ventas.create({
    data: {
      Id_venta,
      Id_pago,
      Total_venta,
      Id_usuario,
      Utilidad_total,
      Id_estado_venta,
    },
  });

  return user;
}

export async function newDetailSale(data) {
  const { Id_venta, Id_producto, Cantidad, Precio_total} =
    data;

  const detail = await prisma.detalle_ventas_productos.create({
    data: {
      Id_venta,
      Id_producto,
      Cantidad,
      Precio_total,
    },
  });

  return detail;
}

export async function getAllLoteByProduct(id) {

  const q = await prisma.lote_productos.findMany({
    where: { Id_producto: id },
    select: {
      Id_lote: true,
      Precio_compra: true,
      Stock: true,
    },
  });

  return q;
}

export async function updateStockByLoteId(id, data) {
  try {
    const { Stock } =
      data;
    const lote = await prisma.lote_productos.update({
      where: { Id_lote: id },
      data: {
        Stock: data.Stock,
      },
    });

    return { success: true, lote: lote };
  } catch (errors) {
    console.log(errors);
    return { success: false, message: "No se pudo actualizar el Stock." };
  }
}

