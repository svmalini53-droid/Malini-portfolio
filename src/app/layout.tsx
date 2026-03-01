import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Malini S | MERN Stack Developer",
  description: "Portfolio of Malini S, a MERN Stack Developer and MCA student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "font-body antialiased bg-background text-slate-300 relative overflow-x-hidden selection:bg-primary selection:text-card"
        )}>
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="blob bg-primary w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="blob bg-secondary w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 [animation-delay:_2s]"></div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
