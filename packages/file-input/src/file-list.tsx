import React, { HTMLAttributes } from 'react';
import useFile from './use-file';

interface Props extends HTMLAttributes<HTMLUListElement> {
  renderItem: (file: File, index: number) => React.ReactNode;
}

export default function FileList({ renderItem, ...props }: Props) {
  const { files } = useFile();

  const fileArray = files && Array.from(files);

  return (
    <ul {...props}>
      {fileArray?.map((file, index) => (
        <li key={file.name}>{renderItem(file, index)}</li>
      ))}
    </ul>
  );
}
