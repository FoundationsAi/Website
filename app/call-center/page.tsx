"use client"

import { useState } from "react"
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
  Download,
  ArrowUpRight,
  Clock,
  Headphones,
  Play,
  Filter,
  ChevronRight,
  Mic,
  PhoneCall,
  PhoneOff,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
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
import { useAuth } from "@/contexts/auth-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CallCenterPage() {
  const { user, organization } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeCall, setActiveCall] = useState(false)
  const [callDuration, setCallDuration] = useState(0)

  // Mock data for active calls
  const activeCalls = [
    { id: 1, customer: "Michael Johnson", topic: "Solar Panel Installation", duration: "5:47", agent: "Solar Advisor" },
    { id: 2, customer: "Sarah Williams", topic: "Cost Estimate", duration: "2:13", agent: "Quote Specialist" },
    { id: 3, customer: "David Thompson", topic: "Energy Savings", duration: "1:05", agent: "Solar Advisor" },
  ]

  // Mock data for call queue
  const callQueue = [
    { id: 4, customer: "Jennifer Davis", topic: "Solar Tax Credits", waitTime: "0:42", priority: "Medium" },
    { id: 5, customer: "Robert Wilson", topic: "System Size Consultation", waitTime: "1:15", priority: "High" },
    { id: 6, customer: "Emily Rodriguez", topic: "Installation Timeline", waitTime: "2:03", priority: "Medium" },
    { id: 7, customer: "Thomas Brown", topic: "Financing Options", waitTime: "2:37", priority: "Low" },
  ]

  // Mock data for recent calls
  const recentCalls = [
    {
      id: 101,
      customer: "Lisa Martinez",
      time: "10:32 AM",
      duration: "8:47",
      topic: "Solar Panel Installation",
      outcome: "Appointment Scheduled",
      recording: true,
    },
    {
      id: 102,
      customer: "Kevin Anderson",
      time: "9:45 AM",
      duration: "4:12",
      topic: "Cost Estimate",
      outcome: "Quote Sent",
      recording: true,
    },
    {
      id: 103,
      customer: "Patricia Moore",
      time: "9:18 AM",
      duration: "7:23",
      topic: "Energy Savings Calculation",
      outcome: "Follow-up Needed",
      recording: true,
    },
    {
      id: 104,
      customer: "James Taylor",
      time: "Yesterday",
      duration: "3:56",
      topic: "Solar Tax Credits",
      outcome: "Information Sent",
      recording: true,
    },
    {
      id: 105,
      customer: "Nancy Garcia",
      time: "Yesterday",
      duration: "6:08",
      topic: "System Size Consultation",
      outcome: "Appointment Scheduled",
      recording: true,
    },
  ]

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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/call-center"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
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
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Calendar className="h-5 w-5" />
              Appointments
            </Link>
            <Link
              href="/solar-projects"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foregroun"
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
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
            <Button variant="ghost" size="icon">
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
              <Input placeholder="Search calls, customers..." className="pl-8 w-full" />
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
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Call Center content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Call Center</h1>
                <p className="text-muted-foreground">Manage your AI-powered call center for solar sales</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Calls
                </Button>
                <Button className="rounded-full gap-2">
                  <PhoneCall className="h-4 w-4" />
                  New Call
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Calls</CardTitle>
                  <CardDescription>Currently active AI agent calls</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {activeCalls.map((call) => (
                      <div key={call.id} className="p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {call.customer
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{call.customer}</p>
                              <p className="text-sm text-muted-foreground">{call.topic}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                            Live
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{call.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Headphones className="h-3.5 w-3.5" />
                            <span>{call.agent}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm" className="w-full">
                            <Mic className="h-3.5 w-3.5 mr-1" />
                            Listen
                          </Button>
                          <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-600">
                            <PhoneOff className="h-3.5 w-3.5 mr-1" />
                            End
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button variant="ghost" className="w-full justify-center gap-1 text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>View all active calls</span>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call Queue</CardTitle>
                  <CardDescription>Incoming calls waiting for an AI agent</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {callQueue.map((call) => (
                      <div key={call.id} className="p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {call.customer
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{call.customer}</p>
                              <p className="text-sm text-muted-foreground">{call.topic}</p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              call.priority === "High"
                                ? "bg-red-500/10 text-red-600 border-red-200"
                                : call.priority === "Medium"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-200"
                                  : "bg-blue-500/10 text-blue-600 border-blue-200"
                            }
                          >
                            {call.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Wait: {call.waitTime}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm" className="w-full">
                            <UserPlus className="h-3.5 w-3.5 mr-1" />
                            Assign Agent
                          </Button>
                          <Button variant="primary" size="sm" className="w-full">
                            <PhoneCall className="h-3.5 w-3.5 mr-1" />
                            Answer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button variant="ghost" className="w-full justify-center gap-1 text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>Manage queue</span>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Agent Controls</CardTitle>
                  <CardDescription>Configure your AI voice agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="agent-type">Agent Type</Label>
                      </div>
                      <Select defaultValue="solar-advisor">
                        <SelectTrigger id="agent-type">
                          <SelectValue placeholder="Select agent type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solar-advisor">Solar Advisor</SelectItem>
                          <SelectItem value="quote-specialist">Quote Specialist</SelectItem>
                          <SelectItem value="installation-coordinator">Installation Coordinator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="voice-type">Voice Type</Label>
                      </div>
                      <Select defaultValue="professional-female">
                        <SelectTrigger id="voice-type">
                          <SelectValue placeholder="Select voice type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional-female">Professional Female</SelectItem>
                          <SelectItem value="professional-male">Professional Male</SelectItem>
                          <SelectItem value="friendly-female">Friendly Female</SelectItem>
                          <SelectItem value="friendly-male">Friendly Male</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Speaking Rate</Label>
                        <span className="text-xs text-muted-foreground">Normal</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Voice Pitch</Label>
                        <span className="text-xs text-muted-foreground">Medium</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Label htmlFor="auto-answer" className="mb-1">
                            Auto-Answer Calls
                          </Label>
                          <span className="text-xs text-muted-foreground">Automatically answer incoming calls</span>
                        </div>
                        <Switch id="auto-answer" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Label htmlFor="record-calls" className="mb-1">
                            Record Calls
                          </Label>
                          <span className="text-xs text-muted-foreground">Save call recordings for review</span>
                        </div>
                        <Switch id="record-calls" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <Label htmlFor="call-transcription" className="mb-1">
                            Call Transcription
                          </Label>
                          <span className="text-xs text-muted-foreground">Generate text transcripts of calls</span>
                        </div>
                        <Switch id="call-transcription" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button className="w-full">Save Settings</Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Calls</CardTitle>
                  <CardDescription>Latest customer interactions handled by AI Agents</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by outcome" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Outcomes</SelectItem>
                      <SelectItem value="appointment">Appointment Scheduled</SelectItem>
                      <SelectItem value="quote">Quote Sent</SelectItem>
                      <SelectItem value="followup">Follow-up Needed</SelectItem>
                      <SelectItem value="info">Information Sent</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    View All Calls
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCalls.map((call) => (
                    <div
                      key={call.id}
                      className="grid grid-cols-12 gap-4 items-center pb-4 last:pb-0 last:border-0 border-b border-border/40"
                    >
                      <div className="col-span-3 md:col-span-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>
                              {call.customer
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{call.customer}</p>
                            <p className="text-xs text-muted-foreground">{call.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 md:col-span-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{call.duration}</span>
                        </div>
                      </div>
                      <div className="col-span-3 md:col-span-3">
                        <span className="text-sm">{call.topic}</span>
                      </div>
                      <div className="col-span-3 md:col-span-3">
                        <Badge
                          variant={
                            call.outcome === "Appointment Scheduled"
                              ? "default"
                              : call.outcome === "Follow-up Needed"
                                ? "outline"
                                : "secondary"
                          }
                          className="whitespace-nowrap"
                        >
                          {call.outcome}
                        </Badge>
                      </div>
                      <div className="col-span-1 md:col-span-1 flex justify-end">
                        <Button variant="ghost" size="icon">
                          <Play className="h-4 w-4" />
                          <span className="sr-only">Play recording</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4 flex justify-between">
                <Button variant="outline" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export Call Data
                </Button>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>Showing 5 of 127 calls</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
