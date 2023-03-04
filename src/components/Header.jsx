//RiCodeSSlashFill iconos RiMenu3Fill
import { RiCodeSSlashFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex fixed items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50" >
            <div className="w-1/6 text-center">
                <span className="text-2xl font-bold relative " > Future<RiCodeSSlashFill className="absolute left-20 bottom-0 "/></span>
            </div>
            <nav className={`fixed bg-primary xl:bg-transparent w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex  flex-col xl:flex-row items-center justify-center xl:justify-end  transition-all duration-700`}>
                
                <a href="#" className="m-5">Home</a>
                <a href="#" className="m-5">About Us</a>
                <a href="#" className="m-5">Services</a>
                <a href="#" className="m-5">Portfolio</a>
                <a href="#" className="m-5">Contact</a>

            </nav>
            <button className=" text-3xl p-3 xl:hidden" onClick={()=>setShowMenu(!showMenu)}>
            {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
            </button>
        </header>
    );
}

export default Header;
