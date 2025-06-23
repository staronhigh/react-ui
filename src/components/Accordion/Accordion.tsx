import { useState, useId } from "react";
import { AccordionItem } from "./AccordionItem";
import "./accordion.scss"

interface AccordionItemProps {
    items: {
        title: React.ReactNode,
        content: React.ReactNode
    }[];
    defaultOpen?: number[];
    multiple?: boolean;
    onChange?: (openState: number[]) => void;
}

export const Accordion = ({ 
    items, 
    defaultOpen = [], 
    multiple = false,
    onChange,
 }: AccordionItemProps) => {

    const [openIndex, setOpenIndex] = useState<number[]>(defaultOpen);
    const accoId = useId();

    const handleToggle = (index:number) => {
        setOpenIndex(prev => {
            let next: number[];

            if (multiple) {
                next = prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index];
            } else {
                next = prev[0] === index ? [] : [index];
            }
            onChange?.(next);
            return next;
        })
    }

    return(
        <div className="acco-wrap">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    id={index}
                    ariaId={accoId}
                    title={item.title}
                    isOpen={openIndex.includes(index)}
                    onClick={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}