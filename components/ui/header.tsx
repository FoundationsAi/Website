"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Bot,
  LineChart,
  ShoppingCart,
  MessageSquare,
  FileText,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  logo?: "text" | "image" | "both";
  showLogoText?: boolean;
}

export default function Header({ logo = "both" }: HeaderProps) {
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

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Link href="/" className="flex items-center gap-2">
            {(logo === "image" || logo === "both") && (
              <div className="h-8 w-8 relative">
                <Image
                  src="/foundations-ai-logo.svg"
                  alt="Foundations AI Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            )}
            {(logo === "text" || logo === "both") && <span>Foundations AI</span>}
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
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
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
            href="/login"
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
                  <Link
                    href="/products/ai-support"
                    className="py-2 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
            <Link
              href="/features"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/testimonials"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link
                href="/login"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Button className="w-full justify-center rounded-full" onClick={() => setMobileMenuOpen(false)}>
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
} 