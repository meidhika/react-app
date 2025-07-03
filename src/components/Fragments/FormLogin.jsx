import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <Button className="bg-blue-500 w-full" children="Login" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
