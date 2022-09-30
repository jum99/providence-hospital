import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Booking/Appointment';
import Login from './Pages/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorsDetails from './Pages/DoctorsDetails/DoctorsDetails';
// import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Service from './components/Services/Service';
import Navbar from './components/Header/Navbar';
// import Service from './components/Services/Service';
// import Service from './components/Services/Service';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, user, setUser }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/doctorsDetails">
            <DoctorsDetails />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
