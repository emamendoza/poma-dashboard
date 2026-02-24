import "./_statics/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./_components/theme-provider";
import { geistMono, geistSans } from "./_statics/fonts";

export const metadata: Metadata = {
  title: "Poma",
  description: "Poma Business solutions",
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
