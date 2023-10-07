import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navs = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/category"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Category
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Login
            </NavLink>
        </li>
    </>
    return (
        <div className="absolute w-screen h-16">
            <nav className="flex justify-between items-center max-w-screen-2xl mx-auto mt-4 md:px-12">
                <h2 className="text-3xl font-bold font-indie-flower">Splendora</h2>
                <ul className="flex items-center gap-6">
                    {navs}
                </ul>
                <Link to={`/login`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 text-lg font-semibold">Login</button></Link>
            </nav>
        </div>
    );
};

export default Navbar;