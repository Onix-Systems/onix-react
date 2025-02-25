import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StoreProvider from "../components/StoreProvider"
import Navigation from "../components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js with Zustand",
  description: "Example of Next.js 15 with Zustand, pagination, and navigation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navigation />
          <main className="container mx-auto p-4">{children}</main>
        </StoreProvider>
      </body>
    </html>
  )
}
