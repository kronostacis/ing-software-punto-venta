// app/layout.js o app/layout.tsx
import "./globals.css"; // Importar el CSS global

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
