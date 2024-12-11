import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import loginLottieData from '../assets/lottie/login.json';
import Lottie from "lottie-react";


const SignIn = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // reset error and status
        setErrorMessage('');

        // password validation:
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must be contains at least one uppercase, one digit and at least 6 characters or longer. ');
            return;
        }
        //show password validation error

        signInUser(email, password) 
            .then(result => {
            console.log('sign in', result.user)
            })
            .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className="w-72 lg:w-80" animationData={loginLottieData} />
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mt-8">SignIn now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        {errorMessage && <p className="text-red-600 text-center mt-3">{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;