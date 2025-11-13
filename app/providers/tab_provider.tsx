import { createContext, useState } from "react";

const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: (tab: string) => void;
}>({
    activeTab: "me",
    setActiveTab: () => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState<string>("me");
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabsContext.Provider>
    );
}

export default TabsContext;