import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./ui/navbar.components"
import Sidebar from "./ui/sidebar.components"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Personal Analytics",
  description: "A web analytic built for personal site of David's",
  authors: [
    { name: "David Mulyawan Oktavianus", url: "https://davdmoo.vercel.app" },
  ],
  creator: "David Mulyawan Oktavianus",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
      >
        <Sidebar isExpanded={true} />
        <div className="flex flex-col flex-1">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
