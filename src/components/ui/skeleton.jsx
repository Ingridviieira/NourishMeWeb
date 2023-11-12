import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted bg-red-100", className)} {...props} />);
}

export { Skeleton };
