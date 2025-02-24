"use client";

import { Github } from "lucide-react";

import { ClientSafeProvider } from "next-auth/react";
import { useOAuthSignIn } from "./use-oauth-sign-in";
import Image from "next/image";

export function ProviderButton({ provider }: { provider: ClientSafeProvider }) {
    const oauthSignIn = useOAuthSignIn(provider);

    const getIcon = (provider: ClientSafeProvider) => {
        switch (provider.id) {
            case "github":
                return <Github />;
            case 'google':
                return <Image src="/icons/booking/mail-order-icon.svg" width={20} height={20} alt="" />;
            default:
                return null;
        }
    }

    return (
        <button
            type="button"
            className="flex w-full 
            items-center justify-center 
            gap-2 rounded-md border
             border-zinc-300 bg-white px-4 
             py-2 text-sm font-semibold text-zinc-700 
             shadow-sm hover:bg-zinc-50 sm:w-auto" onClick={() => oauthSignIn.signIn()}>
            {getIcon(provider)}
            <span>{provider.name}</span>
        </button>
    )
}