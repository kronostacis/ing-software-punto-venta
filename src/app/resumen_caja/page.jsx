import Resumen_contable from "@/components/resumen_contable/resumen";
import { redirect } from "next/navigation"; // Usa esta, NO "next/dist/server/api-utils"
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login"); // redirige directamente
  }
  if(user){
    console.log("ID aca :",user?.Id_usuario);
    return <Resumen_contable/>
  }
  
  redirect("/not-found"); // ✅ sin return
}
