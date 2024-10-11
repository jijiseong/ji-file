import WithReactHookForm from '../components/examples/with-react-hook-form';

import ImageFilePreviewExample from '../components/examples/image-preview';
import StackModeExample from '@/components/examples/stack-mode';
import Code from '@/components/ui/code';

export default function Home() {
  const examples = [
    <StackModeExample />,
    <ImageFilePreviewExample />,
    <WithReactHookForm />,
  ];

  return (
    <>
      <div className="my-20">
        <h1 className="text-3xl">jifile</h1>
        <div>Utilities about file input for the best UX.</div>
      </div>

      <div className="flex flex-col gap-20 ">
        <div>
          <h2 className="text-2xl">Installation</h2>
          <Code>npm install jifile</Code>
        </div>
        {examples.map((block, index) => {
          if (index === examples.length) return block;
          return (
            <>
              {block}
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}
1;
