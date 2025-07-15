import type { ReactElement } from 'react';
import DocumentIcon from '../Icons/DocumentIcon';
import LinkIcon from '../Icons/LinkIcon';
import TweetIcon from '../Icons/TweetIcon';
import VideoIcon from '../Icons/VideoIcon';
import brainlyLogo from '../img/brainly.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
interface SidebarProps {
    setTypeOfCards: (x: string) => void;
}
export default function Sidebar({ setTypeOfCards }: SidebarProps) {
    const navigate = useNavigate();
    interface navInterface {
        icon: ReactElement,
        title: string,
        type: string
    }
    function logoutUser() {
        const token = localStorage.getItem("authorization")
        if (token) {
            localStorage.removeItem("authorization");
            navigate("/signin");
        }
    }
    const navBtns: navInterface[] = [{ icon: <TweetIcon />, title: "Tweets", type: "tweet" }, { icon: <VideoIcon />, title: "Videos", type: "video" }, { icon: <DocumentIcon />, title: "Documents", type: "document" }, { icon: <LinkIcon />, title: "links", type: "link" }]
    // async function getData(type: string) {
    //     const res = await fetch(`http://localhost:3001/api/v1/content/${type}`, {
    //         method: "get",
    //         headers: {
    //             "authorization": localStorage.getItem("authorization")!
    //         }
    //     });
    //     const data = await res.json();
    //     console.log(data);
    // }
    return (
        <div className='w-full h-full bg-white dark:bg-sign-bg shadow-lg border-r border-gray-200 dark:border-gray-700 relative'>
            <div className='flex items-center p-4 pt-6 gap-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer' onClick={()=>setTypeOfCards("all")}>
                <img src={brainlyLogo} alt="Brainly Logo" className="w-8 h-8" />
                <div className='text-2xl font-bold text-gray-800 dark:text-white'>
                    Second Brain
                </div>
            </div>
            <nav className='p-4 space-y-2'>
                {navBtns.map((navEl: navInterface, i: number) => (
                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer' onClick={() => setTypeOfCards(navEl.type)} key={i}>
                        <div className='text-gray-600 dark:text-gray-400 '>
                            {navEl.icon}
                        </div>
                        <p className='text-gray-700 dark:text-gray-300 font-medium '>
                            {navEl.title}
                        </p>
                    </div>
                ))}
            </nav>
            <div className='absolute bottom-2 p-5'>
                <Button variant={"secondary"} size={"md"} text={"Logout"} onClick={() => logoutUser()} />
            </div>
        </div>
    )
}