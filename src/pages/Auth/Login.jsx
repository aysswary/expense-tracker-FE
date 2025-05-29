import React, { useState, useContext } from 'react'
import AuthLayout from '../../components/Layout/AuthLayout'
import Input from '../../components/Inputs/Input'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/user.context'
const Login = () => {
    const { updateUser } = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async (e = null) => {
        e?.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.")
            return;
        }
        if (!password) {
            setError("Please enter the password")
            return;
        }

        setError("")

        // Login API call
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email,
                password
            });
            const { token, user } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                updateUser(user);
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                console.log(error)
                setError("somethig went wrong. Please try again.")
            }
        }
    }
    const handleGuestSignUp = () => {
        setEmail('rathna@gmail.com');
        setPassword('rathna123');
    }
    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Please enter your details to log in
                </p>

                <form onSubmit={handleLogin}>
                    <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="john@example.com"
                        type="text"
                    />

                    <Input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="Password"
                        placeholder="min 8 characters"
                        type="password"
                    />

                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                    <button type="submit" className="btn-primary">LOGIN</button>
                    <p className="text-[13px] text-slate-800 mt-3">
                        Don't have an account? {" "}
                        <Link className='font-medium text-primary underline' to="/signup">SignUp</Link>
                    </p>
                    <p className="text-[13px] text-slate-800 mt-3">
                        Don't have an account? {" "}
                        <Link className='font-medium text-primary underline' onClick={handleGuestSignUp}>Guest SignUp</Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login
