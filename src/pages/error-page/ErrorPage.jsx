import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link to={`/`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;