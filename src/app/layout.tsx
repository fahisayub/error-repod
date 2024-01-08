'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children, pageProps
}:any) {
  return (
    <SessionProvider session={pageProps?.session} >
      <html lang="en">
        <head>
          <title>NextApp</title>
        </head>
        <body className={inter.className} >
          <div>

            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}

