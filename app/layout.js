import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TestCraft - Craft Your Perfect Test",
  description:
    "Create personalized, engaging tests with ease using AI-powered tools.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 min-h-screen flex flex-col`}
        >
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
