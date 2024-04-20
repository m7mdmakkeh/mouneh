import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center pt-10 pb-[52%] sm:py-12 relative">
            <div className="h-[3px] w-8 bg-[#74645a] mb-12 order-1 sm:order-2"></div>
            <div className="flex gap-4 mb-10 order-2 sm:order-1">
                <a
                    href="facebook.com"
                    className="w-20 h-20 bg-[url('/icons/fb.svg')] bg-no-repeat hover:bg-[url('/icons/fb2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
                <a
                    href="twitter.com"
                    className="w-20 h-20 bg-[url('/icons/tw.svg')] bg-no-repeat hover:bg-[url('/icons/tw2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
                <a
                    href="instagram.com"
                    className="w-20 h-20 bg-[url('/icons/ig.svg')] bg-no-repeat hover:bg-[url('/icons/ig2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
            </div>
            <p className="font-light text-[#74645a] uppercase text-sm text-center order-3">
                © MOUNE W Zaytonue 2024 - DESIGNED AND DEVELOPED BY{" "}
                <span className="text-red-500">M.Makkeh</span>
            </p>
            <img
                src="/img/footerbg.jpg"
                alt="footer"
                className="absolute w-full inset-0 h-full object-cover -z-10 sm:hidden"
            />
        </footer>
    );
}
