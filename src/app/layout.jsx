import "./globals.css";
import Header from "./components/Header";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js 13 - Test",
  description: "This is a test app created with Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
