import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Produtos from "./Produtos.jsx";
import Home from "./Home.jsx";

const Rotas = () => {
   return(
       
       <Routes>
        <Route index element = { <Home/> } />
       <Route  path="/produto" element = { <Produtos/> } />
       </Routes>
       
   )
}
export default Rotas;