'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";


const FeaturesComponent = () => {

    const t = useTranslations("AppTraslation")

    const features = [
        {
            title: t("components.FeaturesComponent.title1"),
            description: t("components.FeaturesComponent.description1"),
            image: "/images/features-car.png",
        },
        {
            title: t("components.FeaturesComponent.title2"),
            description: t("components.FeaturesComponent.description2"),
            image: "/images/defendeer-car.jpeg",
        },
        {
            title: t("components.FeaturesComponent.title3"),
            description: t("components.FeaturesComponent.description3"),
            image: "/images/individual.jpg",
        },
        {
            title: t("components.FeaturesComponent.title4"),
            description: t("components.FeaturesComponent.description4"),
            image: "/images/comfort.jpg",
        },
        {
            title: t("components.FeaturesComponent.title5"),
            description: t("components.FeaturesComponent.description5"),
            image: "/images/repo.jpg",
        },
    ];
    const [selectedFeature, setSelectedFeature] = useState(features[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFeature((prevFeature) => {
                const currentIndex = features.findIndex((f) => f.title === prevFeature.title);
                const nextIndex = (currentIndex + 1) % features.length;
                return features[nextIndex];
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="lg:flex md:flex-col lg:flex-row gap-6 max-w-[1090px] mx-auto">
            {/* Левая часть - меню */}
            <div className="lg:w-1/3 flex flex-col md:mb-4 max-md:mb-4 lg:mb-0 gap-4">
                {features.map((feature) => (
                    <button
                        key={feature.title}
                        onClick={() => setSelectedFeature(feature)}
                        className={`p-4 text-center rounded-lg transition ${selectedFeature.title === feature.title
                            ? "bg-[#F9AC1A] text-white"
                            : "bg-[#F5F5F5] text-[#373F47]"
                            }`}
                    >
                        {feature.title}
                    </button>
                ))}
            </div>

            {/* Правая часть - контент */}
            <div className="lg:w-2/3 bg-[#292929] pl-[50px] pt-[20px] pb-[20px] pr-[20px] rounded-lg flex items-center gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedFeature.title}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="self-start mt-[23px] w-2/3">
                        <h3 className="text-lg font-semibold mb-4 text-[#fff]">{selectedFeature.title}</h3>
                        <p className="text-base text-[#E0E0E0]">{selectedFeature.description}</p>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedFeature.image}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="flex-grow">
                        <Image
                            src={selectedFeature.image}
                            alt={selectedFeature.title}
                            width={266}
                            height={370}
                            className="rounded-lg"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FeaturesComponent;