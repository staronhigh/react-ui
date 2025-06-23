import './Tabs.scss';
import { useState, useId } from "react";
import { createContext, useContext } from "react";

const TabsContext = createContext<{
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    tabAriaId: string;
} | null>(null);

export const useTabsContext = () => {
    const ctx = useContext(TabsContext);
    if (!ctx) throw new Error("TabContext.Provider 안에써 써야 함");
    return ctx;
};

export const Tabs = ({
    children,
    defaultIndex = 0,
    onChange,
}: {
    children: React.ReactNode;
    defaultIndex?: number;
    onChange?: (index: number) => void;
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const tabId = useId();

    const handleChange = (index: number) => {
        setActiveIndex(index);
        onChange?.(index);
    };

    return (
        <TabsContext.Provider value={{ tabAriaId: tabId, activeIndex, setActiveIndex: handleChange }}>
            <div className="tab">{children}</div>
        </TabsContext.Provider>
    );
};