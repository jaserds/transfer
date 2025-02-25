import AuthorizedGuard from "@/lib/auth/authorized-guard";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AuthorizedGuard>
                {children}
            </AuthorizedGuard>
        </>
    );
}
