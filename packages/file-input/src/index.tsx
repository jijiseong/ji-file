import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {}

export function FileInput(props: Props) {
  return <input type="file" {...props} />;
}
