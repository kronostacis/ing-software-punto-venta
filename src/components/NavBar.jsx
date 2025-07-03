"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Íconos de Lucide
import {
  FileText,
  Package,
  ShoppingCart,
  Users,
  KeyRound,
  LogOut,
  Wallet,
} from "lucide-react";

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

  if (
    pathname === "/login" ||
    pathname === "/not-found" ||
    pathname === "/"
  )
    return null;

  const getFilteredLinks = (role, userId) => {
    const allLinks = [
      { href: "/reportes", label: "Reportes", roles: [1, 2], icon: FileText },
      { href: "/productos", label: "Productos", roles: [1, 2, 3], icon: Package },
      {
        href: "/realizar_venta",
        label: "Realizar Venta",
        roles: [1, 2, 3],
        icon: ShoppingCart,
      },
      {
        href: "/lista_ventas",
        label: "Lista de Ventas",
        roles: [1, 2],
        icon: FileText,
      },
      {
        href: "/lote_productos",
        label: "Lote Productos",
        roles: [1, 2],
        icon: Package,
      },
      {
        href: "/resumen_caja",
        label: "Resumen Caja",
        roles: [1, 2],
        icon: FileText,
      },
      {
        href: "/medio_pago",
        label: "Medio de Pago",
        roles: [1, 2, 3],
        icon: Wallet,
      },
      { href: "/usuarios", label: "Usuarios", roles: [1], icon: Users },
      {
        href: `/usuarios/${userId}/cambio_clave`,
        label: "Cambio de Clave",
        roles: [1, 2, 3],
        icon: KeyRound,
      },
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
      <div className="flex justify-between items-center">

        {/* Menú con íconos y rebote */}
        <ul className="flex space-x-6 items-center">
          {filteredLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md transform transition duration-200 ease-out ${
                  isActive
                    ? "bg-white/30 text-white shadow-inner scale-100"
                    : "hover:animate-bounce hover:scale-105 hover:bg-white/20 active:scale-95"
                }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1 rounded-md font-semibold bg-red-600 hover:bg-red-700 transform transition duration-200 ease-out hover:scale-105 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
