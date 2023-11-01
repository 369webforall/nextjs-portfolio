'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import Container from './ui/container';
import { Button } from './ui/button';
import { Sun, Moon, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const links = [
  { id: 1, href: '/', label: 'Home' },
  { id: 2, href: '/about', label: 'About' },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex  sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-2 flex h-16 items-center justify-between max-w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden mr-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex gap-4 flex-col">
                  {links.map((link) => (
                    <Button variant="ghost" asChild key={link.id}>
                      <Link
                        href={link.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="text-sm font-medium transition-colors">
              <h1 className="text-2xl md:text-4xl font-bold text-teal-400">
                Brham Dev Mahato
              </h1>
            </Link>
          </div>
          <nav className="mx-6 space-x-4 lg:space-x-6 hidden md:flex items-center">
            {links.map((link) => (
              <Button variant="ghost" asChild key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="flex flex-col bg-slate-300 rounded-sm p-2">
            <p>Phone:+977-9849429828</p>
            <p>Email:brham1980@gmail.com</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
