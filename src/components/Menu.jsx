import React from "react";

export default function Menu() {
    return (
        <div className="w-full pt-10 flex justify-center items-center gap-32">
            <div className="text-xl uppercase text-white lg:hidden">Home</div>
            <div className="text-xl uppercase text-white lg:hidden">
                Products
            </div>
            <img src="/icons/logo white.png" alt="" className="w-52" />
            <div className="text-xl uppercase text-white lg:hidden">About</div>
            <div className="text-xl uppercase text-white lg:hidden">
                Contact
            </div>

            {/* mobile */}
            <div className="absolute bottom-0 w-full bg-[#ece3d9] h-20 hidden lg:block"></div>
            <div className="absolute bottom-0 w-full justify-around text-orange-950/60 font-black h-20 items-center gap-6 hidden lg:flex">
                <div className="text-xl uppercase">
                    Home
                </div>
                <div className="text-xl uppercase">
                    Products
                </div>
                <div className="text-xl uppercase">
                    About
                </div>
                <div className="text-xl uppercase">
                    Contact
                </div>
            </div>
        </div>
    );
}
