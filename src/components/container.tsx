import { twMerge } from "tailwind-merge"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  constrained?: boolean
  ref?: React.RefObject<HTMLDivElement>
}

const Container = ({ className, constrained = false, ref, ...props }: ContainerProps) => (
  <div
    className={twMerge(
      "mx-auto w-full max-w-7xl 2xl:max-w-(--breakpoint-2xl)",
      constrained ? "sm:px-6" : "px-4 sm:px-6",
      className,
    )}
    {...props}
    ref={ref}
  />
)

export type { ContainerProps }
export { Container }
