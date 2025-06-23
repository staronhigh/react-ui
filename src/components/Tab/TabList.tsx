
import React from 'react';
import { useTabsContext } from "./Tabs";

interface TabProps {
    children: React.ReactNode;
    index?: number; 
    isActive?: boolean;
    onClick?: () => void;
    id?: string;
    panelId?: string;
    disabled?: boolean;
}

export const TabList = ({ children }: { children: React.ReactNode }) => {
    const { tabAriaId, activeIndex, setActiveIndex } = useTabsContext();
    return (
        <div className="tab-list">
        {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            return React.cloneElement(child as any, {
                index,
                isActive: activeIndex === index,
                onClick: () => setActiveIndex(index),
                id: `${tabAriaId}-tab-${index}`,
                panelId: `${tabAriaId}-panel-${index}`
            })
        })}
        </div>
    );
};

export const Tab = ({
    children,
    isActive,
    onClick,
    id,
    panelId,
    disabled,
}: TabProps) => {
    return (
        <button
            role="tab"
            id={id}
            aria-selected={isActive}
            aria-controls={panelId}
            onClick={onClick}
            disabled={disabled}
            className={`tab-btn ${isActive ? 'active' : ''}`}
        >
            {children}
        </button>
    );
};
