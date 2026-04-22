"use client"

import { Search, Sparkles, Settings, Linkedin, ArrowLeft, User } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Row = {
  first: string
  last: string
  title: string
  location: string
  company: string
  found: string
  selected?: boolean
}

const rows: Row[] = [
  { first: "Ava",      last: "Nakamura",   title: "VP of Marketing",               location: "San Francisco, CA", company: "OpenAI", found: "2 days ago", selected: true },
  { first: "Julian",   last: "Okonkwo",    title: "Head of Product Marketing",     location: "San Francisco, CA", company: "OpenAI", found: "2 days ago", selected: true },
  { first: "Zara",     last: "Hoffmann",   title: "Director of Brand Marketing",   location: "San Francisco, CA", company: "OpenAI", found: "2 days ago", selected: true },
  { first: "Diego",    last: "Valenzuela", title: "Head of Growth Marketing",      location: "San Francisco, CA", company: "OpenAI", found: "2 days ago" },
  { first: "Mira",     last: "Sundqvist",  title: "Senior Content Marketing Lead", location: "San Francisco, CA", company: "OpenAI", found: "2 days ago" },
  { first: "Caleb",    last: "Winters",    title: "Developer Marketing Manager",   location: "San Francisco, CA", company: "OpenAI", found: "3 days ago" },
]

export function FindCandidatesMock({
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
      activeNav="Find Candidates"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 text-ink-900 font-semibold mb-1">
          <ArrowLeft className="w-3.5 h-3.5 text-ink-500" />
          <span className="text-[15px]">Contacts</span>
        </div>
        <div className="text-[12px] text-ink-500 mb-4">
          For <span className="text-action-600 underline decoration-dotted underline-offset-2">Marketing</span> at <span className="text-action-600 underline decoration-dotted underline-offset-2">OpenAI</span> · San Francisco, CA
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 text-[12px] text-ink-700">
              <span>Find more candidates by</span>
              <div className="bg-white border border-ink-100 rounded-md px-2 py-0.5">Job Title</div>
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white border border-ink-100 rounded-md px-2 py-1">
              <Search className="w-3 h-3 text-ink-300" />
              <span className="text-[12px] text-ink-700">Marketing</span>
              <button className="ml-auto bg-action-500 text-white text-[11px] rounded px-2.5 py-1 font-medium">
                Search
              </button>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-ink-500">
              <span>Sequence</span>
              <div className="bg-white border border-ink-100 rounded-md px-2 py-0.5 text-ink-900">
                Adaptive Candidate Email
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
              Draft candidate outreach
            </button>
          </div>

          <div className="bg-white rounded-lg border border-ink-100 overflow-hidden">
            <div className="grid grid-cols-[24px_140px_1fr_110px_90px_80px_32px] items-center gap-3 px-3 py-2 text-[11px] text-ink-500 font-medium border-b border-ink-100">
              <span />
              <span>Name</span>
              <span>Title</span>
              <span>Location</span>
              <span>Company</span>
              <span>Found</span>
              <span>In</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[24px_140px_1fr_110px_90px_80px_32px] items-center gap-3 px-3 py-2.5 border-b border-ink-100 last:border-b-0 text-[12px] text-ink-700"
              >
                <span>
                  <span className={`block w-3 h-3 rounded-sm border ${r.selected ? "bg-ink-900 border-ink-900" : "border-ink-300"}`} />
                </span>
                <span className="inline-flex items-center gap-1.5 bg-action-500/10 text-ink-900 rounded px-1.5 py-0.5 font-medium">
                  <User className="w-3 h-3 text-ink-500" />
                  <span className="truncate">{r.first} {r.last}</span>
                </span>
                <span className="text-ink-700 truncate">{r.title}</span>
                <span className="text-ink-500 truncate">{r.location}</span>
                <span>{r.company}</span>
                <span className="text-ink-500">{r.found}</span>
                <span className="text-action-600">
                  <Linkedin className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
