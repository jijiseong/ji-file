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
      <body>{children}</body>
    </html>
  );
}
