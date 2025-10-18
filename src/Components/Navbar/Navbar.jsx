import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(() => (JSON.parse(localStorage.getItem('cartItems') || '[]') || []).reduce((s,i)=> s + (i.quantity||0),0));
    const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('user') && localStorage.getItem('loggedIn') === 'true');
    const [showToast, setShowToast] = useState(false);
    const [toast, setToast] = useState('');
    const toastTimeoutRef = useRef(null);

    useEffect(() => {
        function onUpdate() {
            const count = (JSON.parse(localStorage.getItem('cartItems') || '[]') || []).reduce((s,i)=> s + (i.quantity||0),0);
            setCartCount(count);
            setLoggedIn(!!localStorage.getItem('user') && localStorage.getItem('loggedIn') === 'true');
        }
        window.addEventListener('cartUpdated', onUpdate);
        // toast listener
        function onToast(e) {
            const msg = e?.detail?.message || '';
            if (!msg) return;
            setToast(msg);
            setShowToast(true);
            clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = setTimeout(() => setShowToast(false), 3000);
        }
        window.addEventListener('showToast', onToast);
        window.addEventListener('storage', onUpdate);
        // ensure initial
        onUpdate();
        return () => {
            window.removeEventListener('cartUpdated', onUpdate);
            window.removeEventListener('storage', onUpdate);
            window.removeEventListener('showToast', onToast);
        }
    }, []);

    return (
        <div >

            {/* toast */}
            {showToast && (
                <div className="fixed right-4 top-20 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
                    {toast}
                </div>
            )}

            {/* nabvar top  */}
            <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">

                <div className="lg:container flex justify-between items-center">

                    <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize"><Check /> Free on all orders over $50</p>

                    <div className="navbar_top_right flex items-center gap-6">
                        <select defaultValue="Server location" className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white ">
                            <option>eng</option>
                            <option>bangla</option>
                        </select>

                        <button><Link className="text-sm text-white font-inter font-normal capitalize">Faqs</Link></button>
                        <button><Link className="flex items-center text-sm text-white font-inter font-normal capitalize"><Info /> need help</Link></button>
                    </div>

                </div>
            </div>


            {/* navbar middle  */}
            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center">

                    <div className="logo_wrapper">
                        <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"><Armchair size='2rem' color="#029fae" /> comforty</Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg  pl-4" />

                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343" /></button>
                        </form>
                    </div>

                    {/* navbar middle right  */}
                    <div className="navbar_middle_right flex items-center gap-4">

                        {loggedIn && (
                            <button onClick={() => navigate('/cart')} className="btn capitalize flex items-center gap-2">
                                <ShoppingCart />
                                <span className="hidden sm:inline">cart</span>
                                <div className="badge badge-sm bg-[#029fae]">{cartCount}</div>
                            </button>
                        )}
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        {/* Account dropdown: hover on desktop, click-to-toggle on mobile */}
                        <AccountDropdown />
                    </div>
                </div>
            </div>



            {/* navbar bottom  */}
            <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
                <div className="lg:container flex items-center justify-between">

                    <div className="navbar_bottom_left flex items-center gap-8">
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"> <Menu /> all categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Chair</a></li>
                                <li><a>Pant</a></li>
                                <li><a>Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                                <li><a>T-Shirt</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8">
                            <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize'>Home</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>shop</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>product</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>pages</NavLink>
                            <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize'>about</NavLink>
                        </nav>
                    </div>


                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">contact: <span className="text-[#272343]">(254-721300904)</span></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;

// AccountDropdown component placed here for simplicity and to keep Navbar file self-contained
function AccountDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    // Close when clicking outside
    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* trigger: show on hover for lg screens, toggle on click for small screens */}
            <button
                onClick={() => setOpen(v => !v)}
                onMouseEnter={() => window.innerWidth >= 1024 && setOpen(true)}
                onMouseLeave={() => window.innerWidth >= 1024 && setOpen(false)}
                className="flex items-center gap-2 btn m-1"
                aria-expanded={open}
            >
                <User />
                <span className="hidden sm:inline-block">Account</span>
            </button>

            {/* dropdown panel */}
            <div
                onMouseEnter={() => window.innerWidth >= 1024 && setOpen(true)}
                onMouseLeave={() => window.innerWidth >= 1024 && setOpen(false)}
                className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top-right transition-all duration-200 ease-out ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <nav className="flex flex-col py-2 ">
                    <Link to="/login" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                    <Link to="/register" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register</Link>
                    <button onClick={() => { localStorage.removeItem('loggedIn'); navigate('/login'); }} className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                </nav>
            </div>
        </div>
    );
}