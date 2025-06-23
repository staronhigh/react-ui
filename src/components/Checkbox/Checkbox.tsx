/** @jsxImportSource @emotion/react */
import './checkbox.scss';
import { css } from '@emotion/react';

export interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    onlyIcon?: boolean;
}

export const Checkbox = ({ id, label, checked, onChange, disabled = false, onlyIcon = false }: CheckboxProps) => {
  const labelStyle = css`
    color: ${disabled ? '#ccc' : '#000'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `;

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={`checkbox-${id}`} css={labelStyle} className={onlyIcon ? 'hide' : ''}>
        {label}
      </label>
    </div>
  );
};