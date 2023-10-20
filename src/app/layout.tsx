import "@app/globals.css";

import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian's secrets",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
