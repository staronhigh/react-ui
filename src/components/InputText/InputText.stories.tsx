import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta = {
  title: 'Components/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText> ;

export default meta;
type Story = StoryObj<typeof InputText>;

export const Default: Story = {
    args: {
        label: '이름',
        id: 'InputId',
        placeholder: '이름을 입력해주세요'
    },
};