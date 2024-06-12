export interface IParamsPropertyDetail {
  id: string;
}

export interface PropertyDetailProps {
  id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  tag: string;
  availability: string;
  propertyType: string;
  landSize: number;
  landSizeMeasurement: string;
  buildingSize: number;
  buildingSizeMeasurement: string;
  bedRoomsAmount: number;
  bathRoomsAmount: number;
  carParkAmount: number;
  garageAmount: number;
  floorAmount: number;
  buildingOrientation: string;
  electricity: number;
  furnished: boolean;
  address: Address;
  facilities: Facility[];
  images: Image[];
}

export interface Address {
  id: string;
  subdistrict: string;
  regency: string;
  province: string;
  detail: string;
  locationMaps: string;
}

export interface Facility {
  id: string;
  name: string;
}

export interface Image {
  id: string;
  type: string;
  url: string;
}
