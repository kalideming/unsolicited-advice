import React from "react";
import { Link, NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div class="bg-black text-white h-16 flex-auto items-center">
            <nav class="justify-start">
                <div class="font-HanaleiFill text-5xl inline-block align-center items-center">
                    <Link to="/">
                        Unsolicited Advice
                    </Link>
                </div>
                <div class="font-Barriecito text-2xl inline-block align-center items-center mx-10">
                    <NavLink exact to="/advice">
                        All The Shit Advice 
                    </NavLink>
                </div>
                <div class="font-Barriecito text-2xl inline-block align-center items-center mx-10">
                    <NavLink exact to="/new">
                        Add Your Shit 
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;