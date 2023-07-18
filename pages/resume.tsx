import Bar from '@/components/Bar'
import { Tech } from '@/lib/models'
import { techStacks } from '@/lib/data'

export default function Resume() {
  return (
    <div className="p-4">
      {/* education */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Education`}</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">{`School`}</h5>
            <p className="font-semibold">{`details`}</p>
            <p className="my-3">{`blah blah`}</p>
          </div>
        </div>

        {/* music */}
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Music Projects`}</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">{`School`}</h5>
            <p className="font-semibold">{`details`}</p>
            <p className="my-3">{`blah blah`}</p>
          </div>
        </div>
      </div>

      {/* languages and tools */}
      <div className="grid h-full gap-6 md:grid-cols-2">
        {techStacks.map((techStack, i) => (
          <div key={`${i} ${techStack.title}`}>
            <h5 className="my-3 text-2xl font-bold">{techStack.title}</h5>
            <div className="my-2">
              {techStack.data.map((item: Tech, i: number) => (
                <Bar tech={item} key={`${i} ${item}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
