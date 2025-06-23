/** @jsxImportSource @emotion/react */
import { Checkbox } from '@components/Checkbox/Checkbox';
import { css } from '@emotion/react';

export interface CheckboxOption {
  label: string;
  value: string;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value: string[]; // 현재 선택된 항목들
  onChange: (value: string[]) => void;
  disabled?: boolean;
  direction?: 'row' | 'column';
  allCheck?: boolean;
}

export const CheckboxGroup = ({
  options,
  value,
  onChange,
  disabled = false,
  direction = 'column',
  allCheck = false,
}: CheckboxGroupProps) => {
  const checkboxStyle = css`
    display: flex; 
    flex-direction: ${direction};
  `;
  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <>
    {allCheck && 
    <div>
      <Checkbox
        id="allCheck"
        label="전체선택"
        checked={value.length === options.length}
        onChange={(checked) =>
          onChange(checked ? options.map((opt) => opt.value) : [])
        }
      />
    </div>
    }
    <div className="checkbox-group" css={checkboxStyle}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          id={option.value}
          label={option.label}
          checked={value.includes(option.value)}
          onChange={() => handleToggle(option.value)}
          disabled={disabled}
        />
      ))}
    </div>
    </>
  );
};