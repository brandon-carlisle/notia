function Header({ children }) {
  return (
    <div
      className={`flex justify-between items-start mb-16 pb-4 border-b-2 border-gray-300`}
    >
      {children}
    </div>
  );
}
export default Header;
