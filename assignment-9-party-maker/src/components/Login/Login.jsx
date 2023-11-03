/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProviderContext } from "../../provider/provider";
import Swal from 'sweetalert2';



const Login = () => {
    const [loginError, setLoginError] = useState("")
    const { signInUser, signInGoogle } = useContext(ProviderContext)
    const Navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                Navigate('/')
                Swal.fire(
                    'You have successfully signed in with Email',
                    "Enjoy our services don't forget to feedback",
                    'success'
                )

            })
            .catch(err => {
                console.log("error: ", err);
                setLoginError("Your Email address or password is incorrect. Please try again");
                e.target.reset();
            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log("user of google: ", result.user)
                Navigate('/')
                Swal.fire(
                    'You have successfully signed in with Google',
                    "Enjoy our services don't forget to feedback",
                    'success'
                )
            })
            .catch(error => {
                console.log("error of google user: ", error)
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero pt-[150px]">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="text-red-500">{loginError}</p>
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary border-black font-bold bg-black text-white hover:bg-base-300 hover:border-black hover:text-black">Login</button>
                            </div>
                            <div onClick={handleGoogleSignIn} className="form-control">

                                <button className="btn btn-primary border-black font-bold bg-black text-white hover:bg-base-300 hover:border-black hover:text-black"><i className="fa-brands fa-google"></i>Google</button>
                            </div>
                            <p>Don't have any account? Please <Link to="/register"><button className="btn-link font-bold uppercase">Register</button></Link></p>
                            {/* <p><button  className="btn btn-link">Google</button></p> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;