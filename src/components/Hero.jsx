"use client";
import React from "react";
import Menu from "./Menu";

export default function Hero() {
    return (
        <header className="h-[110vh] lg:h-screen flex flex-col items-center relative overflow-hidden text-primary">
            <img
                src={"/img/herobg.jpg"}
                className="-z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-h-full w-full"
                alt=""
            />
            <div className="absolute inset-0 -z-10 bg-black/50"></div>

            <Menu />
            <h1 className="mt-28 tracking-widest text-5xl text-center font-thin text-white">
                PRESERVING EXCELLENCE
                <br />
                SINCE 1989
            </h1>
            <img
                src={"/icons/scroll-icon.png"}
                className="mt-40 cursor-pointer"
                alt=""
                onClick={() => window.scrollTo(0, window.innerHeight)}
            />
        </header>
    );
}
