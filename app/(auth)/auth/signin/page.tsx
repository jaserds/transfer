import { ProviderButton } from "@/lib/auth/_ui/provider-button";
import { getProviders } from "next-auth/react";

export default async function SignIn() {
    const providers = await getProviders();
    const oauthProviders = Object.values(providers ?? {}).filter(provider => provider.type === "oauth");

    return (
        <div>
            <ProviderButton provider={oauthProviders[0]} />
        </div>
    )
}