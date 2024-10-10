'use client';

import { File, FileInput, FileLabel, FileList } from '@ji-file/file-input';
import { getPreviewImage } from '@ji-file/utils';
import Image from 'next/image';

export function SingleFileExample() {
  return (
    <>
      <File>
        <FileLabel>Select File</FileLabel>
        <FileList renderItem={({ name }) => <>{name}</>} />
        <FileInput hidden />
      </File>
    </>
  );
}

export function MultipleFileExample() {
  return (
    <>
      <File multiple>
        <FileLabel>Select Files</FileLabel>
        <FileList renderItem={({ name }) => <>{name}</>} />
        <FileInput hidden />
      </File>
    </>
  );
}

export function MultipleFileMergeExample() {
  return (
    <>
      <File multiple>
        <FileLabel>Select Files</FileLabel>
        <FileList renderItem={({ name }) => <>{name}</>} />
        <FileInput hidden />
      </File>
    </>
  );
}

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
