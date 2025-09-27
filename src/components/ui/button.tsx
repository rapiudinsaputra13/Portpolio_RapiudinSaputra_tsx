import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline";
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className = "",
  variant = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const baseClass = "px-4 py-2 rounded transition font-medium";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  const finalClass = `${baseClass} ${variantClass} ${className}`;

  if (asChild) {
    return (
      <a className={finalClass} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}
