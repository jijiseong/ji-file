'use client';

import { File, FileInput, FileLabel } from 'jifile';
import { Controller, useForm } from 'react-hook-form';
import Code from '../ui/code';
import ExampleBlock from '../ui/example-block';

const code = `'use client';

import { File, FileInput, FileLabel } from 'jifile';
import { Controller, useForm } from 'react-hook-form';


function WithReactHookFormExampleResult() {
  const { control, watch } = useForm<{ files?: FileList }>();

  const files = watch('files');
  const fileNames = files && Array.from(files).map(({ name }) => name);

  return (
    <>
      <Controller
        control={control}
        name={'files'}
        render={({ field }) => (
          <File multiple mode="stack" onFileChange={field.onChange}>
            <FileLabel>Select files</FileLabel>
            <FileInput hidden />
          </File>
        )}
      />

      <div>
        watch:
        <ul>{fileNames?.map((name) => <li key={name}>{name}</li>)}</ul>
      </div>
    </>
  );
}
`;

function WithReactHookFormExampleResult() {
  const { control, watch } = useForm<{ files?: FileList }>();

  const files = watch('files');
  const fileNames = files && Array.from(files).map(({ name }) => name);

  return (
    <>
      <Controller
        control={control}
        name={'files'}
        render={({ field }) => (
          <File multiple mode="stack" onFileChange={field.onChange}>
            <FileLabel>Select files</FileLabel>
            <FileInput hidden />
          </File>
        )}
      />

      <div>
        watch:
        <ul>{fileNames?.map((name) => <li key={name}>{name}</li>)}</ul>
      </div>
    </>
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
