import { ChevronRight, IconNode, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  Icon?: LucideIcon;
  location: string;
}

const Button = ({
  onClick,
  disabled,
  className,
  Icon,
  children,
  location
}: ButtonProps) => {
  return (
  {
    location === "right"? (<button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center disabled:cursor-not-allowed disabled:bg-amber-600/80 gap-2 px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors ${className}`}
      >
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </button>) : (<button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center disabled:cursor-not-allowed disabled:bg-amber-600/80 gap-2 px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors ${className}`}
      >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      </button>)
  }

)}
export default Button;
