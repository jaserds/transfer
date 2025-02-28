import { SessionEntity } from "./_domain/types";

declare module "next-auth" {
    interface Session {
        user: SessionEntity["user"]
    }
}