// Lista de usuarios y la creacion de usuarios

import { query } from "@/app/lib/connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const q = await query(
      "SELECT Id_usuario, Nombre, Apellido_1, Cargo FROM Usuarios",
      []
    );

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
