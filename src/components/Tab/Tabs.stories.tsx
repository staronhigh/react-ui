import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabList, Tab } from './TabList';
import { TabPanel, TabPanels } from './TabPanels';


const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs> ;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () =>{

        return(
            <Tabs defaultIndex={1}>
                <TabList>
                    <Tab disabled>탭 1</Tab>
                    <Tab>탭 2</Tab>
                    <Tab>탭 3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>탭패널 1</TabPanel>
                    <TabPanel>탭패널 2</TabPanel>
                    <TabPanel>탭패널 3</TabPanel>
                </TabPanels>
            </Tabs>
        );
    }
};