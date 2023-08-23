import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GameCard } from "../game-card/game-card";
import { GameView } from "../game-view/game-view";

import "./main-view.scss";

export const MainView = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://sw-cozy-ca769a64fe57.herokuapp.com/games")
      .then((response) => response.json())
      .then((data) => {
        const gamesFromApi = data.map((game) => ({
          id: game._id,
          title: game.Title,
          description: game.Description,
          genre: game.Genre,
          year: game.Year,
          platforms: game.Platforms,
          developers: game.Developers,
          image: game.Image,
        }));

        setGames(gamesFromApi);
      });
  }, []);

  return (
<BrowserRouter>
  <Row className="main-view justify-content-md-center">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="title-container">
              <h1 className="title text-center" style={{ color: "white", paddingTop: "60px" }}>
              <span class="sparkle-emoji">&#10024;</span> Cozy Gamer <span class="sparkle-emoji">&#10024;</span>
              </h1>
            </div>
            <p
              className="p-content text-center"
              style={{
                color: "white",
                fontFamily: "'Quicksand', sans-serif",
                paddingBottom: "60px",
                paddingTop: "40px",
                maxWidth: "850px"
              }}
            >
              Step into the peaceful world of cozy games: where we like to craft, farm, forage, explore, and relax. Absolutely NO zombies, shooters, violence, or stress allowed!
              <img
                className="pixel-heart"
                alt="pixel hearts"
                src="https://clipart-library.com/images_k/tumblr-png-transparent-background/tumblr-png-transparent-background-23.png"
              />
            </p>
            <Row className="justify-content-center">
              {games.map((game) => (
                <Col
                  className="mb-5 "
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={game.id}
                >
                  <GameCard game={game} />
                </Col>
              ))}
            </Row>
          </>
        }
      />
      <Route
        path="/games/:gameId"
        element={
          <Col xs={12} sm={12} md={10} lg={8} xl={8}>
            <GameView games={games} />
          </Col>
        }
      />
    </Routes>
  </Row>
</BrowserRouter>
  );
};