"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
  ChevronDown,
  BarChart2,
  Layers,
  Users,
  Shield,
  Globe,
  Cpu,
  Database,
  Code,
  Settings,
  RefreshCw,
  Sparkles,
  Lightbulb,
  Clock,
  Lock,
  Brain,
  Upload,
  Link2,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FeaturesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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

  const features = {
    all: [
      {
        title: "AI Sales Agent",
        description: "Automate lead generation, qualification, and follow-ups with our intelligent sales assistant.",
        icon: <Bot className="size-5" />,
        category: "sales",
        color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
      },
      {
        title: "AI Marketing",
        description: "Create, optimize, and analyze marketing campaigns across multiple channels automatically.",
        icon: <LineChart className="size-5" />,
        category: "marketing",
        color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
      },
      {
        title: "AI E-commerce",
        description: "Manage inventory, optimize pricing, and personalize shopping experiences with AI.",
        icon: <ShoppingCart className="size-5" />,
        category: "ecommerce",
        color: "bg-green-500/10 text-green-500 dark:bg-green-500/20",
      },
      {
        title: "AI Support",
        description: "Provide 24/7 customer service with intelligent chatbots that understand customer needs.",
        icon: <MessageSquare className="size-5" />,
        category: "support",
        color: "bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20",
      },
      {
        title: "AI Knowledge Engine",
        description:
          "Transform how you interact with information by connecting and analyzing all your content sources.",
        icon: <FileText className="size-5" />,
        category: "knowledge",
        color: "bg-red-500/10 text-red-500 dark:bg-red-500/20",
      },
      {
        title: "Multi-Source Upload",
        description: "Upload PDFs, websites, videos, audio files, documents, and more for AI processing.",
        icon: <Upload className="size-5" />,
        category: "knowledge",
        color: "bg-red-500/10 text-red-500 dark:bg-red-500/20",
      },
      {
        title: "Intelligent Connections",
        description: "Discover hidden relationships between concepts across different information sources.",
        icon: <Link2 className="size-5" />,
        category: "knowledge",
        color: "bg-red-500/10 text-red-500 dark:bg-red-500/20",
      },
      {
        title: "Source-Backed Answers",
        description: "Get answers with clear citations to your original sources for complete transparency.",
        icon: <BookOpen className="size-5" />,
        category: "knowledge",
        color: "bg-red-500/10 text-red-500 dark:bg-red-500/20",
      },
      {
        title: "Automated Lead Generation",
        description: "Identify and qualify potential customers without manual prospecting.",
        icon: <Users className="size-5" />,
        category: "sales",
        color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
      },
      {
        title: "Intelligent Follow-ups",
        description: "Automatically send personalized follow-up messages at the optimal time.",
        icon: <Clock className="size-5" />,
        category: "sales",
        color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
      },
      {
        title: "Content Generation",
        description: "Create engaging marketing content tailored to your target audience.",
        icon: <Sparkles className="size-5" />,
        category: "marketing",
        color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
      },
      {
        title: "Campaign Optimization",
        description: "Automatically adjust campaigns based on performance data for maximum ROI.",
        icon: <RefreshCw className="size-5" />,
        category: "marketing",
        color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
      },
      {
        title: "Dynamic Pricing",
        description: "Optimize product pricing in real-time based on demand, competition, and inventory.",
        icon: <BarChart2 className="size-5" />,
        category: "ecommerce",
        color: "bg-green-500/10 text-green-500 dark:bg-green-500/20",
      },
      {
        title: "Personalized Recommendations",
        description: "Offer tailored product suggestions to increase conversion rates and average order value.",
        icon: <Lightbulb className="size-5" />,
        category: "ecommerce",
        color: "bg-green-500/10 text-green-500 dark:bg-green-500/20",
      },
      {
        title: "Multilingual Support",
        description: "Provide customer service in multiple languages with our AI translation capabilities.",
        icon: <Globe className="size-5" />,
        category: "support",
        color: "bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20",
      },
      {
        title: "Sentiment Analysis",
        description: "Understand customer emotions and adjust responses accordingly for better satisfaction.",
        icon: <Brain className="size-5" />,
        category: "support",
        color: "bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20",
      },
      {
        title: "Advanced Analytics",
        description: "Gain deep insights into performance across all your AI agents and business operations.",
        icon: <BarChart2 className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Seamless Integrations",
        description: "Connect with your existing tools and platforms for a unified workflow.",
        icon: <Layers className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Enterprise Security",
        description: "Protect your data with enterprise-grade security and compliance features.",
        icon: <Shield className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "API Access",
        description: "Build custom solutions with our comprehensive API and developer tools.",
        icon: <Code className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Customizable AI Models",
        description: "Tailor AI behavior to your specific business needs and industry requirements.",
        icon: <Settings className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Scalable Infrastructure",
        description: "Grow without limits on our cloud-native platform designed for enterprise scale.",
        icon: <Database className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Continuous Learning",
        description: "AI agents that improve over time by learning from interactions and feedback.",
        icon: <RefreshCw className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
      {
        title: "Privacy-First Design",
        description: "Your data remains private and secure, never used to train our models.",
        icon: <Lock className="size-5" />,
        category: "platform",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
      },
    ],
    sales: [],
    marketing: [],
    ecommerce: [],
    support: [],
    knowledge: [],
    platform: [],
  }

  // Populate category-specific arrays
  features.all.forEach((feature) => {
    if (features[feature.category]) {
      features[feature.category].push(feature)
    }
  })

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Powerful Features for Every Business
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the comprehensive suite of AI-powered features designed to transform your business operations and
              drive growth.
            </p>
          </motion.div>

          <div className="mb-12">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="rounded-full p-1 flex flex-nowrap">
                  <TabsTrigger value="all" className="rounded-full px-4">
                    All Features
                  </TabsTrigger>
                  <TabsTrigger value="sales" className="rounded-full px-4">
                    Sales
                  </TabsTrigger>
                  <TabsTrigger value="marketing" className="rounded-full px-4">
                    Marketing
                  </TabsTrigger>
                  <TabsTrigger value="ecommerce" className="rounded-full px-4">
                    E-commerce
                  </TabsTrigger>
                  <TabsTrigger value="support" className="rounded-full px-4">
                    Support
                  </TabsTrigger>
                  <TabsTrigger value="knowledge" className="rounded-full px-4">
                    Knowledge
                  </TabsTrigger>
                  <TabsTrigger value="platform" className="rounded-full px-4">
                    Platform
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.all.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="sales" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.sales.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="marketing" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.marketing.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="ecommerce" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.ecommerce.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="support" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.support.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="knowledge" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.knowledge.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="platform" className="w-full">
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {features.platform.map((feature, i) => (
                    <motion.div key={i} variants={item} transition={{ delay: i * 0.05 }}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className={`size-10 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional sections continue... */}
    </div>
  )
}
