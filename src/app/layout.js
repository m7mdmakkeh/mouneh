import "./globals.css";

export const metadata = {
  title: "Mouneh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
