import { createContext, Dispatch, SetStateAction } from 'react';

interface TFileContext {
  files: FileList | null;
  setFiles: Dispatch<SetStateAction<FileList | null>>;
  multiple: boolean;
  id: string;
  mode: 'default' | 'stack';
}

const FileContext = createContext<TFileContext | undefined>(undefined);

export default FileContext;
