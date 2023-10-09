import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../auth-provider/AuthProvider";
import defaultImage from '../../assets/user-33638_1280.png';
import {AiOutlineMenu} from 'react-icons/ai';
import swal from 'sweetalert';

const Navbar = () => {
    const { user, logOut, loading } = useContext(UserAuth);

    // sign out User
    const handleSignOut = () => {
        logOut()
            .then(() => {
                swal(`${user.displayName} logged out`)
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
            });
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
        <div className="absolute max-w-screen w-full top-0 text-gray-300">
            <nav className="flex justify-between items-center max-w-screen-2xl mx-auto mt-4 px-4 md:px-12">
                <details className="md:hidden dropdown dropdown-bottom">
                    <summary className="p-0 btn"><AiOutlineMenu className="text-xl"></AiOutlineMenu></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {navs}
                    </ul>
                </details>
                <h2 className="text-3xl font-bold font-indie-flower">Splendora</h2>
                <ul className="hidden md:flex items-center gap-6">
                    {navs}
                </ul>
                {
                    loading ?
                        <span className="loading loading-infinity loading-lg"></span>
                        :
                        user ?
                            <section className="flex gap-6 items-center">
                                <details className="dropdown dropdown-end">
                                    <summary className="p-0 btn"><img className="h-10 rounded-full" src={user.photoURL ? user.photoURL : defaultImage} alt={`image of ${user.displayName}`} /></summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><p>{user.displayName}</p></li>
                                        <li><button onClick={handleSignOut} className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Log Out</button></li>
                                    </ul>
                                </details>
                            </section>
                            :
                            <Link to={`/login`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Login</button></Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;