import { ForwardedRef, forwardRef } from 'react';
import useFile from './use-file';

interface FileLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const FileLabel = forwardRef(
  (props: FileLabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { id } = useFile();

    return <label ref={ref} {...props} htmlFor={id} />;
  }
);
FileLabel.displayName = 'FileLabel';

export default FileLabel;
