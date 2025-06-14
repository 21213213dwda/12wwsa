import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: "大梅沙智能平台",
  description: "欢迎访问大梅沙智能平台，这是一个多功能网页。",
  openGraph: {
    title: "大梅沙智能平台",
    description: "欢迎访问大梅沙智能平台，这是一个多功能网页。",
    url: "https://your-website-url.com", // 改成你部署的网址
    siteName: "大梅沙",
    images: [
      {
        url: "/og.png", // 没图片就暂时保留
      },
    ],
    locale: "zh-CN",
    type: "website",
  },
  twitter: {
    title: "大梅沙智能平台",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/j.jpg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
