"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-hikat.jpg"
              alt="HIKAT"
              width={100}
              height={40}
              className="h-10 md:h-12 w-auto rounded"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#produits" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Nos Sacs
            </Link>
            <Link href="#avantages" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Pourquoi HIKAT
            </Link>
            <Link href="#temoignages" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Témoignages
            </Link>
            <Link href="#faq" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="icon" className="border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              Commander
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#produits" className="text-foreground hover:text-muted-foreground transition-colors font-medium py-2">
                Nos Sacs
              </Link>
              <Link href="#avantages" className="text-foreground hover:text-muted-foreground transition-colors font-medium py-2">
                Pourquoi HIKAT
              </Link>
              <Link href="#temoignages" className="text-foreground hover:text-muted-foreground transition-colors font-medium py-2">
                Témoignages
              </Link>
              <Link href="#faq" className="text-foreground hover:text-muted-foreground transition-colors font-medium py-2">
                FAQ
              </Link>
              <Button className="bg-foreground text-primary-foreground hover:bg-foreground/90 w-full mt-2">
                Commander
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
