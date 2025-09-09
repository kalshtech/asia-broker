import * as React from "react"
import { cn } from "@/lib/utils"

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "blockquote"
    | "list"
    | "inlineCode"
    | "lead"
    | "large"
    | "small"
    | "muted"

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant
}

export function Typography({ variant, className, children, ...props }: TypographyProps) {
    switch (variant) {
        case "h1":
            return (
                <h1
                    className={cn("scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-5xl", className)}
                    {...props}
                >
                    {children}
                </h1>
            )

        case "h2":
            return (
                <h2
                    className={cn(
                        "scroll-m-20 pb-2 font-semibold tracking-tight first:mt-0 text-xl lg:text-3xl",
                        className
                    )}
                    {...props}
                >
                    {children}
                </h2>
            )

        case "h3":
            return (
                <h3 className={cn("scroll-m-20 font-semibold tracking-tight text-lg lg:text-2xl", className)} {...props}>
                    {children}
                </h3>
            )

        case "h4":
            return (
                <h4 className={cn("scroll-m-20 font-semibold tracking-tight text-base lg:text-xl", className)} {...props}>
                    {children}
                </h4>
            )

        case "h5":
            return (
                <h4 className={cn("scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props}>
                    {children}
                </h4>
            )

        case "h6":
            return (
                <h4 className={cn("scroll-m-20 text-base font-semibold tracking-tight", className)} {...props}>
                    {children}
                </h4>
            )

        case "p":
            return (
                <p className={cn(className)} {...props}>
                    {children}
                </p>
            )

        case "blockquote":
            return (
                <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
                    {children}
                </blockquote>
            )

        case "list":
            return (
                <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
                    {children}
                </ul>
            )

        case "inlineCode":
            return (
                <code
                    className={cn(
                        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                        className
                    )}
                    {...props}
                >
                    {children}
                </code>
            )

        case "lead":
            return (
                <p className={cn("text-xl text-muted-foreground", className)} {...props}>
                    {children}
                </p>
            )

        case "large":
            return (
                <div className={cn("text-lg font-semibold", className)} {...props}>
                    {children}
                </div>
            )

        case "small":
            return (
                <small className={cn("text-sm font-medium leading-none", className)} {...props}>
                    {children}
                </small>
            )

        case "muted":
            return (
                <p className={cn("text-muted-foreground text-xs lg:text-sm", className)} {...props}>
                    {children}
                </p>
            )

        default:
            return (
                <span className={className} {...props}>
                  {children}
                </span>
            )
    }
}
