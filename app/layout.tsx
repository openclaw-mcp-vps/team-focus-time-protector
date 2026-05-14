import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Time Protector – Block Meeting Interruptions During Deep Work",
  description: "Automatically declines meeting invites during your focus blocks and suggests alternative slots. Protect deep work for software teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f6911e9-f643-4042-9c6b-d28637835719"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
