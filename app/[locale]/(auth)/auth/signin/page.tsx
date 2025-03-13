import { ProviderButton } from "@/lib/auth/_ui/provider-button";
import { getProviders } from "next-auth/react";

export default async function SignIn() {
    const providers = await getProviders();
    const oauthProviders = Object.values(providers ?? {}).filter(provider => provider.type === "oauth");

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] w-[300px] h-[200px] flex flex-col gap-4 justify-center rounded-[10px] p-5">
                {oauthProviders.map(provider => <ProviderButton key={provider.id} provider={provider} />)}
            </div>
        </div>
    )
}