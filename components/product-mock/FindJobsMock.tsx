"use client"

import { Search, Sparkles, RotateCw, X, ChevronDown } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

const recentSearches = [
  "software engineer",
  "Data Scientist, Law Firm, NY, NJ, CT",
  "Data Scientist",
  "Data Governance",
  "Data Architecture — NY",
]

export function FindJobsMock({
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
      <div className="p-6 min-h-full flex flex-col">
        <div className="flex justify-end mb-8">
          <button className="inline-flex items-center gap-1.5 bg-action-500 text-white text-[11px] font-medium rounded-md px-2.5 py-1.5">
            <Sparkles className="w-3 h-3" /> Try AI Search (beta)
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h3 className="text-center text-ink-900 text-xl font-semibold mb-4 tracking-tight">
              Find Job Listings
            </h3>

            <div className="flex items-center gap-1.5 mb-2 justify-center">
              {["30 Days", "Location", "Keyword", "Decisionmaker"].map((f) => (
                <div
                  key={f}
                  className="inline-flex items-center gap-1 bg-cream-100 text-ink-700 text-[11px] rounded-full px-2 py-0.5 border border-ink-100"
                >
                  {f} <ChevronDown className="w-3 h-3" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-white border border-ink-100 rounded-lg px-3 py-2 shadow-soft">
              <Search className="w-3.5 h-3.5 text-ink-300" />
              <span className="text-[13px] text-ink-900 flex-1">software engineer</span>
              <span className="flex items-center gap-1 text-[10px] text-ink-500">
                Strict <span className="w-6 h-3 rounded-full bg-ink-100 relative"><span className="absolute left-0.5 top-0.5 w-2 h-2 rounded-full bg-white shadow-soft"/></span>
              </span>
              <button className="bg-action-500 text-white text-[11px] rounded px-3 py-1.5 font-medium">
                Search
              </button>
            </div>

            <div className="text-center text-[11px] text-ink-500 mt-6 mb-2">Recent searches</div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {recentSearches.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 bg-action-500/10 text-action-600 text-[11px] rounded-full px-2 py-0.5"
                >
                  <RotateCw className="w-2.5 h-2.5" />
                  <span className="truncate max-w-[160px]">{s}</span>
                  <X className="w-2.5 h-2.5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
