"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "My Work", href: "/experience" },
  // { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="flex h-20 w-full items-center justify-between px-10">
        {/* Logo Section - Simple with small logo */}

        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/small-logo.png"
            alt="Portfolio Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </Link>

        {/* Desktop Navigation - Clean with better spacing and larger font */}
        <nav className="hidden md:flex flex flex-row gap-7 items-center space-x-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-lg font-medium transition-colors duration-200 py-3",
                pathname === item.href
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.name}

              {/* Simple underline for active state */}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC5500] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="right" className="w-72 bg-white">
            <div className="flex flex-col gap-2 space-y-6 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-4 text-lg font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <span>{item.name}</span>
                  {pathname === item.href && (
                    <div className="w-1 h-4 bg-[#CC5500] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
