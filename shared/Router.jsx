import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonDetail from '../pages/PokemonDetail'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Dex" element={<Dex />} />
                <Route path="Dex/:id" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
