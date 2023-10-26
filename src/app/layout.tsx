import "@app/globals.css";

import type { Metadata } from "next";

import { AppBar } from "@components";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian's secrets",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        url: "/assets/favicon/icon-light.png",
        href: "/assets/favicon/icon-light.png",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        url: "/assets/favicon/icon-dark.png",
        href: "/assets/favicon/icon-dark.png",
      },
    ],
  },
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="app relative">
        <AppBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
