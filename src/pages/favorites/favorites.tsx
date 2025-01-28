import Header from '../../components/header/header';
import FavoriteGroupList from '../../components/favorite-group-list/favorite-group-list';
import {Helmet} from 'react-helmet-async';
import {OfferType, sortedOffersListType} from '../../types/offer';
import {getSortedOffers} from '../../util';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesProps = {
  offers: OfferType[];
}

function Favorites({offers}: FavoritesProps): JSX.Element {
  const sortedOffers: sortedOffersListType = getSortedOffers(offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - избранное</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {sortedOffers.map((sortedOffer) => (
                <FavoriteGroupList
                  key={sortedOffer.city}
                  offersGroup={sortedOffer}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
