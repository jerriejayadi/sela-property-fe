import { CurrencyListResponseProps } from "@/types/currency/list";
import apiClient from ".";

export const getCurrencyList = (): Promise<CurrencyListResponseProps> => {
  return apiClient.get(`/api/currency/active`);
};
