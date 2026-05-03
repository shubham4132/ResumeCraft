import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant: "outline" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      //classname in the prop
      className={`px-3 py-1.5 text-xs rounded-md transition-colors duration-150
    ${
      variant === "outline"
        ? "border border-gray-300 hover:bg-gray-50"
        : "bg-orange-700 text-white hover:bg-orange-800"
    }`}
    >
      {children}
    </button>
  );
};
