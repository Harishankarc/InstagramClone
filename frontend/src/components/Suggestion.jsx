import instaprofile from '../assets/images/InstaProfile.png'
export default function Suggestion() {
    return (
        <div className='w-[25%] mt-8 pr-16  '>
            <div className='flex justify-between items-center'>
                <div className='flex h-auto gap-3'>
                    <div className='w-10'>
                        <img src={instaprofile} alt="" />
                    </div>
                    <div>
                        <p className='text-sm tracking-wider'>Username</p>
                        <p className='text-sm text-zinc-500 tracking-wider'>Bio Name</p>
                    </div>
                </div>
                <p className='text-sm text-blue-600 font-semibold cursor-pointer'>Switch</p>
            </div>
            <div>
                <div className='flex justify-between items-center mb-4 mt-7'>
                    <p className='text-sm tracking-wider font-semibold text-zinc-500'>Suggested for you</p>
                    <p className='text-sm tracking-wider font-semibold text-zinc-500 cursor-pointer'>See All</p>
                </div>
                <div className='flex flex-col gap-4'>
                    {[1, 2, 3, 4, 5].map((_) => {
                        return (
                            <div className=''>
                                <div className='flex justify-between items-center'>
                                    <div className='flex h-auto gap-3'>
                                        <div className='w-10'>
                                            <img src={instaprofile} alt="" />
                                        </div>
                                        <div>
                                            <p className='text-sm tracking-wider'>Username</p>
                                            <p className='text-sm text-zinc-500 tracking-wider'>Followed by steve_godly + 24...</p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-blue-600 font-semibold cursor-pointer'>Follow</p>
                                </div>
                            </div>

                        );
                    })

                    }
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-sm text-zinc-500 mb-7 cursor-pointer'>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms <br />Locations &bull; Language &bull; Meta &bull; Verified</p>
                <p className='text-sm text-zinc-500'>&copy; 2025 Instagram from Meta</p>
            </div>
        </div>
    );
}