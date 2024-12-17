import React from "react";

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1">404</h1>
            <h2>Oops! Page not found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <a href="/" className="btn btn-primary mt-3">Return to Home</a>
        </div>
    );
};

export default NotFound;
