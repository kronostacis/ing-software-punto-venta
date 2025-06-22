// ver todas las ventas
import { CreateUserSchema } from "@/validations/userSchema";
import { NextResponse } from "next/server";
import { getAllSales } from "@/app/lib/db/lista_ventas";
import argon2 from "argon2";


export async function GET() {
  try {
    const q = await getAllSales();

    return NextResponse.json(q, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    return NextResponse.json(
      { success: false, message: "Error al obtener ventas" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}