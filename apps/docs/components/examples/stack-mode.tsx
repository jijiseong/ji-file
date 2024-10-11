'use client';

import { File, FileInput, FileLabel, FileList, getPreviewImage } from 'jifile';
import Image from 'next/image';
import ExampleBlock from '../ui/example-block';

const code = `'use client';

function StackModeExamplePreview() {
  return (
    <>
      <File mode="stack" onFileChange={(files) => console.log(files)}>
        <FileLabel>Select File</FileLabel>
        <FileList renderItem={({ name }) => <>{name}</>} />
        <FileInput hidden />
      </File>
      <div>Open the developer tool and check the console.</div>
    </>
  );
}`;

function StackModeExamplePreview() {
  return (
    <>
      <File mode="stack" onFileChange={(files) => console.log(files)}>
        <FileLabel>Select File</FileLabel>
        <FileList renderItem={({ name }) => <>{name}</>} />
        <FileInput hidden />
      </File>
      <div>Open the developer tool and check the console.</div>
    </>
  );
}

export default function StackModeExample() {
  return (
    <>
      <ExampleBlock
        title="Stack Mode Example"
        description="You can get files from onFileChange. Even if new files selected, it is not reset and keeps accumulating."
        code={code}
        ui={<StackModeExamplePreview />}
      />
    </>
  );
}
