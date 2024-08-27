export interface CurrencyListResponseProps {
  status: boolean;
  statusCode: number;
  result: Result[];
}

export interface Result {
  currencyId: string;
}
