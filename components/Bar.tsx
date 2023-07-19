import { Tech } from '@/lib/models'
import { FunctionComponent } from 'react'

const Bar: FunctionComponent<{ tech: Tech }> = ({ tech: { Icon, name } }) => {
  return (
    <div className="my-2 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-slate-300 dark:bg-slate-600"
        style={{ width: '100%' }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  )
}

export default Bar
