import type { Metadata } from "next";
import "./globals.css";
import {inter} from './utils/newfont'


export const metadata: Metadata = {
  title: "The NBA Blow it Up Blog",
  description: "NBA End of Year Review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter}`}>{children}</body>
    </html>
  );
}
