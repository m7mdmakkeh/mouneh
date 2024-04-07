import React from "react";
import Section from "./Section";
import { cn } from "@/utils";

const products = [
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
    },
]


export default function OurRange() {
    return (
        <Section title={"our range"} className={"bg-[#f8efe4]"}>
            <div className="">
                {
                    products.map((product, i) => <Product product={product} reversed={i % 2 !== 0} key={i}/>)
                }
            </div>
        </Section>
    );
}

const Product = ({product, reversed}) => {
    if(!product) return;
    return (
        <div className="">
            <div className="flex bg-[#f3aaba]" style={{backgroundColor: product.bgColor}}>
                <div className={cn("w-[35%] flex px-6 py-24 items-center text-center flex-col", reversed && "order-2")}>
                    <p className="text-5xl uppercase font-[brandontwo] text-primary mb-7">
                        {product.title}
                    </p>
                    <ul className="ingredients text-base uppercase font-light mb-16" style={{color: product.ingredientsColor}}>
                        {product.ingredients.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                    <p className="text-primary text-lg font-light text-balance">
                        {product.description}
                    </p>
                </div>
                <div className={cn("w-[65%] h-[700px]", reversed && "order-1")}>
                    <img
                        src={`/img/${product.mainImage}`}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex h-[300px]">
                <div className={cn("w-[65%] relative h-full", reversed && "order-2")}>
                    <img
                        src={`/img/${product.relatedImages[0]}`}
                        alt=""
                        className="object-cover w-full h-full absolute inset-0"
                    />
                </div>
                <div className={cn("w-[35%] relative h-full", reversed && "order-1")}>
                    <img
                        src={`/img/${product.relatedImages[1]}`}
                        alt=""
                        className="object-cover w-full h-full absolute inset-0"
                    />
                </div>
            </div>
        </div>
    );
};
