import "./globals.css";

export const metadata = {
  title: "Steppe Warriors",
  description: "Luxury camping and adventure travel in Mongolia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
