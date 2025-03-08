import instagramLogo from '../assets/images/instagramTextIcon.png';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
    const navigate = useNavigate();
    const [isPassShown, setIsPassShown] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    async function HandleOnClick(){
        try{
            const response = await axios.post("http://localhost:4000/auth/login",{
                email : email,
                password : password
            })
            if(response.status === 200){
                window.localStorage.setItem("email",email);
                window.localStorage.setItem("authenticated",true);
                alert("Login Successfull");
                navigate('/home')
            }
        }catch(e){
            console.log(e);
            alert(e)
        }
    }
    return (
        <div className="w-full h-screen">
            <div className='flex justify-center items-center h-full'>
                <div className="border border-zinc-700 rounded-xl w-1/4">
                    <div className='w-full flex justify-center'>
                        <div className='w-1/3 flex justify-center'>
                            <img src={instagramLogo} alt="image" className='invert' />
                        </div>
                    </div>
                    <div className='flex justify-center flex-col gap-4 ml-10 mr-10'>
                        <input type="text" placeholder='Phone number, username or email address' className='h-10 rounded-md bg-zinc-700 tracking-wider focus:outline-none pl-3 text-white placeholder:text-white text-[0.8rem]' onChange={(e) => setEmail(e.target.value)} />
                        <div className='bg-zinc-700 flex justify-between items-center rounded-md overflow-hidden pr-4'>
                            {isPassShown ? <>
                                <input type="text" placeholder='Password' className='h-10  bg-zinc-700 focus:outline-none pl-3 text-white tracking-wider placeholder:text-white text-[0.8rem]' onChange={(e) => setPassword(e.target.value)}/>
                                <IoEyeOutline size={20} className='cursor-pointer' onClick={() => setIsPassShown(!isPassShown)} />
                            </> :
                                <>
                                    <input type="password" placeholder='Password' className='h-10  bg-zinc-700 focus:outline-none pl-3 text-white placeholder:text-white text-[0.8rem]' onChange={(e) => setPassword(e.target.value)}/>
                                    <IoEyeOffOutline size={20} className='cursor-pointer' onClick={() => setIsPassShown(!isPassShown)} />
                                </>

                            }
                        </div>
                    </div>
                    <div className='mt-2 mb-2 flex justify-end mr-10'>
                        <Link><p className='text-sm text-blue-500 font-semibold cursor-pointer tracking-wider'>Forgotten password?</p></Link>
                    </div>
                    <div className='mr-10 ml-10 mb-10'>
                        <button className='w-full h-10 bg-blue-600 rounded-md text-white font-semibold tracking-wider text-sm' onClick={HandleOnClick}>Log In</button>
                    </div>
                    <div className='mr-10 ml-10 mb-10 flex gap-7 items-center'>
                        <hr className='bg-white w-full' />
                        <p className='text-sm'>OR</p>
                        <hr className='bg-white w-full' />
                    </div>
                    <div className='mr-10 ml-10 mb-20 flex justify-center cursor-pointer'>
                        <div className='flex items-center gap-1'>
                            <FcGoogle size={25} />
                            <p className='text-sm tracking-wider'>Log in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}