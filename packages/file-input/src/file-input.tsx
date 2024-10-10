import { ForwardedRef, forwardRef } from 'react';
import useFile from './use-file';
import { mergeFileList } from './utils';

type DefaultInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface FileInputProps
  extends Omit<DefaultInputProps, 'multiple' | 'type' | 'id'> {}

function FileInput(props: FileInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { files, setFiles, multiple, id, mode } = useFile();

  const handleChangeDefaultMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFiles(event.currentTarget.files);
    props.onChange?.(event);
  };

  const handleChangeStackMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newFiles = event.currentTarget.files;

    if (!files) {
      setFiles(newFiles);
      return;
    }
    if (!newFiles) return;

    const mergedFileList = mergeFileList(files, newFiles);
    setFiles(mergedFileList);
    props.onChange?.(event);
  };

  const handleChange =
    mode === 'stack' ? handleChangeStackMode : handleChangeDefaultMode;

  return (
    <input
      id={id}
      ref={ref}
      type="file"
      onChange={handleChange}
      multiple={multiple}
      {...props}
    />
  );
}

export default forwardRef(FileInput);
