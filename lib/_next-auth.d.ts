import { SessionEntity, UserEntity } from "./_domain/types";

declare module "next-auth" {
    interface Session {
        user: SessionEntity["user"]
    }
    interface User extends UserEntity {
        role: UserEntity["role"];
    }
}