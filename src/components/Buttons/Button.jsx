function Button({ text, type = 'submit', onClick = null }) {
  return (
    <button
      text="Create note"
      type={type}
      className="bg-gray-900 text-white w-32 px-4 py-2 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
