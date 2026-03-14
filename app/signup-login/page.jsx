"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

 const SignUpLogin = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [action, setAction] = useState('Log In');
    const [email, setEmail] = useState("")
    const [otp, setOTP] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get( '/')
        console.log(data);
        nagigateTootp();
    }


    const nagigateTootp = () => {
         if (email) {
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            console.log(OTP);
            setOTP(OTP);
            setEmail(OTP);

         }          
    }
    // const NavigateComponents() {
    //     if(action === "Sign Up")
    // }



    const baseStyle = " text-white py-2   px-4 rounded-lg font-semibold cursor-pointer"
    const activestyle = "bg-cyan-500 hover:bg-cyan-600 transition-colors"
    const notActiveStyle = "bg-gray-400 text-gray-700 hover:bg-gray-500 transition-colors"
    return (
        <section className="flex flex-col justify-center items-center w-screen min-h-screen bg-gradient-to-b from-purple-50 to-cyan-100 p-6 ">
            <div className="max-w-md w-full mx-auto p-7 rounded-lg shadow-lg space-y-6">
                <div className="flex flex-col  gap-6">
                    <h1 className="text-3xl font-semibold mb-4 text-center">{action} </h1>
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {
                                action === "Sign Up"  ?  <div>
                                <label htmlFor="signup-username">Username:</label>
                                <input type="text" id="signup-username" name="username" required value={data.username} onChange={(e) => setData({...data, username: e.target.value })}  className="w-full border rounded px-3 py-2"/>
                            </div> : " "   
                            }
                          
                            <div>
                                <label htmlFor="signup-email">Email:</label>
                                <input type="email" id="signup-email" name="email" required value={data.email} onChange={(e) => setData({...data, email: e.target.value })} className="w-full border rounded px-3 py-2"/>
                            </div>
                            <div>
                                <label htmlFor="signup-password">Password:</label>
                                <input type="password" id="signup-password" name="password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value })} className="w-full border rounded px-3 py-2"/>
                            </div>
                            {
                                action === "Sign Up" ? <div></div> :  <div>
                                <p>Forgotten password? <Link href="/verify-email">click here</Link></p>
                               
                            </div>
                            }

                           
                           <div className="flex gap-4">
                              <button onClick={() => setAction('Sign Up')} type="button" className={`${baseStyle} ${action === 'Sign Up' ? activestyle : notActiveStyle}`}>Sign Up</button>
                            <button onClick= {() => setAction('Log In')} type="button" className={`${baseStyle} ${action === 'Log In' ? activestyle : notActiveStyle}`}>Log In</button>

                           </div>
                          
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpLogin;