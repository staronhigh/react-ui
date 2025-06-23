/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RadioOption {
    label: string;
    value: string;
    disabled : boolean;
}

export interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    direction?: 'row' | 'column';
}

export const RadioGroup = ({ 
        name, 
        options, 
        value, 
        onChange, 
        direction = 'column',
    } : RadioGroupProps) => {
    const RadioGroupStyle = css`
        display: flex; 
        flex-direction: ${direction};
    `;
    return (
        <div className="RadioGroup" css={RadioGroupStyle}>
            {options.map((option) => (
                <div className="radio" key={option.value}>
                    <input 
                        type="radio"
                        name={name}
                        value={option.value}
                        id={`radio-${option.value}`}
                        checked={value === option.value}
                        disabled={option.disabled}
                        onChange={() => onChange(option.value)}
                    />
                    <label htmlFor={`radio-${option.value}`}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};