"use client";

import { useEffect } from "react";
import { useAppSession } from "../use-app-session";
import { signIn } from "next-auth/react";
import { FullPageSpinner } from "@/components/ui/skeletron/FullpageSpinner";
import { useRouter } from "next/navigation";

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
    const session = useAppSession();
    const router = useRouter();

    const isUnauthenticated = session.status === "unauthenticated";

    useEffect(() => {
        if (isUnauthenticated) {
            signIn();
        }
    }, [isUnauthenticated]);

    return (
        <>
            {(session.status === "loading" || session.status === 'unauthenticated') && <FullPageSpinner />}
            {session.data?.user.role !== "ADMIN" &&
                <div className="flex justify-center items-center h-screen">
                    <div className="shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] w-[350px] h-[200px] flex flex-col items-center justify-center gap-2 rounded-[10px] p-5">
                        <h1 className="text-[#383F47] text-[16px] font-semibold text-center">
                            Доступно только администратору
                        </h1>
                        <h2 className="text-[#6C7C8C] text-[14px] text-center mb-4">
                            Войдите в систему под аккаунтом администратора
                        </h2>
                        <button
                            className="bg-white border border-[#DFE2E6] shadow-sm px-6 py-2 rounded-[5px] cursor-pointer text-sm"
                            onClick={() => router.push("/")}
                        >
                            На главную
                        </button>
                    </div>
                </div>
            }
            {session.status === "authenticated" && children}
        </>
    )
}