import { NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";

export async function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(accessToken, secret);
      return NextResponse.next();
    } catch (error) {
      console.error("Access Token inválido:", error);
    }
  }

  if (refreshToken) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET);
      const refresh_decode = await jwtVerify(refreshToken, secret);

      // Generar nuevo accessToken con 'jose'
      const newAccessToken = await new SignJWT({
        id: refresh_decode.payload.id,
        name: refresh_decode.payload.name,
        lastName: refresh_decode.payload.lastName,
        role: refresh_decode.payload.role,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secret);

      // Crear respuesta con la nueva cookie
      const response = NextResponse.next();
      response.cookies.set({
        name: "accessToken",
        value: newAccessToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hora
        path: "/",
      });

      return response;
    } catch (error) {
      console.error("Refresh Token inválido:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Aplicar middleware solo a ciertas rutas
export const config = {
  matcher: [
    "/dashboard",
    "/ventas",
    "/usuarios",
    "/productos",
    //"/api/usuarios",
  ],
};
