const Header = () => {
    return ( 
        <>
        <nav className="d-flex justify-content-around mt-4">
            <h1 className="text-light">Task Manager</h1>
            <div>
                <button className="btn btn-outline-info mx-1">Login</button>
                <button className="btn btn-info">Register</button>
            </div>
        </nav>
        </>
     );
}
 
export default Header;