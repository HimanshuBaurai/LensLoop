import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Create a new instance of QueryClient for managing React Query
const queryClient = new QueryClient();

// Wrapper component for providing the QueryClient to the React Query ecosystem
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        // Wrap the application with QueryClientProvider to make React Query functionalities available
        <QueryClientProvider client={queryClient}>
            {children}
            {/* Optional: ReactQueryDevtools for debugging and monitoring queries */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
