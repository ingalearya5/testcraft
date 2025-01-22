import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6" aria-label="Footer">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">&copy; 2023 TestCraft, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

