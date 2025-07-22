"use client";

import { GradientText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/johndoe", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/johndoe",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://twitter.com/johndoe", icon: Twitter },
    { name: "Email", href: "mailto:john.doe@example.com", icon: Mail },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">
                  <GradientText>JD</GradientText>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Software Development Engineer passionate about building
                exceptional digital experiences and scalable solutions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>San Francisco, CA</p>
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p className="text-green-600 font-medium">Available for hire</p>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-2 mb-4">
                {footerLinks.social.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Follow me for updates on latest projects and tech insights.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <p>
              © 2024 John Doe. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
