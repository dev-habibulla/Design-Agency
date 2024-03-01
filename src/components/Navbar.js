
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";

const Navbar = () => {

    return (
        <div className="bg-homeBg">
            <div className="flex pt-4 py-2.5 align-middle">
                <Link href="/">
                    <Image
                        className="ml-24 mr-64"
                        alt="logo"
                        width={150}
                        height={30}
                        src={Logo}
                    />
                </Link>
                <div className="flex">
                    <ul className="flex font-medium text-black text-base">
                        <li className="mr-8 p-2.5 hover:text-orange-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mr-8 p-2.5 hover:text-orange-500">
                            <Link href="/team">Team</Link>
                        </li>
                        <li className="mr-8 p-2.5 hover:text-orange-500">
                            <Link href="/service">Service</Link>
                        </li>
                        <li className="mr-8 p-2.5 hover:text-orange-500">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="mr-8 p-2.5 hover:text-orange-500">
                            <Link href="/testimonials">Testimonials</Link>
                        </li>
                    </ul>
                    <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
                        Login
                    </button>
                    <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
