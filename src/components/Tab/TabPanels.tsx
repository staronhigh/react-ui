
import React from 'react';
import { useTabsContext } from "./Tabs";

export const TabPanels = ({ children }: { children: React.ReactNode }) => {
    const { tabAriaId, activeIndex } = useTabsContext();
    return (
        <div className="tab-panels">
            {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            return React.cloneElement(child as any, {
            id: `${tabAriaId}-panel-${index}`,
            labelledBy: `${tabAriaId}-tab-${index}`,
            hidden: activeIndex !== index,
            });
        })}
        </div>
    );
};

interface TabPanelProps {
    children: React.ReactNode;
    id?: string;
    labelledBy?: string;
    hidden?: boolean;
}

export const TabPanel = ({
    children,
    id,
    labelledBy,
    hidden
}: TabPanelProps) => {
    return (
        <div 
            role="tabpanel"
            id={id}
            aria-labelledby={labelledBy}
            hidden={hidden}
            className="tab-panel"
        >
            {children}
        </div> 
    )
};