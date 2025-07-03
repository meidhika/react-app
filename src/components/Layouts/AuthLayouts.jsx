import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please Enter Your Details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-500 text-sm text-center mt-5">
        Don't Have an Account?{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-500 text-sm text-center mt-5">
        Already Have an Account?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
