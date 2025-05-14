"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/logout");
      if (res.status === 200) {
        router.push("/login"); // redirige a login
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Página de inicio
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        LogOut
      </button>
    </div>
  );
}
