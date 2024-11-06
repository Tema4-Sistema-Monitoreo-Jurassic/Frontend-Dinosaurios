// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import PaleontologistPage from './components/PaleontologistPage';
import IslaPage from './components/IslaPage';
import CriaderoPage from './components/CriaderoPage';
import EnfermeriaPage from './components/EnfermeriaPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/user" component={UserPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/paleontologist" component={PaleontologistPage} />
                <Route path="/isla/:id" component={IslaPage} />
                <Route path="/criadero/:id" component={CriaderoPage} />
                <Route path="/enfermeria" component={EnfermeriaPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
