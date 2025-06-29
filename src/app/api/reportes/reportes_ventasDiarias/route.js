import { NextResponse } from "next/server";
import { obtenerVentasDiarias } from "@/app/lib/db/reportes";

export async function GET() {
  const data = await obtenerVentasDiarias();
  return NextResponse.json(data);
}