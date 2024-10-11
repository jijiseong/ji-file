import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';

interface Props {
  children: string;
}

export default function Code({ children }: Props) {
  hljs.registerLanguage('javascript', javascript);

  const highlightedCode = hljs.highlight(children, {
    language: 'javascript',
  }).value;

  return (
    <pre className="bg-gray-100 rounded px-4 py-6 h-max">
      <code
        className="p-0 h-full"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
}
