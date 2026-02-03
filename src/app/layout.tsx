import "./_statics/globals.css";

import type { Metadata } from "next";

import { geistMono, geistSans } from "./_statics/fonts";

import { Header } from "./_components/header";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata: Metadata = {
  title: "Poma",
  description: "Poma Business solutions",
};

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es-ar" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
