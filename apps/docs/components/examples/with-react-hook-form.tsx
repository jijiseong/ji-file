'use client';

import { File, FileInput, FileLabel, removeFile } from 'jifile';
import { Controller, useForm } from 'react-hook-form';
import ExampleBlock from '../ui/example-block';

const code = `'use client';

import { File, FileInput, FileLabel, removeFile } from 'jifile';
import { Controller, useForm } from 'react-hook-form';

function WithReactHookFormExampleResult() {
  const { control, watch, setValue, getValues } = useForm<{
    files?: FileList;
  }>();

  const fileArray = Array.from(watch('files') || []);
  return (
    <>
      <Controller
        control={control}
        name={'files'}
        render={({ field }) => (
          <File mode="stack" onFileChange={field.onChange} files={field.value}>
            <FileLabel>Select files</FileLabel>
            <FileInput multiple hidden />
          </File>
        )}
      />
      {fileArray.map((file, index) => (
        <div key={file.name} className="flex gap-2">
          <div>{file.name}</div>
          <button
            className="bg-red-100 size-5 rounded"
            onClick={() => {
              const files = getValues('files');
              if (!files) return;
              const removed = removeFile(files, { index });
              setValue('files', removed);
            }}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
}

`;

function WithReactHookFormExampleResult() {
  const { control, watch, setValue, getValues } = useForm<{
    files?: FileList;
  }>();

  const fileArray = Array.from(watch('files') || []);
  return (
    <>
      <Controller
        control={control}
        name={'files'}
        render={({ field }) => (
          <File mode="stack" onFileChange={field.onChange} files={field.value}>
            <FileLabel>Select files</FileLabel>
            <FileInput multiple hidden />
          </File>
        )}
      />
      {fileArray.map((file, index) => (
        <div key={file.name} className="flex gap-2">
          <div>{file.name}</div>
          <button
            className="bg-red-100 size-5 rounded"
            onClick={() => {
              const files = getValues('files');
              if (!files) return;
              const removed = removeFile(files, { index });
              setValue('files', removed);
            }}
          >
            x
          </button>
        </div>
      ))}
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
