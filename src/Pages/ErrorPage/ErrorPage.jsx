import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        It looks like youve taken a wrong turn. Lets get you back on track!
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
