

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import store from './store'
import { Provider } from 'react-redux'
import Bungkus from './bungkus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apa ini cok aku gakpaham tai',
  description: 'Apa ini cok aku gakpaham tai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        {/* <body className={inter.className}>{children}</body> */}
        <Bungkus children={children}></Bungkus>
      </html>
  )
}
