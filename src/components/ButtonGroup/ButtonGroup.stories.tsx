import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '@components/Button/Button'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    justify: {
        control: {
            type: 'select',
        },
        options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    justify: 'center',
    children: '',
  },
  render: ( { justify  }) => {
    return (
    <ButtonGroup justify={justify}>
      <Button primary onClick={() => alert('Yes')}>확인</Button>
      <Button onClick={() => alert('No')}>취소</Button>
    </ButtonGroup>
    )
  },
};
