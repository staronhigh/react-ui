import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';


const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      description: "다중열림"
    }
  },
} satisfies Meta<typeof Accordion> ;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        items: [
            { title: '제목1', content: '내용1' },
            { title: '제목2', content: '내용2' },
            { title: '제목3', content: '내용3' },
        ],
    },
    render: (args) =>{

        return(
            <Accordion 
                {...args}
            />
        );
    }
};