import { Link, NavLink, useLocation } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { ProviderContext } from "../../provider/provider";

const Navbar = () => {
    const { user, logOut, loading } = useContext(ProviderContext)
    console.log(user)
    const location = useLocation()


    const navbarStyle = {
        color: location.pathname !== '/' ? '#000000' : '#ffffff',
    };

    // this event handler is to log out users from the server
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log('error logging out', error))
    }

    const navLinks = <>
        <NavLink className="navHoverClass" to="/">Home</NavLink>
        <NavLink className="navHoverClass" to="/profile">Profile</NavLink>
        <NavLink className="navHoverClass" to="/contact">Contact</NavLink>
    </>

    return (
        <div className="navbar-bg">
            <div className="max-w-[1200px] mx-auto relative">
                <div className="navbar absolute flex justify-between">
                    <div className="navbar-start w-fit">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="nav-active menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/">
                            <img className="max-w-[300px]" src={`${location.pathname !== '/' ? 'https://i.ibb.co/t4qxJj5/logo-Black.png' : 'https://i.ibb.co/HNWsW0k/Logo.webp'}`} alt="" />
                            {/* <img className="max-w-[300px]" src="https://i.ibb.co/HNWsW0k/Logo.webp" alt="" /> */}
                        </Link>
                    </div>
                    <div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="nav-active menu menu-horizontal px-1 text-2xl font-bold gap-12" style={navbarStyle}>
                                {navLinks}
                            </ul>
                        </div>
                        <div className="ml-8">
                            {
                                loading ? <>
                                </>
                                    : <>
                                        {
                                            user ? <>
                                                <button
                                                    className="btn btn-ghost bg-white text-black border-none rounded-full px-[40px] text-[20px] font-bold"
                                                    onClick={handleLogOut}
                                                >
                                                    Logout
                                                </button>
                                            </>
                                                : <Link to="/login">
                                                    <button className="btn btn-ghost bg-white text-black border-none rounded-full px-[40px] text-[20px] font-bold">Login</button>
                                                </Link>
                                        }
                                    </>
                            }

                        </div>
                        <div className="ml-[20px] border border-black rounded-full">
                            {
                                user ? <div className="bg-white flex flex-row-reverse items-center gap-3 rounded-full">
                                    <Link className="border border-black rounded-full bg-base-300">
                                        <img className="max-w-[45px] min-h-[45px] rounded-full" src={user.photoURL ? user.photoURL : 'https://i.ibb.co/N7JQLnY/user-default-image.jpg'} alt="" />
                                    </Link>
                                    <p className="pl-[15px] font-bold">{user.displayName ? user.displayName : "userName_null"}</p>
                                </div>
                                    :
                                    <div className=" bg-base-300 flex flex-row-reverse items-center gap-5 rounded-full">
                                        <Link className="border border-black rounded-full bg-base-300">
                                            <img className="max-w-[45px] min-h-[45px] rounded-full" src='https://i.ibb.co/N7JQLnY/user-default-image.jpg' alt="" />
                                        </Link>
                                        <p className="pl-[20px] font-bold">No User</p>
                                    </div>
                                // <Link>
                                //     {/* <img className="max-w-[40px] rounded-full" src="https://i.ibb.co/N7JQLnY/user-default-image.jpg" alt="" /> */}
                                // </Link>
                            }
                            {/* <img className="max-w-[40px] rounded-full" src="https://i.ibb.co/N7JQLnY/user-default-image.jpg" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;