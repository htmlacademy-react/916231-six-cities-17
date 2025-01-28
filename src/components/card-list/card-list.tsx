import {OfferType} from '../../types/offer';
import Card from '../../components/card/card';
import { CardTypes } from '../../const';

type CardListProps = {
  offers: OfferType[];
  onHandleActiveOfferChange: (id: string | null) => void;
}

function CardList({offers, onHandleActiveOfferChange}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offerItem) => (
        <Card
          key={offerItem.id}
          offer={offerItem}
          cardType={CardTypes.Main}
          onHandleActiveOfferChange={onHandleActiveOfferChange}
        />
      ))}
    </div>
  );
}

export default CardList;
