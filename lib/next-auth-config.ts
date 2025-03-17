import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
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
        signIn: "/en/auth/signin",
    },
    providers: compact([
        privateConfig.GOOGLE_CLIENT_ID && privateConfig.GOOGLE_SECRET &&
        GoogleProvider({
            clientId: privateConfig.GOOGLE_CLIENT_ID!,
            clientSecret: privateConfig.GOOGLE_SECRET!,
        }),
    ]),
}
