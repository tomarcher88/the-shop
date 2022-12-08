import { BsCart3 } from 'react-icons/Bs'
import { BiMenuAltRight } from "react-icons/Bi";
import { AiOutlineCloseCircle } from "react-icons/Ai";
import { navClick } from '../utils/functions';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const basketCount = 0;

  return (
    <>
      <nav className="flex px-3 md:px-10 py-6 justify-between font-eb-garamond items-center">
        <ul className="hidden md:flex gap-4 text-lg font-bold lowercase">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <h1 className="md:absolute md:left-1/2 md:-translate-x-1/2 font-bold text-2xl tracking-widest">
          <Link to="/">the store</Link>
        </h1>
        <div className="flex items-center relative md:static w-20 md:w-fit">
          <span className="font-eb-garamond text-lg font-bold mx-1">
            {basketCount}
          </span>
          <BsCart3 className="text-2xl" />
          <BiMenuAltRight
            onClick={(e) => navClick(e)}
            className="menu-btn md:hidden text-3xl cursor-pointer ml-1 absolute right-0"
          />
          <AiOutlineCloseCircle
            onClick={(e) => navClick(e)}
            className="menu-btn-close md:hidden text-3xl cursor-pointer ml-1 absolute right-0 -z-50 opacity-0"
          />
        </div>
      </nav>
      <aside className="-z-50 mobile-nav-container h-screen top-0 opacity-0 w-screen fixed flex">
        <ul className="flex flex-col mx-auto gap-4 h-3/4 justify-evenly font-eb-garamond font-bold text-3xl lowercase text-center">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}