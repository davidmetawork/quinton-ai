"use client"

import { Search, Users, ChevronDown, ExternalLink } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Row = {
  first: string
  last: string
  title: string
  location: string
  company: string
  lastEmailed: string
}

const rows: Row[] = [
  { first: "Priya",   last: "Ramaswamy",  title: "VP of Engineering",          location: "San Francisco, CA", company: "Stripe",      lastEmailed: "2 days ago" },
  { first: "Marcus",  last: "Chen",       title: "Head of Product",            location: "New York, NY",      company: "Notion",      lastEmailed: "3 days ago" },
  { first: "Elena",   last: "Rodriguez",  title: "Director of Data Science",   location: "Seattle, WA",       company: "Airbnb",      lastEmailed: "5 days ago" },
  { first: "Tobias",  last: "Becker",     title: "Staff Software Engineer",    location: "Austin, TX",        company: "Shopify",     lastEmailed: "1 week ago" },
  { first: "Amara",   last: "Okafor",     title: "Senior Product Designer",    location: "Brooklyn, NY",      company: "Figma",       lastEmailed: "1 week ago" },
  { first: "Jaxon",   last: "Whitaker",   title: "Engineering Manager",        location: "Remote — US",       company: "Linear",      lastEmailed: "2 weeks ago" },
  { first: "Sofia",   last: "Delacroix",  title: "Director of Growth",         location: "San Francisco, CA", company: "Ramp",        lastEmailed: "2 weeks ago" },
  { first: "Kenji",   last: "Matsuda",    title: "Principal Engineer",         location: "San Francisco, CA", company: "Databricks",  lastEmailed: "3 weeks ago" },
]

export function AllContactsMock({
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
      activeNav="Contacts"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-ink-500" />
          <span className="text-[15px] font-semibold text-ink-900">All Contacts</span>
          <span className="text-[12px] text-ink-500">· 1,248</span>
        </div>

        <div className="flex items-center gap-2 bg-white border border-ink-100 rounded-lg px-3 py-2 shadow-soft mb-3">
          <Search className="w-3.5 h-3.5 text-ink-300" />
          <span className="text-[13px] text-ink-900 flex-1">Engineering leadership</span>
          <button className="bg-action-500 text-white text-[11px] rounded px-3 py-1 font-medium">
            Search
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="text-ink-500">Contact type:</span>
            {["All", "Prospects", "Candidates"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-2 py-0.5 border ${
                  i === 0
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-ink-700 border-ink-100"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-ink-500">Interaction:</span>
            {["All", "Enriched", "Replied"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-2 py-0.5 border ${
                  i === 0
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-ink-700 border-ink-100"
                }`}
              >
                {f}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 bg-white border border-ink-100 text-ink-700 rounded-full px-2 py-0.5">
              More <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="bg-white rounded-lg border border-ink-100 overflow-hidden">
            <div className="grid grid-cols-[140px_1fr_120px_100px_90px_40px] items-center gap-3 px-3 py-2 text-[11px] text-ink-500 font-medium border-b border-ink-100">
              <span>Name</span>
              <span>Title</span>
              <span>Location</span>
              <span>Company</span>
              <span>Last Emailed</span>
              <span>In</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[140px_1fr_120px_100px_90px_40px] items-center gap-3 px-3 py-2.5 border-b border-ink-100 last:border-b-0 text-[12px] text-ink-700"
              >
                <span className="inline-flex items-center gap-1.5 bg-action-500/10 text-ink-900 rounded px-1.5 py-0.5 font-medium w-fit">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-white text-[9px] font-semibold">
                    {r.first.charAt(0)}
                  </span>
                  <span className="truncate">{r.first} {r.last}</span>
                </span>
                <span className="text-ink-700 truncate">{r.title}</span>
                <span className="text-ink-500 truncate">{r.location}</span>
                <span>{r.company}</span>
                <span className="text-ink-500">{r.lastEmailed}</span>
                <span className="text-action-600">
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-ink-500 text-center">
            Showing 8 of 642 matching "Engineering leadership"
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
