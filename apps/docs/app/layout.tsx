import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ji-file docs',
  description: 'Utilities about file input for the best UX.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-[1000px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
