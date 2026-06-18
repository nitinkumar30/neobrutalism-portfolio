import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitin S Kumar',
  description:
    'Senior Automation Engineer at Happiest Minds Technologies. Python, automation, AI, and cybersecurity.',
  keywords: [
    'Nitin Kumar',
    'Python Developer',
    'Automation Engineer',
    'Cyber Security',
    'Data Science',
    'Senior Automation Engineer',
  ],
  authors: [{ name: 'Nitin S Kumar' }],
  creator: 'Nitin S Kumar',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nitin S Kumar',
    title: 'Nitin S Kumar — Senior Automation Engineer',
    description:
      'Automation Engineer navigating through a digital universe. Python, AI, automation, and cybersecurity.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={montserrat.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Nav />
          <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
