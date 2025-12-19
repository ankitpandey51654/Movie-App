import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log(navigate);

  const handleCLick = () => {
    navigate(-1);
  };
  console.error(error);

  // Handle only 404
  if (error?.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

          {/* Message */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            Page Not Found
          </h2>

          <p className="mt-2 text-gray-600">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          {/* Button */}
          <button
            onClick={handleCLick}
            className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Fallback for other errors
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold text-red-600">
        Something went wrong!
      </h1>
    </div>
  );
};

export default ErrorPage;
