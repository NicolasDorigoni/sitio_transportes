import logo from './logo.svg';
import './App.css';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import NosotrosPage from './pages/NosotrosPage';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
