import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Netflix from 'pages/Netflix';
import ErrorPage from 'pages/ErrorPage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import MoviePage from 'pages/MoviePage';
import Player from 'pages/Player';
import TvShow from 'pages/TvShow';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/movie" element={<MoviePage />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/player" element={<Player />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
