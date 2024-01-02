import React from "react";
import logo from '../assets/images/logo.svg'
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      
    <Link className="text-blue-900 flex items-center hover:text-blue-500 transition-colors" to='/'>HOME</Link>
    <Link className="text-blue-900 flex items-center hover:text-blue-500 transition-colors" to='/'>SERVICES</Link>
    <Link className="text-blue-900 flex items-center hover:text-blue-500 transition-colors" to='/'>PRODUCTS</Link>
    <Link className="text-blue-900 flex items-center hover:text-blue-500 transition-colors" to='/'>ABOUT US</Link>
    <Link className="text-blue-900 flex items-center hover:text-blue-500 transition-colors" to='/'>BLOGS</Link>   
      <IoCall className=" text-blue-900 w-[50px] h-[50px]" /> <p className="text-black"> +8801611240524</p>
      <MdEmail className="text-blue-900 w-[50px] h-[50px]" /><p className="text-black">mail@proshmoni.com</p>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-3xl bg-white fixed rounded-none bg-white z-30  border-none px-6 py-3">
      <div className="flex items-center justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img src={logo} className="h-[70px] w-[70px]" alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}