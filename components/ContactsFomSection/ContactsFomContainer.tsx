"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import FullPageLoader from "../ui/loaders/FullPageLoader";

export default function ContactsFomContainer() {

    const t = useTranslations("AppTraslation");
    const ticons = useTranslations("imagesAlt");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/telegrambot/sendTelegramQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setLoading(false);

            if (result.success) {
                setSuccess(true);
                setFormData({ name: "", phone: "", message: "" });
            } else {
                setError("Error while submitting the request!");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setLoading(false);
                setError("Error while submitting the request!");
            }
        }
    };

    const hendlerSuccessToast = () => {
        setSuccess(false);
        return toast.success(t("components.ContactsFomContainer.toastTexts.Submit.success"))
    }

    const hendlerErrorToast = () => {
        setError("")
        return toast.error(t("components.ContactsFomContainer.toastTexts.Submit.error"))
    }

    return (
        <section className="flex justify-center mb-[120px] pt-[120px]">
            {loading && <FullPageLoader />}
            <div className="max-w-[1480px] bg-[linear-gradient(rgba(250,243,225,0.39),rgba(250,243,225,0.3)),url('/images/contact-forma-bg.jpg')] bg-cover bg-center w-full flex justify-center py-10 rounded-[50px]">
                <div className="max-w-[1090px] flex gap-5 max-md:flex-col">
                    <div className="w-1/2 max-md:w-full max-md:mb-10 pl-5 flex flex-col">
                        <h3 className="mb-5 font-bold text-[22px] text-[#373F47]">{t("components.ContactsFomContainer.title1")}</h3>
                        <p className="mb-8 text-[18px] text-[#373F47]">{t("components.ContactsFomContainer.text1")}</p>
                        <h4 className="mb-5 font-bold text-[18px] text-[#373F47]">{t("components.ContactsFomContainer.title2")}</h4>
                        <a className="mb-3 text-[#373F47] flex items-center gap-[10px]" href="mailto:help@domename.ru">
                            <Image src="/icons/contacts-form/mail-icon.svg" width={20} height={20} alt={ticons("ContactsFomContainer.mailIcon")} />
                            help@domename.ru
                        </a>
                        <a className="mb-8 text-[#373F47] flex items-center gap-[10px]" href="tel:+79999999999">
                            <Image src="/icons/contacts-form/phone-icon.svg" width={20} height={20} alt={ticons("ContactsFomContainer.phoneIcon")} />{t("components.ContactsFomContainer.text2")} + 7 (934)-22-33</a>
                        <p className="text-[#373F47]">{t("components.ContactsFomContainer.text3")}</p>
                    </div>
                    <div className="w-1/2 max-md:w-full px-5">
                        <form onSubmit={handleSubmit} className="bg-[#F7E8C6] flex flex-col justify-center px-[40px] py-[30px] rounded-[10px]">
                            <label htmlFor="contactFormName" className="mb-[5px] text-[#373F47] text-[18px]">{t("components.ContactsFomContainer.name")}</label>
                            <input
                                id="contactFormName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="h-[50px] mb-[20px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#F9AC1A] focus:border-[#F9AC1A] transition-shadow"
                                type="text"
                            />
                            <label htmlFor="contactFormPhone" className="mb-[5px] text-[#373F47] text-[18px]">{t("components.ContactsFomContainer.phone")}</label>
                            <input
                                id="contactFormPhone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="h-[50px] mb-[20px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none"
                                type="text"
                            />
                            <label htmlFor="contactFormText" className="mb-[5px] text-[#373F47] text-[18px]">{t("components.ContactsFomContainer.q")}</label>
                            <textarea
                                id="contactFormText"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="h-[170px] mb-[44px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none pt-[10px]" />
                            <button className="rounded-[10px] bg-[#26A65B] text-[#fff] max-w-[176px] h-12 self-center px-11"> {t("components.ContactsFomContainer.button")}</button>
                        </form>
                        {success && hendlerSuccessToast()}
                        {error && hendlerErrorToast()}
                    </div>
                </div>
            </div>
        </section>
    )
}