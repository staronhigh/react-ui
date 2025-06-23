import { useState } from 'react';
import { Button } from '@components/Button/Button'
import { Checkbox } from '@components/Checkbox/Checkbox'
import { CheckboxGroup } from '@components/CheckboxGroup/CheckboxGroup';
import { RadioGroup } from '@components/RadioGroup/RadioGroup';
import { InputText } from '@components/InputText/InputText';
import { SelectBox } from '@components/SelectBox/SelectBox';
import { Accordion } from '@components/Accordion/Accordion';
import { Tabs } from '@components/Tab/Tabs';
import { Tab, TabList } from '@components/Tab/TabList';
import { TabPanel, TabPanels } from '@components/Tab/TabPanels';
import { Dialog } from '@components/Dialog/Dialog';

function App() {
  const [agree, setAgree] = useState(false);
  const [check, setCheck] = useState(['vue','react']);
  const [radio, setRadio] = useState('svelte');
  const [selectedValue, setSelectedValue] = useState('');
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
      <Button>어쩌구</Button>
      <Button icon="only">
        <i className="icon">아이콘온리</i>
      </Button>
      <Checkbox id="123" label="체크해주세요" checked={agree} onChange={(val)=>(setAgree(val))} />
      <CheckboxGroup 
        options={[
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Svelte', value: 'svelte' },
        ]}
        value={check}
        onChange={setCheck}
        direction="row"
      />

      <RadioGroup
        options={[
          { label: 'React', value: 'react', disabled: false },
          { label: 'Vue', value: 'vue', disabled: false },
          { label: 'Svelte', value: 'svelte', disabled: true }
        ]}
        name="radioGroup"
        value={radio}
        onChange={(val) => setRadio(val)}
      />

      <InputText label="이름" id="1234" placeholder="이름을 입력하세요" />
      
      <SelectBox 
        value={selectedValue}
        onChange={setSelectedValue}
        defaultValue={'react'}
        options={[
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Svelte', value: 'svelte' },
        ]}
      />

      <Accordion
        items={[
          { title: '안에 아코디언 또있음', content: (
            <div>
                부모 내용입니다.
                <Accordion
                  items={[
                    {
                      title: "자식 아코디언 1",
                      content: "내용1",
                    },
                    {
                      title: "자식 아코디언 2",
                      content: "내용2",
                    },
                  ]}
                  defaultOpen={[0]}
                  multiple
                />
            </div>
          )},
          { title: '제목2', content: '내용2' },
        ]}
        multiple
        onChange={(val) => {console.log(val)}}
      />
      
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>탭 1</Tab>
          <Tab disabled>탭 2</Tab>
          <Tab>탭 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>탭패널 1</TabPanel>
          <TabPanel>탭패널 2</TabPanel>
          <TabPanel>탭패널 33</TabPanel>
        </TabPanels>
      </Tabs>

      <Button onClick={()=>setModal(true)}>open modal</Button>
      <Dialog isOpen={modal}  onClose={()=>setModal(false)}>
        어쩌구 <br />

        <Button onClick={()=>setModal2(true)}>open modal</Button>
        <Dialog alert isOpen={modal2} onClose={()=>setModal2(false)}>
          얼럿
          <div>
            <Button onClick={()=>setModal2(false)}>취소</Button>
            <Button onClick={()=>setModal2(false)}>확인</Button>
          </div>
        </Dialog>
      </Dialog>
    </>
  )
}

export default App
