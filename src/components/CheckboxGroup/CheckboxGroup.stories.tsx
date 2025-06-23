import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const meta = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte' },
    ],
    value: [],
    direction: 'column',
  },
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.value);

    return (
      <CheckboxGroup
        {...args}
        value={selected}
        onChange={(val) => {
          setSelected(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};