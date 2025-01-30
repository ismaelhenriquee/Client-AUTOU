"use client"

import { Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebarStore } from "@/lib/store"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { toggleSidebar } = useSidebarStore()

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex h-full items-center px-4 gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex-1" />
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}

