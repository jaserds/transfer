import { useState } from "react";


interface AccordionProps {
    title: string;
    content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="accordion-item mb-4">
            <div
                className={`flex items-center justify-between cursor-pointer p-4 rounded-t-md ${isOpen ? "bg-[#F9AC1A] text-[#fff]" : "bg-gray-200"}`}
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </div>
            <div
                className={`
                    accordion-content
                    bg-gray-100
                     rounded-b-md 
                     transition-all 
                     duration-300 
                     ease-in-out 
                     ${isOpen ? "max-h-screen p-4" : "max-h-0 overflow-hidden"
                    }`}
            >
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;