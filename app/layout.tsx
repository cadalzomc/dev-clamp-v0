import "@/app/_ui/css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, DynamicToaster, QueryProviders } from "@/lib/context";

import {
  IconError,
  IconInfo,
  IconSuccess,
  IconWarning,
} from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Clamp V0 - Your Modern Web Application",
  description:
    "A beautiful, modern web application built with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProviders>{children}</QueryProviders>
          <DynamicToaster
            position="bottom-left"
            visibleToasts={10}
            gap={20}
            duration={2500}
            icons={{
              success: <IconSuccess className="size-8" />,
              info: <IconInfo className="size-8" />,
              warning: <IconWarning className="size-8" />,
              error: <IconError className="size-8" />,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
