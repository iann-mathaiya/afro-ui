import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

type CaseStudy = {
  id: number
  title: string
  abbreviation: string
  topic: string
}

const caseStudies: CaseStudy[] = [
  { id: 1, title: 'Layers', abbreviation: 'LA', topic: 'Business and Enterpreneurship' },
  { id: 2, title: 'Capsule', abbreviation: 'CA', topic: 'Education and Technology' },
  { id: 3, title: 'FeatherDevs', abbreviation: 'FE', topic: 'Marketing and Social Media' },
  { id: 4, title: 'Command+R', abbreviation: 'CR', topic: 'Human Resources' },
  { id: 5, title: 'Tailwind', abbreviation: 'TA', topic: 'Web Development' },
  { id: 6, title: 'AlignUI', abbreviation: 'AL', topic: 'Design Systems' },
]


export default function EvilDesignCaseStudies() {
  return (
    <section className="border-t border-t-slate-300 pt-2">
      <span className="scroll-m-20 text-sm uppercase text-slate-500">Success Stories</span>

      <div className="my-4 lg:my-6 flex items-center justify-between">

        <h1 className="scroll-m-20 text-2xl text-slate-700 font-medium tracking-tight lg:text-4xl">Case studies</h1>

        <div className="flex items-center gap-2">
          <button className="p-1 rounded-full border border-slate-300 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-transparent">
            <ChevronLeftIcon className="w-5 h-5" aria-hidden='true' />
          </button>

          <button className="p-1 rounded-full border border-slate-300 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-transparent">
            <ChevronRightIcon className="w-5 h-5" aria-hidden='true' />
          </button>

        </div>

      </div>

      <div className="pb-4 flex gap-4 overflow-x-auto no-scrollbar">

        {caseStudies.map(study =>
          <div key={study.id} className="group">

            <div className="min-w-[288px] h-[360px] p-4  flex flex-col justify-between border border-slate-300 group-hover:border-t-transparent group-hover:bg-slate-600 rounded-lg">
              <div className="pt-2 border-t border-t-slate-300 group-hover:border-t-white">
                <abbr className="text-xs no-underline text-slate-400 group-hover:border-slate-200" title={study.title}>{study.abbreviation}</abbr>
                <h2 className="text-lg text-slate-800 font-medium group-hover:text-white">{study.title}</h2>
              </div>

              <h3 className="text-xs uppercase text-slate-600 group-hover:text-slate-100">{study.topic}</h3>
            </div>

          </div>
        )}

      </div>

    </section>
  )
}

