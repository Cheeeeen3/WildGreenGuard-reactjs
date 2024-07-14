import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";


const ErrorPage: React.FC = () => {
  // you don"t need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-xl whitespace-nowrap">Sorry, an unexpected error has occurred.</p>
      <Link to="/" className="btn w-11/12 btn-active bg-emerald-800 border-emerald-800 text-white hover:bg-emerald-600 max-w-xs">
          Go Back
        </Link>
      <img src="src/assets/HomePage_WGG/ErrorGIF.gif" alt="ErrorPage GIF" className="size-72"/>
    </div>
  );
};

export default ErrorPage;