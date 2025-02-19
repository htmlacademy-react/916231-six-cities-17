import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer';

type CardProps = {
  offer: OfferType;
  cardType: string;
  onHandleActiveOfferChange: (id: string | null) => void;
}

function Card({offer, cardType, onHandleActiveOfferChange}: CardProps): JSX.Element {
  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange(offer.id)}
      onMouseLeave={() => onHandleActiveOfferChange(null)}
    >
      {offer.isPremium &&
        (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === 'cities' ? 260 : 150}
            height={cardType === 'cities' ? 200 : 110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
