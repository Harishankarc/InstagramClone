import { useState } from 'react';
import Feed from '../components/Feed';
import SideNavbar from '../components/SideNavbar';
import Suggestion from '../components/Suggestion';
import Options from '../components/Options';

export default function Home() {
    const [option,setOption] = useState('home');
    return (
        <div className='flex h-screen justify-between'>
            <div className='h-full'>
                <SideNavbar setOption={setOption}/>
            </div>
            <Options option={option}/>
            <Suggestion />
        </div>
    );
}