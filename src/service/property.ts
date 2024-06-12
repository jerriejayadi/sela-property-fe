import { IParamsPropertyDetail, PropertyDetailProps } from "@/types/property";
import apiClient from ".";

export const getPropertyDetails = (
  params: IParamsPropertyDetail
): Promise<PropertyDetailProps> => {
  return apiClient.get(`/api/property/detail`, { params: params });
};
