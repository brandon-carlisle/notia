import type { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, type = 'submit', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-32 rounded-md bg-gray-900 px-4 py-2 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
