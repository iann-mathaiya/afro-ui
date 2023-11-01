import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export default function EvilDesignCaseStudies() {
  return (
    <section className="border-t border-t-slate-300 pt-2">
      <span className="scroll-m-20 text-sm uppercase text-slate-500">Success Stories</span>

      <div className="my-4 lg:my-6 flex items-center justify-between">

        <h1 className="scroll-m-20 text-2xl text-slate-700 font-semibold tracking-tight lg:text-4xl">Case studies</h1>

        <div className="flex items-center gap-2">
          <button className="p-1 rounded-full border border-slate-300 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-transparent">
            <ChevronLeftIcon className="w-5 h-5" aria-hidden='true' />
          </button>

          <button className="p-1 rounded-full border border-slate-300 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-transparent">
            <ChevronRightIcon className="w-5 h-5" aria-hidden='true' />
          </button>
        </div>
      </div>

    </section>
  )
}

