import useFile from './use-file';

interface FileLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function FileLabel(props: FileLabelProps) {
  const { id } = useFile();

  return <label {...props} htmlFor={id} />;
}
