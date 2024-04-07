import React from "react";
import Section from "./Section";
import Input from "./Input";

export default function ContactSection() {
    return (
        <Section title={"Contact Us"}>
            <p className="font-thin text-lg light mb-12">
                If you are a specialty food or gourmet store looking to add
                Mymoune products to your shelves, or if you are a distributor
                that would like to expand your line of gourmet brands, please
                leave a message.
            </p>
            <div className="grid grid-cols-3 gap-12 mb-12">
                <Input label={"Your email"} name="email" />
                <Input label={"Your email"} name="email" />
                <Input label={"Your email"} name="email" />
            </div>
            <Input label={"Your email"} name="email" type="textarea" />
            <input type="submit" className="bg-[#568d74] p-3 text-center w-full uppercase font-light text-lg mt-9 text-white/70" value={"Send"}/>
        </Section>
    );
}
