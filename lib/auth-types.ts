// Types for our authentication system
export type UserRole = "admin" | "manager" | "agent" | "viewer"

export type OrganizationType = "solar" | "insurance" | "healthcare" | "realestate" | "education" | "retail"

export interface Organization {
  id: string
  name: string
  type: OrganizationType
  logo?: string
  email: string
  plan: "starter" | "professional" | "enterprise"
}

export interface User {
  id: string
  name: string
  email: string
  organizationId: string
  role: UserRole
  avatar?: string
}

export interface AuthState {
  user: User | null
  organization: Organization | null
  isLoading: boolean
  error: string | null
}
