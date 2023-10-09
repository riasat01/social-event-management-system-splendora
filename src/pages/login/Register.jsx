import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import swal from 'sweetalert';

const Register = () => {
    
    const { setLoading, userWithEmail, setUserName } = useContext(UserAuth);
    const navigate = useNavigate();

    // where to re route
    const location = useLocation();
    
    // register user
    const handleRegister = (e) => {
        e?.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        if(password.length < 6){
            swal(`Error`, `Password must be at 6 characters long`, `error`);
            return;
        }else if(!(/[A-Z]/.test(password))){
            swal(`Error`, `Password must contain at least one capital letter`, `error`);
            return;
        }else if(!/[!@#$%^&*]/.test(password)){
            swal(`Error`, `Password must contain at least one of these !@#$%^&* characters`, `error`);
            return;
        }
        userWithEmail(email, password)
            .then(userCredential => {
                // console.log(userCredential.user);
                setUserName(name)
                .then(() => {
                    // console.log(`user name updated`);
                    swal(`Congratulation ${userCredential?.user?.displayName}`, `You have successfully registered`, `success`)
                    location?.state ? navigate(`${location?.state}`) : navigate(`/`);
                })
                .catch(error => {
                    swal(`Error`, error.message, `error`);
                    setLoading(false);
                })
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
                setLoading(false);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-16">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-16">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 text-lg font-semibold">Register</button>
                            </div>
                        </form>
                        <Link to={`/login`}>Already have an account? <span>Please Login</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;