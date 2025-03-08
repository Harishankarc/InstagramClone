import Create from "../pages/Create";
import Explore from "../pages/Explore";
import Message from "../pages/Message";
import More from "../pages/More";
import Notification from "../pages/Notification";
import Reels from "../pages/Reels";
import Search from "../pages/Search";
import UserPage from "../pages/UserPage";
import Feed from "./Feed";

export default function Options({option}){
    if(option === 'home'){ return(<Feed/>) }
    if(option === 'profile'){ return(<UserPage/>) }
    if(option === 'search'){ return(<Search/>) }
    if(option === 'explore'){ return(<Explore/>) }
    if(option === 'reels'){ return(<Reels/>) }
    if(option === 'message'){ return(<Message/>) }
    if(option === 'notification'){ return(<Notification/>) }
    if(option === 'create'){ return(<Create/>) }
    if(option === 'more'){ return(<More/>) }
}