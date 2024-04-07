import React from "react";
import Section from "./Section";

export default function ConnectSection() {
    return (
        <Section title={"Connect With Us"}>
            <div className="flex justify-center items-center gap-20">
                <div className="flex items-center gap-7">
                    <label className="uppercase text-lg font-thin" for="email">
                        Newsletter:{" "}
                    </label>
                    <div className="h-[60px] flex">
                        <input
                            className="block border-2 border-[#74645a] px-3 bg-primary text-[18px] font-light w-[315px] h-full"
                            placeholder="Your email"
                        />
                        <input
                            type="submit"
                            value={"subscribe"}
                            className="cursor-pointer bg-[#74645a] text-primary h-full uppercase font-light px-4 text-[18px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-7">
                <p className="uppercase text-lg font-thin" for="email">
                        Follow Us:{" "}
                    </p>
                    <div className="flex gap-4">
                        <a href="facebook.com" className="w-20 h-20 bg-[url('/icons/fb.svg')] bg-no-repeat hover:bg-[url('/icons/fb2.svg')] hover:bg-[length:100%] bg-center rounded-full"></a>
                        <a href="twitter.com" className="w-20 h-20 bg-[url('/icons/tw.svg')] bg-no-repeat hover:bg-[url('/icons/tw2.svg')] hover:bg-[length:100%] bg-center rounded-full"></a>
                        <a href="instagram.com" className="w-20 h-20 bg-[url('/icons/ig.svg')] bg-no-repeat hover:bg-[url('/icons/ig2.svg')] hover:bg-[length:100%] bg-center rounded-full"></a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
