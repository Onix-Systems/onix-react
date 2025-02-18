import type React from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "default",
  size = "default",
  asChild,
  ...props
}) => {
  const className = `
    inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none ring-offset-background
    ${variant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
    ${variant === "outline" ? "border border-input hover:bg-accent hover:text-accent-foreground" : ""}
    ${variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" : ""}
    ${size === "default" ? "h-10 py-2 px-4" : ""}
    ${size === "sm" ? "h-9 px-3 rounded-md" : ""}
    ${size === "lg" ? "h-11 px-8 rounded-md" : ""}
  `

  if (href && !asChild) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

