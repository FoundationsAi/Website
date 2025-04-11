"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
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
  Download,
  ArrowUpRight,
  Clock,
  Zap,
  ChevronRight,
  ChevronLeft,
  Home,
  Menu,
  X,
  Activity,
  UserCircle,
  HelpCircle,
  FileText,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SolarDashboard() {
  const { user, organization, logout } = useAuth()
  const router = useRouter()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    // Try to get the sidebar state from localStorage
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("sidebarCollapsed")
      return savedState ? JSON.parse(savedState) : false
    }
    return false
  })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState("overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed))
    }
  }, [sidebarCollapsed])

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

  // Mock data for dashboard metrics
  const dashboardMetrics = {
    totalLeads: 248,
    leadsThisWeek: 42,
    leadConversionRate: 28,
    totalAppointments: 36,
    appointmentsToday: 8,
    totalProjects: 124,
    activeProjects: 78,
    completedProjects: 46,
    totalCalls: 843,
    callsToday: 127,
    callConversionRate: 22,
  }

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: "lead",
      title: "New Lead Created",
      description: "Michael Johnson submitted a contact form",
      time: "10 minutes ago",
      icon: <Users className="h-4 w-4" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "call",
      title: "Call Completed",
      description: "AI Agent completed a call with Sarah Williams",
      time: "25 minutes ago",
      icon: <Phone className="h-4 w-4" />,
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "appointment",
      title: "Appointment Scheduled",
      description: "Site assessment scheduled with David Thompson",
      time: "1 hour ago",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-emerald-500",
    },
    {
      id: 4,
      type: "project",
      title: "Project Status Updated",
      description: "Solar installation for Jennifer Davis moved to Installation phase",
      time: "2 hours ago",
      icon: <Sun className="h-4 w-4" />,
      color: "bg-amber-500",
    },
    {
      id: 5,
      type: "lead",
      title: "Lead Qualified",
      description: "Robert Wilson marked as qualified lead",
      time: "3 hours ago",
      icon: <Users className="h-4 w-4" />,
      color: "bg-blue-500",
    },
  ]

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      customer: "Emily Rodriguez",
      time: "Today, 2:00 PM",
      type: "Virtual Consultation",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      customer: "Thomas Brown",
      time: "Today, 4:30 PM",
      type: "Site Assessment",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      customer: "Lisa Martinez",
      time: "Tomorrow, 10:00 AM",
      type: "Quote Review",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  // Mock data for recent leads
  const recentLeads = [
    {
      name: "Michael Johnson",
      email: "michael.j@example.com",
      status: "new",
      source: "website",
      score: 85,
      createdAt: "Today, 9:30 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      status: "contacted",
      source: "referral",
      score: 92,
      createdAt: "Today, 8:15 AM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      name: "David Thompson",
      email: "david.t@example.com",
      status: "qualified",
      source: "call",
      score: 78,
      createdAt: "Yesterday, 4:45 PM",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  // Mock data for active projects
  const activeProjects = [
    {
      name: "Thompson Residence",
      address: "123 Solar Ave, Sunnyville",
      stage: "contract",
      progress: 35,
      nextStep: "Permit Application",
      dueDate: "Apr 18, 2025",
    },
    {
      name: "Williams Commercial",
      address: "456 Energy Blvd, Brightcity",
      stage: "installation",
      progress: 65,
      nextStep: "Panel Installation",
      dueDate: "Apr 15, 2025",
    },
    {
      name: "Rodriguez Property",
      address: "789 Sunshine Ln, Powertown",
      stage: "design",
      progress: 20,
      nextStep: "Design Approval",
      dueDate: "Apr 20, 2025",
    },
  ]

  // Get status badge color
  const getStatusBadge = (status) => {
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

  // Get project stage badge
  const getStageBadge = (stage) => {
    switch (stage) {
      case "lead":
        return (
          <Badge variant="outline" className="border-blue-200 text-blue-700">
            Lead
          </Badge>
        )
      case "contract":
        return (
          <Badge variant="outline" className="border-purple-200 text-purple-700">
            Contract
          </Badge>
        )
      case "design":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-700">
            Design
          </Badge>
        )
      case "permit":
        return (
          <Badge variant="outline" className="border-indigo-200 text-indigo-700">
            Permit
          </Badge>
        )
      case "installation":
        return (
          <Badge variant="outline" className="border-emerald-200 text-emerald-700">
            Installation
          </Badge>
        )
      case "inspection":
        return (
          <Badge variant="outline" className="border-green-200 text-green-700">
            Inspection
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="border-teal-200 text-teal-700">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">{stage}</Badge>
    }
  }

  // Navigation items
  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
      active: true,
    },
    {
      name: "Call Center",
      href: "/call-center",
      icon: <Phone className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Leads",
      href: "/leads",
      icon: <Users className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Appointments",
      href: "/appointments",
      icon: <Calendar className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Solar Projects",
      href: "/solar-projects",
      icon: <Sun className="h-5 w-5" />,
      active: false,
    },
    {
      name: "AI Agents",
      href: "/ai-agents",
      icon: <MessageSquare className="h-5 w-5" />,
      active: false,
    },
  ]

  // Admin navigation items
  const adminNavigationItems = [
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <FileText className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Team",
      href: "/team",
      icon: <Briefcase className="h-5 w-5" />,
      active: false,
    },
    {
      name: "Help & Support",
      href: "/support",
      icon: <HelpCircle className="h-5 w-5" />,
      active: false,
    },
  ]

  return (
    <div className="flex h-[100dvh] bg-gray-50 dark:bg-gray-900">
      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-white dark:bg-gray-950 border-r transition-all duration-300 ease-in-out md:relative ${
          sidebarCollapsed ? "w-[70px]" : "w-64"
        } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              F
            </div>
            {!sidebarCollapsed && <span>Foundations AI</span>}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col h-[calc(100vh-4rem)] justify-between">
          <div className="py-4 overflow-y-auto">
            <nav className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <TooltipProvider key={item.name} delayDuration={sidebarCollapsed ? 100 : 1000}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                          item.active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        } ${sidebarCollapsed ? "justify-center" : ""}`}
                      >
                        {item.icon}
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {sidebarCollapsed && (
                      <TooltipContent side="right">
                        <p>{item.name}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}

              {!sidebarCollapsed && (
                <div className="pt-4 pb-2">
                  <div className="px-3">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Admin</h3>
                  </div>
                </div>
              )}

              {sidebarCollapsed && <div className="border-t my-4"></div>}

              {adminNavigationItems.map((item) => (
                <TooltipProvider key={item.name} delayDuration={sidebarCollapsed ? 100 : 1000}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                          item.active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        } ${sidebarCollapsed ? "justify-center" : ""}`}
                      >
                        {item.icon}
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {sidebarCollapsed && (
                      <TooltipContent side="right">
                        <p>{item.name}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
          </div>

          {/* User profile section */}
          <div className="p-4 border-t">
            <TooltipProvider delayDuration={sidebarCollapsed ? 100 : 1000}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`flex items-center gap-3 ${sidebarCollapsed ? "justify-center" : ""}`}>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>
                        {user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {!sidebarCollapsed && (
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      </div>
                    )}
                    {!sidebarCollapsed && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <UserCircle className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                    {sidebarCollapsed && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="absolute bottom-4 right-4">
                            <LogOut className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <UserCircle className="mr-2 h-4 w-4" />
                            Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TooltipTrigger>
                {sidebarCollapsed && (
                  <TooltipContent side="right">
                    <p>{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white dark:bg-gray-950 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
              <span className="text-sm font-medium">{formattedTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8 w-64" />
            </div>
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
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">{organization?.name}</span>
                  <ChevronDown className="h-4 w-4 hidden md:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{organization?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {user?.name}. Here's what's happening today.</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Report
                </Button>
                <Button className="gap-2">
                  <Activity className="h-4 w-4" />
                  View Analytics
                </Button>
              </div>
            </div>

            {/* Dashboard tabs */}
            <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="leads">Leads</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="calls">Calls</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6">
                {/* Key metrics */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalLeads}</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {dashboardMetrics.leadsThisWeek}
                          </span>{" "}
                          new this week
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Appointments</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalAppointments}</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {dashboardMetrics.appointmentsToday}
                          </span>{" "}
                          scheduled today
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Projects</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalProjects}</p>
                        </div>
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          <Sun className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {dashboardMetrics.activeProjects}
                          </span>{" "}
                          active projects
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Calls</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalCalls}</p>
                        </div>
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {dashboardMetrics.callsToday}
                          </span>
                          {""}
                          calls today
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent activity and upcoming appointments */}
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  {/* Recent activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest updates across your solar business</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div key={activity.id} className="flex items-start gap-4">
                            <div className={`mt-0.5 rounded-full p-1.5 ${activity.color} text-white`}>
                              {activity.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button variant="ghost" className="w-full justify-center gap-1 text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                        <span>View all activity</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Upcoming appointments */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Appointments</CardTitle>
                      <CardDescription>Your schedule for today and tomorrow</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={appointment.avatar} alt={appointment.customer} />
                              <AvatarFallback>
                                {appointment.customer
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{appointment.customer}</p>
                              <p className="text-xs text-muted-foreground">{appointment.time}</p>
                            </div>
                            <Badge variant="outline" className="whitespace-nowrap">
                              {appointment.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-center gap-1 text-primary"
                        onClick={() => router.push("/appointments")}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>View calendar</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Recent leads and active projects */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Recent leads */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Leads</CardTitle>
                      <CardDescription>Latest potential customers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentLeads.map((lead, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={lead.avatar} alt={lead.name} />
                              <AvatarFallback>
                                {lead.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{lead.name}</p>
                              <p className="text-xs text-muted-foreground">{lead.email}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              {getStatusBadge(lead.status)}
                              <p className="text-xs text-muted-foreground">{lead.createdAt}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-center gap-1 text-primary"
                        onClick={() => router.push("/leads")}
                      >
                        <Users className="h-4 w-4 mr-1" />
                        <span>View all leads</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Active projects */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Projects</CardTitle>
                      <CardDescription>Current solar installations in progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {activeProjects.map((project, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{project.name}</p>
                              {getStageBadge(project.stage)}
                            </div>
                            <p className="text-xs text-muted-foreground">{project.address}</p>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-1.5" />
                            </div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>Next: {project.nextStep}</span>
                              <span>Due: {project.dueDate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-center gap-1 text-primary"
                        onClick={() => router.push("/solar-projects")}
                      >
                        <Sun className="h-4 w-4 mr-1" />
                        <span>View all projects</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Leads Tab */}
              <TabsContent value="leads" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalLeads}</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {dashboardMetrics.leadsThisWeek}
                          </span>{" "}
                          new this week
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">New Leads</p>
                          <p className="text-2xl font-bold">42</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            12%
                          </span>{" "}
                          from last week
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Qualified Leads</p>
                          <p className="text-2xl font-bold">86</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            8%
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.leadConversionRate}%</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                          <Activity className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            2%
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Recent Leads</CardTitle>
                    <CardDescription>Latest potential customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[...recentLeads, ...recentLeads].map((lead, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={lead.avatar} alt={lead.name} />
                            <AvatarFallback>
                              {lead.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{lead.name}</p>
                            <p className="text-xs text-muted-foreground">{lead.email}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            {getStatusBadge(lead.status)}
                            <p className="text-xs text-muted-foreground">{lead.createdAt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="w-full" onClick={() => router.push("/leads")}>
                      <Users className="mr-2 h-4 w-4" />
                      Go to Leads Management
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Appointments Tab */}
              <TabsContent value="appointments" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Appointments</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalAppointments}</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            15%
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.appointmentsToday}</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />2
                          </span>{" "}
                          more than yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Virtual Meetings</p>
                          <p className="text-2xl font-bold">24</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-muted-foreground">67%</span> of all appointments
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">In-Person Meetings</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-muted-foreground">33%</span> of all appointments
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[...upcomingAppointments, ...upcomingAppointments].map((appointment, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={appointment.avatar} alt={appointment.customer} />
                            <AvatarFallback>
                              {appointment.customer
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{appointment.customer}</p>
                            <p className="text-xs text-muted-foreground">{appointment.time}</p>
                          </div>
                          <Badge variant="outline" className="whitespace-nowrap">
                            {appointment.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="w-full" onClick={() => router.push("/appointments")}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Go to Appointments Calendar
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalProjects}</p>
                        </div>
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          <Sun className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />8
                          </span>{" "}
                          new this month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.activeProjects}</p>
                        </div>
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          <Sun className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-muted-foreground">63%</span> of all projects
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Completed Projects</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.completedProjects}</p>
                        </div>
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          <Sun className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-muted-foreground">37%</span> of all projects
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Avg. Project Value</p>
                          <p className="text-2xl font-bold">$24,850</p>
                        </div>
                        <div className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          <Zap className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            12%
                          </span>{" "}
                          from last quarter
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                    <CardDescription>Current solar installations in progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[...activeProjects, ...activeProjects].map((project, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{project.name}</p>
                            {getStageBadge(project.stage)}
                          </div>
                          <p className="text-xs text-muted-foreground">{project.address}</p>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-1.5" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Next: {project.nextStep}</span>
                            <span>Due: {project.dueDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="w-full" onClick={() => router.push("/solar-projects")}>
                      <Sun className="mr-2 h-4 w-4" />
                      Go to Solar Projects
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Calls Tab */}
              <TabsContent value="calls" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Calls</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.totalCalls}</p>
                        </div>
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            18%
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Today's Calls</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.callsToday}</p>
                        </div>
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            12
                          </span>{" "}
                          more than yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Avg. Call Duration</p>
                          <p className="text-2xl font-bold">4:52</p>
                        </div>
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            10s
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                          <p className="text-2xl font-bold">{dashboardMetrics.callConversionRate}%</p>
                        </div>
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <Activity className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            2%
                          </span>{" "}
                          from last month
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>AI Agent Performance</CardTitle>
                    <CardDescription>Performance metrics for your AI voice agents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { name: "Solar Advisor", calls: 52, conversion: 32, satisfaction: 94 },
                        { name: "Quote Specialist", calls: 38, conversion: 41, satisfaction: 91 },
                        { name: "Installation Coordinator", calls: 28, conversion: 35, satisfaction: 89 },
                      ].map((agent, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{agent.name}</p>
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200">
                              {agent.calls} calls
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Conversion Rate</span>
                                <span>{agent.conversion}%</span>
                              </div>
                              <Progress value={agent.conversion} className="h-1.5" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Customer Satisfaction</span>
                                <span>{agent.satisfaction}%</span>
                              </div>
                              <Progress value={agent.satisfaction} className="h-1.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button className="w-full" onClick={() => router.push("/call-center")}>
                      <Phone className="mr-2 h-4 w-4" />
                      Go to Call Center
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
