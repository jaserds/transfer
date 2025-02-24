import { ROLES, UserEntity } from "../_domain/types";
import { createUserId } from "../id";
import { userRepository } from "../user/_repositores/user.repository";

type CreateUser = {
    email: string;
    name?: string | null;
    image?: string | null;
    emailVerified?: Date | null;
}

export class CreateUserUseCase {
    async exec(data: CreateUser) {
        const role = ROLES.USER;

        const user: UserEntity = {
            id: createUserId(),
            role,
            ...data,
        }

        await userRepository.createUser(user)

        return user
    }
}

export const createUserUseCase = new CreateUserUseCase();