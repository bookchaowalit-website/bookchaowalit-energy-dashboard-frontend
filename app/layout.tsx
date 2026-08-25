import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Load Room — Energy Monitor",
  description: "A synthetic monitoring surface for reading a building's electricity rhythm.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
