import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Full Name"
        name="fullname"
        placeholder="Please Input Your Full Name ..."
        type="text"
      />
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
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="******"
      />
      <Button className="bg-blue-500 w-full" children="Register">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
