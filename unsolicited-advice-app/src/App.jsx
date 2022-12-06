import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import './App.css'
import Home from "./Home";
import AdvicePage from './AdvicePage';
import NavBar from './NavBar';
import NewAdvicePage from './NewAdvicePage';

function App() {

    const [advice, setAdvice] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/unsolicited")
        .then((r) => r.json())
        .then((adviceData) => setAdvice(adviceData));
    },[]);

    function handleNewAdvice(newAdvice)
}

export default App
