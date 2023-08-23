import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./game-card.scss";

export const GameCard = ({ game }) => {
  return (
    <Card className="h-100 game-card hover-effect "
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
      <Card.Body className="card-body hover-effect">
      <Link to={`/games/${encodeURIComponent(game.id)}`} className="no-text-decoration text-center">
        <Card.Title className="card-title" style={{ paddingBottom: "10px", paddingTop: "10px", fontSize: "1.4rem", color: "white" }}>{game.title}</Card.Title>
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

