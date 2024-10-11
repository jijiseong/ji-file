import React, { HTMLAttributes } from 'react';
import useFile from './use-file';

interface Props extends HTMLAttributes<HTMLUListElement> {
  renderItem: (
    file: File,
    index: number,
    removeFile: (index: number) => void
  ) => React.ReactNode;
}

export default function FileList({ renderItem, ...props }: Props) {
  const { files, setFiles } = useFile();

  const fileArray = files && Array.from(files);

  const removeFile = (index: number) => {
    setFiles((old) => {
      if (!old) return null;

      const dataTransfer = new DataTransfer();
      const filtered = Array.from(old).filter((file, idx) => idx !== index);
      filtered.forEach((file) => {
        dataTransfer.items.add(file);
      });
      return dataTransfer.files;
    });
  };

  return (
    <ul {...props}>
      {fileArray?.map((file, index) => (
        <li key={file.name}>{renderItem(file, index, removeFile)}</li>
      ))}
    </ul>
  );
}
