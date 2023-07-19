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
    description: `A Hasbro "Game of Life" clone with a cat theme, this was our final project for Dev Academy and the most challenging project I have ever worked on. Our goal was to create a turn based board game with a React based SERN stack, where you could earn "treats", buy property, and make life decisions.\n
    I was the scrum master again for this project, and organised our team quickly through a full day planning session, and several sprints, first for MVP, then to attempt further functionality.\n
    I worked extensively on the game logic and overall structure of the app, using React, Knex, Express, Vite, Zustand, React Query, Typescript, and CSS.\n
    The project quickly grew in scope as we worked on it, as it was the first large scale game we had worked on, the complexity added challenges as we went, necessitating changes to our plan on the fly, and learning new tech like Zustand to solve novel problems.\n
    We presented this to a group of our family, friends, and peers, and I facilitated and oversaw our presentation preparation, and helped create the assets for us to use.\n
    I learned a huge amount on this project, about myself as a leader, about teamwork, and about the limitations of some of the technologies we used. Sometimes things really are impossible, it's not just something you can think through.\n
    The game is not currently functional, and if I rebuild it, I will fundamentally redesign the game "engine" to have a ticker that checks the state periodically. This will get past the issues we had with our current implementation I hope.`,
    imagePath: '/images/purrfect-paws-life.png',
    urls: [
      {
        url: 'https://github.com/dylan-guthrie-wickens/Purrfect-Paws-Life',
        type: 'Github',
        Icon: AiFillGithub,
      },
    ],
    category: ['React'],
    techs: [
      'React',
      'Zustand',
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
    id: 2,
    name: 'Escape From Boris',
    description: `A hangman style game, with and added timer and a mean looking cat called boris that gets larger if you fail guesses.\n
    As scrum master I played a pivotal role in the project's success by taking charge during an extensive initial planning meeting, subsequent stand ups, and sprint planning.\n
    I wireframed the website and planned the layout of the website, and split the workload between team members on our kanban board after discussing strengths, weaknesses, and learning objectives of everyone involved.\n
    I implemented novel game logic and back end structure, using Typescript, Express, and Knex.\n
    This was an extremely fun project to work on with my team, and together we worked very effectively through the challenges. In the future I would like to rework this project with Zustand state system and a better design on the gameboard, as currently it doesn't work well on some browsers and devices.`,
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
  // {
  //   id: 3,
  //   name: 'Smell My Pixels',
  //   description: 'Simple web based clone of the venerable Microsft Paint',
  //   imagePath: '/images/smell-my-pixels.png',
  //   urls: [
  //     {
  //       url: 'https://github.com/dylan-guthrie-wickens/Smell-My-Pixels',
  //       type: 'Github',
  //       Icon: AiFillGithub,
  //     },
  //   ],
  //   category: ['React', 'Vite'],
  //   techs: ['React', 'Vite', 'TypeScript', 'Express'],
  // },
  // {
  //   id: 4,
  //   name: 'Task Generator',
  //   description:
  //     'Hilarious task generator, perform tasks generated or add your own variables!',
  //   imagePath: '/images/task-masters.png',
  //   urls: [
  //     {
  //       url: 'https://github.com/dylan-guthrie-wickens/Task-Generator',
  //       type: 'Github',
  //       Icon: AiFillGithub,
  //     },
  //     {
  //       url: 'http://task-master.devacademy.nz/',
  //       type: 'Demo',
  //       Icon: AiFillPlaySquare,
  //     },
  //   ],
  //   category: ['Express.js'],
  //   techs: ['Express', 'Knex', 'SQLite', 'Handlebars'],
  // },
  // {
  //   id: 5,
  //   name: 'Username Generator',
  //   description: 'Generate a unique username after answering 20 questions!',
  //   imagePath: '/images/username-generator.png',
  //   urls: [
  //     {
  //       url: 'https://github.com/dylan-guthrie-wickens/Username-Generator',
  //       type: 'Github',
  //       Icon: AiFillGithub,
  //     },
  //     {
  //       url: 'http://technical-difficulties-username-in-20-qs.devacademy.nz/',
  //       type: 'Demo',
  //       Icon: AiFillPlaySquare,
  //     },
  //   ],
  //   category: ['Express.js'],
  //   techs: ['Express', 'Knex', 'SQLite', 'Handlebars'],
  // },
]
