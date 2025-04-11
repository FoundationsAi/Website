"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  Phone,
  FileText,
  Shield,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Search,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export default function InsuranceDashboard() {
  const { user, organization, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

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

  // Mock data for call center metrics
  const callMetrics = {
    today: {
      total: 156,
      answered: 142,
      missed: 14,
      avgDuration: "5:18",
      conversion: 32,
    },
    weekly: {
      total: 978,
      answered: 912,
      missed: 66,
      avgDuration: "5:24",
      conversion: 215,
    },
  }

  // Mock data for AI agent performance
  const aiAgentPerformance = [
    { name: "Claims Assistant", calls: 64, conversion: 28, satisfaction: 92 },
    { name: "Policy Advisor", calls: 47, conversion: 38, satisfaction: 94 },
    { name: "Quote Specialist", calls: 45, conversion: 42, satisfaction: 90 },
  ]

  // Mock data for recent calls
  const recentCalls = [
    {
      customer: "Jennifer Smith",
      time: "10:45 AM",
      duration: "6:12",
      topic: "Auto Insurance Quote",
      outcome: "Policy Created",
      sentiment: "positive",
    },
    {
      customer: "Robert Johnson",
      time: "9:32 AM",
      duration: "4:56",
      topic: "Home Insurance Claim",
      outcome: "Claim Filed",
      sentiment: "neutral",
    },
    {
      customer: "Emily Davis",
      time: "9:05 AM",
      duration: "8:23",
      topic: "Policy Renewal",
      outcome: "Renewal Processed",
      sentiment: "positive",
    },
    {
      customer: "Michael Wilson",
      time: "Yesterday",
      duration: "3:47",
      topic: "Coverage Questions",
      outcome: "Information Sent",
      sentiment: "neutral",
    },
    {
      customer: "Sarah Thompson",
      time: "Yesterday",
      duration: "5:32",
      topic: "Life Insurance Options",
      outcome: "Follow-up Scheduled",
      sentiment: "positive",
    },
  ]

  return (
    <div className="flex h-[100dvh] flex-col md:flex-row">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            F
          </div>
          <span>Foundations AI</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                  {user?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{organization?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Phone className="h-5 w-5" />
              Call Center
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <FileText className="h-5 w-5" />
              Policies
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Shield className="h-5 w-5" />
              Claims
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
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
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
        {/* Desktop header */}
        <header className="hidden md:flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search policies, claims..." className="pl-8 w-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{formattedDate}</span> • <span>{formattedTime}</span>
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
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{organization?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{organization?.name}</DropdownMenuLabel>
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

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Insurance Call Center</h1>
                <p className="text-muted-foreground">Welcome to your Voice AI Agent dashboard for insurance</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Report
                </Button>
                <Button className="rounded-full gap-2">
                  <Phone className="h-4 w-4" />
                  Live Calls
                </Button>
              </div>
            </div>

            <Tabs defaultValue="today" className="mb-6">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm">View detailed analytics</span>
                </Button>
              </div>

              <TabsContent value="today" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Calls</p>
                          <p className="text-2xl font-bold">{callMetrics.today.total}</p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Answered: {callMetrics.today.answered}</span>
                          <span>Missed: {callMetrics.today.missed}</span>
                        </div>
                        <Progress value={91} className="h-1.5" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Avg Call Duration</p>
                          <p className="text-2xl font-bold">{callMetrics.today.avgDuration}</p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                            12s
                          </span>{" "}
                          from yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">New Policies</p>
                          <p className="text-2xl font-bold">{callMetrics.today.conversion}</p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          <FileText className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            20%
                          </span>{" "}
                          conversion rate
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Premium Value</p>
                          <p className="text-2xl font-bold">$56,780</p>
                        </div>
                        <div className="rounded-full bg-primary/10 p-2 text-primary">
                          <DollarSign className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-500 inline-flex items-center">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            15%
                          </span>{" "}
                          from yesterday
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Other tabs content would go here */}
            </Tabs>

            {/* Rest of the dashboard content would go here */}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
