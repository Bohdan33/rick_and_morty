import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Profile from "./Profile";

const Characters = ({ characters, loading }) => {
  if (loading) {
    return (
      <img
        className="loadig-screen"
        src="https://i.pinimg.com/originals/aa/56/66/aa5666d4be63b0aefa281e648f14cdcc.gif"
        alt="loading"
      />
    );
  }

  return (
    <Router>
      <div className="container">
        <div className="heroes-wrapper">
          {characters.map((character, id) => {
            return (
              <>
                <Link
                  className="text-none"
                  to={{ pathname: "/profile", state: `${character.id}` }}
                  key={id}
                >
                  <div className="hero-element">
                    <img src={character.image} alt="hero" />
                    <div className="hero-element__text">
                      <h2>{character.name}</h2>
                      <h3>{character.status}</h3>
                      <p>{character.gender}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </Router>
  );
};

export default Characters;
