"use client"

import { ReactNode } from "react"
import {
  Megaphone,
  Search,
  Inbox,
  Wrench,
  Users,
  Layers,
  BarChart3,
  Mail,
  UserPlus,
  Puzzle,
  PlayCircle,
  LifeBuoy,
  Flame,
} from "lucide-react"
import { QuintonMark } from "./QuintonMark"

type NavItem = {
  label: string
  icon: typeof Megaphone
  active?: boolean
}

const nav: NavItem[] = [
  { label: "Get Clients", icon: Megaphone },
  { label: "Find Candidates", icon: Search },
  { label: "Unibox", icon: Inbox },
  { label: "Job Listings", icon: Wrench },
  { label: "Contacts", icon: Users },
  { label: "Sequence Templates", icon: Layers },
  { label: "Stats", icon: BarChart3 },
  { label: "Mailboxes", icon: Mail },
]

const secondary: NavItem[] = [
  { label: "Invite Teammate", icon: UserPlus },
  { label: "Browser Extension", icon: Puzzle },
  { label: "Tutorials", icon: PlayCircle },
  { label: "Support", icon: LifeBuoy },
]

export function ProductFrame({
  children,
  activeNav = "Get Clients",
  onNavClick,
  clickableNavs,
  user = { name: "David Phillips", email: "david@quinton.ai" },
  className = "",
}: {
  children: ReactNode
  activeNav?: string
  onNavClick?: (label: string) => void
  clickableNavs?: string[]
  user?: { name: string; email: string }
  className?: string
}) {
  return (
    <div
      className={`relative rounded-2xl bg-white border border-ink-100 shadow-lift overflow-hidden ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-ink-100 bg-cream-50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-[11px] text-ink-300 bg-white border border-ink-100 rounded-full px-3 py-1 font-mono">
            app.quinton.ai
          </div>
        </div>
      </div>

      {/* App body */}
      <div className="grid grid-cols-[220px_1fr] min-h-[520px]">
        {/* Sidebar */}
        <aside className="bg-cream-50 border-r border-ink-100 flex flex-col p-3">
          <div className="flex items-center gap-1.5 px-2 py-2">
            <QuintonMark className="w-4 h-4" />
            <span className="text-gradient-ember font-semibold text-[15px] tracking-tight">
              Quinton
            </span>
          </div>
          <nav className="mt-2 space-y-0.5">
            {nav.map((item) => {
              const Icon = item.icon
              const isActive = item.label === activeNav
              const isClickable =
                !!onNavClick && (!clickableNavs || clickableNavs.includes(item.label))
              const baseClass = `w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] transition-colors ${
                isActive
                  ? "bg-ink-100/70 text-ink-900 font-medium"
                  : isClickable
                  ? "text-ink-500 hover:bg-ink-100/60 hover:text-ink-900 cursor-pointer"
                  : "text-ink-500 hover:bg-ink-100/40"
              }`
              if (isClickable) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavClick!(item.label)}
                    className={baseClass}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="truncate">{item.label}</span>
                  </button>
                )
              }
              return (
                <div key={item.label} className={baseClass}>
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{item.label}</span>
                </div>
              )
            })}
          </nav>

          <div className="mt-auto space-y-0.5 pt-4">
            {secondary.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] text-ink-500"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{item.label}</span>
                </div>
              )
            })}

            <div className="mt-3 rounded-lg border border-signal-500/30 bg-signal-500/5 p-2.5">
              <div className="text-[11px] text-ink-500">Your email game:</div>
              <div className="flex items-center gap-1 text-ink-900 font-semibold text-[13px]">
                On fire! <Flame className="w-3.5 h-3.5 text-ember-500" />
              </div>
              <div className="mt-1.5 h-1 bg-ink-100 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-signal-500" />
              </div>
              <div className="text-[10px] text-ink-300 mt-1">Next goal is 100</div>
            </div>

            <div className="mt-3 flex items-center gap-2 px-1 pb-1">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-ember-500 to-ember-700 flex items-center justify-center text-white text-[11px] font-semibold">
                {user.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-medium text-ink-900 truncate">
                  {user.name}
                </div>
                <div className="text-[10px] text-ink-300 truncate">{user.email}</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="bg-white overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
