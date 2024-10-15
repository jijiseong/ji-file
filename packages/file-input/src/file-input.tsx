import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import useFile from './use-file';
import { mergeFileList } from './utils';

type DefaultInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface FileInputProps extends Omit<DefaultInputProps, 'type' | 'id'> {
  onFileChange?: (files: FileList | undefined) => void;
  files?: FileList | undefined;
}

function FileInput(
  { files, onFileChange, ...props }: FileInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { id, mode } = useFile();

  const handleChangeDefaultMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.currentTarget.files) return;
    onFileChange?.(event.currentTarget.files);
    props.onChange?.(event);
  };

  const handleChangeStackMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const eventFiles = event.currentTarget.files;
    const newFiles = mergeFileList(files || [], eventFiles || []);

    onFileChange?.(newFiles);
    props.onChange?.(event);
  };

  const handleChange =
    mode === 'stack' ? handleChangeStackMode : handleChangeDefaultMode;

  return (
    <input id={id} ref={ref} type="file" onChange={handleChange} {...props} />
  );
}

export default forwardRef(FileInput);
