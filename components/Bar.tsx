import { Tech } from '@/lib/models'
import { FunctionComponent } from 'react'

const Bar: FunctionComponent<{ tech: Tech }> = ({
  tech: { Icon, name, level },
}) => {
  return (
    <div className="my-2 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-slate-300 dark:bg-slate-600"
        style={{ width: `${level}%` }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  )
}

export default Bar
