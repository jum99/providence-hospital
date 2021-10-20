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
import AboutDetails from './Pages/AboutDetails/AboutDetails';
import DoctorsDetails from './Pages/DoctorsDetails/DoctorsDetails';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound';

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
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/aboutDetails">
            <AboutDetails />
          </Route>
          <Route exact path="/doctorsDetails">
            <DoctorsDetails />
          </Route>
          <Route exact path="/blogDetails">
            <BlogDetails />
          </Route>
          <Route exact path="/serviceDetails">
            <ServiceDetails />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
