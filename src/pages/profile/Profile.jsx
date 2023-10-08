import { useContext } from "react";
import { UserAuth } from "../../components/auth-provider/AuthProvider";
import defaultImage from "../../assets/user-33638_1280.png"

const Profile = () => {

    const {user} = useContext(UserAuth)
    return (
        <div className="flex justify-between items-start my-24 md:w-2/3 mx-auto bg-gradient-to-br from-slate-700 to-slate-950 p-6 rounded-3xl shadow-2xl shadow-slate-600/50 text-slate-400">
            <section className="w-1/2">
                <img className="rounded-full h-96" src={user.photoURL ? user.photoURL : defaultImage} alt="" />
            </section>
            <section className="w-1/2 space-y-12 ">
            <img className="w-full" src="../../assets/user-33638_1280.png" alt="" />
                <h1 className="text-5xl font-extrabold font-indie-flower">UserName : {user.displayName}</h1>
                <p className="text-2xl font-semibold font-indie-flower">User Email : {user.email}</p>
            </section>
        </div>
    );
};

export default Profile;