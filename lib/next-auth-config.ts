import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import { AuthOptions } from "next-auth"
import { compact } from "lodash-es"
import { privateConfig } from "./config/private"
import { createUserUseCase } from "./_use-cases/create-user"
import { prisma } from "./prisma"
import { UserEntity } from "./_domain/types"


const prismaAdapter = PrismaAdapter(prisma);

export const nextAuthConfig: AuthOptions = {
    adapter: {
        ...prismaAdapter,
        createUser: (user: UserEntity) => {
            return createUserUseCase.exec(user);
        }
    } as AuthOptions['adapter'],
    callbacks: {
        session: async ({ session, user }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    role: user.role
                }
            }
        }
    },
    pages: {
        signIn: "/auth/signin",
    },
    providers: compact([
        privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
        GithubProvider({
            clientId: privateConfig.GITHUB_ID,
            clientSecret: privateConfig.GITHUB_SECRET,
        }),
    ]),
}
