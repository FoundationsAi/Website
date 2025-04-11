"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import SolarProjectsClient from "@/components/solar-projects/solar-projects-client"
import { Loader2 } from "lucide-react"

export default function SolarProjectsPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [isLoading, user, router])

  // Show loading state
  if (isLoading || !user) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading solar projects...</p>
        </div>
      </div>
    )
  }

  // Render the solar projects client component
  return <SolarProjectsClient />
}
