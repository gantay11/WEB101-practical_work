// Use a capital 'I' for the import (the loader function)
import { Inter } from 'next/font/google'; 
import './globals.css'; 
import MainLayout from '@/components/layout/MainLayout';

// Assign to a lowercase 'inter' (the specific font instance)
// The loader (Inter) and instance (inter) MUST have different cases
const inter = Inter({ subsets: ['latin'] }); 

export const metadata = {
  title: 'TikTok Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
