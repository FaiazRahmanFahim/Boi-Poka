import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="status status-info w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600">
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
