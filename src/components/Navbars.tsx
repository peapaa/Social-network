import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
const Navbars = () => {
  return (
    <div className="flex  justify-between  items-center">
      {/* left */}
      <div className="">
        <Link href="/" className="text-3xl text-roses font-bold">
          Social
        </Link>
      </div>
      {/* center */}
      <div className="flex  tablet:hidden mobile:hidden">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl hover:bg-btnHover p-1 rounded-md laptop:text-lg"
          >
            <AiOutlineHome />
            <span>HomePage</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-xl hover:bg-btnHover p-1 rounded-md laptop:text-lg "
          >
            <IoAddCircleOutline />
            <span>Friends</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-xl hover:bg-btnHover p-1 rounded-md laptop:text-lg"
          >
            <FaUserFriends />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className=" hidden mobile:block tablet:block ">
        <MobileMenu />
      </div>
      <div className=" hidden laptop:block desktop:block ">
        <button className="bg-btn rounded-lg text-xl px-4 py-[2px] laptop:text-lg text-white hover:bg-blue-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbars;
