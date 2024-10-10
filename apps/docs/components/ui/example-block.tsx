import { ReactNode, useState } from 'react';
import Code from './code';

interface Props {
  code: string;
  ui: ReactNode;
  title: string;
  description: string;
}

function ExampleBlock({ title, description, code, ui }: Props) {
  const [preview, setPreview] = useState(false);
  return (
    <section>
      <h2 className="text-xl">{title}</h2>
      <div>
        <button onClick={() => setPreview(true)}>code</button>
        <button onClick={() => setPreview(false)}>preview</button>
      </div>
      <div className="overflow-scroll  h-56">
        {preview ? <Code>{code}</Code> : <div>{ui}</div>}
      </div>
      <p>{description}</p>
    </section>
  );
}

export default ExampleBlock;
