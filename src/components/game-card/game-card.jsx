import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./game-card.scss";

export const GameCard = ({ game }) => {
  return (
    <Card className="h-100 game-card"
      style={{
        border: "0px solid rgba(0, 0, 0, 0)",
        borderRadius: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white"
      }}>
      <Link to={`/games/${encodeURIComponent(game.id)}`}>
        <Card.Img className="card-image"
          style={{
            borderRadius: '40px 40px 0 0'
          }}
          variant="top"
          src={game.image} />
      </Link>
      <Card.Body className="card-body">
        <Card.Title className="card-title" style={{ paddingBottom: "40px", fontSize: "1.4rem" }}>{game.title}</Card.Title>
        <Link to={`/games/${encodeURIComponent(game.id)}`}>
          <Button className="open-button"
            style={{
              borderRadius: "40px",
              backgroundColor: "#C5EDF2",
              color: "#2F3A6B",
              border: "none",
              fontSize: "0.8rem",
              position: "absolute",
              left: "15px",
              bottom: "15px",
              fontFamily: "'Quicksand', sans-serif"
            }}>
            Open
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

