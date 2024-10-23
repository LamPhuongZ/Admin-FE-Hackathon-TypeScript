import { ReactNode } from "react";

interface ButtonProps {
  title?: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "delete" | "update" | "custom";
  circle?: boolean;
}

/**
 *
 * @interface  
 * title: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "delete" | "update" | "custom";

  *Note: width and height are self-defined
 */

export default function Button({
  title,
  loading,
  className,
  type = "button",
  onClick,
  icon,
  iconPosition = "left",
  color = "primary",
  circle = true,
}: ButtonProps) {
  const bgColor =
    color === "secondary"
      ? "btn-secondary"
      : color === "delete"
      ? "btn-delete"
      : color === "update"
      ? "btn-update"
      : color === "custom"
      ? "btn-custom"
      : "btn-primary";

  // Thêm biến để chứa các div circle


  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={`btn-component group ${bgColor} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {circle } {/* Hiển thị các div circle khi circle là true */}
      <span className="relative z-20">
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {title}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </span>
    </button>
  );
}