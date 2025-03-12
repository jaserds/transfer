import { useMutation } from "@tanstack/react-query";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";


export function useOAuthSignIn(provider: ClientSafeProvider) {
    const pathname = usePathname();
    const locale = pathname.split("/")[1];

    const oauthSignInMutation = useMutation({
        mutationFn: () => signIn(provider.id, {
            callbackUrl: `/${locale}/`,
            redirect: false,
        }),
    });

    return {
        isPending: oauthSignInMutation.isPending,
        signIn: oauthSignInMutation.mutate
    }
}