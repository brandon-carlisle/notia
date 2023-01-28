function Header({ children }) {
  return (
    <header className="flex justify-between items-center mb-16 pb-4 border-b-2 border-gray-300">
      {children}
    </header>
  );
}
export default Header;
