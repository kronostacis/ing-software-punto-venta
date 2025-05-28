import { NextResponse } from "next/server";
import { ChangePasswordSchema } from "@/validations/userSchema";
import jwt from "jsonwebtoken";
import { getUserHashById, updatePasswordUserById } from "@/app/lib/db/usuarios";
import argon2 from "argon2";
import { cookies } from "next/headers";

export async function POST(request, { params }) {
  try {
    const { id } = await params;

    const body = await request.json();
    const accessToken = cookies().get("accessToken")?.value;

    if (!accessToken) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    const tokenId = decodedToken.id;

    if (tokenId != parseInt(id))
      return NextResponse.json({ error: "No autorizado 1" }, { status: 401 });

    await ChangePasswordSchema.validate(body, { abortEarly: false });

    const userRecord = await getUserHashById(tokenId);

    const { Contrasena, Nueva_contrasena } = body;
    const passwordMatch = await argon2.verify(
      userRecord.Contrasena,
      Contrasena
    );

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "La contraseña actual es incorrecta" },
        { status: 400 }
      );
    }

    const hashedNewPassword = await argon2.hash(Nueva_contrasena, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 1,
      hashLength: 64,
    });

    const updatedUser = await updatePasswordUserById(tokenId, {
      Contrasena: hashedNewPassword,
    });

    return NextResponse.json(
      { message: "Contraseña cambiada exitosamente", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
