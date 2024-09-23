import './globals.css'
import { Raleway } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next"

config.autoAddCss = false; /* eslint-disable import/first */
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Tomczyk CV',
  description: 'Find out more about Adam Tomczyk',
  creator: 'Adam Tomczyk',
  manifest: '/manifest.json',
  themeColor: '#222831',
  appleTouchIcon: '/logo192.png',
  appleMobileWebAppStatusBar: '#222831',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
