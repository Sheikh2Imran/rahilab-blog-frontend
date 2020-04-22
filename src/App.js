import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Dashboard />
                <Footer />
            </div>
        );
    }
}

export default App;
