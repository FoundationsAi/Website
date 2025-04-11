"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  Phone,
  Calendar,
  Sun,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  Edit,
  FileText,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"

// Types for our solar projects
interface Client {
  id: string
  name: string
  email: string
  phone: string
  company?: string
}

interface Address {
  street: string
  city: string
  state: string
  zipCode: string
}

interface SystemSpecification {
  panelType: string
  panelCount: number
  inverterType: string
  systemSize: number // in kW
  batteryBackup: boolean
}

interface FinancialInformation {
  estimatedCost: number
  contractValue: number
  downPayment: number
  monthlyPayment?: number
  financingTerm?: number // in months
  financingType?: "cash" | "loan" | "lease" | "ppa"
}

type ProjectStatus = "lead" | "proposal" | "contract" | "permitting" | "installation" | "inspection" | "completed"

interface Attachment {
  id: string
  name: string
  type: "contract" | "site_assessment" | "permit" | "design" | "other"
  url: string
  uploadedAt: string
}

interface SolarProject {
  id: string
  name: string
  client: Client
  status: ProjectStatus
  address: Address
  systemSpec: SystemSpecification
  financial: FinancialInformation
  notes?: string
  attachments?: Attachment[]
  createdAt: string
  updatedAt: string
  estimatedInstallDate?: string
  actualInstallDate?: string
}

// Mock data for solar projects
const MOCK_PROJECTS: SolarProject[] = [
  {
    id: "proj-001",
    name: "Johnson Residence Solar Installation",
    client: {
      id: "client-001",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "(555) 123-4567",
    },
    status: "installation",
    address: {
      street: "123 Sunny Lane",
      city: "Solarville",
      state: "CA",
      zipCode: "90210",
    },
    systemSpec: {
      panelType: "SunPower Maxeon 6",
      panelCount: 24,
      inverterType: "SolarEdge SE10000H",
      systemSize: 8.4,
      batteryBackup: true,
    },
    financial: {
      estimatedCost: 32000,
      contractValue: 30500,
      downPayment: 5000,
      monthlyPayment: 212.5,
      financingTerm: 120,
      financingType: "loan",
    },
    notes: "Client requested battery backup for power outages. Roof has excellent southern exposure.",
    attachments: [
      {
        id: "att-001",
        name: "Site Assessment Report",
        type: "site_assessment",
        url: "#",
        uploadedAt: "2025-03-15T14:30:00Z",
      },
      {
        id: "att-002",
        name: "Signed Contract",
        type: "contract",
        url: "#",
        uploadedAt: "2025-03-20T10:15:00Z",
      },
    ],
    createdAt: "2025-03-10T09:00:00Z",
    updatedAt: "2025-04-05T16:45:00Z",
    estimatedInstallDate: "2025-04-15T09:00:00Z",
  },
  {
    id: "proj-002",
    name: "Williams Family Solar System",
    client: {
      id: "client-002",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      phone: "(555) 234-5678",
      company: "Williams Enterprises",
    },
    status: "permitting",
    address: {
      street: "456 Solar Avenue",
      city: "Greenville",
      state: "CA",
      zipCode: "90211",
    },
    systemSpec: {
      panelType: "LG NeON 2",
      panelCount: 18,
      inverterType: "Enphase IQ8+",
      systemSize: 6.3,
      batteryBackup: false,
    },
    financial: {
      estimatedCost: 24500,
      contractValue: 23000,
      downPayment: 4000,
      financingType: "cash",
    },
    notes: "Client paid in full. Waiting for city permit approval.",
    attachments: [
      {
        id: "att-003",
        name: "Permit Application",
        type: "permit",
        url: "#",
        uploadedAt: "2025-03-25T11:20:00Z",
      },
    ],
    createdAt: "2025-03-18T10:30:00Z",
    updatedAt: "2025-04-02T14:15:00Z",
    estimatedInstallDate: "2025-04-25T09:00:00Z",
  },
  {
    id: "proj-003",
    name: "Thompson Residence Solar + Battery",
    client: {
      id: "client-003",
      name: "David Thompson",
      email: "david.thompson@example.com",
      phone: "(555) 345-6789",
    },
    status: "proposal",
    address: {
      street: "789 Energy Drive",
      city: "Powertown",
      state: "CA",
      zipCode: "90212",
    },
    systemSpec: {
      panelType: "REC Alpha Pure",
      panelCount: 32,
      inverterType: "SMA Sunny Boy",
      systemSize: 11.2,
      batteryBackup: true,
    },
    financial: {
      estimatedCost: 42000,
      contractValue: 40000,
      downPayment: 8000,
      monthlyPayment: 267,
      financingTerm: 120,
      financingType: "loan",
    },
    notes: "Large system with two Tesla Powerwall batteries. Client is considering financing options.",
    createdAt: "2025-03-22T13:45:00Z",
    updatedAt: "2025-03-30T09:20:00Z",
    estimatedInstallDate: "2025-05-10T09:00:00Z",
  },
  {
    id: "proj-004",
    name: "Davis Commercial Solar Project",
    client: {
      id: "client-004",
      name: "Jennifer Davis",
      email: "jennifer.davis@example.com",
      phone: "(555) 456-7890",
      company: "Davis Retail Group",
    },
    status: "contract",
    address: {
      street: "101 Commerce Parkway",
      city: "Businessville",
      state: "CA",
      zipCode: "90213",
    },
    systemSpec: {
      panelType: "Canadian Solar HiKu",
      panelCount: 120,
      inverterType: "Fronius Symo",
      systemSize: 42.0,
      batteryBackup: false,
    },
    financial: {
      estimatedCost: 126000,
      contractValue: 120000,
      downPayment: 30000,
      monthlyPayment: 750,
      financingTerm: 120,
      financingType: "ppa",
    },
    notes: "Large commercial installation for retail complex. PPA agreement with fixed rate for 20 years.",
    attachments: [
      {
        id: "att-004",
        name: "Commercial Site Plan",
        type: "design",
        url: "#",
        uploadedAt: "2025-03-28T15:10:00Z",
      },
      {
        id: "att-005",
        name: "PPA Agreement",
        type: "contract",
        url: "#",
        uploadedAt: "2025-04-01T11:30:00Z",
      },
    ],
    createdAt: "2025-03-25T09:15:00Z",
    updatedAt: "2025-04-05T10:30:00Z",
    estimatedInstallDate: "2025-06-01T09:00:00Z",
  },
  {
    id: "proj-005",
    name: "Wilson Residence Solar Upgrade",
    client: {
      id: "client-005",
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      phone: "(555) 567-8901",
    },
    status: "completed",
    address: {
      street: "222 Sunshine Boulevard",
      city: "Rayville",
      state: "CA",
      zipCode: "90214",
    },
    systemSpec: {
      panelType: "Q CELLS Q.PEAK DUO",
      panelCount: 22,
      inverterType: "SolarEdge SE7600H",
      systemSize: 7.7,
      batteryBackup: false,
    },
    financial: {
      estimatedCost: 28000,
      contractValue: 27500,
      downPayment: 5500,
      monthlyPayment: 183.33,
      financingTerm: 120,
      financingType: "loan",
    },
    notes: "Upgrade from existing 4kW system. Excellent customer, referred two neighbors.",
    attachments: [
      {
        id: "att-006",
        name: "Final Inspection Report",
        type: "other",
        url: "#",
        uploadedAt: "2025-03-15T16:45:00Z",
      },
    ],
    createdAt: "2025-02-10T11:30:00Z",
    updatedAt: "2025-03-20T14:15:00Z",
    estimatedInstallDate: "2025-03-01T09:00:00Z",
    actualInstallDate: "2025-03-05T09:00:00Z",
  },
  {
    id: "proj-006",
    name: "Martinez Family New Construction",
    client: {
      id: "client-006",
      name: "Lisa Martinez",
      email: "lisa.martinez@example.com",
      phone: "(555) 678-9012",
    },
    status: "lead",
    address: {
      street: "333 New Home Court",
      city: "Builderville",
      state: "CA",
      zipCode: "90215",
    },
    systemSpec: {
      panelType: "Panasonic EverVolt",
      panelCount: 28,
      inverterType: "Enphase IQ8M",
      systemSize: 9.8,
      batteryBackup: true,
    },
    financial: {
      estimatedCost: 36000,
      contractValue: 0, // No contract yet
      downPayment: 0,
      financingType: "loan",
    },
    notes:
      "New construction project. Working with builder to integrate solar from the start. Client interested in battery backup.",
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-05T15:30:00Z",
  },
  {
    id: "proj-007",
    name: "Anderson Residence Solar Installation",
    client: {
      id: "client-007",
      name: "Kevin Anderson",
      email: "kevin.anderson@example.com",
      phone: "(555) 789-0123",
    },
    status: "inspection",
    address: {
      street: "444 Power Lane",
      city: "Energyville",
      state: "CA",
      zipCode: "90216",
    },
    systemSpec: {
      panelType: "JinkoSolar Tiger Neo",
      panelCount: 26,
      inverterType: "SMA Sunny Tripower",
      systemSize: 9.1,
      batteryBackup: false,
    },
    financial: {
      estimatedCost: 34000,
      contractValue: 33000,
      downPayment: 6600,
      monthlyPayment: 220,
      financingTerm: 120,
      financingType: "loan",
    },
    notes: "Installation completed ahead of schedule. Waiting for utility inspection.",
    attachments: [
      {
        id: "att-007",
        name: "Installation Photos",
        type: "other",
        url: "#",
        uploadedAt: "2025-04-02T17:20:00Z",
      },
    ],
    createdAt: "2025-03-05T14:30:00Z",
    updatedAt: "2025-04-03T11:45:00Z",
    estimatedInstallDate: "2025-04-01T09:00:00Z",
    actualInstallDate: "2025-03-28T09:00:00Z",
  },
  {
    id: "proj-008",
    name: "Brown Family Solar + EV Charger",
    client: {
      id: "client-008",
      name: "Thomas Brown",
      email: "thomas.brown@example.com",
      phone: "(555) 890-1234",
    },
    status: "proposal",
    address: {
      street: "555 Electric Avenue",
      city: "Chargetown",
      state: "CA",
      zipCode: "90217",
    },
    systemSpec: {
      panelType: "LONGi Hi-MO 5",
      panelCount: 20,
      inverterType: "Fronius Primo",
      systemSize: 7.0,
      batteryBackup: false,
    },
    financial: {
      estimatedCost: 26000,
      contractValue: 0, // No contract yet
      downPayment: 0,
      financingType: "lease",
    },
    notes: "Client interested in solar + Level 2 EV charger installation. Has a Tesla Model Y.",
    createdAt: "2025-03-28T09:45:00Z",
    updatedAt: "2025-04-04T13:20:00Z",
  },
]

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Helper function to format date
const formatDate = (dateString?: string) => {
  if (!dateString) return "N/A"
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// Status badge component
const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const statusConfig = {
    lead: { label: "Lead", color: "bg-blue-100 text-blue-800" },
    proposal: { label: "Proposal", color: "bg-purple-100 text-purple-800" },
    contract: { label: "Contract", color: "bg-indigo-100 text-indigo-800" },
    permitting: { label: "Permitting", color: "bg-yellow-100 text-yellow-800" },
    installation: { label: "Installation", color: "bg-orange-100 text-orange-800" },
    inspection: { label: "Inspection", color: "bg-cyan-100 text-cyan-800" },
    completed: { label: "Completed", color: "bg-green-100 text-green-800" },
  }

  const config = statusConfig[status]

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  )
}

// Progress indicator component
const ProjectProgress = ({ status }: { status: ProjectStatus }) => {
  const progressMap: Record<ProjectStatus, number> = {
    lead: 10,
    proposal: 25,
    contract: 40,
    permitting: 55,
    installation: 70,
    inspection: 85,
    completed: 100,
  }

  return (
    <div className="w-full">
      <Progress value={progressMap[status]} className="h-2" />
      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
        <span>Lead</span>
        <span>Proposal</span>
        <span>Contract</span>
        <span>Completed</span>
      </div>
    </div>
  )
}

export default function SolarProjectsClient() {
  const { user, organization, logout } = useAuth()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [projects, setProjects] = useState<SolarProject[]>(MOCK_PROJECTS)
  const [filteredProjects, setFilteredProjects] = useState<SolarProject[]>(MOCK_PROJECTS)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all")
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentView, setCurrentView] = useState<"list" | "kanban">("list")
  const projectDetailRef = useRef<HTMLDivElement>(null)

  // Effect to filter projects based on search term and status filter
  useEffect(() => {
    let result = [...projects]

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(term) ||
          project.client.name.toLowerCase().includes(term) ||
          project.address.city.toLowerCase().includes(term) ||
          project.address.state.toLowerCase().includes(term),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((project) => project.status === statusFilter)
    }

    setFilteredProjects(result)
  }, [searchTerm, statusFilter, projects])

  // Effect to scroll to project detail when selected
  useEffect(() => {
    if (selectedProject && projectDetailRef.current) {
      projectDetailRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedProject])

  // Handle project selection
  const handleProjectSelect = (project: SolarProject) => {
    setSelectedProject(project)
  }

  // Handle project deletion
  const handleDeleteProject = () => {
    if (selectedProject) {
      setProjects(projects.filter((p) => p.id !== selectedProject.id))
      setSelectedProject(null)
      setIsDeleteDialogOpen(false)
    }
  }

  // Group projects by status for Kanban view
  const projectsByStatus = {
    lead: filteredProjects.filter((p) => p.status === "lead"),
    proposal: filteredProjects.filter((p) => p.status === "proposal"),
    contract: filteredProjects.filter((p) => p.status === "contract"),
    permitting: filteredProjects.filter((p) => p.status === "permitting"),
    installation: filteredProjects.filter((p) => p.status === "installation"),
    inspection: filteredProjects.filter((p) => p.status === "inspection"),
    completed: filteredProjects.filter((p) => p.status === "completed"),
  }

  return (
    <div className="flex h-[100dvh]">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              F
            </div>
            <span>Foundations AI</span>
          </Link>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/call-center"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Phone className="h-5 w-5" />
              Call Center
            </Link>
            <Link
              href="/leads"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Leads
            </Link>
            <Link
              href="/appointments"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Calendar className="h-5 w-5" />
              Appointments
            </Link>
            <Link
              href="/solar-projects"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
            >
              <Sun className="h-5 w-5" />
              Solar Projects
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <MessageSquare className="h-5 w-5" />
              AI Agents
            </Link>

            <div className="pt-4 pb-2">
              <div className="px-3">
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Admin</h3>
              </div>
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>
                {user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("") || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{user?.name || "User"}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email || "user@example.com"}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open sidebar</span>
            </Button>
            <div className="relative w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>
                      {user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span>{organization?.name || "Organization"}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{organization?.name || "Organization"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Company Profile</DropdownMenuItem>
                <DropdownMenuItem>AI Agent Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-6"
          >
            {/* Page header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Solar Projects</h1>
                <p className="text-muted-foreground">Manage and track all your solar installation projects</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      New Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Create New Solar Project</DialogTitle>
                      <DialogDescription>
                        Enter the details for the new solar project. All fields marked with * are required.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-name">Project Name *</Label>
                          <Input id="project-name" placeholder="Enter project name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project-status">Project Status *</Label>
                          <Select defaultValue="lead">
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lead">Lead</SelectItem>
                              <SelectItem value="proposal">Proposal</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="permitting">Permitting</SelectItem>
                              <SelectItem value="installation">Installation</SelectItem>
                              <SelectItem value="inspection">Inspection</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Client Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="client-name">Client Name *</Label>
                            <Input id="client-name" placeholder="Enter client name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="client-email">Email *</Label>
                            <Input id="client-email" type="email" placeholder="Enter client email" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="client-phone">Phone *</Label>
                            <Input id="client-phone" placeholder="Enter client phone" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="client-company">Company (Optional)</Label>
                            <Input id="client-company" placeholder="Enter company name" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Installation Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="address-street">Street Address *</Label>
                            <Input id="address-street" placeholder="Enter street address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address-city">City *</Label>
                            <Input id="address-city" placeholder="Enter city" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address-state">State *</Label>
                            <Input id="address-state" placeholder="Enter state" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address-zip">Zip Code *</Label>
                            <Input id="address-zip" placeholder="Enter zip code" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">System Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="panel-type">Panel Type *</Label>
                            <Input id="panel-type" placeholder="Enter panel type" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="panel-count">Panel Count *</Label>
                            <Input id="panel-count" type="number" placeholder="Enter number of panels" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="inverter-type">Inverter Type *</Label>
                            <Input id="inverter-type" placeholder="Enter inverter type" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="system-size">System Size (kW) *</Label>
                            <Input id="system-size" type="number" step="0.1" placeholder="Enter system size" />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="battery-backup" className="rounded border-gray-300" />
                              <Label htmlFor="battery-backup">Battery Backup</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Financial Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="estimated-cost">Estimated Cost ($) *</Label>
                            <Input id="estimated-cost" type="number" placeholder="Enter estimated cost" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contract-value">Contract Value ($)</Label>
                            <Input id="contract-value" type="number" placeholder="Enter contract value" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="down-payment">Down Payment ($)</Label>
                            <Input id="down-payment" type="number" placeholder="Enter down payment" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="financing-type">Financing Type</Label>
                            <Select defaultValue="cash">
                              <SelectTrigger>
                                <SelectValue placeholder="Select financing type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cash">Cash</SelectItem>
                                <SelectItem value="loan">Loan</SelectItem>
                                <SelectItem value="lease">Lease</SelectItem>
                                <SelectItem value="ppa">PPA</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="monthly-payment">Monthly Payment ($)</Label>
                            <Input id="monthly-payment" type="number" placeholder="Enter monthly payment" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="financing-term">Financing Term (months)</Label>
                            <Input id="financing-term" type="number" placeholder="Enter financing term" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-notes">Project Notes</Label>
                        <Textarea
                          id="project-notes"
                          placeholder="Enter any additional notes about the project"
                          className="min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="estimated-install-date">Estimated Installation Date</Label>
                        <Input id="estimated-install-date" type="date" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsCreateDialogOpen(false)}>Create Project</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Project detail view (if a project is selected) */}
            {selectedProject && (
              <div ref={projectDetailRef} className="mb-6">
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{selectedProject.name}</CardTitle>
                        <CardDescription>Project ID: {selectedProject.id}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1 text-destructive">
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Project</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this project? This action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button variant="destructive" onClick={handleDeleteProject}>
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Status</h3>
                          <div className="flex items-center gap-2">
                            <StatusBadge status={selectedProject.status} />
                          </div>
                          <div className="mt-3">
                            <ProjectProgress status={selectedProject.status} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Client Information</h3>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{selectedProject.client.name}</p>
                            <p className="text-sm">{selectedProject.client.email}</p>
                            <p className="text-sm">{selectedProject.client.phone}</p>
                            {selectedProject.client.company && (
                              <p className="text-sm">{selectedProject.client.company}</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Installation Address</h3>
                          <div className="space-y-1">
                            <p className="text-sm">{selectedProject.address.street}</p>
                            <p className="text-sm">
                              {selectedProject.address.city}, {selectedProject.address.state}{" "}
                              {selectedProject.address.zipCode}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">System Specifications</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm">Panel Type:</span>
                              <span className="text-sm font-medium">{selectedProject.systemSpec.panelType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Panel Count:</span>
                              <span className="text-sm font-medium">{selectedProject.systemSpec.panelCount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Inverter Type:</span>
                              <span className="text-sm font-medium">{selectedProject.systemSpec.inverterType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">System Size:</span>
                              <span className="text-sm font-medium">{selectedProject.systemSpec.systemSize} kW</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Battery Backup:</span>
                              <span className="text-sm font-medium">
                                {selectedProject.systemSpec.batteryBackup ? "Yes" : "No"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Installation Timeline</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm">Created:</span>
                              <span className="text-sm font-medium">{formatDate(selectedProject.createdAt)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Last Updated:</span>
                              <span className="text-sm font-medium">{formatDate(selectedProject.updatedAt)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Estimated Install:</span>
                              <span className="text-sm font-medium">
                                {formatDate(selectedProject.estimatedInstallDate)}
                              </span>
                            </div>
                            {selectedProject.actualInstallDate && (
                              <div className="flex justify-between">
                                <span className="text-sm">Actual Install:</span>
                                <span className="text-sm font-medium">
                                  {formatDate(selectedProject.actualInstallDate)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Financial Information</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm">Estimated Cost:</span>
                              <span className="text-sm font-medium">
                                {formatCurrency(selectedProject.financial.estimatedCost)}
                              </span>
                            </div>
                            {selectedProject.financial.contractValue > 0 && (
                              <div className="flex justify-between">
                                <span className="text-sm">Contract Value:</span>
                                <span className="text-sm font-medium">
                                  {formatCurrency(selectedProject.financial.contractValue)}
                                </span>
                              </div>
                            )}
                            {selectedProject.financial.downPayment > 0 && (
                              <div className="flex justify-between">
                                <span className="text-sm">Down Payment:</span>
                                <span className="text-sm font-medium">
                                  {formatCurrency(selectedProject.financial.downPayment)}
                                </span>
                              </div>
                            )}
                            {selectedProject.financial.monthlyPayment && (
                              <div className="flex justify-between">
                                <span className="text-sm">Monthly Payment:</span>
                                <span className="text-sm font-medium">
                                  {formatCurrency(selectedProject.financial.monthlyPayment)}
                                </span>
                              </div>
                            )}
                            {selectedProject.financial.financingTerm && (
                              <div className="flex justify-between">
                                <span className="text-sm">Financing Term:</span>
                                <span className="text-sm font-medium">
                                  {selectedProject.financial.financingTerm} months
                                </span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span className="text-sm">Financing Type:</span>
                              <span className="text-sm font-medium capitalize">
                                {selectedProject.financial.financingType || "N/A"}
                              </span>
                            </div>
                          </div>
                        </div>
                        {selectedProject.notes && (
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Notes</h3>
                            <p className="text-sm">{selectedProject.notes}</p>
                          </div>
                        )}
                        {selectedProject.attachments && selectedProject.attachments.length > 0 && (
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Attachments</h3>
                            <div className="space-y-2">
                              {selectedProject.attachments.map((attachment) => (
                                <div key={attachment.id} className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                  <a href={attachment.url} className="text-sm text-primary hover:underline">
                                    {attachment.name}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Filters and view toggle */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as ProjectStatus | "all")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="permitting">Permitting</SelectItem>
                    <SelectItem value="installation">Installation</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                </p>
                <div className="border rounded-md overflow-hidden">
                  <Button
                    variant={currentView === "list" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setCurrentView("list")}
                  >
                    List
                  </Button>
                  <Button
                    variant={currentView === "kanban" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setCurrentView("kanban")}
                  >
                    Kanban
                  </Button>
                </div>
              </div>
            </div>

            {/* List view */}
            {currentView === "list" && (
              <div className="rounded-md border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            Project
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            Client
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            Status
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            System Size
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            Value
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          <div className="flex items-center gap-1">
                            Install Date
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredProjects.map((project) => (
                        <tr
                          key={project.id}
                          className="hover:bg-muted/50 cursor-pointer"
                          onClick={() => handleProjectSelect(project)}
                        >
                          <td className="px-4 py-3 text-sm">
                            <div className="font-medium">{project.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {project.address.city}, {project.address.state}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div>{project.client.name}</div>
                            <div className="text-xs text-muted-foreground">{project.client.email}</div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <StatusBadge status={project.status} />
                          </td>
                          <td className="px-4 py-3 text-sm">{project.systemSpec.systemSize} kW</td>
                          <td className="px-4 py-3 text-sm">
                            {project.financial.contractValue > 0
                              ? formatCurrency(project.financial.contractValue)
                              : formatCurrency(project.financial.estimatedCost)}
                          </td>
                          <td className="px-4 py-3 text-sm">{formatDate(project.estimatedInstallDate)}</td>
                          <td className="px-4 py-3 text-sm text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleProjectSelect(project)
                                  }}
                                >
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Project</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                      {filteredProjects.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                            No projects found matching your filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Kanban view */}
            {currentView === "kanban" && (
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-4 min-w-[1200px]">
                  {(
                    [
                      "lead",
                      "proposal",
                      "contract",
                      "permitting",
                      "installation",
                      "inspection",
                      "completed",
                    ] as ProjectStatus[]
                  ).map((status) => (
                    <div key={status} className="flex-1 min-w-[250px]">
                      <div className="bg-muted/50 rounded-t-md p-3 border border-b-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium capitalize">{status}</h3>
                          <Badge variant="outline">{projectsByStatus[status].length}</Badge>
                        </div>
                      </div>
                      <div className="bg-background rounded-b-md border border-t-0 h-[calc(100vh-320px)] overflow-y-auto p-2">
                        {projectsByStatus[status].map((project) => (
                          <Card
                            key={project.id}
                            className="mb-2 cursor-pointer hover:border-primary/50 transition-colors"
                            onClick={() => handleProjectSelect(project)}
                          >
                            <CardContent className="p-3">
                              <div className="space-y-2">
                                <div className="font-medium line-clamp-1">{project.name}</div>
                                <div className="text-xs text-muted-foreground">{project.client.name}</div>
                                <div className="flex items-center justify-between text-xs">
                                  <span>{project.systemSpec.systemSize} kW</span>
                                  <span>{formatCurrency(project.financial.estimatedCost)}</span>
                                </div>
                                {project.estimatedInstallDate && (
                                  <div className="text-xs flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {formatDate(project.estimatedInstallDate)}
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        {projectsByStatus[status].length === 0 && (
                          <div className="flex items-center justify-center h-20 text-sm text-muted-foreground">
                            No projects
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{filteredProjects.length}</span> of{" "}
                <span className="font-medium">{filteredProjects.length}</span> projects
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="sm" disabled>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
