'use client';

import { File, FileInput, FileLabel } from 'jifile';
import ExampleBlock from '../ui/example-block';
import { useState } from 'react';

const code = `'use client';

import { File, FileInput, FileLabel } from 'jifile';
import ExampleBlock from '../ui/example-block';

function StackModeExamplePreview() {
  const [files, setFiles] = useState<FileList>();
  const fileArray = Array.from(files || []);

  return (
    <>
      <File mode="stack" onFileChange={setFiles} files={files}>
        <FileLabel>Select File</FileLabel>
        <div className="flex flex-col gap-2">
          {fileArray.map((file) => (
            <span key={file.name}>{file.name}</span>
          ))}
        </div>
        <FileInput hidden />
      </File>
    </>
  );
}
`;

function StackModeExamplePreview() {
  const [files, setFiles] = useState<FileList>();
  const fileArray = Array.from(files || []);

  return (
    <>
      <File mode="stack" onFileChange={setFiles} files={files}>
        <FileLabel>Select File</FileLabel>
        <div className="flex flex-col gap-2">
          {fileArray.map((file) => (
            <span key={file.name}>{file.name}</span>
          ))}
        </div>
        <FileInput hidden />
      </File>
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
