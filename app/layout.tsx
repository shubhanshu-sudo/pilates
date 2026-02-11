import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE PILATES PALMS – PULSE | Boutique Wellness Space",
  description: "A modern, minimal, luxury Pilates studio for intentional movement and architectural wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
