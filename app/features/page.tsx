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
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                F
              </div>
              <span>Foundations AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <DropdownMenu open={productsOpen} onOpenChange={setProductsOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    className="size-4 transition-transform duration-200"
                    style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2">
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-sales-agent" className="flex items-center gap-2 p-2 cursor-pointer">
                    <Bot className="size-4 text-primary" />
                    <div>
                      <div className="font-medium">AI Sales Agent</div>
                      <div className="text-xs text-muted-foreground">Lead generation & CRM</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-marketing" className="flex items-center gap-2 p-2 cursor-pointer">
                    <LineChart className="size-4 text-primary" />
                    <div>
                      <div className="font-medium">AI Marketing</div>
                      <div className="text-xs text-muted-foreground">Ads, SEO & content</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-ecommerce" className="flex items-center gap-2 p-2 cursor-pointer">
                    <ShoppingCart className="size-4 text-primary" />
                    <div>
                      <div className="font-medium">AI E-commerce</div>
                      <div className="text-xs text-muted-foreground">Online store automation</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-support" className="flex items-center gap-2 p-2 cursor-pointer">
                    <MessageSquare className="size-4 text-primary" />
                    <div>
                      <div className="font-medium">AI Support</div>
                      <div className="text-xs text-muted-foreground">24/7 customer service</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ai-knowledge" className="flex items-center gap-2 p-2 cursor-pointer">
                    <FileText className="size-4 text-primary" />
                    <div>
                      <div className="font-medium">AI Knowledge Engine</div>
                      <div className="text-xs text-muted-foreground">Smart information assistant</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/features"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium"
                  onClick={() => setProductsOpen(!productsOpen)}
                  aria-expanded={productsOpen}
                >
                  Products
                  <ChevronDown
                    className="size-4 transition-transform duration-200"
                    style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {productsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-3 border-l pl-4">
                    <Link
                      href="/products/ai-sales-agent"
                      className="py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">AI Sales Agent</div>
                      <div className="text-xs text-muted-foreground">Lead generation & CRM</div>
                    </Link>
                    <Link
                      href="/products/ai-marketing"
                      className="py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">AI Marketing</div>
                      <div className="text-xs text-muted-foreground">Ads, SEO & content</div>
                    </Link>
                    <Link
                      href="/products/ai-ecommerce"
                      className="py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">AI E-commerce</div>
                      <div className="text-xs text-muted-foreground">Online store automation</div>
                    </Link>
                    <Link href="/products/ai-support" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                      <div className="font-medium">AI Support</div>
                      <div className="text-xs text-muted-foreground">24/7 customer service</div>
                    </Link>
                    <Link
                      href="/products/ai-knowledge"
                      className="py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">AI Knowledge Engine</div>
                      <div className="text-xs text-muted-foreground">Smart information assistant</div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="/#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                  Features
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  Powerful AI Features for Your Business
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover the comprehensive suite of AI-powered features that make Foundations AI the ultimate platform
                  for building, operating, and scaling your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-4xl mx-auto mt-8"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-border/40">
                  <Image
                    src="/placeholder.svg?height=500&width=1000&text=Foundations+AI+Platform+Overview"
                    width={1000}
                    height={500}
                    alt="Foundations AI Platform Overview"
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 md:p-8 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">Complete AI Ecosystem</h2>
                      <p className="text-white/80 max-w-2xl">
                        A unified platform with specialized AI agents for every aspect of your business
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Categories Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Explore Our Feature Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Filter by category to discover the specific features that matter most to your business needs.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("all")}
              >
                All Features
              </Button>
              <Button
                variant={activeTab === "sales" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("sales")}
              >
                <Bot className="mr-2 size-4" />
                Sales
              </Button>
              <Button
                variant={activeTab === "marketing" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("marketing")}
              >
                <LineChart className="mr-2 size-4" />
                Marketing
              </Button>
              <Button
                variant={activeTab === "ecommerce" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("ecommerce")}
              >
                <ShoppingCart className="mr-2 size-4" />
                E-commerce
              </Button>
              <Button
                variant={activeTab === "support" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("support")}
              >
                <MessageSquare className="mr-2 size-4" />
                Support
              </Button>
              <Button
                variant={activeTab === "knowledge" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("knowledge")}
              >
                <FileText className="mr-2 size-4" />
                Knowledge
              </Button>
              <Button
                variant={activeTab === "platform" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveTab("platform")}
              >
                <Cpu className="mr-2 size-4" />
                Platform
              </Button>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features[activeTab].map((feature, i) => (
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
          </div>
        </section>

        {/* Feature Spotlight Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Spotlight
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a closer look at some of our most powerful and innovative features.
              </p>
            </motion.div>

            <div className="space-y-24">
              {/* Spotlight 1: AI Knowledge Engine */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4 px-2 py-1 text-xs font-medium" variant="outline">
                    AI Knowledge Engine
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform How You Work With Information</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI Knowledge Engine helps you understand, connect, and leverage all your information
                    sources—documents, websites, videos, and more—to gain valuable insights and make better decisions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Multi-Source Understanding</h4>
                        <p className="text-sm text-muted-foreground">
                          Process and understand information from PDFs, websites, videos, audio files, and more.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Intelligent Connections</h4>
                        <p className="text-sm text-muted-foreground">
                          Discover hidden relationships between concepts across different sources.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Source-Backed Answers</h4>
                        <p className="text-sm text-muted-foreground">
                          Get accurate answers with clear citations to your original sources.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/products/ai-knowledge">
                      <Button className="rounded-full">
                        Learn More
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=AI+Knowledge+Engine"
                      width={800}
                      height={600}
                      alt="AI Knowledge Engine"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 blur-3xl opacity-70"></div>
                </motion.div>
              </div>

              {/* Spotlight 2: AI Sales Agent */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative order-2 md:order-1"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=AI+Sales+Agent"
                      width={800}
                      height={600}
                      alt="AI Sales Agent"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl opacity-70"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-1 md:order-2"
                >
                  <Badge className="mb-4 px-2 py-1 text-xs font-medium" variant="outline">
                    AI Sales Agent
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Automate Your Sales Process</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI Sales Agent handles lead generation, qualification, and follow-ups, allowing your team to
                    focus on closing deals and building relationships.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Automated Lead Generation</h4>
                        <p className="text-sm text-muted-foreground">
                          Identify and qualify potential customers without manual prospecting.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Intelligent Follow-ups</h4>
                        <p className="text-sm text-muted-foreground">
                          Automatically send personalized follow-up messages at the optimal time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">CRM Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly connect with your existing CRM system for unified customer data.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/products/ai-sales-agent">
                      <Button className="rounded-full">
                        Learn More
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Spotlight 3: Platform Features */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4 px-2 py-1 text-xs font-medium" variant="outline">
                    Platform
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Enterprise-Grade Foundation</h3>
                  <p className="text-muted-foreground mb-6">
                    Built on a secure, scalable, and flexible platform that adapts to your business needs and grows with
                    you.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Enterprise Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Protect your data with enterprise-grade security and compliance features.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Seamless Integrations</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with your existing tools and platforms for a unified workflow.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 mt-1">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Customizable AI Models</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailor AI behavior to your specific business needs and industry requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="rounded-full">
                      Contact Sales
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Enterprise+Platform"
                      width={800}
                      height={600}
                      alt="Enterprise Platform"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl opacity-70"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Comparison
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Compare Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the right combination of AI solutions for your business needs.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="features">Feature Comparison</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing Comparison</TabsTrigger>
                  </TabsList>
                  <TabsContent value="features" className="w-full">
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left p-4 font-medium">Feature</th>
                            <th className="text-center p-4 font-medium">AI Sales Agent</th>
                            <th className="text-center p-4 font-medium">AI Marketing</th>
                            <th className="text-center p-4 font-medium">AI E-commerce</th>
                            <th className="text-center p-4 font-medium">AI Support</th>
                            <th className="text-center p-4 font-medium">AI Knowledge</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-4 font-medium">Automated workflows</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Natural language processing</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Lead generation</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Content creation</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">24/7 customer service</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">—</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Multi-source processing</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">—</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Analytics & reporting</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Third-party integrations</td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                            <td className="text-center p-4">
                              <Check className="mx-auto size-5 text-green-500" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="pricing" className="w-full">
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left p-4 font-medium">Plan</th>
                            <th className="text-center p-4 font-medium">AI Sales Agent</th>
                            <th className="text-center p-4 font-medium">AI Marketing</th>
                            <th className="text-center p-4 font-medium">AI E-commerce</th>
                            <th className="text-center p-4 font-medium">AI Support</th>
                            <th className="text-center p-4 font-medium">AI Knowledge</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-4 font-medium">Starter</td>
                            <td className="text-center p-4">$49/mo</td>
                            <td className="text-center p-4">$49/mo</td>
                            <td className="text-center p-4">$79/mo</td>
                            <td className="text-center p-4">$29/mo</td>
                            <td className="text-center p-4">$29/mo</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Professional</td>
                            <td className="text-center p-4">$99/mo</td>
                            <td className="text-center p-4">$99/mo</td>
                            <td className="text-center p-4">$149/mo</td>
                            <td className="text-center p-4">$79/mo</td>
                            <td className="text-center p-4">$79/mo</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Enterprise</td>
                            <td className="text-center p-4">Custom</td>
                            <td className="text-center p-4">Custom</td>
                            <td className="text-center p-4">Custom</td>
                            <td className="text-center p-4">Custom</td>
                            <td className="text-center p-4">Custom</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Bundle Discount</td>
                            <td className="text-center p-4" colSpan={5}>
                              Save 20% when you purchase 3 or more products together
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of businesses already using Foundations AI to automate, optimize, and scale their
                operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  F
                </div>
                <span>Foundations AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Democratizing business ownership with autonomous AI agents that build, operate, and scale your business
                idea.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products/ai-sales-agent"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AI Sales Agent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/ai-marketing"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AI Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/ai-ecommerce"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AI E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/ai-support"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AI Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/ai-knowledge"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    AI Knowledge Engine
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-fore
ground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Foundations AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
