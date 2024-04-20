import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Section from "@/components/Section";
import React from "react";

export default function ProductsPage() {
    const products = [
        {
            title: "Cow Labneh 700g",
            weight: "700g",
            price: "$7.00",
            image: "Cow Labneh.png",
        },
        {
            title: "Goat Labneh 700g",
            weight: "700g",
            price: "$10.00",
            image: "Goat Labneh.png",
        },
        {
            title: "Goat Labne Vaccume 1kg",
            weight: "1kg",
            price: "$12.00",
            image: "Labneh 1.png",
        },
        {
            title: "Goat Labne Vaccume 500g",
            weight: "500g",
            price: "$6.00",
            image: "Vacuum labneh 500g.png",
        },
        {
            title: "Goat Cheese 700g",
            weight: "700g",
            price: "$10.00",
            image: "Goat Cheese.png",
        },
        {
            title: "Makdous 800g",
            weight: "800g",
            price: "$7.50",
            image: "Eggplant.png",
        },
        {
            title: "Tomato Paste 800g",
            weight: "800g",
            price: "$7.00",
            image: "Tomato Paste.png",
        },
        {
            title: "Debs Remen 500ml",
            weight: "500ml",
            price: "$10.00",
            image: "Pomegranate syrup.png",
        },
        {
            title: "Green Olives 900g",
            weight: "900g",
            price: "$5.00",
            image: "Green olives.png",
        },
        {
            title: "Black Olives 900g",
            weight: "900g",
            price: "$4.00",
            image: "Black olives.png",
        },
        {
            title: "Olive Oil 1Tank",
            weight: "1Tank",
            price: "$140.00",
            image: "Oil 1.png",
        },
        {
            title: "Olive Oil 1L",
            weight: "1L",
            price: "$21.00",
            image: "Oil small.png",
        },
        {
            title: "Olive Oil 750ml",
            weight: "750ml",
            price: "$8.50",
            image: "Olive oil 500ml.png",
        },
        {
            title: "Olive Oil 500ml",
            weight: "500ml",
            price: "$6.00",
            image: "Olive oil 500ml.png",
        },
        {
            title: "Sage Water 250ml",
            weight: "250ml",
            price: "$3.00",
            image: "Sage syrup.png",
        },
        {
            title: "Orange Blossom Water 250ml",
            weight: "250ml",
            price: "$3.50",
            image: "Blossom water.png",
        },
        {
            title: "Rose Water 250ml",
            weight: "250ml",
            price: "$3.50",
            image: "Rose water.png",
        },
        {
            title: "Blackberry Syrup 500ml",
            weight: "500ml",
            price: "$3.50",
            image: "Black berry syrup.png",
        },
        {
            title: "Rose Syrup 500ml",
            weight: "500ml",
            price: "$3.50",
            image: "Rose syrup.png",
        },
        {
            title: "Fig Jam 600g",
            weight: "600g",
            price: "$3.50",
            image: "Fig Jam.png",
        },
        {
            title: "Apricot Jam 600g",
            weight: "600g",
            price: "$3.50",
            image: "Apricot Jam.png",
        },
        {
            title: "Blackberry Jam 600g",
            weight: "600g",
            price: "$3.50",
            image: "Blackberry jam.png",
        },
        {
            title: "Zaatar 1 Kilo",
            weight: "1 Kilo",
            price: "$12.00",
            image: "Zaatar.png",
        },
        {
            title: "Keshk 1 Kilo",
            weight: "1 Kilo",
            price: "$18.00",
            image: "Kishk 1.jpg",
        },
        {
            title: "Honey 1 Kilo",
            weight: "1 Kilo",
            price: "$20.00",
            image: "Honey.png",
        },
    ];

    return (
        <div className="sm:pb-20">
            <Menu />
            <Section title="Our Products">
                <div className="grid grid-cols-4 gap-8 lg:grid-cols-1">
                    {products.map((product) => (
                        <div
                            className="flex flex-col justify-center items-center"
                            key={product.title}
                        >
                            <img
                                src={"/images/" + product.image}
                                className="w-96"
                            />
                            <p className="pt-3 pb-1">{product.title}</p>
                            <p className="font-bold">{product.price}</p>
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </div>
    );
}
