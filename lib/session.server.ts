import { getServerSession } from "next-auth";
import { nextAuthConfig } from "./next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig)
export const getAppSessionStrictServer = async () => {
    const session = await getAppSessionServer();
    if (session === null) {
        throw new Error("User is not logged in");
    }
    return session;
}