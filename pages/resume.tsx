import Bar from '@/components/Bar'
import { Tech } from '@/lib/models'
import { techStacks } from '@/lib/data'
import { RiSoundcloudFill, RiSpotifyFill } from 'react-icons/ri'

export default function Resume() {
  return (
    <div className="p-4">
      {/* education */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Education`}</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">{`Dev Academy Aotearoa`}</h5>
            <p className="font-semibold">{`NZ Certificate in Applied Software Development`}</p>
            <p className="my-3">{`Boot camp style 17 week full stack software development course.`}</p>
          </div>
        </div>

        {/* music */}
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Music Projects`}</h5>
          <div>
            <div className="grid justify-around w-9/12 h-full grid-cols-3 mx-auto my-5">
              <h5 className="my-2 text-xl font-bold">{`Ma Barka`}</h5>
              <a href="https://soundcloud.com/mabarkabeats">
                <RiSoundcloudFill className="w-10 h-10 cursor-pointer hover:text-slate-500" />
              </a>
              <a href="https://open.spotify.com/artist/76wXGkqJN6UspnheN2KxQP?si=DHUtup_YSLuqfx0R4xWWFw">
                <RiSpotifyFill className="w-10 h-10 cursor-pointer hover:text-slate-500" />
              </a>
              <h5 className="my-2 text-xl font-bold">{`Dusty`}</h5>
              <a href="https://soundcloud.com/dustynz">
                <RiSoundcloudFill className="w-10 h-10 cursor-pointer hover:text-slate-500" />
              </a>
              <a href="https://open.spotify.com/artist/7uSrQ6yuLBhtA57dEWv78b?si=zLm-3SkuT-axByWMwizrxA">
                <RiSpotifyFill className="w-10 h-10 cursor-pointer hover:text-slate-500" />
              </a>
              <h5 className="my-2 text-xl font-bold">{`Ooza`}</h5>
              <a href="https://soundcloud.com/oozamusic">
                <RiSoundcloudFill className="w-10 h-10 cursor-pointer hover:text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* languages and tools */}
      <div className="grid h-full grid-cols-2 gap-6">
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
