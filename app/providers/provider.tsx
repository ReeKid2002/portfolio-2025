"use client";
import { TabProvider } from "./tab_provider";
import { ThemeProvider } from "./theme_provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <TabProvider>
                {children}
            </TabProvider>
        </ThemeProvider>
    );
}