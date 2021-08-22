import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/navbar";
import Main from "../pages/Main";
import FilmCard from "../components/filmCard";
import FilmCategory from "../components/filmCategory";
import SignIn from "../components/signIn";
import NavCategory from "../components/navCategory";

export default function App() {
  return (

    <Router>  
        <Navbar />

        <Switch>

          <Route path="/top">
            <NavCategory />
          </Route>

          <Route path="/popular">
            <NavCategory />
          </Route>

          <Route path="/new">
            <NavCategory />
          </Route>

          <Route path="/sign-in">
            <SignIn/>
          </Route>

          <Route path="/film/:id">
            <FilmCard />
          </Route>

          <Route path="/:category">
            <FilmCategory />
          </Route>

          <Route path="/">
            <Main/>
          </Route>

        </Switch>
    </Router>
  );
} 