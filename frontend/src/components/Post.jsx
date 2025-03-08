import instaprofile from '../assets/images/InstaProfile.png';
import { IoIosMore } from "react-icons/io";
import feedimg from '../assets/images/laptop.jpg'
import { IoMdHeartEmpty } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
export default function Post() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className="rounded-full w-10 p-[0.1rem] bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500">
                        <div className="bg-black rounded-full w-full h-full p-[0.1rem] cursor-pointer">
                            <img src={instaprofile} alt="" className="rounded-full w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className='text-sm tracking-wider'>Username &bull; <span className='text-zinc-500'>3h</span></p>
                </div>
                <IoIosMore size={25} />
            </div>
            <div className='mt-4 rounded-md overflow-hidden w-full h-auto'>
                <img src={feedimg} alt="post image" />
            </div>
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <IoMdHeartEmpty size={25}/>
                    <LuMessageCircle size={20}/>
                    <IoPaperPlaneOutline size={20}/>
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    <GoBookmark size={20}/>
                </div>
            </div>
            <div className='mt-4 mb-4'>
                <p className='text-sm tracking-wider leading-5'>Liked by alejandrogabo_ and others</p>
                <p className='text-sm tracking-wider leading-5'>akifaksoy52 in my burgundy era 🥀</p>
                <p className='text-sm tracking-wider text-zinc-400 leading-5'>...more</p>
                <p className='text-sm tracking-wider text-zinc-400 leading-5'>View all 10 comments</p>
                <p className='text-sm tracking-wider text-zinc-400 leading-5'>Add a comment...</p>
            </div>
            <hr className='border-zinc-700 mb-4'/>
        </div>
    );
}