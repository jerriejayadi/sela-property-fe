import {
  IParamsPropertyDetail,
  PropertyDetailProps,
} from "@/types/property/property";
import apiClient from ".";
import { IParamsPropertyList, PropertyListProps } from "@/types/property/list";
import serverClient from "./serverClient";
import { AxiosError } from "axios";

export const getPropertyDetails = (
  params: IParamsPropertyDetail
): Promise<PropertyDetailProps> => {
  return apiClient.get(`/api/guest/property/${params.id}`);
};

export const getPropertyList = (
  params?: IParamsPropertyList
): Promise<PropertyListProps> => {
  return apiClient.get(`/api/guest/property`, { params: params });
};

export const getPropertyDetailsServer = async (
  params: IParamsPropertyDetail
) => {
  try {
    return serverClient.get(
      `/guest/property/${params.id}`
    ) as Promise<PropertyDetailProps>;
  } catch (error: any) {
    // if (error.response?.status === 404) {
    //   return { status: false, notFound: true };
    // }
    console.log("WHAT");
    console.log(error);
    return { status: false, statusCode: error.statusCode };
  }
};
