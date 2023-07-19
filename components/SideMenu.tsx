import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlinePaperClip,
} from 'react-icons/ai'
import { BsSun, BsMoon } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function SideMenu() {
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
    <div className="text-slate-950 dark:text-slate-100">
      {/* theme button */}
      <button
        onClick={changeTheme}
        className="absolute px-3 py-3 rounded-full left-3 top-3 bg-slate-300 dark:text-slate-100 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500"
      >
        {theme === 'light' ? <BsMoon /> : <BsSun />}
      </button>

      {/* avatar and name*/}
      <Image
        src="/images/picofme.png"
        alt="user avatar"
        className="mx-auto border-2 rounded-full bg-slate-950 border-slate-950"
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="p-2 my-4 text-3xl font-medium tracking-wider">
        <span>{`Dylan Guthrie-Wickens`}</span>
      </h3>
      <h4 className="flex items-center justify-center px-2 py-2 my-3 text-xl rounded-full dark:bg-slate-600 bg-slate-300">
        {`Full-Stack Software Developer`}
      </h4>

      {/* download resume */}
      <a
        href="/assets/dylan-guthrie-wickens-resume.pdf"
        download="Dylan Guthrie-Wickens Resume"
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-slate-300 dark:text-slate-100 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500"
      >
        <AiOutlinePaperClip className="w-10 h-10" />
        {`Download Resume`}
      </a>

      {/* social and email buttons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="https://github.com/dylan-guthrie-wickens">
          <AiFillGithub className="w-10 h-10 cursor-pointer hover:text-slate-500" />
        </a>
        <a href="https://www.linkedin.com/in/dylan-guthrie-wickens/">
          <AiFillLinkedin className="w-10 h-10 cursor-pointer hover:text-slate-500" />
        </a>
        <a onClick={() => window.open('mailto:dylan-guthrie@hotmail.com')}>
          <AiFillMail className="w-10 h-10 cursor-pointer hover:text-slate-500" />
        </a>
      </div>

      {/* location */}
      <div className="p-2 my-5 rounded-full bg-slate-300 dark:bg-slate-600">
        <div className="flex items-center justify-center py-2 space-x-2">
          <GoLocation className="w-10 h-10" />
          <span>{`Otautahi (Christchurch), Aotearoa (New Zealand)`}</span>
        </div>
      </div>
    </div>
  )
}
