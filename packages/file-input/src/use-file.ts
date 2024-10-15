import { useContext } from 'react';
import FileContext from './file-context';

export default function useFile() {
  const context = useContext(FileContext);
  if (!context) throw new Error('not found file context');
  const { files, id, mode, setFiles } = context;

  return {
    files,
    id,
    mode,
    setFiles,
  } as const;
}
