import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const { loginWithEMail, continueWithGoogle } = useContext(UserAuth);
    const navigate = useNavigate();

    // sign in user
    const handleSignIn = (e) => {
        e?.preventDefault();
        loginWithEMail(e?.target?.email?.value, e?.target?.password?.value)
            .then(userCredintial => {
                console.log(userCredintial.user);
                navigate(`/`);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handlethirdPartySignIn = (callback) => {
        callback()
        .then(userCredintial => {
            console.log(userCredintial.user);
            navigate(`/`);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-16">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 text-lg font-semibold">Login</button>
                            </div>
                        </form>
                        <Link to={`/login/register`}>New here? <span>Please Register</span></Link>
                        <fieldset className="border-t border-slate-600">
                            <legend className="text-center px-1">Or continue with</legend>
                        </fieldset>
                        <section className="flex justify-center items-center">
                            <FcGoogle onClick={() => handlethirdPartySignIn(continueWithGoogle)} className="text-4xl w-fit"></FcGoogle>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;