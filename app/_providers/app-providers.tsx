"use client";

import { queryClient } from "@/lib/api/query-client";
import { AppSessionProvider } from "@/lib/app-session-provider";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProviders({ children }: { children: React.ReactNode }) {
    return <AppSessionProvider>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </AppSessionProvider >
}