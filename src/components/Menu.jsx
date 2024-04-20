import { cn } from "@/utils";
import React from "react";

export default function Menu({className, variant, mini}) {
    return (
        <div className={cn("w-full flex justify-center items-center gap-32 text-[#74645a]", variant==="hero" && !mini && "text-white pt-10", mini && "!text-[#74645a]",  className)}>
            <a href="/" className="text-xl uppercase lg:hidden">Home</a>
            <a href="/products" className="text-xl uppercase lg:hidden">
                Products
            </a>
            <img src={variant === "hero" && !mini ? "/icons/logo white.png" : "/icons/logo (2).png"} alt="" className={cn("w-20",variant==="hero" && !mini && "w-52")} />
            <a href="/about-us" className="text-xl uppercase lg:hidden">About</a>
            <a href="/contact-us" className="text-xl uppercase lg:hidden">
                Contact
            </a>

            {/* mobile */}
            <div className={cn("fixed z-40 bottom-0 w-full bg-[#ece3d9] h-20 hidden lg:block", variant==="hero" && "absolute")}></div>
            <div className={cn("fixed z-50 bottom-0 w-full justify-around text-orange-950/60 font-black h-20 items-center gap-6 hidden lg:flex", variant==="hero" && "absolute")}>
                <a href="/" className="text-xl sm:text-sm uppercase">Home</a>
                <a href="/products" className="text-xl sm:text-sm uppercase">Products</a>
                <a href="/about-us" className="text-xl sm:text-sm uppercase">About</a>
                <a href="/contact-us" className="text-xl sm:text-sm uppercase">Contact</a>
            </div>
        </div>
    );
}
