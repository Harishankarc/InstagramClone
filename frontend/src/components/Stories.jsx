import instaprofile from '../assets/images/InstaProfile.png'
export default function Stories() {
    return (
        <div className='flex gap-3 items-center overflow-x-scroll   '>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17].map((item) => (
                <div>
                    <div className="rounded-full w-16 p-[0.1rem] bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500">
                        <div className="bg-black rounded-full w-full h-full p-[0.1rem] cursor-pointer">
                            <img src={instaprofile} alt="" className="rounded-full w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className='text-sm tracking-wider'>Username</p>
                </div>

            ))

            }
        </div>
    );
}