import { getUserFromToken } from "@/app/lib/auth";
import { notFound, redirect } from "next/navigation";
import FormCambioClave from "@/components/usuarios/FormCambioClave";

export default async function CambioClavePage({ params }) {
  const user = await getUserFromToken();

  console.log({ user, params });
  if (!user) {
    redirect("/login");
  }

  // Validar que params.id exista y sea string
  if (!params?.id || typeof params.id !== "string") {
    notFound();
  }

  const idFromUrl = params.id;
  const idFromToken = user.Id_usuario.toString();

  if (idFromUrl !== idFromToken) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cambiar Contraseña
      </h2>
      <FormCambioClave userId={user.id} />
    </div>
  );
}
