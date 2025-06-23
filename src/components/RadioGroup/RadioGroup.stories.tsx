import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup> ;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    name: 'framework',
    options: [
      { label: 'React', value: 'react', disabled: false },
      { label: 'Vue', value: 'vue', disabled: false },
      { label: 'Svelte', value: 'svelte', disabled: true }
    ],
    value: '',
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.value);
    return (
      <RadioGroup
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