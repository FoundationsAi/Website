"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  ChevronDown,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Multi-Agent System",
      description:
        "CEO AI, Sales AI, Marketing AI, Finance AI, Operations AI—each with defined roles working together.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Retrieval-Augmented Generation",
      description: "AI pulls real knowledge from your business data, so it doesn't hallucinate and stays accurate.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Memory & Feedback Loop",
      description: "Session memory and feedback-driven ranking for increasingly smarter business decisions.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Fully secured infrastructure with AWS ECS Fargate, CodeBuild, and comprehensive monitoring.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem and pre-built connectors.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "AI Workforce Marketplace",
      description: "Buy, sell, and customize AI agents for specific business functions and industries.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Content continues here... */}
      </section>
    </div>
  )
}
