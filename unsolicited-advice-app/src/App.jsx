import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import Home from "./Home";
import AdvicePage from './AdvicePage';
import NavBar from './NavBar';
import NewAdvicePage from './NewAdvicePage';


function App() {

    const [unsolicited, setUnsolicited] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/unsolicited")
        .then((r) => r.json())
        .then((unsolicited) => setUnsolicited(unsolicited));
    },[]);

    function handleNewAdvice(newAdvice) {
        setUnsolicited([...unsolicited, newAdvice])
    };

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/new">
                    <NewAdvicePage handleNewAdvice={handleNewAdvice} />
                </Route>
                <Route path="/advice">
                    <AdvicePage unsolicited={unsolicited} setUnsolicited={setUnsolicited} />
                </Route>
            </Switch>
        </div>
    )
}

export default App
