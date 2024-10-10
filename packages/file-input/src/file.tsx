import { useEffect, useId, useState } from 'react';
import FileContext from './file-context';

interface FileProps {
  id?: string;
  children: React.ReactNode;
  multiple?: boolean;
  onFileChange?: (files: FileList | null) => void;
  mode?: 'stack' | 'default';
}

export default function File({
  children,
  multiple = false,
  onFileChange,
  id,
  mode = 'default',
}: FileProps) {
  const uniqueId = useId();
  const [files, setFiles] = useState<FileList | null>(null);

  useEffect(() => {
    onFileChange?.(files);
  }, [files]);

  return (
    <FileContext.Provider
      value={{ files, setFiles, multiple, id: id || uniqueId, mode }}
    >
      {children}
    </FileContext.Provider>
  );
}
