import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {Aside} from '@/components/aside/aside';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CONEA',
  description: 'Course - Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Aside />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
