import {sortedOffersType} from '../../types/offer';
import {CardTypes} from '../../const';
import Card from '../card/card';
import { Link } from 'react-router-dom';

type FavoriteGroupListProps = {
  offersGroup: sortedOffersType;
}

function FavoriteGroupList({offersGroup}: FavoriteGroupListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{offersGroup.city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offersGroup.offers.map((offerItem) => (
          <Card
            key={offerItem.id}
            cardType={CardTypes.Favorites}
            offer={offerItem}
            onHandleActiveOfferChange={() => {}}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteGroupList;
