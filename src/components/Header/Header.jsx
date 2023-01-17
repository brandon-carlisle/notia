function Header({ children, alignItems = 'start' }) {
  return (
    <div
      className={`flex justify-between items-${alignItems} mb-16 pb-4 border-b-2 border-gray-300`}
    >
      {children}
    </div>
  );
}
export default Header;
