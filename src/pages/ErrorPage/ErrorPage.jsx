

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 text-lg mb-4">
          We are sorry, but it seems there was an error. Please try again later.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to the home page
        </a>
      </div>
    </div>
    );
};

export default ErrorPage;
