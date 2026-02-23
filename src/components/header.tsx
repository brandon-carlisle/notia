import type { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-end md:gap-6">
      {children}
    </header>
  );
}

export default Header;
