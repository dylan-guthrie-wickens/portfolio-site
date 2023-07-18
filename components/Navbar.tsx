import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const pages = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ]

  const [activePage, setActivePage] = useState('')

  const { pathname } = useRouter()

  useEffect(() => {
    const currentPage = pages.find((page) => page.path === pathname)
    if (currentPage) {
      setActivePage(currentPage.name)
    }
  }, [pathname])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-black border-b-4 md:text-2xl">
        {activePage}
      </span>
      <div className="flex space-x-5 text-lg">
        {pages.map(
          (page, i) =>
            activePage !== page.name && (
              <Link href={page.path} key={`${i} ${page.name}`}>
                <span
                  className="cursor-pointer hover:text-stone-500"
                  onClick={() => setActivePage(page.name)}
                >
                  {page.name}
                </span>
              </Link>
            )
        )}
      </div>
    </div>
  )
}
