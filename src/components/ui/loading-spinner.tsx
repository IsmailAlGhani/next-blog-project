export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  }

  return (
    <div className="flex justify-center items-center p-8">
      <span className={`loading loading-spinner ${sizeClasses[size]}`}></span>
    </div>
  )
}
