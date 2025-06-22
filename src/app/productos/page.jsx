import ViewProductos from "@/components/productos/ViewProductos";
import { redirect } from "next/navigation"; // Usa esta, NO "next/dist/server/api-utils"
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login"); // redirige directamente
  }

  if (user.Cargo === 1) {
    return <ViewProductos />;
  }

  redirect("/not-found"); // ✅ sin return
}