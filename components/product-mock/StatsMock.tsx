"use client"

import { BarChart3, ChevronDown } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

const sentSeries = [140, 180, 210, 260, 300, 340, 380, 420, 470, 510, 560, 620]
const replySeries = [12, 16, 19, 22, 25, 28, 32, 36, 40, 44, 48, 54]
const inboxBars = [
  { label: "david@get-quinton",  count: 18 },
  { label: "dp@get-quinton",     count: 15 },
  { label: "david@try-quinton",  count: 14 },
  { label: "dp@try-quinton",     count: 12 },
  { label: "david@go-quinton",   count: 11 },
  { label: "dp@go-quinton",      count: 9  },
  { label: "david@use-quinton",  count: 8  },
  { label: "david@my-quinton",   count: 6  },
]

function buildPath(series: number[], width: number, height: number, max: number) {
  const step = width / (series.length - 1)
  return series
    .map((v, i) => {
      const x = i * step
      const y = height - (v / max) * height
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
}

export function StatsMock({
  className = "",
  onNavClick,
  clickableNavs,
}: {
  className?: string
  onNavClick?: (label: string) => void
  clickableNavs?: string[]
}) {
  const W = 520
  const H = 120
  const max = Math.max(...sentSeries) * 1.1
  const sentPath = buildPath(sentSeries, W, H, max)
  const replyPath = buildPath(replySeries, W, H, max)
  const maxBar = Math.max(...inboxBars.map((b) => b.count))

  return (
    <ProductFrame
      activeNav="Stats"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-ink-500" />
            <span className="text-[15px] font-semibold text-ink-900">Stats</span>
          </div>
          <div className="flex items-center gap-1.5">
            {["7 Days", "30 Days", "90 Days"].map((d, i) => (
              <div
                key={d}
                className={`text-[11px] rounded-full px-2 py-0.5 border ${
                  i === 2
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-ink-700 border-ink-100"
                }`}
              >
                {d}
              </div>
            ))}
            <div className="inline-flex items-center gap-1 bg-white border border-ink-100 text-ink-700 text-[11px] rounded-full px-2 py-0.5">
              Custom <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg bg-white border border-ink-100 p-3">
            <div className="text-[11px] text-ink-500">Total Emails Sent</div>
            <div className="text-[20px] font-semibold text-ink-900 tracking-tight">4,812</div>
            <div className="text-[11px] text-signal-600">+18% vs. prev</div>
          </div>
          <div className="rounded-lg bg-white border border-ink-100 p-3">
            <div className="text-[11px] text-ink-500">Total Replies</div>
            <div className="text-[20px] font-semibold text-ink-900 tracking-tight">386</div>
            <div className="text-[11px] text-signal-600">+24% vs. prev</div>
          </div>
          <div className="rounded-lg bg-white border border-ink-100 p-3">
            <div className="text-[11px] text-ink-500">Reply Rate</div>
            <div className="text-[20px] font-semibold text-ink-900 tracking-tight">8.0%</div>
            <div className="text-[11px] text-signal-600">+1.2 pts</div>
          </div>
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-semibold text-ink-900">Emails Sent Over Time</div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1 text-ink-700">
                <span className="w-2 h-2 rounded-full bg-action-500" /> Sent
              </span>
              <span className="inline-flex items-center gap-1 text-ink-700">
                <span className="w-2 h-2 rounded-full bg-signal-500" /> Replies
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-ink-100 p-3">
            <svg viewBox={`0 0 ${W} ${H + 8}`} className="w-full h-28">
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                <line
                  key={i}
                  x1={0}
                  x2={W}
                  y1={H * t}
                  y2={H * t}
                  stroke="#E7E2D9"
                  strokeWidth={1}
                />
              ))}
              <path d={sentPath} fill="none" stroke="#3B82F6" strokeWidth={2} />
              <path d={replyPath} fill="none" stroke="#22C55E" strokeWidth={2} />
            </svg>
          </div>
        </div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="text-[12px] font-semibold text-ink-900 mb-2">
            Current Active Sequences by Inbox
          </div>
          <div className="bg-white rounded-lg border border-ink-100 p-3 space-y-1.5">
            {inboxBars.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-[11px]">
                <span className="text-ink-700 w-32 truncate">{b.label}</span>
                <div className="flex-1 h-2 bg-cream-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-action-500 rounded-full"
                    style={{ width: `${(b.count / maxBar) * 100}%` }}
                  />
                </div>
                <span className="text-ink-500 w-6 text-right">{b.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
