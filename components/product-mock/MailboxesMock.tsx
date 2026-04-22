"use client"

import { Mail, Plus, MoreHorizontal } from "lucide-react"
import { ProductFrame } from "./ProductFrame"

type Mailbox = {
  email: string
  status: "Active"
  added: string
}

const mailboxes: Mailbox[] = [
  { email: "david@get-quinton.ai",         status: "Active", added: "4mo ago" },
  { email: "dp@get-quinton.ai",            status: "Active", added: "4mo ago" },
  { email: "davidphillips@get-quinton.ai", status: "Active", added: "4mo ago" },
  { email: "david@try-quinton.ai",         status: "Active", added: "4mo ago" },
  { email: "dp@try-quinton.ai",            status: "Active", added: "4mo ago" },
  { email: "david@go-quinton.ai",          status: "Active", added: "4mo ago" },
  { email: "dp@go-quinton.ai",             status: "Active", added: "4mo ago" },
  { email: "david@use-quinton.ai",         status: "Active", added: "3mo ago" },
  { email: "david@my-quinton.ai",          status: "Active", added: "3mo ago" },
  { email: "david@join-quinton.ai",        status: "Active", added: "2mo ago" },
]

export function MailboxesMock({
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
      activeNav="Mailboxes"
      onNavClick={onNavClick}
      clickableNavs={clickableNavs}
      className={className}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-ink-500" />
            <span className="text-[15px] font-semibold text-ink-900">Mailboxes</span>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-action-500 text-white text-[11px] font-medium rounded-md px-2.5 py-1.5">
            <Plus className="w-3 h-3" /> Add mailbox
          </button>
        </div>
        <div className="text-[12px] text-ink-500 mb-4">22 mailboxes · 22 warming</div>

        <div className="rounded-xl bg-cream-100 border border-ink-100 p-3">
          <div className="bg-white rounded-lg border border-ink-100 overflow-hidden">
            <div className="grid grid-cols-[1fr_90px_90px_32px] items-center gap-3 px-3 py-2 text-[11px] text-ink-500 font-medium border-b border-ink-100">
              <span>Email</span>
              <span>Status</span>
              <span>Added</span>
              <span />
            </div>
            {mailboxes.map((m, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_90px_90px_32px] items-center gap-3 px-3 py-2.5 border-b border-ink-100 last:border-b-0 text-[12px] text-ink-700"
              >
                <span className="inline-flex items-center gap-2 min-w-0">
                  <span className="w-5 h-5 rounded bg-cream-100 border border-ink-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-2.5 h-2.5 text-ink-500" />
                  </span>
                  <span className="truncate">{m.email}</span>
                </span>
                <span>
                  <span className="inline-flex items-center gap-1 bg-signal-500/15 text-signal-600 rounded px-1.5 py-0.5 font-medium text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-500" />
                    {m.status}
                  </span>
                </span>
                <span className="text-ink-500">{m.added}</span>
                <span className="text-ink-300">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-ink-500">
            <span>Showing 10 of 22</span>
            <span>Avg reputation <span className="text-signal-600 font-semibold">98%</span></span>
          </div>
        </div>
      </div>
    </ProductFrame>
  )
}
