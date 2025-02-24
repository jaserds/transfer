import { ProviderButton } from "@/lib/auth/_ui/provider-button";
import { getProviders } from "next-auth/react";

export default async function SignIn() {
    const providers = await getProviders();
    const oauthProviders = Object.values(providers ?? {}).filter(provider => provider.type === "oauth");
    console.log(oauthProviders);

    return (
        <div>
            <h1>Sign in</h1>
            {oauthProviders.map(provider => <ProviderButton key={provider.id} provider={provider} />)}
        </div>
    )
}