import { cn } from "@/utils";
import React from "react";

export default function Section({
    children,
    title,
    color,
    background,
    className,
    variant,
}) {
    return (
        <section className={cn("container px-44 py-16", className)}>
            <h2
                className={`section-title section-title-${variant} mb-20 uppercase text-[20px] font-thin text-center`}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}
