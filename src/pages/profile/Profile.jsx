import { useContext } from "react";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import defaultImage from "../../assets/user-33638_1280.png"

const Profile = () => {

    const {user} = useContext(UserAuth)
    return (
        <div className="flex flex-col gap-16 md:gap-0 md:flex-row justify-between items-center md:items-start my-24 md:w-2/3 mx-auto bg-gradient-to-br from-slate-700 to-slate-950 p-6 rounded-3xl shadow-2xl shadow-slate-600/50 text-slate-400">
            <section className="md:w-1/2">
                <img className="rounded-full h-64 md:h-80 lg:h-96" src={user.photoURL ? user.photoURL : defaultImage} alt="" />
            </section>
            <section className="md:w-1/2 space-y-12 ">
                <h1 className="text-3xl md:text-5xl font-extrabold font-indie-flower">User Name : {user.displayName}</h1>
                <p className="text-2xl font-semibold font-indie-flower">User Email : {user.email}</p>
            </section>
        </div>
    );
};

export default Profile;