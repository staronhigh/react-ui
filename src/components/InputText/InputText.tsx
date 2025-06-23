/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface InputProps {
    type?: string;
    label: string;
    id: string;
    value?: string;
    placeholder?: string;
    showLabel?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    helpText?: string;
    error?: boolean;
    errorMsg?: string;
}

export const InputText = ({
    type = 'text',
    label,
    id,
    value,
    placeholder,
    showLabel = true,
    disabled = false,
    readonly = false,
    helpText,
    error = false,
    errorMsg,
}: InputProps) => {
    const labelStyle= css`
        display: block;
        margin-bottom: 12px;
        font-size: 15px;
        color: #111;
    `;
    const inpStyle = css`
        height: 50px;
        padding: 0 16px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 18px;
        color: #111;

        &::placeholder {
            color:#888;
        }

        &::disabled {
            background: #ddd;
        }
    `;
    const inpError = css`
        border-color: #EB003B;
    `;
    const inpTextStyle = css`
        margin-top: 12px;
        font-size: 14px;
        color: #555;
    `;

    const errorText = css`
        color: #EB003B;
    `;

    return (
        <div css={inpTextStyle}>
            {showLabel && 
            <label css={labelStyle} htmlFor={`inpText-${id}`}>{label}</label>
            }
            <input
                css={[inpStyle, error && inpError]}
                type={type}
                placeholder={placeholder}
                defaultValue={value}
                id={`inpText-${id}`} 
                disabled={disabled} 
                readOnly={readonly} 
            />
            {helpText && 
                <p css={inpTextStyle}>{helpText}</p>
            }
            {errorMsg && 
                <p css={[inpTextStyle, errorMsg && errorText]}>{errorMsg}</p>
            }
        </div>
    )
}