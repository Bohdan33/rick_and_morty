import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import Pagination from "./components/Pagination";
import Characters from "./components/Characters";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    async function fetchCharaters() {
      let res = await fetch("https://rickandmortyapi.com/api/character");
      let data = await res.json();
      setCharacters(data.results);
      setLoading(false);
    }
    fetchCharaters();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Change theme
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <section className="switch_theme">
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </section>
        <section className="header">
          <h1 className="header_text">The Rick and Morty</h1>
        </section>
        <Characters characters={currentPosts} loading={loading} />
        <Router>
          <Switch>
            {/* <Route path="/profile" strict exact component={Profile}></Route> */}
          </Switch>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={characters.length}
            paginate={paginate}
          />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
