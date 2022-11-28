import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Movie } from "../pages/Movie/Movie";
import { Search } from "../pages/Search/Search";


const MainRoutes = () => {
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
        </Routes>
    )
}

export default MainRoutes;