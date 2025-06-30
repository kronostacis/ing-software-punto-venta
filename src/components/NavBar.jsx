"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/usuarios/session");
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user session:", error);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  if (pathname === "/login" || pathname === "/not-found" || pathname === "/")
    return null;

  console.log("User data:", user);
  const getFilteredLinks = (role, userId) => {
    const allLinks = [
      { href: "/reportes", label: "Reportes", roles: [1, 2] }, // Administrador, Dueño
      { href: "/productos", label: "Productos", roles: [1, 2, 3] }, // Administrador, Dueño, Cajero
      { href: "/realizar_venta", label: "Realizar Venta", roles: [1, 3] }, // Administrador, Cajero
      { href: "/lista_ventas", label: "Lista de Ventas", roles: [1, 2] }, // Administrador, Dueño
      { href: "/lote_productos", label: "Lote Productos", roles: [1, 2] }, // Administrador, Dueño
      { href: "/medio_pago", label: "Medio de Pago", roles: [1, 2, 3] }, // Administrador, Dueño, Cajero
      { href: "/usuarios", label: "Usuarios", roles: [1] }, // Administrador
      {
        href: `/usuarios/${userId}/cambio_clave`,
        label: "Cambio de Clave",
        roles: [1, 2, 3],
      }, // Todos
    ];

    if (!role) return [];

    return allLinks.filter((link) => link.roles.includes(role));
  };

  const filteredLinks = getFilteredLinks(user?.cargo, user?.id);

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
        {filteredLinks.map(({ href, label }) => (
          <li key={label}>
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
