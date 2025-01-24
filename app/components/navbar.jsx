import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="bg-white/80 backdrop-blur-sm  w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-4xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            TestCraft
          </Link>
          <div className="flex space-x-4">
            {!userId && (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <SignInButton />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <SignUpButton />
                </Button>
              </>
            )}
            {userId && (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
