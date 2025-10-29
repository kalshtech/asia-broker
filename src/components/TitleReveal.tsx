import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {Typography} from "@/components/ui/typography";
import classnames from "classnames";

type Props = {
    title: string;
    duration?: number;
    endSquareSize?: number;
    isActive?: boolean;
    className?: string;
};

export default function TitleReveal(props: Props) {
    const {
        title = "",
        duration = 2.0,
        endSquareSize = 12,
        isActive = false,
        className
    } = props;
    const rootRef = useRef<HTMLDivElement | null>(null);
    const curtain = useAnimation();
    const inView = useInView(rootRef, { once: true, margin: "0px 0px -40% 0px" });

    const appear = (0.2 / 2.0) * duration;
    const slide = (1.4 / 2.0) * duration;
    const shrink = (0.4 / 2.0) * duration;

    useEffect(() => {
        if (!inView) return;

        (async () => {
            // 1) 快速出现
            await curtain.start({
                opacity: 1,
                transition: { duration: appear, ease: [0.16, 1, 0.3, 1] },
            });

            // 2) 从右向左滑动，直到仅剩小方块宽度
            await curtain.start({
                x: ["0px", `calc(-100% + ${endSquareSize}px)`],
                width: ["100%", "100%"],
                transition: { duration: slide, ease: [0.22, 0.61, 0.36, 1] },
            });

            // 3) 柔和收尾：在底部收拢为小正方形并轻柔下滑
            await curtain.start({
                x: `calc(-100% + ${endSquareSize}px)`,
                width: `${endSquareSize}px`,
                height: `${endSquareSize}px`,
                top: `calc(100% - ${endSquareSize}px)`, // 收在底部
                borderRadius: `${endSquareSize / 8}px`,
                transition: {
                    duration: shrink,
                    ease: [0.25, 0.8, 0.25, 1],
                    delay: 0.05,
                },
            });
        })();
    }, [inView, curtain, appear, slide, shrink, endSquareSize]);

    return (
        <div ref={rootRef} className="relative">
            <div className="flex items-center gap-3">
                <div className="relative inline-block align-middle overflow-hidden py-1">
                    <Typography
                        variant={"h1"}
                        className={classnames(["ml-8 max-w-5xl ibm-plex-sans", {
                            "!text-theme-active": isActive
                        }], className)}
                    >
                        {title}
                    </Typography>
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute left-0 will-change-transform z-20 bg-theme-active"
                        style={{width: "100%", height: "100%", top: 0 }}
                        initial={{opacity: 0, x: 0}}
                        animate={curtain}
                    />
                </div>
            </div>
        </div>
    );
}
