import { UpdateUserSchema } from "@/validations/userSchema";
import { NextResponse } from "next/server";
import {
  getUserById,
  deleteUserById,
  updateUserById,
} from "@/app/lib/db/usuarios";

export async function GET(request, { params }) {
  const { id } = params;
  const userId = parseInt(id);

  try {
    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Usuario no encontrado" },
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return NextResponse.json(user, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { success: false, message: "Error al obtener usuario" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const userId = parseInt(id);

  try {
    deleteUserById(userId);
    return NextResponse.json(
      { success: true, message: "Usuario eliminado correctamente" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json(
      { success: false, message: "Error al eliminar usuario" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const data = await request.json();
    console.log(data);

    await UpdateUserSchema.validate(data, {
      abortEarly: false,
    });

    console.log("aca");

    const updatedUser = await updateUserById(userId, data);
    return NextResponse.json(updatedUser, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (errors) {
    return NextResponse.json(
      { success: false, message: "Error al actualizar usuario", errors },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
