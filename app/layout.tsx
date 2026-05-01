import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "绒光宠物洗护店",
  description: "犬猫洗护、美容修剪和皮毛护理预约页面"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
