import ViewMedioPagos from "@/components/medio_pago/ViewMedioPagos";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  if (user.Cargo === 1 || user.Cargo === 2) {
    return <ViewMedioPagos />;
  }

  redirect("/not-found");
}