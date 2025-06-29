import RealizarVenta from "@/components/realizar_venta/ViewCaja";
import { redirect } from "next/navigation"; // Usa esta, NO "next/dist/server/api-utils"
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login"); // redirige directamente
  }
  if(user){
    console.log("ID aca :",user?.Id_usuario);
    return <RealizarVenta id={user?.Id_usuario} />
  }
  
  redirect("/not-found"); // ✅ sin return
}
