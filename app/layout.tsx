"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noFooterRoutes = ["/cli"];

  const hideFooter = noFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          {!hideFooter && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
