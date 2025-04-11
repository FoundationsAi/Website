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
  BarChart,
  Megaphone,
  Mail,
  Instagram,
  Search,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Zap,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AIMarketingPage() {
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

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                AI Marketing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your Complete AI Marketing Department
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Automate content creation, SEO, social media, email campaigns, and ad management with our AI Marketing
                solution that works 24/7 to grow your brand.
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
                  <span className="font-medium text-foreground">320+</span> businesses using our AI Marketing
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
                  alt="AI Marketing Dashboard"
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
              { value: "215%", label: "Average ROI increase" },
              { value: "73%", label: "Time saved on content creation" },
              { value: "4.2x", label: "More content produced" },
              { value: "58%", label: "Increase in organic traffic" },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Marketing Automation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI Marketing solution handles every aspect of your marketing strategy, from content creation to
              performance analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Content Creation",
                description:
                  "Generate high-quality blog posts, social media content, ad copy, and email campaigns tailored to your brand voice.",
                icon: <FileText className="size-5" />,
              },
              {
                title: "SEO Optimization",
                description:
                  "Automatically optimize your content for search engines with keyword research, meta descriptions, and technical SEO improvements.",
                icon: <Search className="size-5" />,
              },
              {
                title: "Social Media Management",
                description:
                  "Schedule, post, and engage across all major social platforms with content optimized for each channel's unique audience.",
                icon: <Instagram className="size-5" />,
              },
              {
                title: "Email Marketing Automation",
                description:
                  "Create personalized email sequences, newsletters, and drip campaigns that adapt based on recipient engagement.",
                icon: <Mail className="size-5" />,
              },
              {
                title: "Ad Campaign Management",
                description:
                  "Design, launch, and optimize paid advertising campaigns across Google, Facebook, Instagram, and other platforms.",
                icon: <Megaphone className="size-5" />,
              },
              {
                title: "Performance Analytics",
                description:
                  "Track all marketing metrics in one dashboard with AI-powered insights and recommendations for improvement.",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Easy Setup, Powerful Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your AI Marketing solution up and running in minutes, not months.
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
                alt="AI Marketing Setup"
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
                    title: "Connect Your Brand Assets",
                    description:
                      "Integrate your website, social accounts, and existing content to train your AI on your brand voice and style.",
                  },
                  {
                    step: "02",
                    title: "Define Your Marketing Goals",
                    description:
                      "Set objectives for content creation, SEO, social media, email marketing, and paid advertising.",
                  },
                  {
                    step: "03",
                    title: "Approve Your Strategy",
                    description:
                      "Review and refine the AI-generated marketing strategy tailored to your business and audience.",
                  },
                  {
                    step: "04",
                    title: "Launch & Optimize",
                    description:
                      "Your AI Marketing solution begins executing campaigns while continuously learning and improving results.",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transform Your Marketing Strategy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of AI-powered marketing automation that scales with your business.
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
                    title: "Massive Time Savings",
                    description:
                      "Reduce content creation and campaign management time by up to 80%, freeing your team to focus on strategy and creativity.",
                    icon: <Clock className="size-5" />,
                  },
                  {
                    title: "Consistent Omnichannel Presence",
                    description:
                      "Maintain a cohesive brand voice and regular posting schedule across all marketing channels simultaneously.",
                    icon: <Share2 className="size-5" />,
                  },
                  {
                    title: "Data-Driven Optimization",
                    description:
                      "Leverage AI analysis of performance metrics to continuously refine and improve your marketing efforts.",
                    icon: <TrendingUp className="size-5" />,
                  },
                  {
                    title: "Personalization at Scale",
                    description:
                      "Deliver individually tailored content and offers to thousands of customers without manual segmentation.",
                    icon: <Users className="size-5" />,
                  },
                  {
                    title: "Competitive Edge",
                    description:
                      "Stay ahead with AI that monitors industry trends and competitor activities to inform your strategy.",
                    icon: <Zap className="size-5" />,
                  },
                  {
                    title: "Higher Marketing ROI",
                    description:
                      "Achieve better results at a fraction of the cost of traditional marketing teams or agencies.",
                    icon: <DollarSign className="size-5" />,
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
                  alt="AI Marketing Benefits"
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
              Hear from businesses that have transformed their marketing with our AI solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Our content production increased 5x while our marketing team size stayed the same. The AI creates blog posts that consistently rank on page one of Google.",
                author: "Jennifer Lee",
                role: "CMO, GrowthTech Solutions",
                rating: 5,
              },
              {
                quote:
                  "The email campaigns generated by the AI have a 43% higher open rate and 67% higher click-through rate than our previous agency-created campaigns.",
                author: "Marcus Johnson",
                role: "Digital Marketing Director, Elevate Brands",
                rating: 5,
              },
              {
                quote:
                  "We've cut our ad spend by 35% while increasing conversions by 28%. The AI optimizes our campaigns in real-time based on performance data.",
                author: "Sophia Rodriguez",
                role: "Founder, EcoStyle",
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
              Our AI Marketing solution seamlessly connects with the platforms you already use.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Flexible Plans for Every Business</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan for your marketing needs and scale as you grow.
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
                      price: "350",
                      description: "Perfect for small businesses and startups.",
                      features: [
                        "AI content creation (10 pieces/month)",
                        "Basic SEO optimization",
                        "Social media management (2 platforms)",
                        "Email marketing (1 campaign/month)",
                        "Basic analytics",
                      ],
                      cta: "Start Free Trial",
                    },
                    {
                      name: "Professional",
                      price: "$1000",
                      description: "Ideal for growing businesses.",
                      features: [
                        "AI content creation (30 pieces/month)",
                        "Advanced SEO optimization",
                        "Social media management (5 platforms)",
                        "Email marketing (4 campaigns/month)",
                        "Ad campaign management",
                        "Advanced analytics & reporting",
                        "Priority support",
                      ],
                      cta: "Start Free Trial",
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      description: "For organizations with complex marketing needs.",
                      features: [
                        "Unlimited AI content creation",
                        "Enterprise SEO suite",
                        "Social media management (all platforms)",
                        "Unlimited email campaigns",
                        "Advanced ad campaign management",
                        "Custom integrations",
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
                      price: "$199",
                      description: "Perfect for small businesses and startups.",
                      features: [
                        "AI content creation (10 pieces/month)",
                        "Basic SEO optimization",
                        "Social media management (2 platforms)",
                        "Email marketing (1 campaign/month)",
                        "Basic analytics",
                      ],
                      cta: "Start Free Trial",
                    },
                    {
                      name: "Professional",
                      price: "$479",
                      description: "Ideal for growing businesses.",
                      features: [
                        "AI content creation (30 pieces/month)",
                        "Advanced SEO optimization",
                        "Social media management (5 platforms)",
                        "Email marketing (4 campaigns/month)",
                        "Ad campaign management",
                        "Advanced analytics & reporting",
                        "Priority support",
                      ],
                      cta: "Start Free Trial",
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "$1,039",
                      description: "For organizations with complex marketing needs.",
                      features: [
                        "Unlimited AI content creation",
                        "Enterprise SEO suite",
                        "Social media management (all platforms)",
                        "Unlimited email campaigns",
                        "Advanced ad campaign management",
                        "Custom integrations",
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
              Everything you need to know about our AI Marketing solution.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI create content that matches our brand voice?",
                  answer:
                    "Our AI analyzes your existing content, brand guidelines, and target audience to understand your unique voice and style. It then generates content that maintains this consistency while adapting to different channels and formats. You can provide feedback to further refine the AI's understanding of your brand voice over time.",
                },
                {
                  question: "Can the AI Marketing solution integrate with our existing marketing tools?",
                  answer:
                    "Yes, our solution integrates with all major marketing platforms including HubSpot, Mailchimp, WordPress, Google Analytics, Facebook Ads, Google Ads, Instagram, Twitter, LinkedIn, and many more. We also offer custom integrations for enterprise clients with proprietary systems.",
                },
                {
                  question: "How much human oversight is needed?",
                  answer:
                    "The level of oversight is customizable based on your preferences. Some clients choose a fully automated approach with periodic reviews, while others prefer to approve all content before publication. Most clients find a hybrid approach works best, where routine content is automatically published while more strategic pieces receive human review.",
                },
                {
                  question: "Will the content created by AI be penalized by search engines?",
                  answer:
                    "No. Our AI creates original, high-quality content that follows all search engine guidelines. The content is indistinguishable from human-written material and often performs better in search rankings due to our built-in SEO optimization. We stay current with all algorithm updates to ensure compliance.",
                },
                {
                  question: "How quickly will we see results from the AI Marketing solution?",
                  answer:
                    "Most clients see immediate improvements in content production volume and consistency. For SEO results, you can expect to see movement in rankings within 4-8 weeks, with significant improvements by 3-6 months. Social media engagement typically increases within the first month, while email marketing and ad performance improvements are often visible within the first few campaigns.",
                },
                {
                  question: "Can we customize the types of content the AI creates?",
                  answer:
                    "Absolutely. You have complete control over the content types, topics, and formats. Whether you need blog posts, social media content, email newsletters, landing pages, ad copy, product descriptions, or any other format, the AI can be configured to focus on your specific content needs and priorities.",
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join hundreds of businesses using our AI Marketing solution to create better content, reach more
              customers, and drive growth.
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
    </div>
  )
}
