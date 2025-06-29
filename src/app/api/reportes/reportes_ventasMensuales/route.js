import { NextResponse } from "next/server";
import { obtenerVentasMensuales } from "@/app/lib/db/reportes";

export async function GET() {
  const data = await obtenerVentasMensuales();
  return NextResponse.json(data);
}