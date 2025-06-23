import './SelectBox.scss';
import { useState, useRef, useEffect } from "react"

export interface selectOptions {
    label: string;
    value: string;
}

export interface selectBoxProps {
    options: selectOptions[];
    value: string;
    defaultValue?: string;
    onChange: (value: string) => void;
}

export const SelectBox = ({
    options,
    value,
    defaultValue = '선택하세요',
    onChange,
}:selectBoxProps) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selected = options.find((opt) => opt.value === value);

    const handleOptionClick = (val: string) => {
        onChange(val);
        setOpen(false);
    };

    // 바깥 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="select-box" ref={wrapperRef}>
            <button type="button" className="select-btn" onClick={() => setOpen(!open)}>
                {selected?.label || defaultValue}
            </button>
            {open && (
                <ul className="select-dropdown">
                   {options.map((opt)=>(
                    <li
                        key={opt.value}
                        onClick={()=>handleOptionClick(opt.value)}
                    >
                        <button type="button">{opt.label}</button>
                    </li>
                   ))} 
                </ul>
            )}
        </div>
    );
}