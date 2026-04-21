import "./globals.css";

export const metadata = {
  title: "Steppe Warriors",
  description: "Luxury camping tours in Mongolia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
