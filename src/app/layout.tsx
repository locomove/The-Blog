import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com next.js",
  description: "Aprendendo React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >

        {children}

      </body>
    </html>
  );
}
