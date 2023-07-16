import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
      <div className="card__inner">
        <img className="card__front" src={card.src} alt="card front" />
        <img
          className="card__back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
