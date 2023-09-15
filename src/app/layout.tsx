import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx' // for handeling multiple font.class in single className
import { createClient } from '@/prismicio'

// found from https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title || 'Prismic Use',
    description: page.data.meta_description || 'Prismic Description Here',
    openGraph: {
      images: [page.data.og_image.url || ''],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}> {/** we may use => className={`${inter.variable} ${roboto_mono.variable}`} */}
      <body>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body> {/** incase single direclty use => inter.className */}
    </html>
  )
}
