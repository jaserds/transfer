"use client";

import { useEffect } from "react";
import { useAppSession } from "../use-app-session";
import { signIn } from "next-auth/react";
import { FullPageSpinner } from "@/components/ui/skeletron/FullpageSpinner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
    const session = useAppSession();
    const router = useRouter();
    const t = useTranslations("authAdminError");

    const isUnauthenticated = session.status === "unauthenticated";
    const isLoading = session.status === "loading";
    const isAdmin = session.data?.user.role === "ADMIN";

    useEffect(() => {
        if (isUnauthenticated) {
            signIn(); // Перенаправляет на страницу входа
        }
    }, [isUnauthenticated]);

    if (isLoading || isUnauthenticated) {
        return <FullPageSpinner />;
    }

    if (!isAdmin) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] w-[350px] h-[200px] flex flex-col items-center justify-center gap-2 rounded-[10px] p-5">
                    <h1 className="text-[#383F47] text-[16px] font-semibold text-center">
                        {t("title")}
                    </h1>
                    <h2 className="text-[#6C7C8C] text-[14px] text-center mb-4">
                        {t("subtitle")}
                    </h2>
                    <button
                        className="bg-white border border-[#DFE2E6] shadow-sm px-6 py-2 rounded-[5px] cursor-pointer text-sm"
                        onClick={() => router.push("/")}
                    >
                        {t("button")}
                    </button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
