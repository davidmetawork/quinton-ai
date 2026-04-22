"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AllContactsMock } from "./AllContactsMock"
import { ContactsMock } from "./ContactsMock"
import { FindCandidatesMock } from "./FindCandidatesMock"
import { JobListingsMock } from "./JobListingsMock"
import { MailboxesMock } from "./MailboxesMock"
import { SequenceTemplatesMock } from "./SequenceTemplatesMock"
import { StatsMock } from "./StatsMock"
import { UniboxMock } from "./UniboxMock"

type View =
  | "Get Clients"
  | "Find Candidates"
  | "Unibox"
  | "Job Listings"
  | "Contacts"
  | "Sequence Templates"
  | "Stats"
  | "Mailboxes"

const clickableNavs: View[] = [
  "Get Clients",
  "Find Candidates",
  "Unibox",
  "Job Listings",
  "Contacts",
  "Sequence Templates",
  "Stats",
  "Mailboxes",
]

export function InteractiveHeroMock({ className = "" }: { className?: string }) {
  const [view, setView] = useState<View>("Get Clients")

  const handleNav = (label: string) => {
    if ((clickableNavs as string[]).includes(label)) setView(label as View)
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        key={view}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
          {view === "Get Clients" && (
            <ContactsMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Find Candidates" && (
            <FindCandidatesMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Unibox" && (
            <UniboxMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Job Listings" && (
            <JobListingsMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Contacts" && (
            <AllContactsMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Sequence Templates" && (
            <SequenceTemplatesMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Stats" && (
            <StatsMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
          {view === "Mailboxes" && (
            <MailboxesMock onNavClick={handleNav} clickableNavs={clickableNavs} />
          )}
      </motion.div>
    </div>
  )
}
