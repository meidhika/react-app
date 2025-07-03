const Button = (props) => {
  const {
    children,
    className = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold text-white rounded-lg ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
export default Button;
