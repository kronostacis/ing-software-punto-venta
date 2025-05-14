"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/usuarios")
      .then((res) => {
        if (res.status === 200) {
          setUsuarios(res.data);
        } else {
          console.error("Error al obtener los usuarios");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Usuarios
      {usuarios.map((usuario) => {
        return (
          <div
            key={usuario.Id_usuario}
            className="bg-white shadow-md rounded-lg p-4 w-full max-w-md"
          >
            <h2 className="text-xl font-bold">
              {usuario.Nombre} {usuario.Apellido_1}
            </h2>
            <p>Cargo: {usuario.Cargo}</p>
          </div>
        );
      })}
    </div>
  );
}
