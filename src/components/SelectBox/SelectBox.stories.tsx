import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from './SelectBox';
import { useState } from 'react';

const meta = {
  title: 'Components/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox> ;

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
    args: {
        options: [
            { label: 'React', value: 'react',  },
            { label: 'Vue', value: 'vue',  },
            { label: 'Svelte', value: 'svelte', }
        ],
    },
    render: (args) =>{
        const [selectedValue, setSelectedValue] = useState('');

        return(
            <SelectBox 
                {...args}
                value={selectedValue}
                onChange={setSelectedValue}
            />
        );
    }
};