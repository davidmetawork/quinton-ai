"use client"

import { Copy, Layers, Pencil, Plus, Search, Trash2 } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Template = {
  name: string
  messages: number
  tab: "Prospecting" | "Candidate"
}

const templates: Template[] = [
  { name: "Staff Software Engineer — General Outreach",   messages: 3, tab: "Prospecting" },
  { name: "Ava Chen — Senior Product Designer MPC",        messages: 4, tab: "Prospecting" },
  { name: "Head of Data — New York, NY",                   messages: 4, tab: "Prospecting" },
  { name: "VP of Engineering — San Francisco, CA",         messages: 4, tab: "Prospecting" },
  { name: "Founding Backend Engineer — Austin, TX",         messages: 4, tab: "Prospecting" },
  { name: "Director of Marketing — Remote, US",            messages: 5, tab: "Prospecting" },
]

export function SequenceTemplatesMock({
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
      activeNav="Sequence Templates"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-ink-500" />
            <span className="text-[15px] font-semibold text-ink-900">Sequence Templates</span>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-action-500 text-white text-[11px] font-medium rounded-md px-2.5 py-1.5">
            <Plus className="w-3 h-3" /> New Sequence Template
          </button>
        </div>

        <div className="flex items-center gap-0.5 bg-cream-100 border border-ink-100 rounded-md p-0.5 text-[11px] w-fit mb-3">
          <span className="px-2 py-0.5 text-ink-500">All</span>
          <span className="px-2 py-0.5 rounded bg-white shadow-soft font-medium text-ink-900">
            Prospecting Templates
          </span>
          <span className="px-2 py-0.5 text-ink-500">Candidate Templates</span>
        </div>

        <div className="flex items-center gap-2 bg-white border border-ink-100 rounded-md px-2.5 py-1.5 shadow-soft mb-3 max-w-sm">
          <Search className="w-3 h-3 text-ink-300" />
          <span className="text-[12px] text-ink-300">Search templates..</span>
        </div>

        <div className="space-y-2">
          {templates.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-ink-100 p-3 flex items-center justify-between"
            >
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-ink-900 truncate">{t.name}</div>
                <div className="text-[11px] text-ink-500">{t.messages} messages</div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button className="inline-flex items-center gap-1 bg-action-500/10 text-action-600 text-[11px] rounded-md px-2 py-1 font-medium">
                  <Pencil className="w-3 h-3" /> Edit
                </button>
                <button className="inline-flex items-center gap-1 bg-cream-100 text-ink-700 text-[11px] rounded-md px-2 py-1 font-medium">
                  <Copy className="w-3 h-3" /> Duplicate
                </button>
                <button className="inline-flex items-center gap-1 bg-ember-500/10 text-ember-600 text-[11px] rounded-md px-2 py-1 font-medium">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  )
}
