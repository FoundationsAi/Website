"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Star,
  Search,
  Filter,
  X,
  ChevronRight,
  Quote,
  Building,
  Users,
  ShoppingCart,
  MessageSquare,
  FileText,
  Bot,
  LineChart,
  ArrowRight,
  Menu,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define testimonial type
type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  company: string
  rating: number
  image?: string
  industry: string
  product: string
  featured?: boolean
  videoUrl?: string
}

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<{
    industry: string[]
    product: string[]
  }>({
    industry: [],
    product: [],
  })
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  // Define all testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Foundations AI has transformed how I run my e-commerce store. The AI agents handle everything from marketing to customer support, saving me 40+ hours per week. The ROI was immediate and continues to improve month over month.",
      author: "Sarah Johnson",
      role: "Founder",
      company: "Healthy Bites Co.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "E-commerce",
      product: "AI E-commerce",
      featured: true,
    },
    {
      id: 2,
      quote:
        "The AI marketing agent generated campaigns that outperformed our previous agency's work by 215%. The ROI is incredible, and it gets better every month as the AI learns from our audience's behavior.",
      author: "Michael Chen",
      role: "CMO",
      company: "GrowthLabs",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "SaaS",
      product: "AI Marketing",
    },
    {
      id: 3,
      quote:
        "Customer support was my biggest headache until I deployed the Foundations AI support agent. It handles 92% of inquiries without human intervention, even at 3 AM, and our customer satisfaction scores have increased by 34%.",
      author: "Emily Rodriguez",
      role: "Operations Lead",
      company: "StartupX",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Technology",
      product: "AI Support",
    },
    {
      id: 4,
      quote:
        "We've tried several AI solutions, but none compare to the autonomous capabilities of Foundations AI. It's like having a full-time team that never sleeps. Our sales cycle has shortened by 40% since implementation.",
      author: "David Kim",
      role: "CEO",
      company: "InnovateNow",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Consulting",
      product: "AI Sales Agent",
      featured: true,
      videoUrl: "#",
    },
    {
      id: 5,
      quote:
        "As a solo founder, Foundations AI has been a game-changer. I can focus on product vision while the AI handles operations across multiple business units. It's like having a co-founder who works 24/7.",
      author: "Lisa Patel",
      role: "Founder",
      company: "RemoteFirst",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Remote Work",
      product: "AI Knowledge Engine",
    },
    {
      id: 6,
      quote:
        "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 68% since switching to Foundations AI's autonomous agents. Our team can now focus on strategic initiatives.",
      author: "James Wilson",
      role: "COO",
      company: "ScaleUp Inc",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Finance",
      product: "AI Sales Agent",
    },
    {
      id: 7,
      quote:
        "The AI Knowledge Engine has transformed how we manage our institutional knowledge. New employees get up to speed 75% faster, and our experts spend less time answering the same questions repeatedly.",
      author: "Priya Sharma",
      role: "Head of Knowledge Management",
      company: "Global Consulting Group",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Consulting",
      product: "AI Knowledge Engine",
      featured: true,
    },
    {
      id: 8,
      quote:
        "Our e-commerce conversion rates increased by 32% within the first month of implementing Foundations AI. The personalized product recommendations and 24/7 support have transformed our customer experience.",
      author: "Thomas Wright",
      role: "E-commerce Director",
      company: "Urban Style",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Retail",
      product: "AI E-commerce",
    },
    {
      id: 9,
      quote:
        "The AI Marketing suite has revolutionized our content strategy. We're producing 3x more content at higher quality, and our engagement metrics have never been better. The SEO optimization is particularly impressive.",
      author: "Olivia Martinez",
      role: "Marketing Director",
      company: "ContentFirst",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Media",
      product: "AI Marketing",
      featured: true,
    },
    {
      id: 10,
      quote:
        "Our support team was initially skeptical about AI, but now they're its biggest advocates. The AI Support agent handles routine inquiries, allowing our team to focus on complex cases that truly need human expertise.",
      author: "Robert Johnson",
      role: "Customer Success Manager",
      company: "TechSupport Pro",
      rating: 4,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Technology",
      product: "AI Support",
    },
    {
      id: 11,
      quote:
        "The sales forecasting capabilities of the AI Sales Agent are uncanny. It's consistently more accurate than our veteran sales managers, which has transformed our inventory management and cash flow planning.",
      author: "Jennifer Lee",
      role: "VP of Sales",
      company: "Enterprise Solutions",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "B2B",
      product: "AI Sales Agent",
    },
    {
      id: 12,
      quote:
        "As a healthcare provider, data security is paramount. Foundations AI's enterprise-grade security and compliance features gave us the confidence to implement AI across our organization safely.",
      author: "Dr. Marcus Williams",
      role: "CTO",
      company: "HealthTech Innovations",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400",
      industry: "Healthcare",
      product: "AI Knowledge Engine",
    },
  ]

  // Get unique industries and products for filters
  const industries = [...new Set(testimonials.map((t) => t.industry))]
  const products = [...new Set(testimonials.map((t) => t.product))]

  // Filter testimonials based on search term and active filters
  useEffect(() => {
    let filtered = [...testimonials]

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (t) =>
          t.quote.toLowerCase().includes(term) ||
          t.author.toLowerCase().includes(term) ||
          t.company.toLowerCase().includes(term) ||
          t.industry.toLowerCase().includes(term) ||
          t.product.toLowerCase().includes(term),
      )
    }

    // Apply industry filters
    if (activeFilters.industry.length > 0) {
      filtered = filtered.filter((t) => activeFilters.industry.includes(t.industry))
    }

    // Apply product filters
    if (activeFilters.product.length > 0) {
      filtered = filtered.filter((t) => activeFilters.product.includes(t.product))
    }

    setFilteredTestimonials(filtered)
  }, [searchTerm, activeFilters])

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

  // Toggle filter
  const toggleFilter = (type: "industry" | "product", value: string) => {
    setActiveFilters((prev) => {
      const current = [...prev[type]]
      const index = current.indexOf(value)

      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }

      return {
        ...prev,
        [type]: current,
      }
    })
  }

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      industry: [],
      product: [],
    })
    setSearchTerm("")
  }

  // Animation variants
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
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
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
              <Link href="/features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
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
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Hear from Our Customers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how businesses across industries are transforming their operations with Foundations AI's
                autonomous agents.
              </p>
            </motion.div>

            {/* Featured Video Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl mb-20"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-20 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground">
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
                      className="size-8 ml-1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  width={1280}
                  height={720}
                  alt="Customer testimonial video thumbnail"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12 border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="David Kim" />
                      <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-lg">David Kim, CEO of InnovateNow</p>
                      <p className="text-muted-foreground">
                        "We've tried several AI solutions, but none compare to the autonomous capabilities of
                        Foundations AI."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="w-full py-6 border-y bg-background/95 backdrop-blur-lg transition-all duration-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search testimonials..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Filter className="size-4" /> Filters:
                </span>

                <Tabs defaultValue="industry" className="w-full md:w-auto">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="industry" className="rounded-full px-3 text-xs">
                      By Industry
                    </TabsTrigger>
                    <TabsTrigger value="product" className="rounded-full px-3 text-xs">
                      By Product
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="industry" className="mt-2 flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <Badge
                        key={industry}
                        variant={activeFilters.industry.includes(industry) ? "default" : "outline"}
                        className="rounded-full cursor-pointer"
                        onClick={() => toggleFilter("industry", industry)}
                      >
                        {industry}
                      </Badge>
                    ))}
                  </TabsContent>
                  <TabsContent value="product" className="mt-2 flex flex-wrap gap-2">
                    {products.map((product) => (
                      <Badge
                        key={product}
                        variant={activeFilters.product.includes(product) ? "default" : "outline"}
                        className="rounded-full cursor-pointer"
                        onClick={() => toggleFilter("product", product)}
                      >
                        {product}
                      </Badge>
                    ))}
                  </TabsContent>
                </Tabs>

                {(activeFilters.industry.length > 0 || activeFilters.product.length > 0 || searchTerm) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2">
                    <X className="size-3 mr-1" /> Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-4">No testimonials found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search term</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">
                    {filteredTestimonials.length} {filteredTestimonials.length === 1 ? "Testimonial" : "Testimonials"}
                  </h2>
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTestimonials.length} of {testimonials.length} testimonials
                  </div>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredTestimonials.map((testimonial) => (
                    <motion.div key={testimonial.id} variants={item}>
                      <Card
                        className={`h-full overflow-hidden border-border/40 ${testimonial.featured ? "border-primary shadow-lg" : ""} bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md`}
                      >
                        {testimonial.featured && (
                          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                            Featured
                          </div>
                        )}
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="mb-4 text-primary">
                            <Quote className="size-8 opacity-50" />
                          </div>
                          <div className="flex mb-4">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, j) => (
                                <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                              ))}
                          </div>
                          <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                            <Avatar className="size-12 border-2 border-background">
                              <AvatarImage src={testimonial.image} alt={testimonial.author} />
                              <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}, {testimonial.company}
                              </p>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs rounded-full">
                                  {testimonial.industry}
                                </Badge>
                                <Badge variant="outline" className="text-xs rounded-full">
                                  {testimonial.product}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Numbers Speak for Themselves</h2>
              <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Our customers are seeing real, measurable results with Foundations AI.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                { value: "92%", label: "Customer Satisfaction", icon: <Users className="size-6 text-primary" /> },
                { value: "68%", label: "Average Cost Reduction", icon: <Building className="size-6 text-primary" /> },
                { value: "215%", label: "Marketing ROI Increase", icon: <LineChart className="size-6 text-primary" /> },
                { value: "40+", label: "Hours Saved Per Week", icon: <Bot className="size-6 text-primary" /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border/40"
                >
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Testimonials */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Product Spotlights
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Success Across Our Product Suite</h2>
              <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                See how customers are succeeding with each of our AI products.
              </p>
            </div>

            <Tabs defaultValue="sales" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="rounded-full p-1">
                  <TabsTrigger value="sales" className="rounded-full px-4 gap-2">
                    <Bot className="size-4" /> Sales Agent
                  </TabsTrigger>
                  <TabsTrigger value="marketing" className="rounded-full px-4 gap-2">
                    <LineChart className="size-4" /> Marketing
                  </TabsTrigger>
                  <TabsTrigger value="ecommerce" className="rounded-full px-4 gap-2">
                    <ShoppingCart className="size-4" /> E-commerce
                  </TabsTrigger>
                  <TabsTrigger value="support" className="rounded-full px-4 gap-2">
                    <MessageSquare className="size-4" /> Support
                  </TabsTrigger>
                  <TabsTrigger value="knowledge" className="rounded-full px-4 gap-2">
                    <FileText className="size-4" /> Knowledge
                  </TabsTrigger>
                </TabsList>
              </div>

              {["sales", "marketing", "ecommerce", "support", "knowledge"].map((tab) => {
                const productName = `AI ${tab.charAt(0).toUpperCase() + tab.slice(1)}${tab === "sales" ? " Agent" : tab === "knowledge" ? " Engine" : ""}`
                const filteredByProduct = testimonials.filter((t) => t.product === productName)

                return (
                  <TabsContent key={tab} value={tab} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{productName}</h3>
                        <p className="text-muted-foreground mb-6">
                          {tab === "sales" &&
                            "Our AI Sales Agent automates lead generation, qualification, and nurturing to close more deals without human intervention."}
                          {tab === "marketing" &&
                            "AI Marketing creates, optimizes, and manages campaigns across channels for maximum ROI and engagement."}
                          {tab === "ecommerce" &&
                            "AI E-commerce handles product listings, inventory, pricing, and personalized recommendations to boost conversions."}
                          {tab === "support" &&
                            "AI Support provides 24/7 customer service, resolving issues instantly and escalating only when necessary."}
                          {tab === "knowledge" &&
                            "The AI Knowledge Engine transforms your business data into actionable insights with powerful RAG capabilities."}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild className="rounded-full">
                            <Link
                              href={`/products/ai-${tab}${tab === "sales" ? "-agent" : tab === "knowledge" ? "-engine" : ""}`}
                            >
                              Learn More
                              <ChevronRight className="ml-1 size-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6 border border-border/40">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {tab === "sales" && <Bot className="size-5" />}
                            {tab === "marketing" && <LineChart className="size-5" />}
                            {tab === "ecommerce" && <ShoppingCart className="size-5" />}
                            {tab === "support" && <MessageSquare className="size-5" />}
                            {tab === "knowledge" && <FileText className="size-5" />}
                          </div>
                          <div>
                            <h4 className="font-bold">Customer Results</h4>
                            <p className="text-sm text-muted-foreground">
                              Based on {filteredByProduct.length} testimonials
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {tab === "sales" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span>Sales Cycle Reduction</span>
                                <span className="font-bold">40%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Lead Qualification Accuracy</span>
                                <span className="font-bold">87%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Revenue Increase</span>
                                <span className="font-bold">32%</span>
                              </div>
                            </>
                          )}
                          {tab === "marketing" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span>Campaign Performance</span>
                                <span className="font-bold">+215%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Content Production</span>
                                <span className="font-bold">3x</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>SEO Ranking Improvement</span>
                                <span className="font-bold">+45%</span>
                              </div>
                            </>
                          )}
                          {tab === "ecommerce" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span>Conversion Rate Increase</span>
                                <span className="font-bold">32%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Cart Abandonment Reduction</span>
                                <span className="font-bold">28%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Average Order Value</span>
                                <span className="font-bold">+24%</span>
                              </div>
                            </>
                          )}
                          {tab === "support" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span>Inquiry Resolution Rate</span>
                                <span className="font-bold">92%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Customer Satisfaction</span>
                                <span className="font-bold">+34%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Response Time</span>
                                <span className="font-bold">&lt;1 min</span>
                              </div>
                            </>
                          )}
                          {tab === "knowledge" && (
                            <>
                              <div className="flex justify-between items-center">
                                <span>Employee Onboarding Time</span>
                                <span className="font-bold">-75%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Knowledge Retrieval Accuracy</span>
                                <span className="font-bold">96%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Decision-Making Speed</span>
                                <span className="font-bold">+62%</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredByProduct.slice(0, 3).map((testimonial) => (
                        <Card
                          key={testimonial.id}
                          className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur"
                        >
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
                              <Avatar className="size-10 border-2 border-background">
                                <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}, {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center mt-8">
                      <Button asChild variant="outline" className="rounded-full">
                        <Link
                          href={`/products/ai-${tab}${tab === "sales" ? "-agent" : tab === "knowledge" ? "-engine" : ""}`}
                        >
                          View All {productName} Testimonials
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
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
                Ready to Join Our Success Stories?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Start your journey with Foundations AI today and transform your business with autonomous AI agents.
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
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
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
