function Header({ children }) {
  return (
    <header className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between md:items-center mb-16 pb-4 border-b-2 border-gray-300">
      {children}
    </header>
  );
}
export default Header;
