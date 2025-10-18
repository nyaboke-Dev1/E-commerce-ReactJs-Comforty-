import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandle = (e) => {
        e.preventDefault();

        const raw = localStorage.getItem('user')
        if (!raw) {
            alert('No user found. Please register first.')
            return
        }

        try {
            const user = JSON.parse(raw)
            if (user.email === email && user.password === password) {
                localStorage.setItem('loggedIn', 'true')
                navigate('/')
            } else {
                alert('Invalid email or password.')
            }
        } catch (err) {
            console.error(err)
            alert('Invalid user data. Please register again.')
        }
    }

    return (
        <div className="lg:container mx-auto p-[80px]">


            <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">

                <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">Login </h3>

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your Email..." className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Your Password..." className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <button type="submit" className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5">Login <MoveRight /></button>
                </form>
                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4">Don't have account <Link to={'/register'} className="text-[#007580]">Register</Link></p>
            </div>


        </div>
    );
};

export default Login;