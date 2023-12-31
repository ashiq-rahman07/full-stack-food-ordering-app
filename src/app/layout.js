import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layaout/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto border p-4">
          <Header />
          {children}
          <footer className="border-t p-8 text-center to-gray-500 mt-16">
            &copy; 2023 All right reserved
          </footer>
        </main>
      </body>
    </html>
  );
}
