import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>My first React App</p>
                </div>
                <a href="https://github.com/AllRacs/another-react-website" target="blank" className="text-white">&#60;/github&#62;</a>
            </header>
        </div>
    );
}

export default App;
