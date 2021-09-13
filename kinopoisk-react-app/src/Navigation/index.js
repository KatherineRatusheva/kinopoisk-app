import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getAuthorizedUser } from '../../src/actions';

import Navbar from "../components/navbar";
import Main from "../pages/Main";
import FilmCard from "../components/filmCard";
import FilmCategory from "../components/filmCategory";
import SignIn from "../components/signIn";
import NavCategory from "../components/navCategory";
import SearchPage from "../pages/SearchPage";
import FilterPage from "../pages/FilterPage";
import SaveFilms from "../pages/Save";

export default function App() {
  
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getAuthorizedUser())
  }, [])

  return (

    <Router>  
        <Navbar />

        <Switch>

          <Route path="/popular">
            <NavCategory />
          </Route>

          <Route path="/new">
            <NavCategory />
          </Route>

          <Route path="/save">
            <SaveFilms />
          </Route>

          <Route path="/sign-in">
            <SignIn/>
          </Route>

          <Route path="/movies/:filter">
            <FilterPage />
          </Route>

          <Route path="/search=:search">
            <SearchPage/>
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