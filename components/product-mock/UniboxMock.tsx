"use client"

import { CornerUpLeft, Search } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Contact = {
  name: string
  title: string
  location?: string
  dot: "signal" | "action"
  active?: boolean
}

const contacts: Contact[] = [
  { name: "Morgan Avila",    title: "Co-Founder at Lumenly (YC W25)",                 location: "New York, NY",       dot: "signal", active: true },
  { name: "Priya Bhattal",   title: "Founding Design Engineer at Cascara",            location: "United States",     dot: "action" },
  { name: "Nolan Ferris",    title: "Vice President of Technology at Northwind",                                       dot: "signal" },
  { name: "Theo Kastell",    title: "Co-Founder & CEO at Spira (YC F25)",             location: "San Francisco, CA",  dot: "signal" },
  { name: "Rhea Tomasson",   title: "Co-Founder & COO at Bellweather",                location: "New York, NY",       dot: "signal" },
  { name: "Henry Oduya",     title: "Head of Finance & Business Ops at Relay Labs",   location: "San Francisco, CA",  dot: "action" },
  { name: "Juno Park",       title: "Product Manager at Fernleaf",                    location: "United States",     dot: "signal" },
]

const statusTabs = [
  "All",
  "Needs your response",
  "Interested",
  "Agent queue",
  "Email scheduled",
  "Emailed recently",
] as const

export function UniboxMock({
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
      activeNav="Unibox"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-5 pt-4 pb-3 border-b border-ink-100">
          <div className="text-ink-900 font-semibold text-[15px] mb-3">Unibox</div>

          <div className="flex items-start gap-5 flex-wrap">
            <div>
              <div className="text-[10px] text-ink-500 mb-1">Search by name, company, or title</div>
              <div className="flex items-center gap-1.5 bg-white border border-ink-100 rounded-md px-2 py-1 w-52">
                <Search className="w-3 h-3 text-ink-300" />
                <span className="text-[12px] text-ink-300">Search…</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] text-ink-500 mb-1">Contact type</div>
              <div className="flex items-center gap-0.5 bg-cream-100 border border-ink-100 rounded-md p-0.5 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-white shadow-soft font-medium text-ink-900">All</span>
                <span className="px-2 py-0.5 text-ink-500">Prospects</span>
                <span className="px-2 py-0.5 text-ink-500">Candidates</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-ink-500 mb-1">Conversation Status</div>
              <div className="flex items-center gap-0.5 bg-cream-100 border border-ink-100 rounded-md p-0.5 text-[11px] overflow-hidden">
                {statusTabs.map((s) => (
                  <span
                    key={s}
                    className={`px-2 py-0.5 rounded whitespace-nowrap ${
                      s === "Needs your response"
                        ? "bg-white shadow-soft font-medium text-ink-900"
                        : "text-ink-500"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-column list + thread */}
        <div className="grid grid-cols-[220px_1fr] flex-1">
          {/* Contact list */}
          <div className="border-r border-ink-100 overflow-hidden">
            <div className="p-2 space-y-1.5">
              {contacts.map((c) => (
                <div
                  key={c.name}
                  className={`rounded-md p-2 ${
                    c.active ? "bg-cream-100 border border-ink-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        c.dot === "signal" ? "bg-signal-500" : "bg-action-500"
                      }`}
                    />
                    <span className="text-[12px] font-semibold text-ink-900 truncate">
                      {c.name}
                    </span>
                  </div>
                  <div className="text-[10px] text-ink-500 leading-snug line-clamp-2 pl-3.5">
                    {c.title}
                  </div>
                  {c.location && (
                    <div className="text-[10px] text-ink-300 pl-3.5">{c.location}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Thread */}
          <div className="p-4 space-y-2.5 overflow-hidden">
            <div className="bg-cream-50 rounded-lg p-3 border border-ink-100">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[11px] font-semibold text-ink-900">Me</div>
                <div className="text-[10px] text-ink-300">5 months ago</div>
              </div>
              <div className="text-[12px] text-ink-700 leading-relaxed">
                We have plenty of engineers engaged and would be happy to share some
                profiles. Are you using external recruiters?
                <div className="mt-1 text-ink-500">Best, David · Quinton</div>
              </div>
            </div>

            <div className="bg-cream-50 rounded-lg p-3 border border-ink-100">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[11px] font-semibold text-ink-900">Me</div>
                <div className="text-[10px] text-ink-300">4 months ago</div>
              </div>
              <div className="text-[12px] text-ink-700 leading-relaxed">
                Hi Morgan, one final note about potentially supporting your Founding
                Engineer search. If the timing isn&rsquo;t right, I completely understand.
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-ink-100 shadow-soft">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[11px] font-semibold text-ink-900">Morgan Avila</div>
                <div className="flex items-center gap-2">
                  <div className="text-[10px] text-ink-300">3 months ago</div>
                  <button className="inline-flex items-center gap-1 bg-action-500 text-white text-[10px] rounded px-2 py-0.5 font-medium">
                    <CornerUpLeft className="w-3 h-3" />
                    Forward to me
                  </button>
                </div>
              </div>
              <div className="text-[12px] text-ink-700 leading-relaxed">
                Hi David, thanks for the follow up. I would love to chat — we&rsquo;re
                trying to move as fast as possible with hiring. How does tomorrow look?
                <div className="mt-1.5 text-action-600">calendly.com/morgan-lumenly/intro</div>
                <div className="mt-1 text-ink-500">Best, Morgan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
