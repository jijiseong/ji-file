'use client';

import { File, FileInput, FileLabel, FileList } from '@ji-file/file-input';
import { Controller, useForm } from 'react-hook-form';

export default function WithReactHookForm() {
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

      <div>watch</div>
      <ul>{fileNames?.map((name) => <li key={name}>{name}</li>)}</ul>
    </>
  );
}
