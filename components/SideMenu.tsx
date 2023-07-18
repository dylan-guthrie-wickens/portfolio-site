import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePaperClip,
} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

import { useTheme } from 'next-themes'

export default function SideMenu() {
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <img
        src="/images/picofme.png"
        alt="user avatar"
        className="w-32 h-32 mx-auto bg-black border-2 border-black rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>{`Dylan Guthrie-Wickens`}</span>
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
        {`Full-Stack Software Developer`}
      </p>
      <a
        href=""
        download="name"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
      >
        <AiOutlinePaperClip className="w-10 h-10" />
        {`Download Resume`}
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-black md:w-full">
        <a href="">
          <AiFillGithub className="w-10 h-10 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-10 h-10 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-10 h-10" />
          <span>{`Otautahi (Christchurch), Aotearoa (New Zealand)`}</span>
        </div>
        <p className="my-2">{`dylan-guthrie@hotmail.com`}</p>
        {/* email buttons */}
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full focus:outline-none"
        onClick={() => window.open('mailto:dylan-guthrie@hotmail.com')}
      >
        {`Email Me`}
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full"
      >
        {`Toggle Theme`}
      </button>
    </div>
  )
}
