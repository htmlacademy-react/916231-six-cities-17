export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type CityType = {
  name: string;
  location: LocationType;
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

// export type OfferGroup = {
//   [city: string]: OfferType[];
// }

export type sortedOffersType = {
  city: string;
  offers: OfferType[];
};

export type sortedOffersListType = sortedOffersType[];
