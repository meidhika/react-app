import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      id="email"
      className="w-full p-2 border border-gray-300 rounded placeholder:opacity-5"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
