import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zustand with Next.js and SSR",
  description: "Learn how to effectively manage state with Zustand in a Next.js application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/counter" className="hover:text-gray-300">
                Counter
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

