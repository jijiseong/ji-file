import WithReactHookForm from './_blocks/with-react-hook-form';
import {
  ImageFilePreviewExample,
  MultipleFileExample,
  MultipleFileMergeExample,
  SingleFileExample,
} from './_blocks/simple-example';

export default function Home() {
  return (
    <div>
      <SingleFileExample />
      <MultipleFileExample />
      <MultipleFileMergeExample />
      <ImageFilePreviewExample />
      <hr className="my-12" />
      <WithReactHookForm />
    </div>
  );
}
1;
