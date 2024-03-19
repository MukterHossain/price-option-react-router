
import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu , IoClose} from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/portfolio', name: 'Portfolio', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
      ];
      
    return (
        <nav className="text-black bg-gray-200 md:p-0 p-6">
           <div  className="text-2xl md:hidden " onClick={() => setOpen(!open)}>
            {
                open === true ? <IoClose></IoClose> : <IoMenu></IoMenu>
            }
           
           </div>
            <ul className={`md:flex duration-1000 absolute bg-yellow-200 md:static   ${open ? 'top-12' : '-top-60'}   p-3  rounded-xl`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;