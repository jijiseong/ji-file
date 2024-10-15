'use client';

import { File, FileInput, FileLabel, getPreviewImage } from 'jifile';
import Image from 'next/image';
import ExampleBlock from '../ui/example-block';
import { useState } from 'react';

const code = `'use client'

import { File, FileInput, FileLabel, getPreviewImage } from 'jifile';
import Image from 'next/image';
import { useState } from 'react';

function ImagePreviewExampleResult() {
  const [files, setFiles] = useState<FileList>();
  const fileArray = Array.from(files || []);

  return (
    <>
      <File onFileChange={setFiles}>
        <FileLabel>Select image files</FileLabel>
        <FileInput accept="image/*" hidden multiple />
      </File>
      <div className="flex gap-4">
        {fileArray.map((file) => (
          <Image
            key={file.name}
            width={200}
            height={200}
            src={getPreviewImage(file)}
            alt="image preview"
          />
        ))}
      </div>
    </>
  );
}`;

function ImagePreviewExampleResult() {
  const [files, setFiles] = useState<FileList>();
  const fileArray = Array.from(files || []);

  return (
    <>
      <File onFileChange={setFiles}>
        <FileLabel>Select image files</FileLabel>
        <FileInput accept="image/*" hidden multiple />
      </File>
      <div className="flex gap-4">
        {fileArray.map((file) => (
          <Image
            key={file.name}
            width={200}
            height={200}
            src={getPreviewImage(file)}
            alt="image preview"
          />
        ))}
      </div>
    </>
  );
}

export default function ImageFilePreviewExample() {
  return (
    <ExampleBlock
      title="Image Preview Example"
      description="You can get preveiw image from file easily"
      code={code}
      ui={<ImagePreviewExampleResult />}
    />
  );
}
