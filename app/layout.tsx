import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Mathieu Picart — Designer UX/UI",
    description: "Portfolio UX/UI, mobilité et design produit de Mathieu Picart.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Mathieu Picart — Designer UX/UI & Produit",
      description: "Mobilité, interfaces embarquées, web et applications.",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1200, height: 630, alt: "Portfolio de Mathieu Picart" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mathieu Picart — Designer UX/UI & Produit",
      description: "Mobilité, interfaces embarquées, web et applications.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
