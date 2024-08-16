// app/layout.js
import './globals.css';

export const metadata = {
  title: 'React Leaflet Map',
  description: 'A simple map with React Leaflet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
