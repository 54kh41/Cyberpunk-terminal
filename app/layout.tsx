import "./globals.css";
import React from "react";

export const metadata = {
  title: "The Calculus Of A Shattered Soul",
  description: "Cyberpunk terminal for The Calculus Of A Shattered Soul"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
