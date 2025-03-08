import instagramLogo from '../assets/images/instagramTextIcon.png';
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbMessageCircleHeart } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import instaprofile from '../assets/images/InstaProfile.png'
import { RxHamburgerMenu } from "react-icons/rx";
export default function SideNavbar({setOption}) {
    return (
        <div className='w-60 pl-7 pr-4 pt-2 flex flex-col justify-between border-r-2 border-zinc-900'>
            <div className='h-[95vh]'>
                <div className='w-[6.5rem]'>
                    <img src={instagramLogo} alt="instagram" className='invert' />
                </div>
                <div>
                    <ul className='flex flex-col gap-7'>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('home')}>
                                <GoHomeFill size={25} />
                                <p className=' text-md tracking-wider'>Home</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('search')}>
                                <IoSearchOutline size={25} />
                                <p className='text-md tracking-wider'>Search</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('explore')}>
                                <AiOutlineCompass size={25} />
                                <p className='text-md tracking-wider'>Explore</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('reels')}>
                                <MdOutlineOndemandVideo size={25} />
                                <p className='text-md tracking-wider'>Reels</p>
                            </div>
                        </li>
                        <li className='cursor-pointer' onClick={() => setOption('message')}>
                            <div className='flex items-center gap-3'>
                                <TbMessageCircleHeart size={25} />
                                <p className='text-md tracking-wider'>Message</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('notification')}>
                                <IoMdHeartEmpty size={25} />
                                <p className='text-md tracking-wider'>Notification</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('create')}>
                                <CgAddR size={25} />
                                <p className='text-md tracking-wider'>Create</p>
                            </div>
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center gap-3' onClick={() => setOption('profile')}>
                                <div className='rounded-full overflow-hidden w-7'>
                                    <img src={instaprofile} alt="userprofile" />
                                </div>
                                <p className='text-md tracking-wider'>Username</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='mt-32' onClick={() => setOption('more')}>
                    <div className='flex gap-3 cursor-pointer'>
                        <RxHamburgerMenu size={25} />
                        <p className='text-md tracking-wider'>More</p>
                    </div>
                </div>
            </div>

        </div>
    );
}