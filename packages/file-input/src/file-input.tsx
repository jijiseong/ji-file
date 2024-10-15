import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import useFile from './use-file';
import { mergeFileList } from './utils';

type DefaultInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface FileInputProps extends Omit<DefaultInputProps, 'type' | 'id'> {}

function FileInput(props: FileInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { files, id, mode, setFiles } = useFile();

  const handleChangeDefaultMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.currentTarget.files) return;
    setFiles(event.currentTarget.files);
    props.onChange?.(event);
  };

  const handleChangeStackMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const eventFiles = event.currentTarget.files;
    const newFiles = mergeFileList(files || [], eventFiles || []);

    setFiles(newFiles);
    props.onChange?.(event);
  };

  const handleChange =
    mode === 'stack' ? handleChangeStackMode : handleChangeDefaultMode;

  return (
    <input id={id} ref={ref} type="file" onChange={handleChange} {...props} />
  );
}

export default forwardRef(FileInput);
