import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1 className="branding">
                        Unsolicited Advice 
                    </h1>
                </Link>
                <div className="navigation">
                    <NavLink className="button" exact to="/advice">
                        All The Unwanted Advice 
                    </NavLink>
                    <NavLink className="button" exact to="/advice/new">
                        Add Unwanted Advice 
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;