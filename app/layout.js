import './globals.css';

export const metadata = {
  title: 'Steppe Warriors | Luxury Camping in Mongolia',
  description: 'Luxury camping and premium private tours in Mongolia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
