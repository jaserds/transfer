import { nextAuthConfig } from "@/lib/next-auth-config"
import NextAuth from "next-auth"

const authHandler = NextAuth(nextAuthConfig)


export { authHandler as GET, authHandler as POST }