// Lista de usuarios y la creacion de usuarios
import { CreateUserSchema } from "@/validations/userSchema";
import { NextResponse } from "next/server";
import { getAllUsers, createUser } from "@/app/lib/db/usuarios";
import argon2 from "argon2";

export async function GET() {
  try {
    const q = await getAllUsers();

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

export async function POST(request) {
  try {
    var data = await request.json();
    await CreateUserSchema.validate(data, {
      abortEarly: false,
    });

    data.Contrasena = await argon2.hash(data.Contrasena, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 1,
      hashLength: 64,
    });

    const user = await createUser(data);

    return NextResponse.json(user, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      { success: false, message: "Error al crear usuario" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
