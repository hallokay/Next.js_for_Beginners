import "./globals.css";
import type { Metadata } from "next";
import { Navbar, MyProfilePic } from "./componets";

export const metadata: Metadata = {
  title: "Greenbean's blog",
  description: "blog website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}</body>
    </html>
  );
}
