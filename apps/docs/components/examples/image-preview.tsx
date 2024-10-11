'use client';

import { File, FileInput, FileLabel, FileList, getPreviewImage } from 'jifile';
import Image from 'next/image';
import ExampleBlock from '../ui/example-block';

const code = `'use client'

import { File, FileInput, FileLabel, FileList, getPreviewImage } from 'jifile';
import Image from 'next/image';

export function ImageFilePreviewExample() {
    return (
      <>
        <File multiple>
          <FileLabel>Select image files</FileLabel>
          <FileList
            className="flex gap-2"
            renderItem={(file) => {
              const previewUrl = getPreviewImage(file);
              return (
                <div className="relative aspect-auto size-40">
                  <Image fill alt="test" src={previewUrl} />
                </div>
              );
            }}
          />
          <FileInput accept="image/*" hidden />
        </File>
      </>
    );
  }
  `;

export default function ImageFilePreviewExample() {
  return (
    <ExampleBlock
      title="Image Preview Example"
      description="You can get preveiw image from file easily"
      code={code}
      ui={
        <File multiple>
          <FileLabel>Select image files</FileLabel>
          <FileList
            className="flex gap-2"
            renderItem={(file) => {
              const previewUrl = getPreviewImage(file);
              return (
                <div className="relative aspect-auto size-40">
                  <Image fill alt="test" src={previewUrl} />
                </div>
              );
            }}
          />
          <FileInput accept="image/*" hidden />
        </File>
      }
    />
  );
}
