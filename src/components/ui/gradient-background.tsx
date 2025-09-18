"use client";

interface GradientBackgroundProps {
  children: React.ReactNode;
  variant?: "hero" | "section" | "footer";
}

export function GradientBackground({
  children,
  variant = "hero",
}: GradientBackgroundProps) {
  const getGradientClasses = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50";
      case "section":
        return "bg-gradient-to-r from-gray-50 to-blue-50";
      case "footer":
        return "bg-gradient-to-r from-gray-800 to-gray-900";
      default:
        return "bg-gradient-to-br from-blue-50 to-indigo-100";
    }
  };

  return <div className={`relative ${getGradientClasses()}`}>{children}</div>;
}
