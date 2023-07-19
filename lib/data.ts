import { RiComputerLine, RiMusic2Line } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineApi, AiFillGithub, AiFillPlaySquare } from 'react-icons/ai'
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSqlite,
  SiPython,
  SiC,
  SiWordpress,
  SiXero,
  SiAbletonlive,
  SiAdobe,
  SiGithub,
  SiMicrosoftoffice,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { Project, Skill, TechStack } from './models'

export const techStacks: TechStack[] = [
  {
    title: 'Languages',
    data: [
      {
        name: 'Javascript',
        Icon: SiJavascript,
      },
      {
        name: 'Typescript',
        Icon: SiTypescript,
      },
      {
        name: 'HTML',
        Icon: SiHtml5,
      },
      {
        name: 'CSS',
        Icon: SiCss3,
      },
      {
        name: 'React.js',
        Icon: SiReact,
      },
      {
        name: 'SQLite',
        Icon: SiSqlite,
      },
      {
        name: 'Python',
        Icon: SiPython,
      },
      {
        name: 'C',
        Icon: SiC,
      },
    ],
  },
  {
    title: 'Software',
    data: [
      {
        name: 'Visual Studio Code',
        Icon: TbBrandVscode,
      },
      {
        name: 'Git / Github',
        Icon: SiGithub,
      },
      {
        name: 'Wordpress',
        Icon: SiWordpress,
      },
      {
        name: 'Xero',
        Icon: SiXero,
      },
      {
        name: 'Ableton Live',
        Icon: SiAbletonlive,
      },
      {
        name: 'Adobe suite',
        Icon: SiAdobe,
      },
      {
        name: 'Microsoft office suite',
        Icon: SiMicrosoftoffice,
      },
    ],
  },
]

export const skills: Skill[] = [
  {
    title: 'Frontend development',
    about:
      'I can build scalable and accessible front end designs using a variety of technologies, including React, Next.js, Tailwind etc.',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend development',
    about:
      'I can build full data serving back ends for my applications using Express.js, SQLite and other popular frameworks.',
    Icon: FaServer,
  },
  {
    title: 'API development',
    about: 'I can develop apps that use REST and external APIs.',
    Icon: AiOutlineApi,
  },
  {
    title: 'Music Producer',
    about:
      'I produce electronic music under a number of aliases, and have releases on multiple international labels',
    Icon: RiMusic2Line,
  },
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'Purrfect Paws Life',
    description: "Hasbro's Game of Life clone featuring cats!",
    imagePath: '/images/purrfect-paws-life.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Purrfect-Paws-Life',
        type: 'Github',
        Icon: AiFillGithub,
      },
    ],
    category: ['React'],
    techs: ['React', 'Zustand'],
  },
  {
    id: 2,
    name: 'Escape From Boris',
    description:
      'Hangman style game with anxiety inducing timer and an angry cat called Boris that is coming to get you!',
    imagePath: '/images/escape-from-boris.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Escape-from-Boris',
        type: 'Github',
        Icon: AiFillGithub,
      },
    ],
    category: ['React', 'Vite'],
    techs: [
      'React',
      'Vite',
      'TypeScript',
      'Express',
      'React Query',
      'Knex',
      'SQLite',
      'Superagent',
    ],
  },
  {
    id: 3,
    name: 'Smell My Pixels',
    description: 'Simple web based clone of the venerable Microsft Paint',
    imagePath: '/images/smell-my-pixels.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Smell-My-Pixels',
        type: 'Github',
        Icon: AiFillGithub,
      },
    ],
    category: ['React', 'Vite'],
    techs: ['React', 'Vite', 'TypeScript', 'Express'],
  },
  {
    id: 4,
    name: 'Task Generator',
    description:
      'Hilarious task generator, perform tasks generated or add your own variables!',
    imagePath: '/images/task-masters.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Task-Generator',
        type: 'Github',
        Icon: AiFillGithub,
      },
      {
        url: 'http://task-master.devacademy.nz/',
        type: 'Demo',
        Icon: AiFillPlaySquare,
      },
    ],
    category: ['Express.js'],
    techs: ['Express', 'Knex', 'SQLite', 'Handlebars'],
  },
  {
    id: 5,
    name: 'Username Generator',
    description: 'Generate a unique username after answering 20 questions!',
    imagePath: '/images/username-generator.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Username-Generator',
        type: 'Github',
        Icon: AiFillGithub,
      },
      {
        url: 'http://technical-difficulties-username-in-20-qs.devacademy.nz/',
        type: 'Demo',
        Icon: AiFillPlaySquare,
      },
    ],
    category: ['Express.js'],
    techs: ['Express', 'Knex', 'SQLite', 'Handlebars'],
  },
]
