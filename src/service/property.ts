import {
  IParamsPropertyDetail,
  PropertyDetailProps,
} from "@/types/property/property";
import apiClient from ".";
import { IParamsPropertyList, PropertyListProps } from "@/types/property/list";

export const getPropertyDetails = (
  params: IParamsPropertyDetail
): Promise<PropertyDetailProps> => {
  return apiClient.get(`/api/guest/property/${params.id}`);
};

export const getPropertyList = (
  params: IParamsPropertyList
): Promise<PropertyListProps> => {
  return apiClient.get(`/api/guest/property`);
};
