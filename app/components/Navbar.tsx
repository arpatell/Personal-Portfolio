export default function Navbar () {
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">Aaron Patel</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/about'>About Me</a></li>
                    <li><a href='/links'>Contact/Links</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}