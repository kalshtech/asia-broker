"use client"

import * as React from "react"
import { Star } from "lucide-react"

type StarRatingProps = {
    max?: number
    value?: number
    defaultValue?: number
    onChange?: (v: number) => void
    readOnly?: boolean
    className?: string
    "aria-label"?: string
}

export default function StarRating({ max = 5, value, defaultValue = 0, onChange, readOnly = false, className, "aria-label": ariaLabel = "rating" }: StarRatingProps) {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
    const current = value ?? uncontrolled

    const setValue = (v: number) => {
        if (readOnly) return
        onChange?.(v)
        if (value === undefined) setUncontrolled(v)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (readOnly) return
        if (e.key === "ArrowRight") {
            e.preventDefault()
            setValue(Math.min(current + 1, max))
        } else if (e.key === "ArrowLeft") {
            e.preventDefault()
            setValue(Math.max(current - 1, 0))
        } else if (e.key === "Home") {
            e.preventDefault()
            setValue(0)
        } else if (e.key === "End") {
            e.preventDefault()
            setValue(max)
        }
    }

    return (
        <div
            role="radiogroup"
            aria-label={ariaLabel}
            aria-readonly={readOnly || undefined}
            tabIndex={readOnly ? -1 : 0}
            onKeyDown={handleKeyDown}
            className={["inline-flex items-center gap-1", className].filter(Boolean).join(" ")}
        >
            {Array.from({ length: max }).map((_, i) => {
                const n = i + 1
                const active = n <= current
                const label = `${n} / ${max}`
                return (
                    <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={active && n === current}
                        aria-label={label}
                        disabled={readOnly}
                        onClick={() => setValue(n)}
                        className={[
                            "size-8 rounded-md transition",
                            readOnly ? "cursor-default" : "hover:scale-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                        ].join(" ")}
                    >
                        <Star
                            className={active ? "text-yellow-500" : "text-muted-foreground"}
                            fill={active ? "currentColor" : "none"}
                            strokeWidth={1.75}
                        />
                    </button>
                )
            })}
            <span className="sr-only">当前评分：{current} / {max}</span>
        </div>
    )
}
