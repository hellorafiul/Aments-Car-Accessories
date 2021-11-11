import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MainMenu from "./Pages/Shared/Navigation/MainMenu";
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/shop">
              <MainMenu></MainMenu>
              <Services />
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home />
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <MainMenu></MainMenu>
              <Login />
            </Route>
            <Route path="/register">
              <MainMenu></MainMenu>
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;