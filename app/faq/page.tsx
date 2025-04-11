"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  ChevronDown,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FAQPage() {
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

  const faqCategories = [
    {
      title: "General",
      questions: [
        {
          question: "What is Foundations AI?",
          answer:
            "Foundations AI is a platform that helps businesses build, operate, and scale AI-powered solutions. We offer a suite of AI agents that can automate various aspects of your business operations.",
        },
        {
          question: "How do the AI agents actually work?",
          answer:
            "Our AI agents use a combination of large language models, retrieval-augmented generation, and custom function calling to perform business tasks. Each agent is specialized for a specific role (sales, marketing, etc.) and can access your business data, make decisions, and take actions on your behalf.",
        },
        {
          question: "Do I need technical skills to use Foundations AI?",
          answer:
            "No technical skills are required. You simply describe your business idea in plain language, and our AI handles the technical implementation. You can provide feedback and guidance through a simple interface.",
        },
      ],
    },
    {
      title: "Products",
      questions: [
        {
          question: "What is the AI Sales Agent?",
          answer:
            "Our AI Sales Agent is an intelligent virtual assistant that helps your sales team qualify leads, schedule meetings, and follow up with prospects. It uses natural language processing to engage with potential customers, answer their questions, and guide them through the sales process.",
        },
        {
          question: "How does AI Marketing work?",
          answer:
            "AI Marketing uses machine learning algorithms to analyze customer data, predict behavior, and automate marketing campaigns. It can generate personalized content, optimize ad spend, segment audiences, and provide insights to improve your marketing strategy.",
        },
        {
          question: "What does the AI Knowledge Engine do?",
          answer:
            "The AI Knowledge Engine uses retrieval-augmented generation (RAG) to pull real knowledge from your business data, ensuring accurate responses without hallucinations. It creates a searchable knowledge base from your documents, websites, and databases.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      questions: [
        {
          question: "How is Foundations AI priced?",
          answer:
            "We offer flexible pricing plans based on your business needs. Our plans typically include a base subscription fee plus usage-based pricing for certain features. We offer Freemium, Basic, Growth, Pro, and Enterprise tiers.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a 14-day free trial for all our products. During the trial period, you'll have access to all features of the selected product with some usage limitations. No credit card is required to start a trial.",
        },
        {
          question: "Can I start with just one product and add more later?",
          answer:
            "Yes, absolutely. Many of our customers start with a single product to address their most pressing needs and then expand to other products as they see results. Our platform is designed to be modular, allowing you to add products at your own pace.",
        },
      ],
    },
    {
      title: "Implementation & Support",
      questions: [
        {
          question: "How long does implementation take?",
          answer:
            "Implementation time varies depending on the complexity of your business and the products you choose. Basic implementations can be completed in as little as 2-4 weeks, while more complex enterprise integrations may take 2-3 months.",
        },
        {
          question: "What systems can Foundations AI integrate with?",
          answer:
            "Our platform integrates with a wide range of business systems including CRM platforms (Salesforce, HubSpot), marketing automation tools (Marketo, Mailchimp), e-commerce platforms (Shopify, WooCommerce), and customer support systems (Zendesk, Intercom).",
        },
        {
          question: "What kind of support do you offer?",
          answer:
            "Support varies by plan. All plans include access to our knowledge base. Paid plans include email support, with higher tiers offering priority support, dedicated account managers, and 24/7 phone support for enterprise customers.",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              F
            </div>
            <span>Foundations AI</span>
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
            <Link href="/faq" className="text-sm font-medium text-foreground transition-colors hover:text-foreground">
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
              <Link href="/faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
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
        <section className="w-full py-20 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Support
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about Foundations AI products and services
              </p>
              <div className="w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search questions..."
                    className="w-full bg-background py-2 pl-8 pr-4 text-sm ring-1 ring-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {faqCategories.map((category, i) => (
                <div key={i} className="space-y-4">
                  <h2 className="text-2xl font-bold">{category.title} Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, j) => (
                      <AccordionItem key={j} value={`${i}-${j}`} className="border-b border-border/40">
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Still have questions?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Our team is ready to help you find the right solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Contact Support
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
