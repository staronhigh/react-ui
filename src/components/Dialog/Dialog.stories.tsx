import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from './Dialog';
import { Button } from '@components/Button/Button'


const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    fullScreen: {
      description: "전체화면 팝업"
    }
  },
} satisfies Meta<typeof Dialog> ;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {
        isOpen: false,
        children: "내용",
        fullScreen: false
    },
    render: (args) =>{
        const [modal, setModal] = useState(args.isOpen ?? false);
        
        return(
            <>
                <Button onClick={()=>setModal(true)}>open modal</Button>
                <Dialog 
                    isOpen={modal} 
                    fullScreen={args.fullScreen} 
                    onClose={()=>setModal(false)}
                >
                    {args.children}
                </Dialog>
            </>
        );
    }
};
