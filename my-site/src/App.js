import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    My first React App
        </p>
                <Hello />
            </header>
        </div>
    );
}

function Hello() {
    return (
        <div className="Hello">
            <span>Hello Internet</span>
        </div>
    );
}

export default App;
