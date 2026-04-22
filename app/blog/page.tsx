'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BlogRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push('/university/blog')
  }, [router])

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-ink-900 mb-2">Redirecting to Blog...</h1>
        <p className="text-ink-500">You&rsquo;ll be redirected to our blog in a moment.</p>
      </div>
    </div>
  )
}
