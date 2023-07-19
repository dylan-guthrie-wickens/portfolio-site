import { BsSun, BsMoon } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={changeTheme}
      className="px-2 py-2 rounded-full dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-500 dark:hover:bg-slate-500"
    >
      {theme === 'light' ? (
        <BsMoon className="w-6 h-6" />
      ) : (
        <BsSun className="w-6 h-6" />
      )}
    </button>
  )
}
