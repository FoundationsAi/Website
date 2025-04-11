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
  Star,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
  ChevronDown,
  Clock,
  Globe,
  Ticket,
  BookOpen,
  BarChart,
  Users,
  Zap,
  HeartPulse,
  DollarSign,
  Headphones,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AISupportPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

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

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
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
                      <div className="text-xs text-muted-foreground">RAG-powered insights</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
                      <div className="text-xs text-muted-foreground">RAG-powered insights</div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
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
        <section className="w-full py-20 md:py-28 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                  AI Support
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  24/7 Customer Support That Never Sleeps
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  Deliver exceptional customer service around the clock with our affordable AI Support solution that
                  handles inquiries, resolves issues, and delights your customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                    Book a Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="size-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-foreground font-medium text-xs"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">350+</span> businesses using our AI Support
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="AI Support Dashboard"
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "92%", label: "Customer inquiries resolved automatically" },
                { value: "65%", label: "Reduction in support costs" },
                { value: "24/7", label: "Always-on customer service" },
                { value: "89%", label: "Customer satisfaction rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Support Automation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI Support solution handles every aspect of customer service, from answering questions to resolving
                complex issues.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Omnichannel Support",
                  description:
                    "Provide instant assistance across email, chat, social media, and voice channels at any time of day or night.",
                  icon: <Clock className="size-5" />,
                },
                {
                  title: "Multilingual Capabilities",
                  description:
                    "Communicate with customers in over 100 languages with natural, culturally-appropriate responses.",
                  icon: <Globe className="size-5" />,
                },
                {
                  title: "Intelligent Ticket Management",
                  description:
                    "Automatically categorize, prioritize, and route support tickets to the right AI or human agent.",
                  icon: <Ticket className="size-5" />,
                },
                {
                  title: "Knowledge Base Integration",
                  description:
                    "Leverage your existing documentation and continuously learn from new support interactions.",
                  icon: <BookOpen className="size-5" />,
                },
                {
                  title: "Sentiment Analysis",
                  description:
                    "Detect customer emotions and adapt responses to improve satisfaction and prevent escalations.",
                  icon: <HeartPulse className="size-5" />,
                },
                {
                  title: "Support Analytics",
                  description:
                    "Gain actionable insights into common issues, resolution times, and customer satisfaction metrics.",
                  icon: <BarChart className="size-5" />,
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple Setup, Instant Results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get your AI Support solution up and running in minutes, not weeks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden shadow-xl border border-border/40"
              >
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="AI Support Setup"
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Connect Your Knowledge Base",
                      description:
                        "Import your FAQs, help articles, and support documentation to train your AI on your specific products and services.",
                    },
                    {
                      step: "02",
                      title: "Set Up Your Channels",
                      description:
                        "Integrate with your existing support channels like email, chat widgets, social media, and phone systems.",
                    },
                    {
                      step: "03",
                      title: "Configure Escalation Rules",
                      description:
                        "Define when and how issues should be escalated to human agents based on complexity, sentiment, or customer value.",
                    },
                    {
                      step: "04",
                      title: "Go Live & Optimize",
                      description:
                        "Your AI Support solution begins handling customer inquiries while continuously learning and improving from each interaction.",
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-sm font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transform Your Customer Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of AI-powered support that improves customer satisfaction while reducing
                costs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6">
                  {[
                    {
                      title: "Dramatic Cost Savings",
                      description:
                        "Reduce support costs by up to 65% while handling more inquiries than ever before, with no need to hire additional staff.",
                      icon: <DollarSign className="size-5" />,
                    },
                    {
                      title: "Instant Response Times",
                      description:
                        "Eliminate wait times with immediate responses to customer inquiries, regardless of volume or time of day.",
                      icon: <Zap className="size-5" />,
                    },
                    {
                      title: "Consistent Customer Experience",
                      description:
                        "Deliver the same high-quality support experience to every customer, every time, without human variability.",
                      icon: <Headphones className="size-5" />,
                    },
                    {
                      title: "Scalable Support Operations",
                      description:
                        "Handle sudden spikes in support volume without stress, delays, or additional resources.",
                      icon: <Users className="size-5" />,
                    },
                    {
                      title: "Continuous Improvement",
                      description:
                        "Your AI Support solution learns from every interaction, becoming more effective and personalized over time.",
                      icon: <TrendingUp className="size-5" />,
                    },
                    {
                      title: "Focus on High-Value Activities",
                      description:
                        "Free your human agents to handle complex issues and build deeper customer relationships.",
                      icon: <HeartPulse className="size-5" />,
                    },
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    width={600}
                    height={800}
                    alt="AI Support Benefits"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                </div>
                <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from businesses that have transformed their customer support with our AI solution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "We reduced our support costs by 72% while improving our customer satisfaction scores. The AI handles over 90% of inquiries without human intervention.",
                  author: "Rebecca Chen",
                  role: "Customer Experience Director, CloudTech",
                  rating: 5,
                },
                {
                  quote:
                    "The multilingual support has been a game-changer for our global business. Our customers can get help in their native language at any time of day.",
                  author: "Carlos Rodriguez",
                  role: "COO, Global Solutions Inc.",
                  rating: 5,
                },
                {
                  quote:
                    "We were skeptical about AI support, but the results speak for themselves. Response times dropped from hours to seconds, and our customers love it.",
                  author: "Sarah Johnson",
                  role: "Support Manager, E-commerce Express",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Integrations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Works With Your Favorite Tools</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI Support solution seamlessly connects with the platforms and tools you already use.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-center"
                  >
                    <div className="h-12 w-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm">
                      Logo {i + 1}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Affordable Plans for Every Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the right plan for your support needs and scale as you grow.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      Monthly
                    </TabsTrigger>
                    <TabsTrigger value="annually" className="rounded-full px-6">
                      Annually (Save 20%)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Starter",
                        price: "$99",
                        description: "Perfect for small businesses and startups.",
                        features: [
                          "Up to 500 support inquiries/month",
                          "Email & chat support channels",
                          "Basic knowledge base integration",
                          "Business hours availability",
                          "Standard response templates",
                        ],
                        cta: "Start Free Trial",
                      },
                      {
                        name: "Professional",
                        price: "$249",
                        description: "Ideal for growing businesses.",
                        features: [
                          "Up to 2,000 support inquiries/month",
                          "All channels (email, chat, social)",
                          "Advanced knowledge base integration",
                          "24/7 availability",
                          "Multilingual support (10 languages)",
                          "Sentiment analysis",
                          "Priority escalation",
                        ],
                        cta: "Start Free Trial",
                        popular: true,
                      },
                      {
                        name: "Enterprise",
                        price: "$499",
                        description: "For organizations with complex support needs.",
                        features: [
                          "Unlimited support inquiries",
                          "All channels + voice support",
                          "Custom knowledge base integration",
                          "24/7 availability with SLAs",
                          "Multilingual support (100+ languages)",
                          "Advanced analytics & reporting",
                          "Dedicated account manager",
                        ],
                        cta: "Contact Sales",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Starter",
                        price: "$79",
                        description: "Perfect for small businesses and startups.",
                        features: [
                          "Up to 500 support inquiries/month",
                          "Email & chat support channels",
                          "Basic knowledge base integration",
                          "Business hours availability",
                          "Standard response templates",
                        ],
                        cta: "Start Free Trial",
                      },
                      {
                        name: "Professional",
                        price: "$199",
                        description: "Ideal for growing businesses.",
                        features: [
                          "Up to 2,000 support inquiries/month",
                          "All channels (email, chat, social)",
                          "Advanced knowledge base integration",
                          "24/7 availability",
                          "Multilingual support (10 languages)",
                          "Sentiment analysis",
                          "Priority escalation",
                        ],
                        cta: "Start Free Trial",
                        popular: true,
                      },
                      {
                        name: "Enterprise",
                        price: "$399",
                        description: "For organizations with complex support needs.",
                        features: [
                          "Unlimited support inquiries",
                          "All channels + voice support",
                          "Custom knowledge base integration",
                          "24/7 availability with SLAs",
                          "Multilingual support (100+ languages)",
                          "Advanced analytics & reporting",
                          "Dedicated account manager",
                        ],
                        cta: "Contact Sales",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our AI Support solution.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Will customers know they're talking to an AI?",
                    answer:
                      "It's entirely up to you. Our AI Support solution can be configured to identify itself as an AI assistant or to present itself as a regular support agent. Many of our customers find that transparency about AI use actually increases customer trust, while others prefer a seamless experience where customers focus on getting their issues resolved rather than who (or what) is helping them.",
                  },
                  {
                    question: "How does the AI handle complex or unusual support requests?",
                    answer:
                      "Our AI is trained to recognize when a request exceeds its capabilities or knowledge. When this happens, it can either ask clarifying questions to better understand the issue, or seamlessly escalate to a human agent based on your configured rules. The AI provides the human agent with a complete conversation history and context, ensuring a smooth handoff. Over time, as the AI observes how human agents handle complex issues, it learns to handle more sophisticated requests.",
                  },
                  {
                    question: "Can we customize the AI's tone and responses?",
                    answer:
                      "Absolutely. You have complete control over the AI's communication style, including tone (formal, casual, friendly, professional), language use, and brand voice. You can also create custom response templates for common scenarios and define how the AI should respond to specific types of inquiries. The AI will maintain consistency with your brand guidelines while still providing natural, conversational responses.",
                  },
                  {
                    question: "How quickly can we implement the AI Support solution?",
                    answer:
                      "Most customers are up and running within 1-3 days. The basic setup can be completed in just a few hours, especially if you already have a knowledge base or support documentation. The AI becomes more effective as it learns from your specific customer interactions, so while you'll see immediate benefits, performance will continue to improve over the first few weeks of use.",
                  },
                  {
                    question: "Is the AI Support solution secure and compliant?",
                    answer:
                      "Yes, security and compliance are top priorities. We're fully compliant with GDPR, CCPA, HIPAA (where applicable), and other relevant regulations. All data is encrypted both in transit and at rest, and we employ enterprise-grade security measures. We never use your customer data to train models for other clients, and you maintain full ownership of all information.",
                  },
                  {
                    question: "Can we start small and scale up later?",
                    answer:
                      "Yes, our flexible plans are designed to grow with your business. Many customers start with our Starter plan for a specific support channel (like website chat) and expand to additional channels as they see results. You can upgrade your plan at any time, and our team will help ensure a smooth transition as your support needs evolve.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
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
                Ready to Transform Your Customer Support?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join hundreds of businesses using our affordable AI Support solution to deliver exceptional customer
                service 24/7 while dramatically reducing costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Start Free Trial
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
