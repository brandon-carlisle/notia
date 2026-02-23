import type { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="mb-16 flex flex-col justify-between gap-8 border-b-2 border-gray-300 pb-4 md:flex-row md:items-center md:gap-0">
      {children}
    </header>
  );
}

export default Header;
