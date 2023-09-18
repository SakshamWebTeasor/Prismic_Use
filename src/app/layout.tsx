import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx' // for handeling multiple font.class in single className
import { createClient, repositoryName } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PrismicPreview } from '@prismicio/next'

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
  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title || 'Prismic Use',
    description: settings.data.meta_description || 'Prismic Description Here',
    openGraph: {
      images: [settings.data.og_image.url || ''],
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
        <Header />
        {children}
        <Footer />
        <div className='fixed bg-gradient-to-t from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50'></div>
        <PrismicPreview repositoryName={repositoryName} />
      </body> {/** incase single direclty use => inter.className */}
    </html>
  )
}
