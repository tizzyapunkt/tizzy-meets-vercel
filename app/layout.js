// These styles apply to every route in the application
import './globals.css';
 
export const metadata = {
  title: 'Tizzy meets Vercel :)',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen'>{children}</body>
    </html>
  );
}