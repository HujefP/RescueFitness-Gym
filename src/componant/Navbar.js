import { Link } from "react-router-dom";
import { useRef, useState } from "react";
function Navbar() {
    let name = useRef();
    let [inputname, setName] = useState('');
    let [buttonStatus, setbuttonStatus] = useState(true);
    function usernameHandler() {
        setName(name.current.value);
        setbuttonStatus(false);
    }
    return (
        <div>
            <h1>{inputname}</h1>
            <input ref={name} placeholder="Enter Your Name" className={buttonStatus === true ? "nav" : "d-none"} type="text" />
            <button className={buttonStatus === true ? "nav" : "d-none"} onClick={usernameHandler}>Login</button>
            <nav className={buttonStatus === true ? "d-none" : "nav"}>
                <Link to="/">RescueFitness</Link>
                <div className="links">
                    <Link to="/home">BMI</Link>
                    <Link to="/diet">Diet</Link>
                    <Link to="/more">More</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;