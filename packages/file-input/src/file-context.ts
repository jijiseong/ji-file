import { createContext, Dispatch, SetStateAction } from 'react';

interface TFileContext {
  files: FileList | undefined;
  id: string;
  mode: 'default' | 'stack';
  setFiles: Dispatch<SetStateAction<FileList | undefined>>;
}

const FileContext = createContext<TFileContext | undefined>(undefined);

export default FileContext;
