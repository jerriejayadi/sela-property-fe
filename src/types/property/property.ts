export interface IParamsPropertyDetail {
  id: string;
}

export interface PropertyDetailProps {
  status: boolean;
  statusCode: number;
  result: Result;
}

export interface Result {
  id: string;
  title: string;
  descriptionId: string;
  keyFeatureId: string;
  descriptionEn: string;
  keyFeatureEn: string;
  price: string;
  status: string;
  availability: boolean;
  published: boolean;
  propertyType: string;
  sellingType: string;
  landSize: string;
  landSizeMeasurement: string;
  buildingSize: string;
  buildingSizeMeasurement: string;
  bedRoomsAmount: number;
  bathRoomsAmount: number;
  garageAmount: number;
  carParkAmount: number;
  floorAmount: number;
  buildingOrientation: string;
  electricity: number;
  furnished: boolean;
  googleDriveUrl: string;
  addressId: string;
  agentId: string;
  address: Address;
  tags: any[];
  facilities: any[];
  images: Image[];
}

export interface Address {
  id: string;
  subdistrict: string;
  regency: string;
  province: string;
  detail: string;
  locationMaps: string;
  status: string;
}

export interface Image {
  id: string;
  documentId: string;
  type: string;
  url: string;
  status: string;
}
