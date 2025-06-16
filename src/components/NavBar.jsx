"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({ id }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/not-found") return null;

  const links = [
    { href: "/productos", label: "Productos" },
    { href: "/realizar_venta", label: "Realizar Venta" },
    { href: "/lote_productos", label: "Lote Productos" },
    { href: "/usuarios", label: "Usuarios" },
    { href: `/usuarios/${id}/cambio_clave`, label: "Cambio de Clave" }, // Ojo con el espacio al final
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6 max-w-6xl mx-auto items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-yellow-300 ${
                pathname === href ? "font-bold underline" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={handleLogout}
            className="hover:text-yellow-300 font-semibold"
          >
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
}
