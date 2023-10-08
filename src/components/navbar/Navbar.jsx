import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../auth-provider/AuthProvider";

const Navbar = () => {
    const { user, logOut, loading } = useContext(UserAuth);

    // sign out User
    const handleSignOut = () => {
        logOut()
            .then(() => {
                alert(`${user.displayName} logged out`)
            })
    }
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
        {
            user &&
            <>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/bookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Bookings
                    </NavLink>
                </li>
            </>
        }
    </>
    return (
        <div className="absolute w-screen top-0">
            <nav className="flex justify-between items-center max-w-screen-2xl mx-auto mt-4 md:px-12">
                <h2 className="text-3xl font-bold font-indie-flower">Splendora</h2>
                <ul className="flex items-center gap-6">
                    {navs}
                </ul>
                {
                    loading ? 
                    <span className="loading loading-infinity loading-lg"></span>
                    :
                    user ?
                        <section className="flex gap-6 items-center">
                            <p>{user.displayName}</p>
                            <button onClick={handleSignOut} className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Log Out</button>
                        </section>
                        :
                        <Link to={`/login`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Login</button></Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;