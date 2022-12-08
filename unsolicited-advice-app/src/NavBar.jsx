import React from "react";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div class="bg-black text-white">
            <nav class="justify-start space-x-28">
                <span class="font-nerkoOne">
                    <Link to="/">
                        Unsolicited Advice
                    </Link>
                </span>
                <span>
                    <NavLink exact to="/advice">
                        All The Shit Advice 
                    </NavLink>
                </span>
                <span>
                    <NavLink exact to="/new">
                        Add Your Shit 
                    </NavLink>
                </span>
            </nav>
        </div>
    );
};

export default NavBar;