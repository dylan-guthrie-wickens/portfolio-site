import { skills } from '@/lib/data'
import SkillCard from '@/components/SkillCard'

export default function Index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">{`I am a versatile full-stack software developer, music producer, and experienced general, sales, and warehouse manager, who has recently transitioned from a successful career in high-end retail in Ōtautahi, Aotearoa to a new life in Naarm, Australia. With a strong passion for creating innovative solutions, I thrive in an environment where I can use creative problem-solving in complex systems. I am looking forward to applying my diverse skill set in any industry I find myself in, especially if I can help build something new for the future.
  `}</h5>
      <div
        className="flex-grow p-4 mt-5"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">{`Skills`}</h6>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill, i) => (
            <div
              key={`${i} ${skill.title}`}
              className="rounded-lg bg-slate-300 dark:bg-slate-600 lg:col-span-1"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
