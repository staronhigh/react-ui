
interface AccordionItemProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isOpen: boolean;
    id?: number;
    ariaId?: string;
    onClick: () => void;
}

export const AccordionItem = ({
    title, children, isOpen, id, ariaId, onClick
}: AccordionItemProps) => {
    return(
        <div className="acco-item">
            <button 
                type="button" 
                className="acco-btn" 
                aria-expanded={isOpen}
                aria-controls={`${ariaId}-panel-${id}`}
                id={`${ariaId}-id-${id}`}
                onClick={onClick} 
            >
                <span>{title}</span>
            </button>
            {isOpen &&
                <div 
                    className="acco-panel" 
                    role="region"
                    aria-labelledby={`${ariaId}-id-${id}`}
                    id={`${ariaId}-panel-${id}`}
                >
                    {children}
                </div>
            }
        </div>
    );
}