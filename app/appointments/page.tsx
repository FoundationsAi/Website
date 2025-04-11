"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  format,
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO,
  addMonths,
  subMonths,
} from "date-fns"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  User,
  X,
  BarChart3,
  Users,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  Sun,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"

// Mock data for appointments
const mockAppointments = [
  {
    id: 1,
    title: "Initial Consultation",
    date: "2025-04-11T10:30:00",
    duration: 60,
    type: "virtual",
    status: "confirmed",
    lead: {
      id: 101,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 123-4567",
      company: "Innovate Tech",
      position: "CTO",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "123 Tech Lane, San Francisco, CA",
      notes: "Interested in AI Sales Agent for their enterprise sales team. Has a team of 50+ sales representatives.",
      leadSource: "Website",
      leadScore: 85,
      lastContact: "2025-04-08T14:20:00",
      tags: ["enterprise", "high-value", "tech"],
    },
  },
  {
    id: 2,
    title: "Product Demo",
    date: "2025-04-11T14:00:00",
    duration: 45,
    type: "in-person",
    status: "confirmed",
    lead: {
      id: 102,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "(555) 987-6543",
      company: "Global Retail Inc.",
      position: "Marketing Director",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "456 Market St, Chicago, IL",
      notes:
        "Looking for AI Marketing solutions to improve customer targeting. Currently using a competitor product but unhappy with results.",
      leadSource: "Referral",
      leadScore: 92,
      lastContact: "2025-04-09T11:15:00",
      tags: ["retail", "high-value", "marketing"],
    },
  },
  {
    id: 3,
    title: "Follow-up Meeting",
    date: "2025-04-11T16:30:00",
    duration: 30,
    type: "virtual",
    status: "confirmed",
    lead: {
      id: 103,
      name: "Jessica Williams",
      email: "jessica.w@example.com",
      phone: "(555) 234-5678",
      company: "Healthcare Solutions",
      position: "Operations Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "789 Medical Dr, Boston, MA",
      notes:
        "Second meeting to discuss implementation timeline for AI Support solution. Decision maker for a potential 6-figure deal.",
      leadSource: "Conference",
      leadScore: 78,
      lastContact: "2025-04-07T09:30:00",
      tags: ["healthcare", "mid-value", "support"],
    },
  },
  {
    id: 4,
    title: "Contract Discussion",
    date: "2025-04-12T11:00:00",
    duration: 90,
    type: "virtual",
    status: "confirmed",
    lead: {
      id: 104,
      name: "Robert Taylor",
      email: "robert.t@example.com",
      phone: "(555) 345-6789",
      company: "Financial Services Ltd.",
      position: "CEO",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "101 Finance Ave, New York, NY",
      notes: "Final discussion before contract signing. Interested in full suite of AI products.",
      leadSource: "LinkedIn",
      leadScore: 95,
      lastContact: "2025-04-10T15:45:00",
      tags: ["finance", "high-value", "executive"],
    },
  },
  {
    id: 5,
    title: "Onboarding Session",
    date: "2025-04-10T09:00:00",
    duration: 120,
    type: "in-person",
    status: "completed",
    lead: {
      id: 105,
      name: "Amanda Lopez",
      email: "amanda.l@example.com",
      phone: "(555) 456-7890",
      company: "Retail Chains Inc.",
      position: "IT Director",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "202 Shop Blvd, Miami, FL",
      notes: "New customer onboarding for AI Ecommerce solution. Requires custom integration with existing POS system.",
      leadSource: "Trade Show",
      leadScore: 88,
      lastContact: "2025-04-05T13:20:00",
      tags: ["retail", "mid-value", "technical"],
    },
  },
  {
    id: 6,
    title: "Strategy Session",
    date: "2025-04-15T13:30:00",
    duration: 60,
    type: "virtual",
    status: "confirmed",
    lead: {
      id: 106,
      name: "David Wilson",
      email: "david.w@example.com",
      phone: "(555) 567-8901",
      company: "Education Innovations",
      position: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "303 Learning Lane, Austin, TX",
      notes: "Discussing AI Knowledge implementation strategy for their online learning platform.",
      leadSource: "Email Campaign",
      leadScore: 72,
      lastContact: "2025-04-08T10:10:00",
      tags: ["education", "mid-value", "knowledge"],
    },
  },
  {
    id: 7,
    title: "Technical Assessment",
    date: "2025-04-13T10:00:00",
    duration: 90,
    type: "virtual",
    status: "confirmed",
    lead: {
      id: 107,
      name: "Emily Rodriguez",
      email: "emily.r@example.com",
      phone: "(555) 678-9012",
      company: "Manufacturing Solutions",
      position: "CIO",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "404 Factory Road, Detroit, MI",
      notes:
        "Technical assessment for AI integration with existing manufacturing systems. Concerned about data security.",
      leadSource: "Partner Referral",
      leadScore: 81,
      lastContact: "2025-04-09T16:30:00",
      tags: ["manufacturing", "high-value", "technical"],
    },
  },
  {
    id: 8,
    title: "Quarterly Review",
    date: "2025-04-14T15:00:00",
    duration: 60,
    type: "in-person",
    status: "confirmed",
    lead: {
      id: 108,
      name: "Thomas Brown",
      email: "thomas.b@example.com",
      phone: "(555) 789-0123",
      company: "Logistics Pro",
      position: "Operations Director",
      avatar: "/placeholder.svg?height=40&width=40",
      address: "505 Shipping Lane, Seattle, WA",
      notes: "Quarterly review of AI Support implementation. Looking to expand to AI Sales Agent in Q3.",
      leadSource: "Existing Customer",
      leadScore: 90,
      lastContact: "2025-04-07T11:45:00",
      tags: ["logistics", "high-value", "expansion"],
    },
  },
]

// Calendar Day component
function CalendarDay({ day, currentMonth, appointments, onSelectAppointment }) {
  const dayAppointments = appointments.filter((appointment) => isSameDay(parseISO(appointment.date), day))

  const isToday = isSameDay(day, new Date())
  const isCurrentMonth = isSameMonth(day, currentMonth)
  const isWeekend = day.getDay() === 0 || day.getDay() === 6

  // Get appointment type colors for the dot indicators
  const getAppointmentTypeColor = (type) => {
    return type === "virtual" ? "bg-emerald-500 dark:bg-emerald-400" : "bg-purple-500 dark:bg-purple-400"
  }

  return (
    <div
      className={`min-h-[120px] border p-2 transition-all duration-200 ${
        !isCurrentMonth
          ? "bg-gray-50/50 text-gray-400 dark:bg-gray-800/30 dark:text-gray-500"
          : "bg-white dark:bg-gray-800"
      } ${isToday ? "bg-blue-50 ring-2 ring-blue-500/20 dark:bg-blue-900/20" : ""} ${
        isWeekend && isCurrentMonth ? "bg-gray-50/80 dark:bg-gray-800/60" : ""
      } hover:bg-gray-50/80 dark:hover:bg-gray-700/50`}
    >
      <div className="flex justify-between">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium ${
            isToday ? "bg-blue-500 text-white" : isWeekend && isCurrentMonth ? "text-gray-500 dark:text-gray-400" : ""
          }`}
        >
          {format(day, "d")}
        </span>
        {dayAppointments.length > 0 && (
          <div className="flex -space-x-1">
            {dayAppointments.slice(0, 3).map((appointment) => (
              <div
                key={`dot-${appointment.id}`}
                className={`h-2 w-2 rounded-full ${getAppointmentTypeColor(appointment.type)}`}
              />
            ))}
            {dayAppointments.length > 3 && (
              <span className="ml-1 text-xs text-gray-500">+{dayAppointments.length - 3}</span>
            )}
          </div>
        )}
      </div>
      <div className="mt-2 space-y-1.5">
        {dayAppointments.map((appointment) => (
          <button
            key={appointment.id}
            onClick={() => onSelectAppointment(appointment)}
            className={`group w-full overflow-hidden rounded-md px-2 py-1.5 text-left text-xs transition-all hover:shadow-md ${
              appointment.type === "virtual"
                ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:hover:bg-emerald-800/60"
                : "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:hover:bg-purple-800/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{format(parseISO(appointment.date), "h:mm a")}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  appointment.type === "virtual"
                    ? "bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200"
                    : "bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200"
                }`}
              >
                {appointment.type === "virtual" ? "Virtual" : "In-Person"}
              </span>
            </div>
            <div className="mt-0.5 truncate">{appointment.title}</div>
            <div className="mt-0.5 truncate text-[10px] text-gray-600 dark:text-gray-400">
              {appointment.lead.name} · {appointment.lead.company}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Appointment Details component
function AppointmentDetails({ appointment, onClose }) {
  if (!appointment) return null

  const { lead } = appointment

  return (
    <Card className="mb-6 w-full shadow-lg" id="appointment-details">
      <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge
              variant={appointment.type === "virtual" ? "outline" : "secondary"}
              className={
                appointment.type === "virtual"
                  ? "border-emerald-500 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
                  : "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/40 dark:text-purple-300"
              }
            >
              {appointment.type === "virtual" ? "Virtual" : "In-Person"}
            </Badge>
            <Badge
              variant="outline"
              className={
                appointment.status === "confirmed"
                  ? "border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
                  : "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
              }
            >
              {appointment.status === "confirmed" ? "Confirmed" : "Completed"}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl">{appointment.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {format(parseISO(appointment.date), "EEEE, MMMM d, yyyy 'at' h:mm a")} ({appointment.duration} min)
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14 border-2 border-blue-100 dark:border-blue-900">
            <AvatarImage src={lead.avatar} alt={lead.name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              {lead.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-lg font-medium">{lead.name}</h3>
            <p className="text-sm text-gray-500">
              {lead.position} at {lead.company}
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {lead.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-sm">
          <div className="flex items-center gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800/60">
            <Phone className="h-4 w-4 text-blue-500" />
            <span>{lead.phone}</span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800/60">
            <User className="h-4 w-4 text-blue-500" />
            <span>{lead.email}</span>
          </div>
          <div className="flex items-start gap-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800/60">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span>{lead.address}</span>
          </div>
        </div>
        <div className="mt-4 rounded-md border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-900/50 dark:bg-blue-900/20">
          <h4 className="text-sm font-medium text-blue-700 dark:text-blue-400">Notes</h4>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{lead.notes}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800/30">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-gray-500">Lead Score:</span>
            <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                style={{ width: `${lead.leadScore}%` }}
              />
            </div>
            <span className="text-xs font-medium">{lead.leadScore}/100</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Source: {lead.leadSource}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
          >
            Reschedule
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            View Full Profile
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Stats Card component
function StatsCard({ title, value, description, icon }) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-full bg-blue-50 p-1.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function AppointmentsPage() {
  const { user, organization } = useAuth()
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 11)) // April 11, 2025
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [activeTab, setActiveTab] = useState("calendar")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const detailsRef = useRef(null)

  // Auto-scroll to appointment details when selected
  useEffect(() => {
    if (selectedAppointment && detailsRef.current) {
      const element = document.getElementById("appointment-details")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [selectedAppointment])

  // Calculate days to display in the calendar
  const firstDayOfMonth = startOfMonth(currentMonth)
  const lastDayOfMonth = endOfMonth(currentMonth)
  const startDate = subDays(firstDayOfMonth, firstDayOfMonth.getDay())
  const endDate = addDays(lastDayOfMonth, 6 - lastDayOfMonth.getDay())

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  // Handle month navigation
  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  // Stats for the current month
  const totalAppointments = mockAppointments.length
  const virtualAppointments = mockAppointments.filter((a) => a.type === "virtual").length
  const inPersonAppointments = mockAppointments.filter((a) => a.type === "in-person").length
  const confirmedAppointments = mockAppointments.filter((a) => a.status === "confirmed").length

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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
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
            <Button variant="ghost" size="icon">
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
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-lg font-semibold">Appointments</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search appointments..." className="pl-8 w-64" />
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
                        .join("") || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span>{organization?.name || "Organization"}</span>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{organization?.name || "Organization"}</DropdownMenuLabel>
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
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Calendar className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-6" ref={detailsRef}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Appointments"
              value={totalAppointments}
              description="This month"
              icon={<Calendar className="h-4 w-4" />}
            />
            <StatsCard
              title="Virtual Meetings"
              value={virtualAppointments}
              description={`${Math.round((virtualAppointments / totalAppointments) * 100)}% of total`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="14" height="14" x="5" y="5" rx="2" />
                  <path d="m12 4-7 5 7 5 7-5-7-5Z" />
                  <path d="M5 19v-3" />
                  <path d="M19 19v-3" />
                </svg>
              }
            />
            <StatsCard
              title="In-Person Meetings"
              value={inPersonAppointments}
              description={`${Math.round((inPersonAppointments / totalAppointments) * 100)}% of total`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" x2="6" y1="1" y2="4" />
                  <line x1="10" x2="10" y1="1" y2="4" />
                  <line x1="14" x2="14" y1="1" y2="4" />
                </svg>
              }
            />
            <StatsCard
              title="Confirmed"
              value={confirmedAppointments}
              description={`${Math.round((confirmedAppointments / totalAppointments) * 100)}% confirmation rate`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />
          </div>

          <Tabs defaultValue="calendar" className="w-full mt-6" onValueChange={setActiveTab}>
            <div className="flex items-center justify-between">
              <TabsList className="bg-blue-50 dark:bg-gray-800/60">
                <TabsTrigger
                  value="calendar"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
                >
                  Calendar
                </TabsTrigger>
                <TabsTrigger value="list" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
                  List View
                </TabsTrigger>
              </TabsList>

              {activeTab === "calendar" && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previousMonth}
                    className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {format(currentMonth, "MMMM yyyy")}
                  </h2>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextMonth}
                    className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <TabsContent value="calendar" className="mt-4">
              {selectedAppointment && (
                <AppointmentDetails appointment={selectedAppointment} onClose={() => setSelectedAppointment(null)} />
              )}

              <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-md dark:border-blue-900/30 dark:bg-gray-800">
                <div className="grid grid-cols-7 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 divide-x divide-y divide-gray-100 dark:divide-gray-700">
                  {days.map((day) => (
                    <CalendarDay
                      key={day.toString()}
                      day={day}
                      currentMonth={currentMonth}
                      appointments={mockAppointments}
                      onSelectAppointment={setSelectedAppointment}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <span>Virtual Meeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span>In-Person Meeting</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-4">
              <Card className="overflow-hidden border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>View and manage all your scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {mockAppointments
                      .sort((a, b) => new Date(a.date) - new Date(b.date))
                      .map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60 cursor-pointer"
                          onClick={() => setSelectedAppointment(appointment)}
                        >
                          <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10 border-2 border-blue-100 dark:border-blue-900">
                              <AvatarImage src={appointment.lead.avatar} alt={appointment.lead.name} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                                {appointment.lead.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{appointment.title}</h3>
                              <p className="text-sm text-gray-500">
                                {format(parseISO(appointment.date), "MMM d, yyyy 'at' h:mm a")} ({appointment.duration}{" "}
                                min)
                              </p>
                              <p className="text-sm text-gray-500">
                                {appointment.lead.name} - {appointment.lead.company}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={appointment.type === "virtual" ? "outline" : "secondary"}
                              className={
                                appointment.type === "virtual"
                                  ? "border-emerald-500 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
                                  : "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/40 dark:text-purple-300"
                              }
                            >
                              {appointment.type === "virtual" ? "Virtual" : "In-Person"}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="rounded-full hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
