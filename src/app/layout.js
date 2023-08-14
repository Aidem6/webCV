import './globals.css'
import { Raleway } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Tomczyk CV',
  description: 'Find out more about Adam Tomczyk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
