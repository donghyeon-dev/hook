import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterHook from './CounterHook';
import CounterClass from './CounterClass';

function App() {
    return (
        <div className="App">
            <CounterHook />
        </div>
    );
}

export default App;
