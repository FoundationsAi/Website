"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  ArrowRight,
  Star,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
  Package,
  Tag,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Truck,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AIEcommercePage() {
  const [mounted, setMounted] = useState(false)

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
      <section className="w-full py-20 md:py-28 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                AI E-commerce
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your Autonomous Online Store Manager
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Automate inventory management, product recommendations, pricing optimization, and customer experience
                with our AI E-commerce solution that works 24/7 to grow your online business.
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
                  <span className="font-medium text-foreground">280+</span> businesses using our AI E-commerce
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
                  alt="AI E-commerce Dashboard"
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
              { value: "32%", label: "Average conversion rate increase" },
              { value: "47%", label: "Reduction in cart abandonment" },
              { value: "3.2x", label: "Higher customer lifetime value" },
              { value: "68%", label: "Increase in average order value" },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete E-commerce Automation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI E-commerce solution handles every aspect of your online store, from inventory management to
              customer experience optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Inventory Management",
                description:
                  "Automatically forecast demand, optimize stock levels, and prevent stockouts or overstock situations.",
                icon: <Package className="size-5" />,
              },
              {
                title: "Dynamic Pricing Optimization",
                description:
                  "Adjust prices in real-time based on demand, competition, inventory levels, and customer behavior.",
                icon: <Tag className="size-5" />,
              },
              {
                title: "Personalized Product Recommendations",
                description:
                  "Deliver tailored product suggestions to each visitor based on browsing history, purchases, and preferences.",
                icon: <ShoppingCart className="size-5" />,
              },
              {
                title: "Automated Customer Segmentation",
                description:
                  "Group customers based on behavior and preferences to create targeted marketing and personalized experiences.",
                icon: <Users className="size-5" />,
              },
              {
                title: "Conversion Rate Optimization",
                description:
                  "Continuously test and improve your store's design, checkout process, and product pages to maximize sales.",
                icon: <TrendingUp className="size-5" />,
              },
              {
                title: "Fraud Detection & Prevention",
                description:
                  "Identify and block suspicious transactions while ensuring legitimate customers have a smooth experience.",
                icon: <ShieldCheck className="size-5" />,
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple Setup, Powerful Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your AI E-commerce solution up and running in minutes, not months.
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
                alt="AI E-commerce Setup"
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
                    title: "Connect Your Store",
                    description:
                      "Integrate with your existing e-commerce platform like Shopify, WooCommerce, or Magento with just a few clicks.",
                  },
                  {
                    step: "02",
                    title: "Import Your Products & Data",
                    description:
                      "Sync your product catalog, inventory, customer data, and sales history to train your AI on your business.",
                  },
                  {
                    step: "03",
                    title: "Configure Your Preferences",
                    description:
                      "Set your business rules, pricing strategies, inventory thresholds, and customer experience preferences.",
                  },
                  {
                    step: "04",
                    title: "Launch & Optimize",
                    description:
                      "Your AI E-commerce solution begins managing your store while continuously learning and improving results.",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Transform Your Online Store</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of AI-powered e-commerce automation that scales with your business.
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
                    title: "Increased Sales & Conversion",
                    description:
                      "Boost revenue with personalized shopping experiences, optimized product pages, and intelligent cross-selling.",
                    icon: <TrendingUp className="size-5" />,
                  },
                  {
                    title: "Reduced Operational Costs",
                    description:
                      "Lower inventory carrying costs, minimize returns, and automate manual tasks to improve your bottom line.",
                    icon: <DollarSign className="size-5" />,
                  },
                  {
                    title: "24/7 Store Optimization",
                    description:
                      "Your AI continuously tests, learns, and improves your store's performance even when you're not working.",
                    icon: <Clock className="size-5" />,
                  },
                  {
                    title: "Enhanced Customer Experience",
                    description:
                      "Deliver personalized shopping journeys that make customers feel understood and valued, increasing loyalty.",
                    icon: <Users className="size-5" />,
                  },
                  {
                    title: "Streamlined Fulfillment",
                    description:
                      "Optimize order processing, shipping routes, and inventory allocation to reduce delivery times and costs.",
                    icon: <Truck className="size-5" />,
                  },
                  {
                    title: "Competitive Advantage",
                    description:
                      "Stay ahead with AI that adapts to market changes, customer preferences, and competitive moves in real-time.",
                    icon: <Zap className="size-5" />,
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
                  alt="AI E-commerce Benefits"
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
              Hear from businesses that have transformed their online stores with our AI solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Our average order value increased by 42% in the first month after implementing the AI product recommendation engine. It's like having a personal shopper for every customer.",
                author: "Alex Chen",
                role: "Founder, Urban Style Co.",
                rating: 5,
              },
              {
                quote:
                  "The dynamic pricing feature has been a game-changer. We've increased our profit margins by 23% while staying competitive and actually improving customer satisfaction.",
                author: "Samantha Williams",
                role: "E-commerce Director, TechGadgets",
                rating: 5,
              },
              {
                quote:
                  "Cart abandonment dropped from 76% to 31% after implementing the AI checkout optimization. The system identified and fixed friction points we didn't even know existed.",
                author: "Michael Johnson",
                role: "CEO, Outdoor Adventure Gear",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Works With Your Favorite Platforms</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI E-commerce solution seamlessly connects with the platforms and tools you already use.
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
              Choose the right plan for your e-commerce needs and scale as you grow.
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
                      price: "$299",
                      description: "Perfect for small online stores.",
                      features: [
                        "Up to 500 products",
                        "Basic inventory management",
                        "Simple product recommendations",
                        "Standard analytics",
                        "Email support",
                      ],
                      cta: "Start Free Trial",
                    },
                    {
                      name: "Growth",
                      price: "$799",
                      description: "Ideal for growing e-commerce businesses.",
                      features: [
                        "Up to 5,000 products",
                        "Advanced inventory forecasting",
                        "Dynamic pricing optimization",
                        "Personalized product recommendations",
                        "Customer segmentation",
                        "Conversion rate optimization",
                        "Priority support",
                      ],
                      cta: "Start Free Trial",
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      description: "For large online retailers with complex needs.",
                      features: [
                        "Unlimited products",
                        "Enterprise inventory management",
                        "Advanced fraud detection",
                        "Multi-store management",
                        "Custom integrations",
                        "Dedicated account manager",
                        "24/7 premium support",
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
                      price: "$239",
                      description: "Perfect for small online stores.",
                      features: [
                        "Up to 500 products",
                        "Basic inventory management",
                        "Simple product recommendations",
                        "Standard analytics",
                        "Email support",
                      ],
                      cta: "Start Free Trial",
                    },
                    {
                      name: "Growth",
                      price: "$639",
                      description: "Ideal for growing e-commerce businesses.",
                      features: [
                        "Up to 5,000 products",
                        "Advanced inventory forecasting",
                        "Dynamic pricing optimization",
                        "Personalized product recommendations",
                        "Customer segmentation",
                        "Conversion rate optimization",
                        "Priority support",
                      ],
                      cta: "Start Free Trial",
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      description: "For large online retailers with complex needs.",
                      features: [
                        "Unlimited products",
                        "Enterprise inventory management",
                        "Advanced fraud detection",
                        "Multi-store management",
                        "Custom integrations",
                        "Dedicated account manager",
                        "24/7 premium support",
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
              Everything you need to know about our AI E-commerce solution.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI integrate with my existing e-commerce platform?",
                  answer:
                    "Our AI E-commerce solution offers native integrations with all major platforms including Shopify, WooCommerce, Magento, BigCommerce, and Salesforce Commerce Cloud. Integration is simple through our secure API or pre-built connectors that can be installed with just a few clicks. The system syncs your product catalog, inventory, customer data, and order history automatically.",
                },
                {
                  question: "Can I customize how the AI makes pricing and inventory decisions?",
                  answer:
                    "Absolutely. You maintain complete control over the AI's decision-making parameters. You can set pricing rules (minimum/maximum prices, competitor matching strategies), inventory thresholds, profit margin targets, and more. The AI will operate within these guidelines while optimizing for your business goals. You can also override any AI decision at any time.",
                },
                {
                  question: "How does the product recommendation engine work?",
                  answer:
                    "Our recommendation engine analyzes multiple data points including browsing history, purchase patterns, product attributes, and real-time behavior to suggest the most relevant products to each visitor. It goes beyond simple 'customers also bought' logic to understand the intent behind each shopping session, resulting in recommendations that are 3-5x more likely to convert than traditional systems.",
                },
                {
                  question: "Is the AI E-commerce solution secure and compliant with regulations?",
                  answer:
                    "Yes, security is our top priority. We're fully compliant with GDPR, CCPA, PCI DSS, and other relevant regulations. All data is encrypted both in transit and at rest, and we employ enterprise-grade security measures including regular penetration testing and security audits. We never share your data with third parties, and you maintain full ownership of all information.",
                },
                {
                  question: "How quickly will I see results after implementing the AI E-commerce solution?",
                  answer:
                    "Most customers see initial improvements within the first 2-4 weeks as the AI learns your business patterns. Significant results typically appear within 1-3 months, with continuous improvement thereafter. The speed of results depends on your traffic volume, product catalog size, and the specific features you implement. Our onboarding team will help you prioritize features that will deliver the fastest ROI for your specific business.",
                },
                {
                  question: "Can the AI help with seasonal planning and special promotions?",
                  answer:
                    "Yes, our AI excels at seasonal planning and promotions. It analyzes historical data, current trends, and inventory levels to recommend optimal timing, pricing, and product focus for seasonal campaigns. For promotions, it can identify which products will drive the highest overall cart value, suggest bundle opportunities, and even predict the optimal discount levels to maximize revenue while protecting margins.",
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
              Ready to Transform Your Online Store?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join hundreds of businesses using our AI E-commerce solution to increase sales, optimize operations, and
              deliver exceptional customer experiences.
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
