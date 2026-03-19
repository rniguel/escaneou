import type { Metadata } from "next";
import { Inter, Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
    display: "swap",
});

const montserratSans = Montserrat({
    variable: "--font-montserrat-sans",
    subsets: ["latin"],
    display: "swap",
});

const outfitSans = Outfit({
    variable: "--font-outfit-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Escaneou! - Gerador de QR Code Online Grátis",
        template: "%s | Escaneou!",
    },
    description:
        "Crie QR Codes personalizados de forma rápida e fácil com o Escaneou! Gerador de QR Code online grátis, sem cadastro, com alta qualidade. Funciona em qualquer dispositivo.",
    keywords: [
        "gerador de QR Code",
        "criar QR Code grátis",
        "QR Code online",
        "gerador QR Code gratuito",
        "fazer QR Code",
        "QR Code generator",
        "QR Code maker",
        "QR Code personalizado",
        "QR Code para link",
        "QR Code para texto",
    ],
    authors: [{ name: "Miguel Riquelme", url: "https://github.com/rniguel" }],
    creator: "Miguel Riquelme",
    publisher: "Escaneou!",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://miguelito.dev",
        siteName: "Escaneou!",
        title: "Escaneou! - Gerador de QR Code Online Grátis",
        description:
            "Crie QR Codes personalizados de forma rápida e fácil com o Escaneou! Simples, gratuito e sem cadastro.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1595079676714-d804bc1095b4?q=80&w=2070&auto=format&fit=crop",
                width: 1200,
                height: 630,
                alt: "Escaneou! - Gerador de QR Code Online",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Escaneou! - Gerador de QR Code Online Grátis",
        description:
            "Crie QR Codes personalizados de forma rápida e fácil com o Escaneou! Simples, gratuito e sem cadastro.",
        images: [
            "https://images.unsplash.com/photo-1595079676714-d804bc1095b4?q=80&w=2070&auto=format&fit=crop",
        ],
        creator: "@rniguel",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    metadataBase: new URL("https://escaneou.com"),
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={`${interSans.variable} ${montserratSans.variable} ${outfitSans.variable} min-h-screen flex flex-col font-inter antialiased`}
            >
                <div className="fixed inset-0 bg-pattern pointer-events-none -z-10 dark:opacity-50"></div>
                {children}
            </body>
        </html>
    );
}
