import { ProviderButton } from "@/lib/auth/_ui/provider-button";
import { getProviders } from "next-auth/react";
import { getTranslations } from "next-intl/server";

export default async function SignIn() {
    const t = await getTranslations("AppTraslation");
    const providers = await getProviders();
    const oauthProviders = Object.values(providers ?? {}).filter(provider => provider.type === "oauth");

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] w-[300px] h-[200px] flex flex-col gap-4 justify-center rounded-[10px] p-5">
                <h1 className="my-0 mx-auto text-[#383F47] border-b-[1px] border-[#e2e2e2] pb-4 mb-2">{t("components.providerButton.title")}</h1>
                {oauthProviders.map(provider => <ProviderButton key={provider.id} provider={provider} />)}
            </div>
        </div>
    )
}