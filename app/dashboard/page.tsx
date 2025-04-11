"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import SolarDashboard from "@/components/dashboards/solar-dashboard"
import InsuranceDashboard from "@/components/dashboards/insurance-dashboard"
import HealthcareDashboard from "@/components/dashboards/healthcare-dashboard"
import RealEstateDashboard from "@/components/dashboards/real-estate-dashboard"
import { Loader2 } from "lucide-react"

export default function DashboardPage() {
  const { user, organization, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [isLoading, user, router])

  // Show loading state
  if (isLoading || !user || !organization) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  // Render the appropriate dashboard based on organization type
  switch (organization.type) {
    case "solar":
      return <SolarDashboard />
    case "insurance":
      return <InsuranceDashboard />
    case "healthcare":
      return <HealthcareDashboard />
    case "realestate":
      return <RealEstateDashboard />
    default:
      // Fallback to a generic dashboard
      return <SolarDashboard />
  }
}
