import { useContext } from 'react';
import FileContext from './file-context';

export default function useFile() {
  const context = useContext(FileContext);
  if (!context) throw new Error('not found file context');
  const { files, setFiles, multiple, id, mode } = context;

  return {
    files,
    setFiles,
    multiple,
    id,
    mode,
  } as const;
}
