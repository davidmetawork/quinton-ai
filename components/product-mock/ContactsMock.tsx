"use client"

import { Search, Sparkles, Settings, ListPlus, EyeOff, ArrowLeft, ExternalLink, User } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Row = {
  score: number
  first: string
  last: string
  title: string
  company: string
  found: string
  selected?: boolean
}

const rows: Row[] = [
  { score: 98, first: "Sam",    last: "Altman",    title: "Chief Executive Officer",  company: "OpenAI", found: "4 days ago", selected: true },
  { score: 97, first: "Greg",   last: "Brockman",  title: "President & Co-Founder",   company: "OpenAI", found: "4 days ago", selected: true },
  { score: 96, first: "Brad",   last: "Lightcap",  title: "Chief Operating Officer",  company: "OpenAI", found: "4 days ago", selected: true },
  { score: 95, first: "Sarah",  last: "Friar",     title: "Chief Financial Officer",  company: "OpenAI", found: "4 days ago" },
  { score: 95, first: "Kevin",  last: "Weil",      title: "Chief Product Officer",    company: "OpenAI", found: "4 days ago" },
  { score: 94, first: "Jakub",  last: "Pachocki",  title: "Chief Scientist",          company: "OpenAI", found: "4 days ago" },
]

export function ContactsMock({
  className = "",
  onNavClick,
  clickableNavs,
}: {
  className?: string
  onNavClick?: (label: string) => void
  clickableNavs?: string[]
}) {
  return (
    <ProductFrame
      activeNav="Get Clients"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 text-ink-900 font-semibold mb-2">
          <ArrowLeft className="w-3.5 h-3.5 text-ink-500" />
          <span className="text-[15px]">Contacts</span>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-action-600 mb-4">
          <span className="underline decoration-dotted underline-offset-2">
            C-Suite &amp; Executive Leadership
          </span>
          <ExternalLink className="w-3 h-3" />
          <span className="text-ink-500">at</span>
          <span className="underline decoration-dotted underline-offset-2">OpenAI (openai.com)</span>
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 text-[12px] text-ink-700">
              <span>Find more contacts by</span>
              <div className="bg-white border border-ink-100 rounded-md px-2 py-0.5">Job Title</div>
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white border border-ink-100 rounded-md px-2 py-1">
              <Search className="w-3 h-3 text-ink-300" />
              <span className="text-[12px] text-ink-700">Chief Product Officer</span>
              <button className="ml-auto bg-action-500 text-white text-[11px] rounded px-2.5 py-1 font-medium">
                Search
              </button>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-ink-500">
              <span>Sequence template</span>
              <div className="bg-white border border-ink-100 rounded-md px-2 py-0.5 text-ink-900">
                Adaptive Prospecting — Casual
              </div>
              <div className="bg-white border border-ink-100 rounded-md p-1">
                <Settings className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="text-[12px] text-ink-700">
              <span className="inline-block w-3 h-0.5 bg-ink-500 align-middle mr-1" /> 3 selected
            </div>
            <button className="inline-flex items-center gap-1.5 bg-action-500 text-white text-[12px] font-medium rounded px-2.5 py-1.5">
              <Sparkles className="w-3 h-3" />
              Draft and review sequences
            </button>
            <button className="inline-flex items-center gap-1.5 text-ink-500 text-[12px]">
              <ListPlus className="w-3 h-3" /> Add to list
            </button>
            <button className="inline-flex items-center gap-1.5 text-ink-500 text-[12px]">
              <EyeOff className="w-3 h-3" /> Hide selected
            </button>
          </div>

          <div className="bg-white rounded-lg border border-ink-100 overflow-hidden">
            <div className="grid grid-cols-[24px_52px_120px_1fr_90px_100px] items-center gap-3 px-3 py-2 text-[11px] text-ink-500 font-medium border-b border-ink-100">
              <span />
              <span>Score</span>
              <span>Name</span>
              <span>Title</span>
              <span>Company</span>
              <span>Found</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[24px_52px_120px_1fr_90px_100px] items-center gap-3 px-3 py-2.5 border-b border-ink-100 last:border-b-0 text-[12px] text-ink-700"
              >
                <span>
                  <span className={`block w-3 h-3 rounded-sm border ${r.selected ? "bg-ink-900 border-ink-900" : "border-ink-300"}`} />
                </span>
                <span className="inline-flex items-center justify-center bg-signal-500/15 text-signal-600 rounded px-1.5 py-0.5 font-semibold text-[11px] w-fit">
                  {r.score}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-action-500/10 text-ink-900 rounded px-1.5 py-0.5 font-medium">
                  <User className="w-3 h-3 text-ink-500" />
                  <span className="truncate">{r.first} {r.last}</span>
                </span>
                <span className="text-ink-700 truncate">{r.title}</span>
                <span>{r.company}</span>
                <span className="text-ink-500">{r.found}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
