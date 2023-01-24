function Button({ text }) {
  return (
    <button
      text="Create note"
      type="submit"
      className="bg-gray-900 text-white w-32 px-4 py-2 rounded-md"
    >
      {text}
    </button>
  );
}
export default Button;
