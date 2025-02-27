import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
    title: "YourEvent",
    description: "YourEvent is a platform for hosting events.",
};

const oxianium = Oxanium({
    weight: ["500", "600"],
    subsets: ["latin"],
    variable: "--font-oxanium",
});

const montserrat = Montserrat({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${montserrat.variable} ${oxianium.variable}`}>
            <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/Background.png)] bg-no-repeat bg-top md:bg-right-top">
                <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">{children}</main>
            </body>
        </html>
    );
}
