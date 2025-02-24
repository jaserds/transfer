import { UserEntity } from "@/lib/_domain/types";
import { prisma } from "@/lib/prisma";

export class UserRepository {
    async createUser(user: UserEntity): Promise<UserEntity> {
        return await prisma.user.create({
            data: {
                ...user,
                role: user.role
            }
        });
    }
}

export const userRepository = new UserRepository();