"use client"

import { Search, Wrench, ExternalLink } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Row = {
  title: string
  company: string
  location: string
  posted: string
  found: string
  status: "New" | "Viewed" | "Emailed"
}

const rows: Row[] = [
  { title: "Senior Software Engineer",   company: "Stripe",     location: "New York, NY",       posted: "2d ago", found: "4h ago",  status: "New" },
  { title: "Staff Software Engineer",    company: "Airbnb",     location: "San Francisco, CA",  posted: "3d ago", found: "8h ago",  status: "New" },
  { title: "Software Engineer, Platform", company: "Notion",    location: "Remote — US",        posted: "3d ago", found: "1d ago",  status: "Viewed" },
  { title: "Senior Backend Engineer",    company: "Ramp",       location: "New York, NY",       posted: "4d ago", found: "1d ago",  status: "Emailed" },
  { title: "Software Engineer (L5)",     company: "Figma",      location: "San Francisco, CA",  posted: "5d ago", found: "2d ago",  status: "Emailed" },
  { title: "Full Stack Engineer",        company: "Linear",     location: "Remote — US",        posted: "5d ago", found: "2d ago",  status: "Viewed" },
  { title: "Senior Frontend Engineer",   company: "Vercel",     location: "Remote — US",        posted: "6d ago", found: "3d ago",  status: "Viewed" },
  { title: "Infrastructure Engineer",    company: "Databricks", location: "San Francisco, CA",  posted: "1w ago", found: "3d ago",  status: "Emailed" },
]

const statusStyles: Record<Row["status"], string> = {
  New: "bg-signal-500/15 text-signal-600",
  Viewed: "bg-cream-100 text-ink-500",
  Emailed: "bg-action-500/10 text-action-600",
}

export function JobListingsMock({
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
      activeNav="Job Listings"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-4 h-4 text-ink-500" />
          <span className="text-[15px] font-semibold text-ink-900">All Job Listings</span>
          <span className="text-[12px] text-ink-500">· 426 active</span>
        </div>

        <div className="flex items-center gap-2 bg-white border border-ink-100 rounded-lg px-3 py-2 shadow-soft mb-3">
          <Search className="w-3.5 h-3.5 text-ink-300" />
          <span className="text-[13px] text-ink-900 flex-1">Software engineer</span>
          <button className="bg-action-500 text-white text-[11px] rounded px-3 py-1 font-medium">
            Search
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="text-ink-500">Source:</span>
            {["All", "Chrome extension", "Get clients"].map((f, i) => (
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
            <span className="text-ink-500">Status:</span>
            {["All", "New", "Viewed", "Emailed"].map((f, i) => (
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
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="bg-white rounded-lg border border-ink-100 overflow-hidden">
            <div className="grid grid-cols-[1fr_110px_130px_70px_70px_70px] items-center gap-3 px-3 py-2 text-[11px] text-ink-500 font-medium border-b border-ink-100">
              <span>Title</span>
              <span>Company</span>
              <span>Location</span>
              <span>Posted</span>
              <span>Status</span>
              <span>Listing</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_110px_130px_70px_70px_70px] items-center gap-3 px-3 py-2.5 border-b border-ink-100 last:border-b-0 text-[12px] text-ink-700"
              >
                <span className="truncate font-medium text-ink-900">{r.title}</span>
                <span className="truncate">{r.company}</span>
                <span className="text-ink-500 truncate">{r.location}</span>
                <span className="text-ink-500">{r.posted}</span>
                <span>
                  <span
                    className={`inline-flex items-center rounded px-1.5 py-0.5 font-medium text-[10px] ${statusStyles[r.status]}`}
                  >
                    {r.status}
                  </span>
                </span>
                <span className="text-action-600">
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
