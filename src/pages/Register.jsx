import Lottie from "lottie-react";
import registerLottieData from '../assets/lottie/register.json'
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import SocialLogin from "./shared/SocialLOgin";


const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // reset error and status
        setErrorMessage('');

        // password validation: 
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must be contains at least one uppercase, one digit and at least 6 characters or longer. ');
            return
        }
        //show password validation error


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                
            })
            .catch(error => [
            console.log(error.message)
        ])

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className="w-80 lg:w-96" animationData={registerLottieData} />
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mt-8">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {errorMessage && <p className="text-red-600 text-center mt-3">{errorMessage}</p>}
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;