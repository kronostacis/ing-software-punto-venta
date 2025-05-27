// Lista de usuarios y la creacion de usuarios

import { query } from "@/app/lib/connection";
import { NextResponse } from "next/server";
import prisma from '@/app/lib/prisma';


export async function GET() {
  try {
    /*const q = await query(
      "SELECT Id_usuario, Nombre, Apellido_1, Cargo FROM Usuarios",
      []
    );*/

    const q = await prisma.usuarios.findMany({
      select: {
        Id_usuario: true,
        Nombre: true,
        Apellido_1: true,
        Apellido_2: true,
        Cargo: true,
      },
    });


    return NextResponse.json(q, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { success: false, message: "Error al obtener usuarios" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
