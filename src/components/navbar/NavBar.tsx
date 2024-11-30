import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="bg-black">
            <div className="navbar">
                <p className="text-xl pr-5 ml-20">QUICKBET</p>
                <div className="flex-1">
                    <Link className="btn btn-ghost text-sm" href="/Popular">Popular</Link>
                    <Link className="btn btn-ghost text-sm" href="/Favorites">Favorites</Link>
                </div>
                <div className="flex-none gap-2 mr-10">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-circle avatar bg-white">
                            <div className="w-8 h-8 rounded-full">
                                <Image
                                    src='/user.svg'
                                    alt="user"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
