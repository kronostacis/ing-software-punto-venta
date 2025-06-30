import ViewMedioPagos from "@/components/medio_pago/ViewMedioPagos";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/app/lib/auth";

export default async function Home() {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  return <ViewMedioPagos userRole={user.cargo} />;
}
