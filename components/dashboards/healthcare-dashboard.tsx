"use client"

import { useAuth } from "@/contexts/auth-context"

export default function HealthcareDashboard() {
  const { user, organization } = useAuth()

  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Healthcare Dashboard</h1>
        <p className="mb-2">Welcome, {user?.name}!</p>
        <p className="text-muted-foreground">Organization: {organization?.name}</p>
        <p className="mt-8 text-sm text-muted-foreground">This dashboard is under development.</p>
      </div>
    </div>
  )
}
