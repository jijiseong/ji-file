'use client';

import { File, FileInput, FileLabel, FileList } from 'jifile';
import { Controller, useForm } from 'react-hook-form';
import ExampleBlock from '../ui/example-block';

const code = `'use client';

import { File, FileInput, FileLabel, FileList } from 'jifile';
import { Controller, useForm } from 'react-hook-form';

function WithReactHookFormExampleResult() {
  const { control } = useForm<{ files?: FileList }>();

  return (
    <Controller
      control={control}
      name={'files'}
      render={({ field }) => (
        <File multiple mode="stack" onFileChange={field.onChange}>
          <FileLabel>Select files</FileLabel>
          <FileInput hidden />
          <FileList
            renderItem={(file, index, remove) => (
              <div>
                <span>{file.name}</span>
                <button onClick={() => remove(index)}>remove</button>
              </div>
            )}
          />
        </File>
      )}
    />
  );
}
`;

function WithReactHookFormExampleResult() {
  const { control } = useForm<{ files?: FileList }>();

  return (
    <Controller
      control={control}
      name={'files'}
      render={({ field }) => (
        <File multiple mode="stack" onFileChange={field.onChange}>
          <FileLabel>Select files</FileLabel>
          <FileInput hidden />
          <FileList
            renderItem={(file, index, remove) => (
              <div>
                <span>{file.name}</span>
                <button onClick={() => remove(index)}>remove</button>
              </div>
            )}
          />
        </File>
      )}
    />
  );
}

export default function WithReactHookForm() {
  return (
    <ExampleBlock
      title="With React Hook Form"
      description="Simple example with react-hook-form, using stack mode"
      code={code}
      ui={<WithReactHookFormExampleResult />}
    />
  );
}
