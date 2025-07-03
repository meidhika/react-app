import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex justify-center min-h-screen items-center flex-col"
    >
      <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className=" text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
