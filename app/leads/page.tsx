"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import {
  Search,
  Plus,
  MoreHorizontal,
  Phone,
  Mail,
  Calendar,
  FileText,
  BarChart3,
  Home,
  Sun,
  Users,
  Menu,
  X,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Lead status types
type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "closed-won" | "closed-lost"

// Lead source types
type LeadSource = "website" | "referral" | "call" | "event" | "partner" | "other"

// Lead interface
interface Lead {
  id: string
  name: string
  email: string
  phone: string
  address: string
  status: LeadStatus
  source: LeadSource
  score: number
  notes: string
  createdAt: string
  lastContact: string | null
  assignedTo: string | null
}

export default function LeadsPage() {
  const { user, organization, logout } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all")
  const [sourceFilter, setSourceFilter] = useState<LeadSource | "all">("all")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Format date for display
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentTime)

  // Format time for display
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(currentTime)

  // Mock data for all leads
  const allLeads: Lead[] = [
    {
      id: "LD-1001",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "(555) 123-4567",
      address: "123 Solar Ave, Sunnyville, CA 94123",
      status: "new",
      source: "website",
      score: 85,
      notes: "Interested in residential solar installation. Has a 2,500 sq ft home.",
      createdAt: "2023-04-10T14:30:00Z",
      lastContact: null,
      assignedTo: null,
    },
    {
      id: "LD-1002",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      phone: "(555) 234-5678",
      address: "456 Sunshine Blvd, Brightcity, CA 94124",
      status: "contacted",
      source: "referral",
      score: 92,
      notes: "Referred by Michael Johnson. Looking for solar + battery storage solution.",
      createdAt: "2023-04-09T10:15:00Z",
      lastContact: "2023-04-10T11:20:00Z",
      assignedTo: "John Smith",
    },
    {
      id: "LD-1003",
      name: "David Thompson",
      email: "david.thompson@example.com",
      phone: "(555) 345-6789",
      address: "789 Energy Lane, Powertown, CA 94125",
      status: "qualified",
      source: "call",
      score: 78,
      notes: "Called about commercial solar installation for small business.",
      createdAt: "2023-04-08T09:45:00Z",
      lastContact: "2023-04-09T16:30:00Z",
      assignedTo: "Emily Davis",
    },
    {
      id: "LD-1004",
      name: "Jennifer Davis",
      email: "jennifer.davis@example.com",
      phone: "(555) 456-7890",
      address: "101 Green Street, Ecoville, CA 94126",
      status: "proposal",
      source: "event",
      score: 95,
      notes: "Met at the Renewable Energy Expo. Very interested in premium solar package.",
      createdAt: "2023-04-07T13:20:00Z",
      lastContact: "2023-04-10T09:15:00Z",
      assignedTo: "Robert Wilson",
    },
    {
      id: "LD-1005",
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      phone: "(555) 567-8901",
      address: "202 Panel Drive, Solarville, CA 94127",
      status: "closed-won",
      source: "partner",
      score: 100,
      notes: "Signed contract for full home solar system with battery backup.",
      createdAt: "2023-04-05T11:10:00Z",
      lastContact: "2023-04-08T14:45:00Z",
      assignedTo: "John Smith",
    },
    {
      id: "LD-1006",
      name: "Lisa Martinez",
      email: "lisa.martinez@example.com",
      phone: "(555) 678-9012",
      address: "303 Renewable Road, Greentown, CA 94128",
      status: "closed-lost",
      source: "website",
      score: 65,
      notes: "Decided to go with a competitor due to financing options.",
      createdAt: "2023-04-04T15:30:00Z",
      lastContact: "2023-04-07T10:20:00Z",
      assignedTo: "Emily Davis",
    },
    {
      id: "LD-1007",
      name: "Thomas Brown",
      email: "thomas.brown@example.com",
      phone: "(555) 789-0123",
      address: "404 Sunny Lane, Brightville, CA 94129",
      status: "new",
      source: "referral",
      score: 88,
      notes: "Referred by Lisa Martinez. Interested in solar for new construction home.",
      createdAt: "2023-04-10T08:45:00Z",
      lastContact: null,
      assignedTo: null,
    },
    {
      id: "LD-1008",
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      phone: "(555) 890-1234",
      address: "505 Power Street, Energytown, CA 94130",
      status: "contacted",
      source: "event",
      score: 82,
      notes: "Met at community sustainability fair. Has questions about tax incentives.",
      createdAt: "2023-04-09T16:20:00Z",
      lastContact: "2023-04-10T13:45:00Z",
      assignedTo: "Robert Wilson",
    },
  ]

  // Mock data for today's leads
  const todayLeads: Lead[] = [
    {
      id: "LD-2001",
      name: "James Wilson",
      email: "james.wilson@example.com",
      phone: "(555) 111-2222",
      address: "123 Sunny Drive, Solartown, CA 94131",
      status: "new",
      source: "website",
      score: 79,
      notes: "Submitted inquiry through website. Interested in solar panels for new home.",
      createdAt: new Date().toISOString(),
      lastContact: null,
      assignedTo: null,
    },
    {
      id: "LD-2002",
      name: "Patricia Moore",
      email: "patricia.moore@example.com",
      phone: "(555) 333-4444",
      address: "456 Energy Blvd, Powertown, CA 94132",
      status: "contacted",
      source: "call",
      score: 88,
      notes: "Called about residential solar installation. Has a 3,000 sq ft home.",
      createdAt: new Date().toISOString(),
      lastContact: new Date().toISOString(),
      assignedTo: "Emily Davis",
    },
  ]

  // Mock data for this week's leads
  const weekLeads: Lead[] = [
    ...todayLeads,
    {
      id: "LD-3001",
      name: "Richard Taylor",
      email: "richard.taylor@example.com",
      phone: "(555) 555-6666",
      address: "789 Panel Street, Brightville, CA 94133",
      status: "qualified",
      source: "referral",
      score: 92,
      notes: "Referred by existing customer. Looking for solar + battery solution.",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      assignedTo: "John Smith",
    },
    {
      id: "LD-3002",
      name: "Barbara Anderson",
      email: "barbara.anderson@example.com",
      phone: "(555) 777-8888",
      address: "101 Green Avenue, Ecoville, CA 94134",
      status: "proposal",
      source: "event",
      score: 95,
      notes: "Met at sustainability fair. Very interested in premium solar package.",
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      assignedTo: "Robert Wilson",
    },
    {
      id: "LD-3003",
      name: "Charles Martin",
      email: "charles.martin@example.com",
      phone: "(555) 999-0000",
      address: "202 Sunshine Lane, Solarville, CA 94135",
      status: "new",
      source: "website",
      score: 82,
      notes: "Requested quote through website. Interested in commercial installation.",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: null,
      assignedTo: null,
    },
  ]

  // Mock data for this month's leads
  const monthLeads: Lead[] = [
    ...weekLeads,
    {
      id: "LD-4001",
      name: "Elizabeth White",
      email: "elizabeth.white@example.com",
      phone: "(555) 123-9876",
      address: "303 Energy Drive, Powertown, CA 94136",
      status: "closed-won",
      source: "partner",
      score: 100,
      notes: "Signed contract for full home solar system with battery backup.",
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      assignedTo: "John Smith",
    },
    {
      id: "LD-4002",
      name: "Joseph Clark",
      email: "joseph.clark@example.com",
      phone: "(555) 456-7890",
      address: "404 Panel Avenue, Brightville, CA 94137",
      status: "closed-lost",
      source: "website",
      score: 68,
      notes: "Decided to go with a competitor due to financing options.",
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      assignedTo: "Emily Davis",
    },
    {
      id: "LD-4003",
      name: "Susan Lewis",
      email: "susan.lewis@example.com",
      phone: "(555) 789-0123",
      address: "505 Solar Street, Solartown, CA 94138",
      status: "qualified",
      source: "call",
      score: 90,
      notes: "Called about residential installation. Very interested in energy independence.",
      createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      lastContact: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
      assignedTo: "Robert Wilson",
    },
  ]

  // Get leads based on active tab
  const getLeadsByTab = () => {
    switch (activeTab) {
      case "today":
        return todayLeads
      case "week":
        return weekLeads
      case "month":
        return monthLeads
      default:
        return allLeads
    }
  }

  // Filter leads based on search query and filters
  const filteredLeads = getLeadsByTab().filter((lead) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.id.toLowerCase().includes(searchQuery.toLowerCase())

    // Status filter
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter

    // Source filter
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter

    return matchesSearch && matchesStatus && matchesSource
  })

  // Get status badge color
  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
      case "contacted":
        return <Badge className="bg-purple-500 hover:bg-purple-600">Contacted</Badge>
      case "qualified":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Qualified</Badge>
      case "proposal":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Proposal</Badge>
      case "closed-won":
        return <Badge className="bg-green-500 hover:bg-green-600">Closed (Won)</Badge>
      case "closed-lost":
        return <Badge className="bg-red-500 hover:bg-red-600">Closed (Lost)</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  // Get source badge
  const getSourceBadge = (source: LeadSource) => {
    switch (source) {
      case "website":
        return (
          <Badge variant="outline" className="border-blue-200 text-blue-700">
            Website
          </Badge>
        )
      case "referral":
        return (
          <Badge variant="outline" className="border-green-200 text-green-700">
            Referral
          </Badge>
        )
      case "call":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-700">
            Call
          </Badge>
        )
      case "event":
        return (
          <Badge variant="outline" className="border-purple-200 text-purple-700">
            Event
          </Badge>
        )
      case "partner":
        return (
          <Badge variant="outline" className="border-emerald-200 text-emerald-700">
            Partner
          </Badge>
        )
      case "other":
        return (
          <Badge variant="outline" className="border-gray-200 text-gray-700">
            Other
          </Badge>
        )
      default:
        return <Badge variant="outline">{source}</Badge>
    }
  }

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—"
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  // Get stats for current tab
  const getTabStats = () => {
    const leads = getLeadsByTab()
    return {
      total: leads.length,
      new: leads.filter((lead) => lead.status === "new").length,
      qualified: leads.filter((lead) => lead.status === "qualified" || lead.status === "proposal").length,
      conversionRate: Math.round(
        (leads.filter((lead) => lead.status === "closed-won").length / (leads.length || 1)) * 100,
      ),
    }
  }

  const stats = getTabStats()

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
              className="flex items-center gap-3 rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground"
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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
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
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm text-muted-foreground">{formattedDate}</span>
            <span className="text-sm font-medium">{formattedTime}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search leads..."
                className="w-[200px] pl-9 md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push("/profile")}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/settings")}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="flex flex-col gap-6">
            {/* Page header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Leads Management</h1>
                <p className="text-muted-foreground">Track and manage potential customers for solar installations</p>
              </div>
              <Button className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add New Lead
              </Button>
            </div>

            {/* Time period tabs */}
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Time</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                {/* Stats cards for All Time */}
                <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{allLeads.length}</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {allLeads.filter((lead) => lead.status === "new").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+5% from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {allLeads.filter((lead) => lead.status === "qualified" || lead.status === "proposal").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+18% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(
                          (allLeads.filter((lead) => lead.status === "closed-won").length / allLeads.length) * 100,
                        )}
                        %
                      </div>
                      <p className="text-xs text-muted-foreground">+2% from last month</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="today">
                {/* Stats cards for Today */}
                <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{todayLeads.length}</div>
                      <p className="text-xs text-muted-foreground">+100% from yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {todayLeads.filter((lead) => lead.status === "new").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+50% from yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {todayLeads.filter((lead) => lead.status === "qualified" || lead.status === "proposal").length}
                      </div>
                      <p className="text-xs text-muted-foreground">No change from yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(
                          (todayLeads.filter((lead) => lead.status === "closed-won").length /
                            (todayLeads.length || 1)) *
                            100,
                        )}
                        %
                      </div>
                      <p className="text-xs text-muted-foreground">No closed deals today yet</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="week">
                {/* Stats cards for This Week */}
                <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{weekLeads.length}</div>
                      <p className="text-xs text-muted-foreground">+40% from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {weekLeads.filter((lead) => lead.status === "new").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+33% from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {weekLeads.filter((lead) => lead.status === "qualified" || lead.status === "proposal").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+100% from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(
                          (weekLeads.filter((lead) => lead.status === "closed-won").length / (weekLeads.length || 1)) *
                            100,
                        )}
                        %
                      </div>
                      <p className="text-xs text-muted-foreground">No change from last week</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="month">
                {/* Stats cards for This Month */}
                <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{monthLeads.length}</div>
                      <p className="text-xs text-muted-foreground">+25% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {monthLeads.filter((lead) => lead.status === "new").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+20% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {monthLeads.filter((lead) => lead.status === "qualified" || lead.status === "proposal").length}
                      </div>
                      <p className="text-xs text-muted-foreground">+50% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(
                          (monthLeads.filter((lead) => lead.status === "closed-won").length /
                            (monthLeads.length || 1)) *
                            100,
                        )}
                        %
                      </div>
                      <p className="text-xs text-muted-foreground">+5% from last month</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Filters */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as LeadStatus | "all")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="closed-won">Closed (Won)</SelectItem>
                    <SelectItem value="closed-lost">Closed (Lost)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Select value={sourceFilter} onValueChange={(value) => setSourceFilter(value as LeadSource | "all")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="call">Call</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="partner">Partner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Leads table */}
            <Card>
              <CardHeader>
                <CardTitle>Leads</CardTitle>
                <CardDescription>{filteredLeads.length} leads found</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center">
                          No leads found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredLeads.map((lead) => (
                        <TableRow
                          key={lead.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedLead(lead)}
                        >
                          <TableCell className="font-medium">{lead.id}</TableCell>
                          <TableCell>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-sm text-muted-foreground">{lead.email}</div>
                          </TableCell>
                          <TableCell>{getStatusBadge(lead.status)}</TableCell>
                          <TableCell>{getSourceBadge(lead.source)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-full max-w-24 rounded-full bg-muted">
                                <div
                                  className={`h-full rounded-full ${
                                    lead.score >= 90 ? "bg-green-500" : lead.score >= 70 ? "bg-amber-500" : "bg-red-500"
                                  }`}
                                  style={{ width: `${lead.score}%` }}
                                />
                              </div>
                              <span className="text-sm">{lead.score}</span>
                            </div>
                          </TableCell>
                          <TableCell>{formatDate(lead.createdAt)}</TableCell>
                          <TableCell>{lead.assignedTo || "—"}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Phone className="mr-2 h-4 w-4" />
                                  Call
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  Email
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Calendar className="mr-2 h-4 w-4" />
                                  Schedule
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  Create Proposal
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Lead details */}
            {selectedLead && (
              <Card>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{selectedLead.name}</CardTitle>
                    <CardDescription>{selectedLead.id}</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedLead(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Contact Information</h3>
                      <div className="mt-2 grid gap-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedLead.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedLead.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedLead.address}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Lead Details</h3>
                      <div className="mt-2 grid gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Status</span>
                          {getStatusBadge(selectedLead.status)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Source</span>
                          {getSourceBadge(selectedLead.source)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Score</span>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-full max-w-24 rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full ${
                                  selectedLead.score >= 90
                                    ? "bg-green-500"
                                    : selectedLead.score >= 70
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                                }`}
                                style={{ width: `${selectedLead.score}%` }}
                              />
                            </div>
                            <span className="text-sm">{selectedLead.score}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Timeline</h3>
                      <div className="mt-2 grid gap-2">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-500" />
                          <div>
                            <div className="text-sm font-medium">Lead Created</div>
                            <div className="text-xs text-muted-foreground">{formatDate(selectedLead.createdAt)}</div>
                          </div>
                        </div>
                        {selectedLead.lastContact && (
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5 h-2 w-2 rounded-full bg-purple-500" />
                            <div>
                              <div className="text-sm font-medium">Last Contact</div>
                              <div className="text-xs text-muted-foreground">
                                {formatDate(selectedLead.lastContact)}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Notes</h3>
                      <p className="mt-2 text-sm">{selectedLead.notes}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button className="flex-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
