import { ReactNode, useState } from 'react';
import Code from './code';
import { Button } from './button';
import { Tabs, TabsList, TabsTrigger } from './tabs';
import { TabsContent } from '@radix-ui/react-tabs';

interface Props {
  code: string;
  ui: ReactNode;
  title: string;
  description: string;
}

function ExampleBlock({ title, description, code, ui }: Props) {
  const [preview, setPreview] = useState(false);
  return (
    <section className="space-y-4">
      <h3 className="text-lg">{title}</h3>
      <p>{description}</p>

      <Tabs className="space-y-2" defaultValue="code">
        <TabsList>
          <TabsTrigger value="code">code</TabsTrigger>
          <TabsTrigger value="preview">preview</TabsTrigger>
        </TabsList>
        <div className="overflow-scroll h-96 border border-slate-200 rounded">
          <TabsContent value="code">
            <Code>{code}</Code>
          </TabsContent>
          <TabsContent value="preview">
            <div className="px-4 py-6">{ui}</div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}

export default ExampleBlock;
