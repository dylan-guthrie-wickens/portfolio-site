import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SideMenu from '@/components/SideMenu'
import Navbar from '@/components/Navbar'

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-0 lg:px-36 xl:px-48 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 text-base text-center bg-slate-100 dark:bg-slate-800 lg:col-span-3 rounded-2xl">
          <SideMenu />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-slate-100 dark:bg-slate-800 lg:col-span-9 rounded-2xl">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
