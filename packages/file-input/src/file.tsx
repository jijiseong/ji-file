import { useEffect, useId, useState } from 'react';
import FileContext from './file-context';

interface FileProps {
  id?: string;
  children: React.ReactNode;
  files?: FileList | undefined;
  onFileChange?: (files: FileList | undefined) => void;
  mode?: 'stack' | 'default';
}

export default function File({
  children,
  onFileChange,
  id,
  mode = 'default',
  files: filesProp,
}: FileProps) {
  const uniqueId = useId();
  const [files, setFiles] = useState<FileList | undefined>(filesProp);

  useEffect(() => {
    onFileChange?.(files);
  }, [files]);

  return (
    <FileContext.Provider
      value={{ files: filesProp, id: id || uniqueId, mode, setFiles }}
    >
      {children}
    </FileContext.Provider>
  );
}
