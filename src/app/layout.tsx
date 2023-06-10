import { GameContextProvider } from "@/lib/contexts/GameProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charades",
  description: "Play charades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6A3DE8" />
      </Head>
      <body className={inter.className}>
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
