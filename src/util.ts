import {OfferType, sortedOffersListType} from './types/offer';

// export function getSortingOffers(offers: OfferType[]): OfferGroup {
//   const result: OfferGroup = {};

//   offers.forEach((offer) => {
//     const name: string = offer.city.name;

//     if(result[name]) {
//       result[name].push(offer);
//     } else {
//       result[name] = [offer];
//     }
//   });

//   return result;
// }

export function getSortedOffers(offers: OfferType[]): sortedOffersListType {
  const sortedOffers: sortedOffersListType = [];
  const cities: string[] = [];

  offers.forEach((offer) => {
    if(!cities.includes(offer.city.name)) {
      cities.push(offer.city.name);
    }
  });

  cities.forEach((city) => {
    sortedOffers.push({
      city: city,
      offers: offers.filter((offer) => offer.city.name === city),
    });
  });

  return sortedOffers;
}
