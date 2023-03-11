import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Movie } from "../pages/Movie/Movie";
import { Search } from "../pages/Search/Search";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";


const MainRoutes = () => {
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
    )
}

export default MainRoutes;