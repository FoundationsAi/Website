"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { User, AuthState } from "@/lib/auth-types"

// Mock database of users and organizations
// In a real app, this would be in a database
const MOCK_USERS = [
  {
    id: "user-1",
    name: "Solar Admin",
    email: "demo@foundationsai.net",
    password: "solarpower123", // In a real app, this would be hashed
    organizationId: "org-1",
    role: "admin" as const,
  },
  {
    id: "user-2",
    name: "Insurance Admin",
    email: "demo@insuranceco.com",
    password: "insurance123",
    organizationId: "org-2",
    role: "admin" as const,
  },
  {
    id: "user-3",
    name: "Healthcare Admin",
    email: "demo@healthcare.com",
    password: "healthcare123",
    organizationId: "org-3",
    role: "admin" as const,
  },
  {
    id: "user-4",
    name: "Real Estate Admin",
    email: "demo@realestate.com",
    password: "realestate123",
    organizationId: "org-4",
    role: "admin" as const,
  },
]

const MOCK_ORGANIZATIONS = [
  {
    id: "org-1",
    name: "Solar City",
    type: "solar" as const,
    email: "admin@solarcity.com",
    plan: "professional" as const,
  },
  {
    id: "org-2",
    name: "Insurance Co",
    type: "insurance" as const,
    email: "admin@insuranceco.com",
    plan: "enterprise" as const,
  },
  {
    id: "org-3",
    name: "Healthcare Provider",
    type: "healthcare" as const,
    email: "admin@healthcare.com",
    plan: "enterprise" as const,
  },
  {
    id: "org-4",
    name: "Real Estate Group",
    type: "realestate" as const,
    email: "admin@realestate.com",
    plan: "professional" as const,
  },
]

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    organization: null,
    isLoading: true,
    error: null,
  })
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would be a fetch to your auth API
        const storedUser = localStorage.getItem("foundationsai_user")
        const storedOrg = localStorage.getItem("foundationsai_organization")

        if (storedUser && storedOrg) {
          setAuthState({
            user: JSON.parse(storedUser),
            organization: JSON.parse(storedOrg),
            isLoading: false,
            error: null,
          })
        } else {
          setAuthState({
            user: null,
            organization: null,
            isLoading: false,
            error: null,
          })
        }
      } catch (error) {
        setAuthState({
          user: null,
          organization: null,
          isLoading: false,
          error: "Failed to restore session",
        })
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find user with matching credentials
      const user = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

      if (!user) {
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Invalid email or password",
        }))
        return false
      }

      // Find the organization for this user
      const organization = MOCK_ORGANIZATIONS.find((o) => o.id === user.organizationId)

      if (!organization) {
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Organization not found",
        }))
        return false
      }

      // Create the user object without the password
      const { password: _, ...safeUser } = user

      // Store in state
      setAuthState({
        user: safeUser as User,
        organization,
        isLoading: false,
        error: null,
      })

      // Store in localStorage (in a real app, you'd use secure HTTP-only cookies)
      localStorage.setItem("foundationsai_user", JSON.stringify(safeUser))
      localStorage.setItem("foundationsai_organization", JSON.stringify(organization))

      return true
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: "An error occurred during login",
      }))
      return false
    }
  }

  const logout = () => {
    // Clear state
    setAuthState({
      user: null,
      organization: null,
      isLoading: false,
      error: null,
    })

    // Clear storage
    localStorage.removeItem("foundationsai_user")
    localStorage.removeItem("foundationsai_organization")

    // Redirect to login
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
