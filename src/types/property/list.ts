export interface IParamsPropertyList {
  keyword?: string;
  tags?: string;
}

export interface PropertyListProps {
  status: boolean;
  statusCode: number;
  result: Result;
}

export interface Result {
  items: Item[];
  meta: Meta;
}

export interface Item {
  id: string;
  title: string;
  descriptionId: string;
  keyFeatureId: string;
  currencyId: string;
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
  status: Status;
}

export enum Status {
  Active = "active",
}

export interface Image {
  id: string;
  documentId: string;
  type: Type;
  url: string;
  status: Status;
}

export enum Type {
  Thumbnail = "thumbnail",
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
