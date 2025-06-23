import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onlyIcon: {control: 'boolean', description: '텍스트 없이 체크박스만 보여줄때'}
  },
} satisfies Meta<typeof Checkbox> ;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '약관에 동의합니다',
    id: 'checkboxId',
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => {
          setChecked(val);
          args.onChange?.(val); // 액션 패널도 살리기
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: '약관에 동의합니다',
    id: 'checkboxId2',
    disabled: true
  }
}

export const OnlyIcon: Story = {
  args: {
    label: '체크박스만 노출',
    id: 'checkboxId3',
    onlyIcon: true
  }
}