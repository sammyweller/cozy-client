import React from "react";
import { useParams, Link } from "react-router-dom";

import "./game-view.scss";

export const GameView = ({ games }) => {
    const { gameId } = useParams();

    // Find the index of the current game in the games array
    const currentIndex = games.findIndex((g) => g.id === gameId);

    // Handle case when the game is not found
    if (currentIndex === -1) {
        return <div>Game not found</div>;
    }

    // Prev and next game:
    const prevIndex = (currentIndex - 1 + games.length) % games.length;
    const nextIndex = (currentIndex + 1) % games.length;

    const game = games[currentIndex];
    const prevGame = games[prevIndex];
    const nextGame = games[nextIndex];

    return (
        <div>
            <h1 className="title text-center" style={{ color: "white", paddingBottom: "60px" }}>
                Cozy Gamer
            </h1>
            <div className="game-view">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {prevGame && (
                        <Link to={`/games/${encodeURIComponent(prevGame.id)}`}>
                            <button className="back-button" style={{
                                borderRadius: "40px",
                                backgroundColor: "#C5EDF2",
                                color: "#2F3A6B",
                                border: "none",
                                fontSize: "0.8rem",
                                fontFamily: "'Quicksand', sans-serif",
                                padding: "5px 20px",
                                marginBottom: "10px",
                                marginRight: "5px",
                                width: "100px"
                            }}>
                                Previous
                            </button>
                        </Link>
                    )}
                    {nextGame && (
                        <Link to={`/games/${encodeURIComponent(nextGame.id)}`}>
                            <button className="back-button" style={{
                                borderRadius: "40px",
                                backgroundColor: "#C5EDF2",
                                color: "#2F3A6B",
                                border: "none",
                                fontSize: "0.8rem",
                                fontFamily: "'Quicksand', sans-serif",
                                padding: "5px 20px",
                                marginLeft: "5px",
                                width: "100px"
                            }}>
                                Next
                            </button>
                        </Link>
                    )}
                </div>
                <div className="game-title">
                    <span>{game.title}</span>
                </div>
                <div>
                    <img src={game.image} alt={game.title} className="img" />
                </div>
                <div className="description">
                    <span><strong>Description: </strong></span>
                    <span>{game.description}</span>
                </div>
                <div className="genre">
                    <span><strong>Genre:</strong> </span>
                    <span>{game.genre}</span>
                </div>
                <div className="year">
                    <span><strong>Release year: </strong></span>
                    <span>{game.year}</span>
                </div>
                <div className="platform">
                    <span><strong>Platform(s): </strong></span>
                    <span>{game.platforms}</span>
                </div>
                <div className="developer">
                    <span><strong>Developer(s): </strong></span>
                    <span>{game.developers}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to={`/`}>
                        <button className="back-button" style={{
                            borderRadius: "40px",
                            backgroundColor: "#C5EDF2",
                            color: "#2F3A6B",
                            border: "none",
                            fontSize: "0.8rem",
                            fontFamily: "'Quicksand', sans-serif",
                            padding: "5px 20px",
                            marginTop: "20px"
                        }}>
                            Back to home!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};