import ViewLotes from "@/components/lote_productos/ViewLotes";
import { redirect } from "next/navigation"; // Usa esta, NO "next/dist/server/api-utils"
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login"); // redirige directamente
  }

  if (user.Cargo !== 3) {
    // Puedes agregar más cargos si es necesario
    // Si el usuario tiene el cargo adecuado, muestra la vista de lotes
    return <ViewLotes />;
  }

  redirect("/not-found"); // ✅ sin return
}
